"use client"

import { Children, Fragment, cloneElement, isValidElement, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export type ContentItem = { id: string; content: ReactNode }
type ElementProps = { children?: ReactNode; className?: string; id?: string; [key: string]: unknown }

// Static presentation is decomposed once, independent of viewport size. Interactive components remain atomic.
export function contentItems(children: ReactNode, prefix = "content"): ContentItem[] {
  return Children.toArray(children).flatMap((node, index): ContentItem[] => {
    const id = `${prefix}/${isValidElement(node) ? node.key ?? index : index}`
    if (!isValidElement<ElementProps>(node)) return [{ id, content: node }]
    if (node.type === Fragment) return contentItems(node.props.children, id)
    if (typeof node.type !== "string") return [{ id, content: node }]
    if (node.props["aria-hidden"]) return []
    if (node.type === "button" && !node.props.onClick && !node.props.disabled) {
      return [{ id, content: cloneElement(node, { disabled: true, title: "Unavailable in this prototype" }) }]
    }
    const nested = Children.toArray(node.props.children)
    if (node.type === "pre" && typeof node.props.children === "string") {
      return node.props.children.split("\n").map((line, i) => ({ id: `${id}/${i}`, content: <pre className="code-line">{line || " "}</pre> }))
    }
    if (["ul", "ol", "dl"].includes(node.type)) {
      return nested.flatMap((child, i) => contentItems(child, `${id}/${i}`)).map(item => ({ ...item, content: <div className="content-list-item">{item.content}</div> }))
    }
    if (node.type === "li") return [{ id, content: <div className={node.props.className}>{node.props.children}</div> }]
    const blockChildren = nested.filter(child => isValidElement(child) && (typeof child.type !== "string" || ["div", "section", "header", "p", "ul", "ol", "dl", "h1", "h2", "h3", "pre", "label"].includes(child.type)))
    if (["div", "section", "footer"].includes(node.type) && blockChildren.length && !node.props["data-keep-together"]) {
      return contentItems(node.props.children, id)
    }
    if (node.type === "p" && typeof node.props.children === "string" && node.props.children.length > 180) {
      return node.props.children.split(/(?<=[.!?])\s+/).map((text, i) => ({ id: `${id}/${i}`, content: cloneElement(node, { key: i }, text) }))
    }
    return [{ id, content: node }]
  })
}

export function FitContent({ children, label = "Content", items: suppliedItems }: { children?: ReactNode; label?: string; items?: ContentItem[] }) {
  const items = useMemo(() => suppliedItems ?? contentItems(children), [suppliedItems, children])
  const viewport = useRef<HTMLDivElement>(null)
  const nodes = useRef(new Map<string, HTMLDivElement>())
  const [measure, setMeasure] = useState({ height: 0, heights: [] as number[] })
  const [anchor, setAnchor] = useState(items[0]?.id ?? "")
  const expansion = useRef<ReturnType<typeof setTimeout> | null>(null)

  useLayoutEffect(() => {
    const root = viewport.current
    if (!root) return
    let frame = 0
    let disposed = false
    const read = () => {
      if (disposed) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (disposed || !root.checkVisibility()) return
        const focused = [...nodes.current.entries()].find(([, node]) => node.contains(document.activeElement))
        if (focused) setAnchor(focused[0])
        const next = { height: root.clientHeight, heights: items.map(item => Math.ceil(nodes.current.get(item.id)?.getBoundingClientRect().height ?? 0)) }
        setMeasure(old => {
          if (old.height === next.height && old.heights.join() === next.heights.join()) return old
          if (expansion.current) clearTimeout(expansion.current)
          if (old.height > 0 && next.height > old.height && next.heights.join() === old.heights.join()) {
            expansion.current = setTimeout(() => setMeasure(next), 180)
            return old
          }
          return next
        })
      })
    }
    const observer = new ResizeObserver(read)
    observer.observe(root)
    nodes.current.forEach(node => observer.observe(node))
    document.fonts.ready.then(read)
    read()
    return () => { disposed = true; observer.disconnect(); cancelAnimationFrame(frame); if (expansion.current) clearTimeout(expansion.current) }
  }, [items])

  const pages: number[][] = []
  let used = 0
  items.forEach((_, index) => {
    const height = measure.heights[index] ?? 0
    const last = pages.at(-1)
    if (!last || used + height + 12 > measure.height) {
      pages.push([index]); used = height
    } else { last.push(index); used += height + 12 }
  })
  const selected = Math.max(0, items.findIndex(item => item.id === anchor))
  const page = Math.max(0, pages.findIndex(indices => indices.includes(selected)))
  const indices = pages[page] ?? []
  const oversized = measure.height > 0 && indices.some(index => measure.heights[index] > measure.height + 1)
  const positions = new Map<number, number>()
  let top = 0
  indices.forEach(index => { positions.set(index, top); top += (measure.heights[index] ?? 0) + 12 })
  const go = (next: number) => {
    const index = pages[next]?.[0]
    if (index !== undefined) setAnchor(items[index].id)
  }

  return (
    <div className="fit-content" data-ready={measure.height > 0}>
      <div ref={viewport} className="fit-window">
        {items.map((item, index) => {
          const visible = positions.has(index) && !oversized && measure.height > 0
          return <div key={item.id} ref={node => { if (node) nodes.current.set(item.id, node); else nodes.current.delete(item.id) }} className="fit-unit" data-visible={visible} aria-hidden={!visible} inert={!visible} style={{ top: positions.get(index) ?? 0 }}>{item.content}</div>
        })}
        {!items.length && <p className="fit-empty" role="status">No items to display.</p>}
        {oversized && <div className="fit-constraint" role="status">Needs {Math.ceil(measure.heights[indices[0]])}px; {measure.height}px available. Enlarge this view or close the keyboard.</div>}
      </div>
      <nav className="content-pagination" aria-label={`${label} pages`}>
        <button type="button" className="icon-button" aria-label={`Previous ${label.toLowerCase()} page`} disabled={page === 0} onClick={() => go(page - 1)}><ChevronLeft size={18} /></button>
        <span aria-live="polite">{measure.height === 0 ? "No content space" : items.length ? `${page + 1} / ${pages.length}` : "0 items"}<span className="pager-kind"> · {label}</span></span>
        <button type="button" className="icon-button" aria-label={`Next ${label.toLowerCase()} page`} disabled={page >= pages.length - 1} onClick={() => go(page + 1)}><ChevronRight size={18} /></button>
      </nav>
    </div>
  )
}

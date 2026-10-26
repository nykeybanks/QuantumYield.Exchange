"use client"

import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useViewportContext } from "./viewport-provider"

export type Scene = { id: string; label: string; content: ReactNode }

export function SceneDeck({ scenes, label = "Section", hashNavigation = false }: { scenes: Scene[]; label?: string; hashNavigation?: boolean }) {
  const [selectedId, setSelectedId] = useState(scenes[0]?.id ?? "")
  const [composition, setComposition] = useState("focused")
  const root = useRef<HTMLDivElement>(null)
  const selectId = useId()
  const { acknowledge } = useViewportContext()
  const index = Math.max(0, scenes.findIndex(scene => scene.id === selectedId))

  useEffect(() => {
    if (!hashNavigation) return
    const sync = () => {
      const id = location.hash.slice(1)
      if (scenes.some(scene => scene.id === id)) { setSelectedId(id); acknowledge(id) }
    }
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [scenes, hashNavigation])

  useLayoutEffect(() => {
    const node = root.current
    if (!node) return
    let timer: ReturnType<typeof setTimeout>
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      const next = width >= 1060 && height >= 620 ? "expanded" : width >= 640 && height >= 420 ? "compact" : "focused"
      clearTimeout(timer)
      if (next !== "expanded") {
        const focused = node.querySelector<HTMLElement>('.scene-slot:focus-within')?.dataset.sceneId
        if (focused) setSelectedId(focused)
      }
      setComposition(current => {
        if (next === current) return current
        if ((current === "focused" && next !== "focused") || (current === "compact" && next === "expanded")) {
          timer = setTimeout(() => setComposition(next), 180)
          return current
        }
        return next
      })
    })
    observer.observe(node)
    return () => { observer.disconnect(); clearTimeout(timer) }
  }, [])

  const select = (id: string) => {
    setSelectedId(id)
    acknowledge(id)
    if (hashNavigation) history.replaceState(null, "", `#${id}`)
  }
  const count = composition === "expanded" ? 2 : 1
  const start = Math.min(index, Math.max(0, scenes.length - count))

  return (
    <div className="scene-deck" ref={root} data-composition={composition}>
      <div className="scene-stage" style={{ gridTemplateColumns: count === 2 ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)" }}>
        {scenes.map((scene, i) => {
          const active = i >= start && i < start + count
          return <section key={scene.id} className="scene-slot" data-scene-id={scene.id} aria-label={scene.label} hidden={!active} inert={!active} style={{ gridColumn: active ? i - start + 1 : 1, gridRow: 1 }}>{scene.content}</section>
        })}
      </div>
      <nav className="scene-navigation" aria-label={`${label} navigation`}>
        <button className="icon-button" type="button" disabled={index === 0} onClick={() => select(scenes[index - 1].id)} aria-label="Previous section"><ChevronLeft size={18} /></button>
        <label className="sr-only" htmlFor={selectId}>{label}</label>
        <select id={selectId} aria-label={label} value={scenes[index]?.id} onChange={event => select(event.target.value)}>
          {scenes.map((scene, i) => <option key={scene.id} value={scene.id}>{String(i + 1).padStart(2, "0")} · {scene.label}</option>)}
        </select>
        <span className="scene-count">{index + 1} / {scenes.length}</span>
        <button className="icon-button" type="button" disabled={index === scenes.length - 1} onClick={() => select(scenes[index + 1].id)} aria-label="Next section"><ChevronRight size={18} /></button>
      </nav>
    </div>
  )
}

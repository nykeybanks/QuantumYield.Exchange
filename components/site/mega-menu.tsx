"use client"

import { useEffect, useId, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Compass, Search, X } from "lucide-react"
import { NAV_GROUPS, type NavGroup } from "@/lib/nav"
import { BoundedDialog } from "@/components/viewport/bounded-dialog"
import { FitContent } from "@/components/viewport/fit-content"
import { useViewportContext } from "@/components/viewport/viewport-provider"

const groups: NavGroup[] = [{ title: "Discover", items: [
  { label: "Welcome & getting started", href: "/welcome", icon: Compass },
  { label: "Platform layers", href: "/#platform", icon: Compass },
  { label: "Capabilities", href: "/#capabilities", icon: Compass },
  { label: "Architecture", href: "/#architecture", icon: Compass },
  { label: "Ecosystem & roadmap", href: "/#ecosystem", icon: Compass },
  { label: "Directory & notices", href: "/#directory", icon: Compass },
] }, ...NAV_GROUPS]

export function MegaMenu({ open, onClose, initialGroup, id }: { open: boolean; onClose: () => void; initialGroup: string; id: string }) {
  const [group, setGroup] = useState(initialGroup)
  const [query, setQuery] = useState("")
  const fieldId = useId()
  const { acknowledge, reduced } = useViewportContext()
  useEffect(() => { if (open) { setGroup(initialGroup); setQuery("") } }, [initialGroup, open])
  const results = useMemo(() => groups.flatMap(section => section.items.map(item => ({ ...item, group: section.title }))).filter(item => query.trim() ? `${item.label} ${item.group}`.toLowerCase().includes(query.trim().toLowerCase()) : item.group === group), [group, query])
  const choose = (href: string) => { onClose(); acknowledge(href) }

  return <BoundedDialog open={open} onClose={onClose} id={id} title="Explore QYX20" className="mega-dialog">
    <div className="mega-layout" data-motion={reduced ? "reduced" : undefined}>
      <div className="mega-toolbar"><label className="mega-search" htmlFor={fieldId}><Search size={18} aria-hidden="true" /><span className="sr-only">Search destinations</span><input id={fieldId} aria-label="Search destinations" type="search" placeholder="Find your workspace…" autoComplete="off" value={query} onChange={event => setQuery(event.target.value)} />{query && <button type="button" className="icon-button" aria-label="Clear destination search" onClick={() => { setQuery(""); document.getElementById(fieldId)?.focus() }}><X size={16} /></button>}</label><span className="mega-search-note">EXPLORE THE PROTOTYPE</span></div>
      <div className="mega-body">
        <nav className="mega-categories" aria-label="Destination categories">{groups.map(section => <button key={section.title} type="button" aria-pressed={!query && group === section.title} onClick={() => { setGroup(section.title); setQuery("") }}>{section.title}<ArrowUpRight size={14} aria-hidden="true" /></button>)}</nav>
        <div className="mega-results">
          <label className="mega-category-select"><span className="sr-only">Destination category</span><select value={group} onChange={event => { setGroup(event.target.value); setQuery("") }}>{groups.map(section => <option key={section.title}>{section.title}</option>)}</select></label>
          <div className="mega-result-heading"><h3>{query ? "Search results" : group}</h3><span role="status">{results.length} {results.length === 1 ? "destination" : "destinations"}</span></div>
          <FitContent label="Destinations" items={results.map(item => ({ id: `${item.group}-${item.label}`, content: <Link href={item.href} onClick={event => { choose(item.href); if (location.pathname === "/" && item.href.startsWith("/#")) { event.preventDefault(); history.pushState(null, "", item.href); window.dispatchEvent(new HashChangeEvent("hashchange")) } }} className="mega-destination"><item.icon size={21} strokeWidth={1.4} aria-hidden="true" /><div><span>{item.label}</span><small>{item.group === "Discover" ? "Platform introduction" : `${item.group} / Demo workspace`}</small></div><ArrowUpRight size={17} aria-hidden="true" /></Link> }))} />
        </div>
        <aside className="mega-welcome"><p className="front-eyebrow">NEW TO QYX20?</p><h3>Find your<br />starting point.</h3><p>A guided introduction, built around your perspective.</p><ol><li><span>01</span>Choose a workspace</li><li><span>02</span>Set your starting view</li><li><span>03</span>Explore the prototype</li></ol><Link href="/welcome" onClick={() => choose("/welcome")} className="front-button front-button-primary">Let&apos;s begin<ArrowRight size={18} aria-hidden="true" /></Link></aside>
      </div>
      <div className="mega-footer"><span>No account or wallet required.</span><Link href="/welcome" onClick={() => choose("/welcome")}>Guided welcome<ArrowRight size={17} aria-hidden="true" /></Link></div>
    </div>
  </BoundedDialog>
}

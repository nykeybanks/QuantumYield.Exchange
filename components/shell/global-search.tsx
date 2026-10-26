"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Search, ArrowUpRight } from "lucide-react"
import { NAV_GROUPS } from "@/lib/nav"
import { BoundedDialog } from "@/components/viewport/bounded-dialog"
import { FitContent } from "@/components/viewport/fit-content"

const DESTINATIONS = NAV_GROUPS.flatMap(group => group.items)
export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.isComposing || event.keyCode === 229) return
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault(); setOpen(value => !value)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])
  const matches = DESTINATIONS.filter(item => item.label.toLowerCase().includes(query.trim().toLowerCase()))
  return <>
    <button type="button" className="search-trigger" onClick={() => setOpen(true)} aria-label="Search QYX20"><Search size={18} /><span>Search</span><kbd>⌘ K</kbd></button>
    <BoundedDialog open={open} onClose={() => setOpen(false)} title="Search QYX20">
      <div className="search-body">
        <label className="sr-only" htmlFor="global-query">Search destinations</label>
        <input id="global-query" autoFocus value={query} onChange={event => setQuery(event.target.value)} placeholder="Search destinations…" autoComplete="off" />
        <FitContent label="Results" items={matches.map(item => ({ id: `${item.href}/${item.label}`, content: <Link className="search-result" href={item.href} onClick={() => setOpen(false)}><span>{item.label}</span><ArrowUpRight size={18} aria-hidden="true" /></Link> }))} />
        <p className="search-note">Prototype navigation · no private records</p>
      </div>
    </BoundedDialog>
  </>
}

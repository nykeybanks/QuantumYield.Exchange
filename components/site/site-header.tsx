"use client"

import { useId, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronDown, Menu, Search } from "lucide-react"
import { QYX20Lockup } from "@/components/brand/wordmarks"
import { MegaMenu } from "./mega-menu"

export function SiteHeader() {
  const [menu, setMenu] = useState<string | null>(null)
  const menuId = useId()
  return <>
    <a href="#main-content" className="public-skip-link">Skip to content</a>
    <header className="front-header">
      <Link href="/" aria-label="QYX20 home" className="front-brand"><QYX20Lockup /></Link>
      <nav className="front-header-nav" aria-label="Primary navigation">
        <button type="button" aria-expanded={menu !== null} aria-controls={menuId} aria-haspopup="dialog" onClick={() => setMenu("Discover")}>Platform<ChevronDown size={15} aria-hidden="true" /></button>
        <button type="button" aria-expanded={menu !== null} aria-controls={menuId} aria-haspopup="dialog" onClick={() => setMenu("Money")}>Workspaces<ChevronDown size={15} aria-hidden="true" /></button>
        <Link href="/#architecture" onClick={event => { if (location.pathname === "/") { event.preventDefault(); history.pushState(null, "", "/#architecture"); window.dispatchEvent(new HashChangeEvent("hashchange")) } }}>Architecture</Link>
        <Link href="/developer">Developers<ArrowUpRight size={14} aria-hidden="true" /></Link>
      </nav>
      <div className="front-header-actions">
        <button type="button" className="front-menu-trigger" aria-label="Explore and search QYX20" aria-expanded={menu !== null} aria-controls={menuId} aria-haspopup="dialog" onClick={() => setMenu("Discover")}><Search className="desktop-search-icon" size={18} aria-hidden="true" /><Menu className="mobile-menu-icon" size={20} aria-hidden="true" /></button>
        <Link href="/dashboard" className="front-demo-link">Open demo<ArrowUpRight size={16} aria-hidden="true" /></Link>
        <Link href="/welcome" className="front-button front-button-primary header-start">Get started<ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </header>
    <MegaMenu open={menu !== null} initialGroup={menu ?? "Discover"} id={menuId} onClose={() => setMenu(null)} />
  </>
}

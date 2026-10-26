"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Code2, Landmark, Layers3 } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "./site-header"
import { Hero } from "./hero"
import { PublicStatus } from "./public-status"
import { useViewportContext } from "@/components/viewport/viewport-provider"
import type { Scene } from "@/components/viewport/scene-deck"

const shortcuts = [
  { number: "01", title: "A different view of money.", description: "Accounts, wallets & assets", href: "/platform/accounts", icon: Landmark },
  { number: "02", title: "See the bigger picture.", description: "Treasury, settlement & operations", href: "/platform/treasury", icon: Layers3 },
  { number: "03", title: "Explore what comes next.", description: "Architecture & developer tools", href: "/developer", icon: Code2 },
]

export function FrontPage({ sections }: { sections: Scene[] }) {
  const [selected, setSelected] = useState("introduction")
  const { acknowledge } = useViewportContext()
  const labels: Record<string, string> = { platform: "Platform", capabilities: "Capabilities", architecture: "Architecture", ecosystem: "Ecosystem", explore: "Explore", directory: "Directory" }
  const navigation = [{ id: "introduction", label: "Overview" }, ...sections.map(({ id, label }) => ({ id, label: labels[id] ?? label }))]
  useEffect(() => {
    const sync = () => {
      const id = location.hash.slice(1) || "introduction"
      if (id === "introduction" || sections.some(section => section.id === id)) {
        setSelected(id)
        acknowledge(`public:${id}`)
      }
    }
    sync()
    window.addEventListener("hashchange", sync)
    window.addEventListener("popstate", sync)
    return () => { window.removeEventListener("hashchange", sync); window.removeEventListener("popstate", sync) }
  }, [sections, acknowledge])

  const select = (id: string) => {
    setSelected(id)
    history.pushState(null, "", `#${id}`)
    acknowledge(`public:${id}`)
  }

  return <div className="public-shell front-shell">
    <SiteHeader />
    <main className="front-main" id="main-content">
      <div className="front-stage">
        <section className="front-overview" hidden={selected !== "introduction"} inert={selected !== "introduction"} aria-label="Welcome to QYX20">
          <Hero />
          <div className="front-shortcuts" aria-label="Explore workspaces">
            {shortcuts.map(item => <Link key={item.number} href={item.href} className="front-shortcut">
              <div className="shortcut-top"><span>{item.number} / EXPLORE</span><item.icon size={19} aria-hidden="true" /></div>
              <div className="shortcut-bottom"><div><h2>{item.title}</h2><p>{item.description}</p></div><ArrowUpRight size={20} aria-hidden="true" /></div>
            </Link>)}
          </div>
        </section>
        {sections.map(section => <section key={section.id} className="front-detail scene-slot" hidden={selected !== section.id} inert={selected !== section.id} aria-label={section.label}>{section.content}</section>)}
      </div>
      <nav className="front-navigation" aria-label="Homepage sections">
        <span className="front-section-label">DISCOVER QYX20</span>
        <div className="front-nav-links">{navigation.map((item, i) => <a key={item.id} href={`#${item.id}`} aria-current={selected === item.id ? "page" : undefined} onClick={event => { event.preventDefault(); select(item.id) }}><span>{String(i + 1).padStart(2, "0")}</span>{item.label}</a>)}</div>
        <label className="front-nav-select"><span className="sr-only">Homepage section</span><select value={selected} onChange={event => select(event.target.value)}>{navigation.map((item, i) => <option key={item.id} value={item.id}>{String(i + 1).padStart(2, "0")} · {item.label}</option>)}</select></label>
      </nav>
    </main>
    <PublicStatus />
  </div>
}

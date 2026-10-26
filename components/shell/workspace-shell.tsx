"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, PanelRight, Settings2 } from "lucide-react"
import { QYX20Lockup } from "@/components/brand/wordmarks"
import { GlobalSearch } from "./global-search"
import { NAV_GROUPS, WORKSPACES } from "@/lib/nav"
import { SceneDeck, type Scene } from "@/components/viewport/scene-deck"
import { FitContent } from "@/components/viewport/fit-content"
import { BoundedDialog } from "@/components/viewport/bounded-dialog"
import { useViewportContext, type MotionMode } from "@/components/viewport/viewport-provider"

export function WorkspaceShell({ title, scenes, contextPanel }: { title: string; scenes: Scene[]; contextPanel?: ReactNode }) {
  const pathname = usePathname()
  const [overlay, setOverlay] = useState<"navigation" | "context" | "settings" | null>(null)
  const activeGroup = NAV_GROUPS.findIndex(group => group.items.some(item => item.href === pathname))
  const [groupIndex, setGroupIndex] = useState(Math.max(0, activeGroup))
  const { workspace, setWorkspace, mode, setMode, reduced, acknowledge } = useViewportContext()
  const group = NAV_GROUPS[groupIndex]
  const navigation = <div className="navigation-content">
    <label className="control-label" htmlFor={overlay === "navigation" ? "dialog-navigation-group" : "navigation-group"}>Navigation group</label>
    <select id={overlay === "navigation" ? "dialog-navigation-group" : "navigation-group"} value={groupIndex} onChange={event => setGroupIndex(Number(event.target.value))}>{NAV_GROUPS.map((item, i) => <option key={item.title} value={i}>{item.title}</option>)}</select>
    <FitContent label="Destinations" items={group.items.map(item => ({ id: `${item.href}-${item.label}`, content: <Link href={item.href} className="destination-link" aria-current={pathname === item.href ? "page" : undefined} onClick={() => { setOverlay(null); acknowledge(item.href) }}><item.icon size={18} aria-hidden="true" />{item.label}</Link> }))} />
  </div>
  return (
    <div className="app-shell">
      <header className="command-bar">
        <Link href="/" aria-label="QYX20 home"><QYX20Lockup /></Link>
        <span className="command-caption">QuantumYield / {workspace}</span>
        <div className="command-actions">
          <GlobalSearch />
          <button className="icon-button" onClick={() => setOverlay("settings")} aria-label="Workspace and motion settings"><Settings2 size={19} /></button>
          <button className="icon-button mobile-navigation" onClick={() => setOverlay("navigation")} aria-label="Open navigation"><Menu size={20} /></button>
        </div>
      </header>
      <div className="workspace-body">
        <aside className="navigation-rail" aria-label="Platform navigation">
          <p className="rail-eyebrow">QYX20 / WORKSPACE</p>
          {overlay !== "navigation" ? navigation : <div />}
          <Link className="destination-link" href="/">Platform introduction</Link>
        </aside>
        <main className="workspace-main" id="main-content">
          <header className="workspace-heading"><h1 className="text-balance">{title}</h1><div className="heading-actions"><span className="prototype-label">Prototype</span>{contextPanel && <button className="icon-button" aria-label="Open context panel" onClick={() => setOverlay("context")}><PanelRight size={19} /></button>}</div></header>
          <SceneDeck scenes={scenes} />
        </main>
      </div>
      <footer className="workspace-status"><span>DEMO · No live connections</span><span className="status-detail">{workspace} / {reduced ? "Reduced motion" : mode}</span></footer>
      <BoundedDialog open={overlay === "navigation"} onClose={() => setOverlay(null)} title="Navigate QYX20">{navigation}</BoundedDialog>
      <BoundedDialog open={overlay === "context"} onClose={() => setOverlay(null)} title="Workspace context">{contextPanel}</BoundedDialog>
      <BoundedDialog open={overlay === "settings"} onClose={() => setOverlay(null)} title="Workspace settings">
        <FitContent label="Settings">
          <label className="settings-field">Workspace<select value={workspace} onChange={event => { setWorkspace(event.target.value as typeof workspace); acknowledge(event.target.value) }}>{WORKSPACES.map(item => <option key={item}>{item}</option>)}</select></label>
          <label className="settings-field">Motion<select value={mode} onChange={event => setMode(event.target.value as MotionMode)}>{["Balanced", "Immersive", "Reduced"].map(item => <option key={item}>{item}</option>)}</select></label>
          <p>Balanced and Immersive use a three-second scene transition. Reduced motion removes spatial animation; your system preference always takes priority.</p>
          <p>This workspace is a prototype. Switching context changes the interface, not account permissions or live data.</p>
        </FitContent>
      </BoundedDialog>
    </div>
  )
}

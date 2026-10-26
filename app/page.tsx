import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { QYX20Lockup } from "@/components/brand/wordmarks"
import { GlobalSearch } from "@/components/shell/global-search"
import { SceneDeck } from "@/components/viewport/scene-deck"
import { Card } from "@/components/workspace/primitives"
import { Hero } from "@/components/site/hero"
import { PlatformLayers } from "@/components/site/platform-layers"
import { Capabilities } from "@/components/site/capabilities"
import { Architecture } from "@/components/site/architecture"
import { Ecosystem } from "@/components/site/ecosystem"
import { FinalCTA } from "@/components/site/final-cta"
import { SiteFooter } from "@/components/site/site-footer"

export default function HomePage() {
  return (
    <div className="public-shell">
      <header className="command-bar">
        <Link href="/" aria-label="QYX20 home"><QYX20Lockup /></Link>
        <nav className="public-header-links" aria-label="Platform introduction"><a href="#platform">Platform</a><a href="#capabilities">Capabilities</a><a href="#architecture">Architecture</a><a href="#ecosystem">Ecosystem</a></nav>
        <div className="command-actions"><GlobalSearch /><Link href="/dashboard" className="public-open">Open demo<ArrowUpRight size={16} /></Link></div>
      </header>
      <main className="public-main" id="main-content">
        <SceneDeck hashNavigation scenes={[
          { id: "introduction", label: "QYX20 / Introduction", content: <Card title="QuantumYield · QYX20"><Hero /></Card> },
          { id: "platform", label: "Platform layers", content: <PlatformLayers /> },
          { id: "capabilities", label: "Capabilities", content: <Card title="Capabilities · concept architecture"><Capabilities /></Card> },
          { id: "architecture", label: "Architecture & evidence", content: <Card title="Architecture · proposed model"><Architecture /></Card> },
          { id: "ecosystem", label: "Ecosystem & roadmap", content: <Card title="Ecosystem · roadmap"><Ecosystem /></Card> },
          { id: "explore", label: "Explore the prototype", content: <Card title="Explore QYX20"><FinalCTA /></Card> },
          { id: "directory", label: "Directory & notices", content: <Card title="Directory & notices"><SiteFooter /></Card> },
        ]} />
      </main>
      <footer className="workspace-status"><span>QYX20 · PROTOTYPE</span><span className="status-detail">Concept architecture / No live financial connectivity</span></footer>
    </div>
  )
}

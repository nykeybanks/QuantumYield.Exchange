import Link from "next/link"
import { ArrowRight, ArrowUpRight, Activity, Layers3, Wallet } from "lucide-react"
import { QYXProductMark } from "@/components/brand/QYXProductMark"

const domains = [
  { number: "01", name: "Money", description: "Accounts / Wallets / Assets", icon: Wallet, href: "/platform/accounts" },
  { number: "02", name: "Operations", description: "Payments / Treasury / Settlement", icon: Layers3, href: "/platform/treasury" },
  { number: "03", name: "Intelligence", description: "QYXai / Analytics / Reports", icon: Activity, href: "/platform/qyxai" },
]

export function Hero() {
  return <div className="front-hero">
    <div className="front-hero-copy">
      <p className="front-eyebrow"><span aria-hidden="true" />WELCOME TO QUANTUMYIELD</p>
      <h1 className="front-title" data-scene-heading><span>Connected.</span><span className="front-title-muted">By design.</span></h1>
      <p className="front-description text-pretty">A new perspective on money, operations and intelligence. Explore the QYX20 prototype.</p>
      <div className="front-hero-actions"><Link href="/welcome" className="front-button front-button-primary">Start your journey<ArrowRight size={18} aria-hidden="true" /></Link><a href="#platform" className="front-button front-button-secondary">Explore platform<ArrowUpRight size={18} aria-hidden="true" /></a></div>
      <p className="front-hero-note">YOUR PERSPECTIVE. ONE CONNECTED ARCHITECTURE.</p>
    </div>
    <section className="front-architecture qyx-grid" aria-label="Proposed platform architecture">
      <div className="architecture-meta"><span>QYX20 / SYSTEM OVERVIEW</span><span className="architecture-version">CONCEPT 01</span></div>
      <div className="architecture-anchor"><QYXProductMark product="qyx20" alt="QYX20" height={28} /><span>One architecture.<br />Multiple perspectives.</span></div>
      <div className="architecture-domains">{domains.map(domain => <Link key={domain.name} href={domain.href} className="architecture-domain"><span className="domain-number">{domain.number}</span><domain.icon size={23} strokeWidth={1.25} aria-hidden="true" /><div><h2>{domain.name}</h2><p>{domain.description}</p></div><ArrowUpRight size={18} aria-hidden="true" /></Link>)}</div>
      <a href="#architecture" className="architecture-foundation"><span>SHARED FOUNDATION</span><span>Identity · Policy · Interoperability<ArrowUpRight size={16} aria-hidden="true" /></span></a>
    </section>
  </div>
}

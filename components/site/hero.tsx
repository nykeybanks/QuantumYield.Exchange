import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return <>
    <p className="intro-eyebrow">UNIFIED FINANCIAL INFRASTRUCTURE</p>
    <h1 className="hero-heading text-balance">One architecture.<br />A coherent financial workspace.</h1>
    <p className="hero-copy text-pretty">QYX20 brings identity, accounts, wallets, assets, payments, treasury, settlement, intelligence, interoperability and developer services into one proposed platform architecture.</p>
    <p className="text-text-muted">Explore the interactive prototype. All figures and operations are illustrative; no financial services are connected.</p>
    <Link href="/dashboard" className="public-open">Open QYX20 demo<ArrowUpRight size={18} /></Link>
    <a href="#platform" className="hero-action">Explore platform layers<ArrowUpRight size={18} /></a>
    <a href="#architecture" className="hero-action">View architecture<ArrowUpRight size={18} /></a>
  </>
}

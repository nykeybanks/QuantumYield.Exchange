import { ArrowDown, ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./ui"
import { GatewayPreview } from "./gateway-preview"

export function Hero() {
  return (
    <section id="top" className="qyx-hero mx-auto max-w-7xl px-5 pb-8 pt-32 lg:px-8 lg:pt-40">
      <div className="flex items-center justify-between border-b border-border pb-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>QuantumYield™ / QYX20™</span>
        <span className="flex items-center gap-2"><span className="size-1.5 bg-gold" aria-hidden="true" />Interface prototype</span>
      </div>
      <div className="grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-16">
        <div>
          <SectionLabel>The connectivity standard</SectionLabel>
          <h1 className="mt-7 text-balance font-display text-4xl font-medium leading-[1.16] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            One gateway.<br />
            <span className="text-gold-soft">A connected</span><br />
            <span className="text-gold-soft">future.</span>
          </h1>
          <p className="mt-7 max-w-md text-pretty font-body text-lg leading-relaxed text-muted-foreground">
            Intelligence, infrastructure, and digital experiences. Explore the QYX20 vision for one precisely engineered ecosystem.
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a href="#portals" className="qyx-action">Explore the ecosystem <ArrowUpRight className="size-4" aria-hidden="true" /></a>
            <a href="#architecture" className="qyx-action" data-variant="secondary">View architecture</a>
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase leading-relaxed tracking-wider text-muted-foreground">Concept experience. No wallet or account required.</p>
        </div>
        <GatewayPreview />
      </div>
      <div className="flex items-center justify-between border-t border-border pt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>Precision over decoration. <span className="hidden sm:inline">System over screens.</span></span>
        <a href="#ecosystem-overview" className="inline-flex min-h-11 items-center gap-3 text-foreground hover:text-gold">Discover <ArrowDown className="size-3" aria-hidden="true" /></a>
      </div>
    </section>
  )
}

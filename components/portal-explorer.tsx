"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Reveal } from "./reveal"
import { Button, SectionLabel } from "./ui"
import { portals } from "@/lib/data"

export function PortalExplorer() {
  const [active, setActive] = useState(0)
  const portal = portals[active]

  return (
    <section id="portals" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel>QYX20 Portals</SectionLabel>
        <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">QYX20 Portals</h2>
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
          Access gateways and innovation hubs powered by QuantumYield Technology platform. Each portal provides
          specialized functionality and seamless integration with the QYX20 ecosystem.
        </p>
      </Reveal>

      {/* Portal selector — spatial nav */}
      <div className="mt-14 flex flex-wrap justify-center gap-2.5">
        {portals.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`rounded-full border px-4 py-2 font-display text-sm tracking-wide transition-all duration-300 ${
              active === i
                ? "border-gold bg-gold text-gold-foreground"
                : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Portal detail */}
      <Reveal className="mt-12">
        <div className="grid overflow-hidden rounded-3xl border border-border bg-surface-raised lg:grid-cols-2">
          {/* Visual */}
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
            <div aria-hidden className="absolute inset-0 bg-radial-gold" />
            <div
              key={portal.id}
              className="relative flex flex-col items-center"
              style={{ animation: "fadeScale 0.5s cubic-bezier(0.22,1,0.36,1)" }}
            >
              <span className="font-display text-6xl font-bold tracking-tight text-gradient-gold sm:text-7xl">
                {portal.name}
              </span>
              <span className="mt-3 text-xs uppercase tracking-[0.3em] text-chrome">QuantumYield Portal</span>
            </div>
            <style>{`@keyframes fadeScale{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:none}}`}</style>
          </div>

          {/* Content */}
          <div key={portal.id + "-c"} className="p-8 lg:p-10" style={{ animation: "fadeScale 0.5s ease" }}>
            <p className="text-sm uppercase tracking-[0.2em] text-gold">{portal.category}</p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{portal.description}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {portal.capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-2.5 text-sm text-silver">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  {cap}
                </li>
              ))}
            </ul>
            <Button className="mt-9">
              Explore {portal.name}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

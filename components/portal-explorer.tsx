"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { QYXProductMark } from "@/components/brand"
import type { QYXProduct } from "@/lib/qyx-brand-assets"

const productMarks: Partial<Record<string, QYXProduct>> = { QYXai: "qyxai", QYXvr: "qyxvr", QYXar: "qyxar" }
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
          Explore proposed gateways in the QuantumYield ecosystem. Select a portal to inspect its concept scope; these services are not live.
        </p>
      </Reveal>

      {/* Portal selector — spatial nav */}
      <div role="group" aria-label="Choose a portal" className="mt-8 grid grid-cols-4 gap-2 sm:mt-12 sm:flex sm:flex-wrap sm:justify-center">
        {portals.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`min-h-11 min-w-0 rounded-lg border px-2 py-2 font-display text-[10px] tracking-wide transition-colors duration-200 sm:px-4 sm:text-sm ${
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
      <Reveal className="mt-6 sm:mt-10">
        <div className="grid overflow-hidden rounded-xl border border-border bg-surface-raised lg:grid-cols-2">
          {/* Visual */}
          <div className="relative flex min-h-44 sm:min-h-64 items-center justify-center overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
            <div aria-hidden className="absolute inset-0 bg-radial-gold" />
            <div
              key={portal.id}
              className="qyx-portal-enter relative flex flex-col items-center"
            >
              {productMarks[portal.id] ? (
                <QYXProductMark product={productMarks[portal.id]!} alt={portal.name} height={32} />
              ) : (
                <span className="font-sans text-2xl font-medium text-foreground">{portal.name}</span>
              )}
              <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Portal concept · Planned</span>
            </div>
          </div>

          {/* Content */}
          <div key={portal.id + "-c"} className="qyx-portal-enter min-w-0 p-5 sm:p-8 lg:p-10" aria-live="polite">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">{portal.category}</p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{portal.description}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {portal.capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-2.5 text-sm text-silver">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Plus className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {cap}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-gold">Proposed capabilities — not connected</p>
            <Button variant="secondary" className="mt-4 w-full sm:w-auto" disabled>{portal.name} access is planned</Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

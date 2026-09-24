"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Reveal } from "./reveal"
import { Button, SectionLabel } from "./ui"
import { tokenMetrics } from "@/lib/data"

export function TokenEconomics() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionLabel>Token Economics</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Token Economics</h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            A sustainable and transparent token distribution model designed for long-term growth.
          </p>
          <div className="mt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">Token Distribution</p>
            <div className="mt-4 flex h-3 w-full max-w-md overflow-hidden rounded-full border border-border">
              <span className="h-full bg-gold" style={{ width: "30%" }} />
              <span className="h-full bg-gold/30" style={{ width: "70%" }} />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              300,000,000 QYX circulating of 1,000,000,000 QYX total supply.
            </p>
            <Button variant="secondary" className="mt-8">
              View Detailed Distribution
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {tokenMetrics.map((m, i) => {
              const isOpen = open === i
              return (
                <button
                  key={m.label}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group relative flex flex-col bg-surface p-7 text-left transition-colors hover:bg-surface-raised"
                >
                  <span className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{m.label}</span>
                    <Plus className={`h-4 w-4 text-chrome transition-transform ${isOpen ? "rotate-45 text-gold" : ""}`} />
                  </span>
                  <span className="mt-4 font-display text-2xl font-bold tracking-tight text-gradient-gold sm:text-3xl">
                    {m.value}
                  </span>
                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <span className="overflow-hidden text-sm leading-relaxed text-silver/70">{m.detail}</span>
                  </div>
                  {!isOpen && (
                    <span className="mt-3 text-[11px] uppercase tracking-wider text-chrome">
                      Click for detailed information
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

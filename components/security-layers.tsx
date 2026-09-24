"use client"

import { useState } from "react"
import { ShieldCheck } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { securityLayers } from "@/lib/data"

export function SecurityLayers() {
  const [active, setActive] = useState(0)

  return (
    <section className="border-y border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Security</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Security is foundational.</h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Layered protection, revealed progressively — select a layer to understand its role.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {securityLayers.map((layer, i) => {
            const isActive = active === i
            return (
              <Reveal key={layer.label} delay={(i % 4) * 70}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group flex h-full w-full flex-col rounded-2xl border p-6 text-left transition-all duration-300 ${
                    isActive
                      ? "border-gold/40 bg-surface-raised"
                      : "border-border bg-surface/50 hover:border-border-strong"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                        isActive ? "border-gold/50 text-gold" : "border-border text-chrome"
                      }`}
                    >
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span className="font-display text-xs tabular-nums text-chrome">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="mt-5 font-display text-lg font-semibold">{layer.label}</span>
                  <span
                    className={`mt-2 text-sm leading-relaxed transition-colors ${
                      isActive ? "text-silver/80" : "text-muted-foreground"
                    }`}
                  >
                    {layer.detail}
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

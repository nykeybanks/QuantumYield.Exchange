"use client"

import { useState } from "react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { architectureLayers } from "@/lib/data"

const principles = ["Cloud-native", "API-first", "Event-driven", "AI-native", "Security-by-design"]

export function Architecture() {
  const [active, setActive] = useState(3)

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionLabel>Architecture</SectionLabel>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Built as infrastructure.</h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Cloud-native. API-first. Event-driven. AI-native. Security-by-design.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {principles.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-border px-3 py-1.5 text-xs uppercase tracking-wider text-silver/80"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-border bg-surface-raised p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-gold">{architectureLayers[active].label}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{architectureLayers[active].detail}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ol className="space-y-1.5">
            {architectureLayers.map((layer, i) => {
              const isActive = active === i
              return (
                <li key={layer.label}>
                  <button
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-gold/40 bg-surface-raised"
                        : "border-border bg-surface/40 hover:border-border-strong hover:bg-surface-raised/70"
                    }`}
                    style={{ marginLeft: `${i * 6}px` }}
                  >
                    <span className={`font-display text-xs tabular-nums ${isActive ? "text-gold" : "text-chrome"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-base font-medium transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {layer.label}
                    </span>
                    <span
                      className={`ml-auto h-2 w-2 rounded-full transition-colors ${
                        isActive ? "bg-gold" : "bg-border-strong"
                      }`}
                    />
                  </button>
                </li>
              )
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

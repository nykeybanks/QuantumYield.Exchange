"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { features } from "@/lib/data"

export function Features() {
  const [active, setActive] = useState(0)

  return (
    <section className="border-y border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Powerful Features</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Powerful Features</h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Built for developers, designed for users. Experience blockchain technology that just works.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Selector list */}
          <Reveal className="space-y-2">
            {features.map((f, i) => {
              const isActive = active === i
              return (
                <button
                  key={f.title}
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-center justify-between gap-4 rounded-xl border px-5 py-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-gold/40 bg-surface-raised"
                      : "border-transparent hover:border-border hover:bg-surface/60"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`font-display text-sm tabular-nums ${isActive ? "text-gold" : "text-chrome"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-lg font-medium transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {f.title}
                    </span>
                  </span>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-all ${
                      isActive ? "text-gold" : "text-chrome opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              )
            })}
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-raised p-8 lg:p-10">
              <div aria-hidden className="absolute inset-0 bg-radial-gold opacity-70" />
              <div className="relative">
                <span className="inline-flex rounded-full border border-gold/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                  {features[active].status}
                </span>
                <h3 className="mt-6 text-balance font-display text-3xl font-bold leading-tight">
                  {features[active].title}
                </h3>
                <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {features[active].description}
                </p>
                <button className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-soft">
                  Click to learn more
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

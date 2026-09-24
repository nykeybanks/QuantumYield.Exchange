"use client"

import { useState } from "react"
import { Reveal } from "./reveal"
import { SectionLabel, StatusPill } from "./ui"
import { roadmap } from "@/lib/data"

export function Roadmap() {
  const [active, setActive] = useState(2)

  return (
    <section className="border-y border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Development Roadmap</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Development Roadmap</h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Our journey to revolutionize blockchain technology, one milestone at a time. Click any milestone to explore
            detailed information.
          </p>
        </Reveal>

        <div className="mt-16">
          {/* Timeline track */}
          <div className="relative">
            <div aria-hidden className="absolute left-0 right-0 top-5 hidden h-px bg-border md:block" />
            <ol className="grid gap-4 md:grid-cols-4">
              {roadmap.map((m, i) => {
                const isActive = active === i
                return (
                  <li key={m.quarter} className="relative">
                    <button
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className="group flex w-full flex-col items-start"
                    >
                      <span className="flex items-center gap-3 md:flex-col md:items-start">
                        <span
                          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                            isActive
                              ? "border-gold bg-gold text-gold-foreground"
                              : "border-border bg-background text-chrome group-hover:border-gold/50"
                          }`}
                        >
                          <span className="font-display text-xs font-bold">{i + 1}</span>
                        </span>
                      </span>
                      <span
                        className={`mt-4 font-display text-sm tracking-wide transition-colors ${
                          isActive ? "text-gold" : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {m.quarter}
                      </span>
                      <span
                        className={`mt-1 text-left font-display text-base font-semibold transition-colors ${
                          isActive ? "text-foreground" : "text-silver/70"
                        }`}
                      >
                        {m.title}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>

          {/* Detail */}
          <Reveal className="mt-10">
            <div className="rounded-3xl border border-border bg-surface-raised p-8 lg:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gold">{roadmap[active].quarter}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{roadmap[active].title}</h3>
                </div>
                <StatusPill status={roadmap[active].status} />
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {roadmap[active].items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3.5 text-sm"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

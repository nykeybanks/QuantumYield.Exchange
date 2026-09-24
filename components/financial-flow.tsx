"use client"

import { useState } from "react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { financialFlow } from "@/lib/data"

export function FinancialFlow() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="border-y border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel>Financial Stack</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            The financial architecture.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Value moves through a considered sequence of layers. Select any layer to reveal its purpose — advanced
            detail stays hidden until requested.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="flex flex-wrap gap-2.5">
            {financialFlow.map((layer, i) => {
              const isActive = active === i
              return (
                <div key={layer.label} className="flex items-center gap-2.5">
                  <button
                    onClick={() => setActive(isActive ? null : i)}
                    aria-expanded={isActive}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-gold bg-gold text-gold-foreground"
                        : "border-border bg-surface-raised text-silver hover:border-gold/40 hover:text-foreground"
                    }`}
                  >
                    {layer.label}
                  </button>
                  {i < financialFlow.length - 1 && (
                    <span aria-hidden className="text-chrome/50">
                      →
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          <div
            className={`grid transition-all duration-500 ${
              active !== null ? "mt-8 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {active !== null && (
                <div className="rounded-2xl border border-gold/30 bg-surface-raised p-7">
                  <p className="text-sm uppercase tracking-[0.2em] text-gold">{financialFlow[active].label}</p>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{financialFlow[active].detail}</p>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

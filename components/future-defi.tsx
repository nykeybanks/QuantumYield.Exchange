"use client"

import { useState } from "react"
import { ArrowRight, ShieldCheck, Zap, Boxes } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { valueProps } from "@/lib/data"

const icons = [ShieldCheck, Zap, Boxes]

export function FutureDefi() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal className="max-w-2xl">
        <SectionLabel>The future of decentralized finance</SectionLabel>
        <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          The Future of Decentralized Finance
        </h2>
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
          Three foundations carry the QYX20 experience. Each begins simple — explore any one to reveal how it works
          beneath the surface.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {valueProps.map((vp, i) => {
          const Icon = icons[i]
          const isOpen = open === i
          return (
            <Reveal key={vp.title} delay={i * 90}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`group flex h-full w-full flex-col rounded-2xl border p-7 text-left transition-all duration-500 ${
                  isOpen
                    ? "border-gold/40 bg-surface-raised"
                    : "border-border bg-surface/50 hover:border-border-strong hover:bg-surface-raised/70"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors ${
                    isOpen ? "border-gold/50 text-gold" : "border-border text-silver group-hover:text-gold"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{vp.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{vp.short}</p>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-border pt-4 text-sm leading-relaxed text-silver/80">{vp.detail}</p>
                  </div>
                </div>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  {isOpen ? "Show less" : "Click to learn more"}
                  <ArrowRight
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`}
                  />
                </span>
              </button>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

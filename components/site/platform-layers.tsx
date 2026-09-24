"use client"

import { useState } from "react"
import { LAYERS } from "@/lib/platform"
import { cn } from "@/lib/utils"

export function PlatformLayers() {
  const [active, setActive] = useState(LAYERS[2].id)
  const activeLayer = LAYERS.find((l) => l.id === active) ?? LAYERS[0]

  return (
    <section id="platform" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Platform Overview"
          title="Six layers, one platform"
          description="QYX20 is organized as a layered architecture. Each layer is independent, observable and composable — select a layer to reveal the domains it operates."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Layer stack */}
          <ul className="flex flex-col">
            {LAYERS.map((layer, i) => {
              const isActive = layer.id === active
              return (
                <li key={layer.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(layer.id)}
                    onFocus={() => setActive(layer.id)}
                    onClick={() => setActive(layer.id)}
                    className={cn(
                      "group flex w-full items-center gap-5 border-l-2 px-5 py-5 text-left transition-colors duration-[220ms]",
                      isActive
                        ? "border-l-border-active bg-surface-elevated"
                        : "border-l-border hover:bg-surface",
                    )}
                    aria-pressed={isActive}
                  >
                    <span
                      className={cn(
                        "font-mono text-xs tabular-nums transition-colors",
                        isActive ? "text-champagne" : "text-text-muted",
                      )}
                    >
                      {layer.index}
                    </span>
                    <span className="flex-1">
                      <span
                        className={cn(
                          "block font-display text-lg tracking-wide transition-colors",
                          isActive ? "text-platinum" : "text-text-secondary",
                        )}
                      >
                        {layer.name}
                      </span>
                      <span className="mt-0.5 block font-body text-sm text-text-muted">
                        {layer.tagline}
                      </span>
                    </span>
                    {i < LAYERS.length - 1 && (
                      <span className="font-mono text-text-muted" aria-hidden>
                        ↓
                      </span>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Active layer detail */}
          <div className="relative border border-border bg-qyx-obsidian/40">
            <div className="qyx-grid absolute inset-0 opacity-50" aria-hidden />
            <div className="relative flex h-full flex-col p-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-champagne">
                  {activeLayer.index}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden />
              </div>
              <h3 className="mt-6 font-display text-3xl tracking-wide text-platinum">
                {activeLayer.name}
              </h3>
              <p className="mt-3 max-w-md font-body text-text-secondary">
                {activeLayer.tagline}
              </p>

              <div className="mt-auto pt-10">
                <span className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
                  Domains
                </span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeLayer.domains.map((d) => (
                    <span
                      key={d}
                      className="border border-border-strong bg-surface px-3 py-1.5 font-body text-sm text-platinum"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-border-active" aria-hidden />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-champagne">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-platinum text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}

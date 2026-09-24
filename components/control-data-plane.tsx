import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { controlPlane, dataPlane } from "@/lib/data"

export function ControlDataPlane() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel>Control & Data Plane</SectionLabel>
        <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Governed execution, by design.
        </h2>
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
          The control plane governs the data plane — policy and configuration shape every operation that runs.
        </p>
      </Reveal>

      <div className="relative mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-border bg-surface-raised p-8">
            <p className="font-display text-sm uppercase tracking-[0.24em] text-gold">Control Plane</p>
            <p className="mt-2 text-sm text-muted-foreground">Governs</p>
            <ul className="mt-6 space-y-2.5">
              {controlPlane.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-3xl border border-border bg-surface/40 p-8">
            <p className="font-display text-sm uppercase tracking-[0.24em] text-silver">Data Plane</p>
            <p className="mt-2 text-sm text-muted-foreground">Governed by the control plane</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {dataPlane.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-raised/60 px-4 py-3 text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-silver" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30 bg-background px-4 py-2 font-display text-xs uppercase tracking-[0.2em] text-gold lg:block"
        >
          governs ↓
        </div>
      </div>
    </section>
  )
}

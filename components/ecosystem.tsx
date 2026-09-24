import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"

const nodes = ["AI", "Data", "VR", "AR", "Computing", "Storage", "Network", "Energy"]

export function Ecosystem() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/30 py-24 lg:py-32">
      <div aria-hidden className="absolute inset-0 bg-radial-gold" />
      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <Reveal>
          <SectionLabel>Ecosystem</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            One ecosystem. Multiple gateways.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            QYX20 brings specialized technology domains together through a unified QuantumYield experience.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {nodes.map((node, i) => (
              <div key={node} className="flex items-center gap-x-3">
                <span className="rounded-full border border-border bg-surface-raised px-4 py-2 font-display text-sm tracking-wide text-silver transition-colors hover:border-gold/40 hover:text-gold">
                  {node}
                </span>
                {i < nodes.length - 1 && <span aria-hidden className="text-gold/50">→</span>}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 font-display text-sm uppercase tracking-[0.3em] text-gold">One QYX20 ecosystem</p>
        </Reveal>
      </div>
    </section>
  )
}

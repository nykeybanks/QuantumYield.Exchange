import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { DOMAINS } from "@/lib/platform"
import { SectionHeading } from "./platform-layers"

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Capabilities"
          title="Financial services, intelligence and infrastructure"
          description="Every capability shares the same identity, ledger, policy and evidence model. Trading is one domain among many — not the whole platform."
        />

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((domain) => (
            <Link
              key={domain.title}
              href={domain.href}
              className="group relative flex flex-col bg-qyx-obsidian p-8 transition-colors duration-[220ms] hover:bg-surface-elevated"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-champagne">
                {domain.eyebrow}
              </span>
              <h3 className="mt-4 flex items-start justify-between gap-3 font-display text-xl tracking-wide text-platinum">
                {domain.title}
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-text-muted transition-all group-hover:text-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-secondary">
                {domain.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
                {domain.points.map((p) => (
                  <span
                    key={p}
                    className="font-mono text-[11px] tracking-wide text-text-muted"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

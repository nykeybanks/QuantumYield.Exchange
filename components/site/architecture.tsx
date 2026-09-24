import { LAYERS } from "@/lib/platform"
import { SectionHeading } from "./platform-layers"

const EVIDENCE_MODEL = [
  { label: "System State", note: "Authoritative platform truth" },
  { label: "Document Evidence", note: "Source records & attachments" },
  { label: "Analytical Result", note: "Derived, reproducible output" },
  { label: "Model Inference", note: "QYXai interpretation" },
  { label: "User Input", note: "Operator-supplied intent" },
]

export function Architecture() {
  return (
    <section id="architecture" className="relative border-b border-border">
      <div className="qyx-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Architecture"
          title="Engineered as layered infrastructure"
          description="Requests flow down from experience to infrastructure; evidence and state flow back up. Every result is traceable to its source."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Vertical layer flow */}
          <div className="flex flex-col gap-2">
            {LAYERS.map((layer, i) => (
              <div key={layer.id} className="flex flex-col">
                <div className="flex items-center gap-4 border border-border bg-qyx-obsidian/60 px-5 py-4">
                  <span className="font-mono text-xs text-champagne">
                    {layer.index}
                  </span>
                  <span className="w-32 shrink-0 font-display tracking-wide text-platinum">
                    {layer.name}
                  </span>
                  <span className="hidden font-body text-sm text-text-muted sm:block">
                    {layer.domains.join(" · ")}
                  </span>
                </div>
                {i < LAYERS.length - 1 && (
                  <span
                    className="mx-auto py-1 font-mono text-xs text-border-strong"
                    aria-hidden
                  >
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Evidence & state language */}
          <div className="border border-border bg-qyx-obsidian/60 p-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-champagne">
              Object &amp; Evidence Language
            </span>
            <h3 className="mt-4 font-display text-xl tracking-wide text-platinum">
              State is never confused with interpretation
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
              QYX20 distinguishes authoritative system state from analysis and
              model inference at every surface. Nothing generated is ever
              presented as ground truth.
            </p>
            <ul className="mt-8 flex flex-col divide-y divide-border border-t border-border">
              {EVIDENCE_MODEL.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <span className="font-display text-sm tracking-wide text-platinum">
                    {row.label}
                  </span>
                  <span className="font-body text-xs text-text-muted">
                    {row.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

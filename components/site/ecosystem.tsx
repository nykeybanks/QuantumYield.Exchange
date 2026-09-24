import { ECOSYSTEM, ROADMAP } from "@/lib/platform"
import { SectionHeading } from "./platform-layers"
import { cn } from "@/lib/utils"

const STATUS_STYLES: Record<string, string> = {
  Live: "text-success border-success/40",
  "In progress": "text-warning border-warning/40",
  Preview: "text-information border-information/40",
  Planned: "text-text-muted border-border-strong",
}

export function Ecosystem() {
  return (
    <section id="ecosystem" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Ecosystem */}
          <div>
            <SectionHeading
              eyebrow="QYX Ecosystem"
              title="One brand, many surfaces"
              description="Products across the QYX ecosystem share identity, tokens, object language and governance."
            />
            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {ECOSYSTEM.map((item) => (
                <div key={item.name} className="bg-qyx-obsidian p-5">
                  <div className="font-display tracking-wide text-platinum">
                    {item.name}
                  </div>
                  <div className="mt-1 font-body text-sm text-text-muted">
                    {item.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap / status */}
          <div>
            <SectionHeading
              eyebrow="Roadmap · Status"
              title="Built in the open, phase by phase"
              description="Capabilities are shipped as coherent phases. Status is always explicit — never implied."
            />
            <ol className="mt-10 flex flex-col divide-y divide-border border border-border">
              {ROADMAP.map((row) => (
                <li
                  key={row.phase}
                  className="flex items-center gap-5 bg-qyx-obsidian/60 p-5"
                >
                  <span
                    className={cn(
                      "shrink-0 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide",
                      STATUS_STYLES[row.status] ?? STATUS_STYLES.Planned,
                    )}
                  >
                    {row.status}
                  </span>
                  <div>
                    <div className="font-display tracking-wide text-platinum">
                      {row.phase}
                    </div>
                    <div className="mt-0.5 font-body text-sm text-text-muted">
                      {row.detail}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

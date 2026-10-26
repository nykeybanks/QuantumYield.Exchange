import { Terminal, KeyRound, Boxes, LineChart, FileCode, BookOpen } from "lucide-react"
import { Reveal } from "./reveal"
import { Button, SectionLabel } from "./ui"

const capabilities = [
  { icon: KeyRound, label: "API Keys" },
  { icon: Boxes, label: "SDKs" },
  { icon: Terminal, label: "Testing Consoles" },
  { icon: LineChart, label: "Usage Analytics" },
  { icon: FileCode, label: "Code Generators" },
  { icon: BookOpen, label: "Tutorials" },
]

const codeLines = [
  { t: "comment", v: "// Illustrative specification — not an API" },
  { t: "", v: "{" },
  { t: "", v: '  "product": "QYX20",' },
  { t: "", v: '  "status": "concept",' },
  { t: "", v: '  "interface": "unified-gateway",' },
  { t: "", v: '  "liveConnections": false,' },
  { t: "", v: '  "publicSdk": "planned",' },
  { t: "", v: '  "documentation": "planned"' },
  { t: "", v: "}" },
]

export function DeveloperSection() {
  return (
    <section id="developers" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid min-w-0 grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <SectionLabel>Developers</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Build on QYX20.</h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            A proposed developer experience for the QuantumYield ecosystem. APIs, SDKs, and testing environments are planned; no public SDK or API access is represented as available.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {capabilities.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-surface/50 px-3.5 py-3 text-sm text-silver"
              >
                <c.icon className="h-4 w-4 shrink-0 text-gold" />
                {c.label}
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="mt-9" disabled>Documentation is planned</Button>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-lg border border-border bg-[#0a0a0c] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-border-strong" />
              <span className="h-3 w-3 rounded-full bg-border-strong" />
              <span className="h-3 w-3 rounded-full bg-border-strong" />
              <span className="ml-3 font-sans text-xs text-chrome">concept.jsonc</span>
            </div>
            <pre tabIndex={0} role="region" aria-label="Illustrative concept specification, not a working API" className="max-w-full overflow-x-auto overscroll-x-contain p-4 font-mono text-xs leading-relaxed sm:p-5 sm:text-[13px]">
              <code>
                {codeLines.map((line, i) => (
                  <div key={i} className="whitespace-pre">
                    <span className="mr-4 select-none text-chrome/40">{String(i + 1).padStart(2, " ")}</span>
                    {line.t === "comment" ? (
                      <span className="text-chrome">{line.v}</span>
                    ) : line.t ? (
                      <>
                        <span className="text-gold">{line.t}</span>
                        <span className="text-silver">{line.v}</span>
                      </>
                    ) : (
                      <span className="text-silver">{line.v}</span>
                    )}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

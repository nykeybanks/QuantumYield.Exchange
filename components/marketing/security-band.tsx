import { LockIcon, FileCheckIcon, EyeIcon, GaugeIcon } from "lucide-react"

const POINTS = [
  {
    icon: LockIcon,
    title: "Non-custodial by design",
    description: "Funds move directly between your wallet and audited vault contracts. QuantumYield never takes custody.",
  },
  {
    icon: FileCheckIcon,
    title: "Independently audited",
    description: "Every routing contract passes two independent audits and a public bug bounty before going live.",
  },
  {
    icon: EyeIcon,
    title: "Fully transparent routing",
    description: "See exactly which protocols and markets your deposit is routed to, updated on every rebalance.",
  },
  {
    icon: GaugeIcon,
    title: "Risk-banded vaults",
    description: "Choose low, medium, or high risk exposure — the engine only routes within your selected band.",
  },
]

export function SecurityBand() {
  return (
    <section id="security" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for scrutiny, not just yield.
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            DeFi yield only matters if the underlying contracts are sound.
            Here&apos;s how we keep it that way.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <point.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-medium">{point.title}</h3>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { RadarIcon, RouteIcon, ShieldCheckIcon, RefreshCwIcon } from "lucide-react"

const STEPS = [
  {
    icon: RadarIcon,
    title: "Scan",
    description:
      "Our engine polls lending markets, staking derivatives, and liquidity pools across chains every block, scoring real-time yield and depth.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Score",
    description:
      "Each venue is risk-scored on audit history, liquidity depth, oracle exposure, and historical drawdown before it's eligible for routing.",
  },
  {
    icon: RouteIcon,
    title: "Route",
    description:
      "Deposits are algorithmically split across the highest risk-adjusted venues that match your selected vault's risk band.",
  },
  {
    icon: RefreshCwIcon,
    title: "Rebalance",
    description:
      "Positions are continuously monitored and rebalanced as rates shift, so your capital never sits in a stale market.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One deposit. A continuously optimized route.
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            The routing engine is the core of QuantumYield — a four-stage
            loop that never stops looking for a better rate.
          </p>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-primary">
                  <step.icon className="size-5" />
                </div>
                <span className="text-nums text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-medium">{step.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

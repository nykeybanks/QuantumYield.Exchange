import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { formatUsd, averageApy, totalTvl, yieldPools } from "@/lib/pools-data"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Live across {new Set(yieldPools.map((p) => p.chain)).size} chains ·{" "}
            {yieldPools.length} active vaults
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Yield, routed at{" "}
            <span className="text-primary">quantum speed</span>.
          </h1>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            QuantumYield.Exchange continuously scans lending, staking, and
            liquidity markets across chains, then auto-routes deposits into
            the highest risk-adjusted return available — non-custodially.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" render={<Link href="/dashboard" />} nativeButton={false}>
              Launch App
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button size="lg" variant="outline" render={<a href="#vaults" />} nativeButton={false}>
              View Vaults
            </Button>
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-border/60 pt-6">
            <div>
              <dt className="text-xs text-muted-foreground">Total routed</dt>
              <dd className="text-nums text-xl font-semibold sm:text-2xl">
                {formatUsd(totalTvl(), { compact: true })}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Avg. net APY</dt>
              <dd className="text-nums text-xl font-semibold text-primary sm:text-2xl">
                {averageApy().toFixed(1)}%
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Active vaults</dt>
              <dd className="text-nums text-xl font-semibold sm:text-2xl">
                {yieldPools.length}
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            src="/images/hero-network.png"
            alt="Diagram of capital being algorithmically routed between decentralized finance protocols"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

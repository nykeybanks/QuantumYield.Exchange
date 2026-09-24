import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PoolTable } from "@/components/pool-table"
import { yieldPools } from "@/lib/pools-data"

export function VaultsPreview() {
  const topPools = [...yieldPools].sort((a, b) => b.apy - a.apy).slice(0, 5)

  return (
    <section id="vaults" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Live vaults, ranked by APY.
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              A snapshot of what the routing engine is currently allocating
              to. Full detail, deposits, and risk filters live in the app.
            </p>
          </div>
          <Button variant="outline" render={<Link href="/dashboard" />} nativeButton={false}>
            View all vaults
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
        <Card className="mt-10 overflow-hidden p-0">
          <PoolTable pools={topPools} />
        </Card>
      </div>
    </section>
  )
}

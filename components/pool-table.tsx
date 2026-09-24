"use client"

import { ArrowUpRightIcon, ArrowDownRightIcon } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { RiskBadge } from "@/components/risk-badge"
import { formatUsd, type YieldPool } from "@/lib/pools-data"
import { cn } from "@/lib/utils"

export function PoolTable({
  pools,
  onDeposit,
  actionLabel = "Deposit",
}: {
  pools: YieldPool[]
  onDeposit?: (pool: YieldPool) => void
  actionLabel?: string
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Vault</TableHead>
          <TableHead className="hidden sm:table-cell">Chain</TableHead>
          <TableHead className="hidden md:table-cell">Risk</TableHead>
          <TableHead className="text-right">APY</TableHead>
          <TableHead className="hidden text-right lg:table-cell">TVL</TableHead>
          {onDeposit ? <TableHead className="text-right">Action</TableHead> : null}
        </TableRow>
      </TableHeader>
      <TableBody>
        {pools.map((pool) => {
          const isUp = pool.apyChange7d >= 0
          return (
            <TableRow key={pool.id}>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">{pool.vault}</span>
                  <span className="text-xs text-muted-foreground">
                    {pool.protocol} · {pool.asset}
                  </span>
                </div>
              </TableCell>
              <TableCell className="hidden text-muted-foreground sm:table-cell">
                {pool.chain}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <RiskBadge risk={pool.risk} />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col items-end">
                  <span className="text-nums font-medium text-primary">
                    {pool.apy.toFixed(2)}%
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-0.5 text-xs",
                      isUp ? "text-primary" : "text-destructive"
                    )}
                  >
                    {isUp ? (
                      <ArrowUpRightIcon className="size-3" />
                    ) : (
                      <ArrowDownRightIcon className="size-3" />
                    )}
                    <span className="text-nums">{Math.abs(pool.apyChange7d).toFixed(2)}%</span>
                  </span>
                </div>
              </TableCell>
              <TableCell className="hidden text-right text-nums text-muted-foreground lg:table-cell">
                {formatUsd(pool.tvl, { compact: true })}
              </TableCell>
              {onDeposit ? (
                <TableCell className="text-right">
                  <Button size="sm" variant="outline" onClick={() => onDeposit(pool)}>
                    {actionLabel}
                  </Button>
                </TableCell>
              ) : null}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

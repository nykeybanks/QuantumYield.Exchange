"use client"

import { useState } from "react"
import { Loader2Icon } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RiskBadge } from "@/components/risk-badge"
import type { YieldPool } from "@/lib/pools-data"

export function DepositDialog({
  pool,
  onOpenChange,
  onConfirm,
}: {
  pool: YieldPool | null
  onOpenChange: (open: boolean) => void
  onConfirm: (pool: YieldPool, amount: number) => void
}) {
  const [amount, setAmount] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const numericAmount = Number(amount)
  const isValid = amount.trim() !== "" && numericAmount > 0

  function handleOpenChange(open: boolean) {
    if (!open) {
      setAmount("")
      setSubmitting(false)
    }
    onOpenChange(open)
  }

  async function handleConfirm() {
    if (!pool || !isValid) return
    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    onConfirm(pool, numericAmount)
    setSubmitting(false)
    setAmount("")
    onOpenChange(false)
  }

  return (
    <Dialog open={!!pool} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deposit into {pool?.vault}</DialogTitle>
          <DialogDescription>
            {pool?.protocol} · {pool?.chain} · Simulated transaction for demo purposes.
          </DialogDescription>
        </DialogHeader>
        {pool ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm">
              <span className="text-muted-foreground">Current APY</span>
              <span className="text-nums font-medium text-primary">
                {pool.apy.toFixed(2)}%
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm">
              <span className="text-muted-foreground">Risk band</span>
              <RiskBadge risk={pool.risk} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="deposit-amount">Amount ({pool.asset})</Label>
              <Input
                id="deposit-amount"
                type="number"
                min={0}
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-nums"
              />
            </div>
          </div>
        ) : null}
        <DialogFooter>
          <Button onClick={handleConfirm} disabled={!isValid || submitting}>
            {submitting ? <Loader2Icon className="animate-spin" data-icon="inline-start" /> : null}
            {submitting ? "Confirming…" : "Confirm deposit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useMemo, useState } from "react"
import { toast } from "sonner"
import { InboxIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { PortfolioSummary } from "@/components/dashboard/portfolio-summary"
import { ConnectGate } from "@/components/dashboard/connect-gate"
import { DepositDialog } from "@/components/dashboard/deposit-dialog"
import { PoolTable } from "@/components/pool-table"
import { WalletConnectButton } from "@/components/wallet-connect-button"
import { useWallet } from "@/lib/wallet"
import { yieldPools, type YieldPool } from "@/lib/pools-data"

type Position = {
  poolId: string
  amount: number
  earned: number
}

const DEMO_POSITIONS: Position[] = [
  { poolId: "usdc-quantum-router", amount: 12500, earned: 284.12 },
  { poolId: "eth-lst-arb", amount: 4200, earned: 96.4 },
]

export function DashboardView() {
  const { status, kind } = useWallet()
  const [positions, setPositions] = useState<Position[]>([])
  const [depositTarget, setDepositTarget] = useState<YieldPool | null>(null)

  const isConnected = status === "connected"

  const activePositions = useMemo(() => {
    const seeded = kind === "demo" ? DEMO_POSITIONS : []
    const merged = [...seeded]
    for (const p of positions) {
      const existing = merged.find((m) => m.poolId === p.poolId)
      if (existing) {
        existing.amount += p.amount
      } else {
        merged.push(p)
      }
    }
    return merged
      .map((position) => {
        const pool = yieldPools.find((p) => p.id === position.poolId)
        return pool ? { position, pool } : null
      })
      .filter((v): v is { position: Position; pool: YieldPool } => v !== null)
  }, [positions, kind])

  const totalValue = activePositions.reduce((sum, p) => sum + p.position.amount, 0)
  const totalEarned = activePositions.reduce((sum, p) => sum + p.position.earned, 0)
  const netApy =
    activePositions.length === 0
      ? 0
      : activePositions.reduce((sum, p) => sum + p.pool.apy * p.position.amount, 0) / totalValue

  function handleDeposit(pool: YieldPool, amount: number) {
    setPositions((prev) => [...prev, { poolId: pool.id, amount, earned: 0 }])
    toast.success(`Deposited ${amount.toLocaleString()} ${pool.asset}`, {
      description: `Routed into ${pool.vault} on ${pool.chain}.`,
    })
  }

  if (!isConnected) {
    return (
      <div className="flex flex-col gap-8">
        <ConnectGate />
        <div>
          <h2 className="mb-4 text-lg font-medium">Available vaults</h2>
          <Card className="overflow-hidden p-0">
            <PoolTable pools={yieldPools} />
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Track your positions and discover new vaults to route capital into.
          </p>
        </div>
        <WalletConnectButton />
      </div>

      <PortfolioSummary
        totalValue={totalValue}
        netApy={netApy}
        totalEarned={totalEarned}
        positionCount={activePositions.length}
      />

      <Tabs defaultValue="positions">
        <TabsList>
          <TabsTrigger value="positions">My Positions</TabsTrigger>
          <TabsTrigger value="all">All Vaults</TabsTrigger>
        </TabsList>
        <TabsContent value="positions" className="mt-4">
          {activePositions.length === 0 ? (
            <Card className="flex flex-col items-center gap-3 px-6 py-16 text-center">
              <InboxIcon className="size-8 text-muted-foreground" />
              <div>
                <p className="font-medium">No positions yet</p>
                <p className="text-sm text-muted-foreground">
                  Deposit into a vault from the All Vaults tab to get started.
                </p>
              </div>
            </Card>
          ) : (
            <Card className="overflow-hidden p-0">
              <PoolTable
                pools={activePositions.map((p) => p.pool)}
                onDeposit={(pool) => setDepositTarget(pool)}
                actionLabel="Add more"
              />
            </Card>
          )}
        </TabsContent>
        <TabsContent value="all" className="mt-4">
          <Card className="overflow-hidden p-0">
            <PoolTable pools={yieldPools} onDeposit={(pool) => setDepositTarget(pool)} />
          </Card>
        </TabsContent>
      </Tabs>

      <DepositDialog
        pool={depositTarget}
        onOpenChange={(open) => {
          if (!open) setDepositTarget(null)
        }}
        onConfirm={handleDeposit}
      />
    </div>
  )
}

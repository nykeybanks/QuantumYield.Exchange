import { WalletIcon, TrendingUpIcon, CoinsIcon, LayersIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatUsd } from "@/lib/pools-data"

export function PortfolioSummary({
  totalValue,
  netApy,
  totalEarned,
  positionCount,
}: {
  totalValue: number
  netApy: number
  totalEarned: number
  positionCount: number
}) {
  const stats = [
    {
      label: "Portfolio value",
      value: formatUsd(totalValue),
      icon: WalletIcon,
    },
    {
      label: "Net APY",
      value: `${netApy.toFixed(2)}%`,
      icon: TrendingUpIcon,
      accent: true,
    },
    {
      label: "Total earned",
      value: formatUsd(totalEarned),
      icon: CoinsIcon,
      accent: true,
    },
    {
      label: "Active positions",
      value: String(positionCount),
      icon: LayersIcon,
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-normal text-muted-foreground">
              {stat.label}
            </CardTitle>
            <stat.icon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p
              className={
                "text-nums text-2xl font-semibold " +
                (stat.accent ? "text-primary" : "")
              }
            >
              {stat.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

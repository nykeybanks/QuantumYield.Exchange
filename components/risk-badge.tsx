import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { RiskLevel } from "@/lib/pools-data"

const RISK_STYLES: Record<RiskLevel, string> = {
  low: "border-primary/30 text-primary bg-primary/10",
  medium: "border-gold/30 text-gold bg-gold/10",
  high: "border-destructive/30 text-destructive bg-destructive/10",
}

const RISK_LABELS: Record<RiskLevel, string> = {
  low: "Low risk",
  medium: "Medium risk",
  high: "High risk",
}

export function RiskBadge({ risk, className }: { risk: RiskLevel; className?: string }) {
  return (
    <Badge variant="outline" className={cn(RISK_STYLES[risk], className)}>
      {RISK_LABELS[risk]}
    </Badge>
  )
}

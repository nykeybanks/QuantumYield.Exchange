import type { Environment } from "@/lib/nav"
import { cn } from "@/lib/utils"

const STYLES: Record<Environment, string> = {
  LOCAL: "border-border-strong text-text-muted",
  DEVELOPMENT: "border-information/50 text-information",
  INTEGRATION: "border-information/50 text-information",
  QA: "border-warning/50 text-warning",
  UAT: "border-warning/50 text-warning",
  STAGING: "border-warning/60 text-warning",
  PRODUCTION: "border-danger/60 text-danger",
}

/**
 * Environment must always be explicit — never communicated by color alone.
 * The label text carries the meaning; color is reinforcement.
 */
export function EnvironmentBadge({
  env,
  className,
}: {
  env: Environment
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
        STYLES[env],
        className,
      )}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {env}
    </span>
  )
}

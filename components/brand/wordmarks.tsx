import { cn } from "@/lib/utils"
import { QYXEmblem } from "./qyx-emblem"

export function QYXWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display font-semibold tracking-brand text-platinum",
        className,
      )}
    >
      QYX<span className="text-metallic">20</span>
    </span>
  )
}

export function QuantumYieldWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display tracking-[0.22em] text-text-secondary uppercase",
        className,
      )}
    >
      QuantumYield
    </span>
  )
}

/** Emblem + wordmark, the primary navigation lockup. */
export function QYX20Lockup({
  className,
  emblemClassName,
}: {
  className?: string
  emblemClassName?: string
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <QYXEmblem className={cn("h-7 w-7", emblemClassName)} />
      <QYXWordmark className="text-lg" />
    </span>
  )
}

/** Vertical brand signature for footers / hero sub-signatures. */
export function BrandSignature({ className }: { className?: string }) {
  return (
    <span className={cn("flex flex-col gap-1", className)}>
      <QYXWordmark className="text-base" />
      <span className="font-body text-[10px] tracking-[0.24em] text-text-muted uppercase">
        by QuantumYield
      </span>
    </span>
  )
}

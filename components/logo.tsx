import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="6"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="6"
        ry="14"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-gold"
        strokeOpacity="0.9"
      />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" className="text-primary" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-semibold tracking-tight", className)}>
      <LogoMark />
      <span>
        Quantum<span className="text-primary">Yield</span>
      </span>
    </span>
  )
}

import type React from "react"

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center gap-2 text-balance text-[10px] font-medium uppercase leading-relaxed tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.28em]">
      <span aria-hidden className="h-px w-4 shrink-0 bg-gold/50 sm:w-6" />
      {children}
    </span>
  )
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost"
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60"
  const variants = {
    primary:
      "bg-gold text-gold-foreground hover:bg-gold-soft hover:shadow-[0_8px_30px_rgba(198,168,90,0.25)] active:scale-[0.98]",
    secondary:
      "border border-border-strong bg-surface-raised/60 text-foreground hover:border-gold/50 hover:bg-surface-raised active:scale-[0.98]",
    ghost: "text-muted-foreground hover:text-foreground",
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function StatusPill({ status }: { status: string }) {
  const isLive = status === "Completed" || status === "Live"
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider ${
        isLive ? "border-success/40 text-success" : "border-gold/40 text-gold"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-success" : "bg-gold animate-pulse-soft"}`} />
      {status}
    </span>
  )
}

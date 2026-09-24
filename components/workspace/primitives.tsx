import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="mb-6 max-w-2xl">
      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-champagne">
        {eyebrow}
      </div>
      <h2 className="mt-2 font-display text-2xl tracking-wide text-platinum">
        {title}
      </h2>
      <p className="mt-2 font-body text-text-secondary">{description}</p>
    </div>
  )
}

export function StatGrid({
  stats,
}: {
  stats: { label: string; value: string; unit?: string; note?: string }[]
}) {
  return (
    <div
      className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4"
      role="list"
    >
      {stats.map((s) => (
        <div key={s.label} className="bg-qyx-obsidian p-4" role="listitem">
          <div className="font-body text-xs text-text-muted">{s.label}</div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="font-display text-2xl tracking-tight text-platinum">
              {s.value}
            </span>
            {s.unit && (
              <span className="font-mono text-[11px] text-text-muted">
                {s.unit}
              </span>
            )}
          </div>
          {s.note && (
            <div className="mt-1 font-mono text-[11px] text-text-muted">
              {s.note}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function Card({
  title,
  action,
  children,
  className,
}: {
  title?: string
  action?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("border border-border bg-qyx-obsidian/50", className)}>
      {title && (
        <header className="flex items-center justify-between border-b border-border px-5 py-3">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
            {title}
          </h3>
          {action}
        </header>
      )}
      <div className="p-5">{children}</div>
    </section>
  )
}

const TONES: Record<string, string> = {
  success: "border-success/40 text-success",
  warning: "border-warning/40 text-warning",
  danger: "border-danger/40 text-danger",
  info: "border-information/40 text-information",
  neutral: "border-border-strong text-text-muted",
  gold: "border-border-active/40 text-champagne",
}

export function StatusPill({
  children,
  tone = "neutral",
}: {
  children: ReactNode
  tone?: keyof typeof TONES | string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide",
        TONES[tone] ?? TONES.neutral,
      )}
    >
      {children}
    </span>
  )
}

export function DataTable({
  columns,
  rows,
}: {
  columns: string[]
  rows: ReactNode[][]
}) {
  return (
    <div className="overflow-x-auto border border-border">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-qyx-obsidian">
            {columns.map((c) => (
              <th
                key={c}
                className="px-4 py-3 font-mono text-[10px] uppercase tracking-wide text-text-muted"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border bg-qyx-obsidian/40 transition-colors last:border-b-0 hover:bg-surface-elevated"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 font-body text-sm text-text-secondary"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function PhaseFlow({
  phases,
  activeIndex,
}: {
  phases: string[]
  activeIndex: number
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {phases.map((p, i) => (
        <div key={p} className="flex items-center gap-2">
          <span
            className={cn(
              "border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide",
              i < activeIndex && "border-success/40 text-success",
              i === activeIndex && "border-border-active bg-surface-elevated text-champagne",
              i > activeIndex && "border-border text-text-muted",
            )}
          >
            {p}
          </span>
          {i < phases.length - 1 && (
            <span className="font-mono text-text-muted" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export function IllustrativeNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 font-body text-xs text-text-muted">{children}</p>
  )
}

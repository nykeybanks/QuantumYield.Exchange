import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { FitContent } from "@/components/viewport/fit-content"
import { DataTable as RecordBrowser } from "./record-browser"

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
    <Card title="Overview">
      <div className="intro-eyebrow">{eyebrow} · Prototype</div>
      <h2 className="intro-title text-balance">{title}</h2>
      <p className="intro-description text-pretty">{description}</p>
      <p className="text-text-muted">Illustrative environment. No live balances, transactions, credentials, or financial connections.</p>
    </Card>
  )
}

export function StatGrid({
  stats,
}: {
  stats: { label: string; value: string; unit?: string; note?: string }[]
}) {
  return (
    <Card title="Illustrative metrics">
      {stats.map((s) => (
        <div key={s.label} className="metric-item" data-keep-together>
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
    </Card>
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
  const nodes = Children.toArray(children)
  const table = nodes.find(node => isValidElement(node) && node.type === DataTable)
  const safeAction = isValidElement<{ href?: string }>(action) && action.props.href === "#"
    ? <span className="prototype-action">Create unavailable · prototype</span>
    : action
  return (
    <section className={cn("workspace-card", className)}>
      <header className="card-heading">
        <h2>{title || "Details"}</h2>
        {safeAction}
      </header>
      <div className="card-body">
        {table ? cloneElement(table as ReactElement<{ notes?: ReactNode }>, { notes: nodes.filter(node => node !== table) }) : <FitContent label="Content">{children}</FitContent>}
      </div>
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
  notes,
}: {
  columns: string[]
  rows: ReactNode[][]
  notes?: ReactNode
}) {
  return <RecordBrowser columns={columns} rows={rows} notes={notes} />
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

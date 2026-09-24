import Link from "next/link"
import {
  ArrowUpRight,
  AlertTriangle,
  Clock,
  Wallet,
  ArrowLeftRight,
  Landmark,
  ShieldCheck,
  Sparkles,
  Code2,
  Coins,
} from "lucide-react"
import { cn } from "@/lib/utils"

function Panel({
  title,
  children,
  action,
  className,
}: {
  title: string
  children: React.ReactNode
  action?: { label: string; href: string }
  className?: string
}) {
  return (
    <section className={cn("border border-border bg-qyx-obsidian/50", className)}>
      <header className="flex items-center justify-between border-b border-border px-5 py-3">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
          {title}
        </h2>
        {action && (
          <Link
            href={action.href}
            className="flex items-center gap-1 font-body text-xs text-text-muted transition-colors hover:text-champagne"
          >
            {action.label}
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        )}
      </header>
      <div className="p-5">{children}</div>
    </section>
  )
}

export function ContextHeader() {
  return (
    <div className="mb-6 flex flex-col gap-4 border border-border bg-qyx-obsidian/50 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
          Operating as
        </div>
        <div className="mt-1 flex items-center gap-3">
          <span className="font-display text-xl tracking-wide text-platinum">
            QuantumYield
          </span>
          <span className="text-border-strong" aria-hidden>
            /
          </span>
          <span className="font-body text-text-secondary">
            Personal workspace
          </span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
            Verification
          </div>
          <div className="mt-1 flex items-center gap-1.5 font-body text-sm text-success">
            <ShieldCheck className="h-4 w-4" />
            Level 2
          </div>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
            Session
          </div>
          <div className="mt-1 font-body text-sm text-text-secondary">Secure</div>
        </div>
      </div>
    </div>
  )
}

const BALANCES = [
  { label: "Total position", value: "148,920.42", unit: "USD", delta: "+2.4%" },
  { label: "Available", value: "96,410.10", unit: "USD", delta: null },
  { label: "In settlement", value: "38,250.00", unit: "USD", delta: null },
  { label: "Reserved", value: "14,260.32", unit: "USD", delta: null },
]

export function FinancialOverview() {
  return (
    <Panel
      title="Financial overview"
      action={{ label: "Treasury", href: "/platform/treasury" }}
    >
      <div className="grid grid-cols-2 gap-px border border-border bg-border">
        {BALANCES.map((b) => (
          <div key={b.label} className="bg-qyx-obsidian p-4">
            <div className="font-body text-xs text-text-muted">{b.label}</div>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="font-display text-2xl tracking-tight text-platinum">
                {b.value}
              </span>
              <span className="font-mono text-[11px] text-text-muted">
                {b.unit}
              </span>
            </div>
            {b.delta && (
              <div className="mt-1 font-mono text-[11px] text-success">
                {b.delta}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 font-body text-xs text-text-muted">
        Illustrative figures. Not live balances, custody or valuation.
      </p>
    </Panel>
  )
}

const ATTENTION = [
  {
    icon: AlertTriangle,
    tone: "text-warning",
    title: "1 settlement exception",
    detail: "Route mismatch on SET-4821 requires review.",
    href: "/platform/settlement",
  },
  {
    icon: Clock,
    tone: "text-information",
    title: "Payment awaiting authorization",
    detail: "PAY-2093 is staged and ready to authorize.",
    href: "/platform/payments",
  },
  {
    icon: ShieldCheck,
    tone: "text-text-secondary",
    title: "Policy review due",
    detail: "Quarterly approval policy review in 6 days.",
    href: "/admin/policies",
  },
]

export function AttentionRequired() {
  return (
    <Panel title="Attention required">
      <ul className="flex flex-col divide-y divide-border">
        {ATTENTION.map((a) => {
          const Icon = a.icon
          return (
            <li key={a.title}>
              <Link
                href={a.href}
                className="group flex items-start gap-3 py-3 first:pt-0 last:pb-0"
              >
                <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", a.tone)} />
                <div className="flex-1">
                  <div className="font-body text-sm text-platinum">
                    {a.title}
                  </div>
                  <div className="mt-0.5 font-body text-xs text-text-muted">
                    {a.detail}
                  </div>
                </div>
                <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 text-text-muted transition-colors group-hover:text-champagne" />
              </Link>
            </li>
          )
        })}
      </ul>
    </Panel>
  )
}

const ACTIVITY = [
  { time: "09:42", label: "Payment PAY-2088 completed", kind: "State" },
  { time: "09:31", label: "Reconciliation batch RC-338 matched", kind: "State" },
  { time: "08:55", label: "QYXai drafted a settlement summary", kind: "Draft" },
  { time: "08:20", label: "API key rotated for app 'ledger-sync'", kind: "State" },
  { time: "Yesterday", label: "Treasury allocation updated", kind: "State" },
]

export function ActivityFeed() {
  return (
    <Panel title="Recent activity" action={{ label: "Activity", href: "/platform/activity" }}>
      <ul className="flex flex-col gap-3">
        {ACTIVITY.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="w-16 shrink-0 font-mono text-[11px] text-text-muted">
              {item.time}
            </span>
            <span
              className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-border-active"
              aria-hidden
            />
            <span className="flex-1 font-body text-sm text-text-secondary">
              {item.label}
            </span>
            <span
              className={cn(
                "shrink-0 border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide",
                item.kind === "Draft"
                  ? "border-border-active/40 text-champagne"
                  : "border-border-strong text-text-muted",
              )}
            >
              {item.kind}
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  )
}

export function QyxaiPanel() {
  return (
    <Panel title="QYXai" action={{ label: "Open", href: "/platform/qyxai" }}>
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-border-active/50 bg-surface">
          <Sparkles className="h-4 w-4 text-champagne" />
        </div>
        <div>
          <p className="font-body text-sm leading-relaxed text-text-secondary">
            You have one settlement exception and a payment awaiting
            authorization. I can draft a review note for SET-4821 or summarize
            today&apos;s ledger movements.
          </p>
          <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-wide text-text-muted">
            Recommendation · requires review before any action
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Draft review note", "Summarize ledger", "Explain exception"].map(
          (a) => (
            <button
              key={a}
              type="button"
              className="border border-border-strong bg-surface px-3 py-1.5 font-body text-xs text-text-secondary transition-colors hover:border-border-active hover:text-platinum"
            >
              {a}
            </button>
          ),
        )}
      </div>
    </Panel>
  )
}

const QUICK_ACTIONS = [
  { label: "Accounts", href: "/platform/accounts", icon: Landmark },
  { label: "Wallets", href: "/platform/wallets", icon: Wallet },
  { label: "Assets", href: "/platform/assets", icon: Coins },
  { label: "Payments", href: "/platform/payments", icon: ArrowLeftRight },
  { label: "Treasury", href: "/platform/treasury", icon: Landmark },
  { label: "Settlement", href: "/platform/settlement", icon: ShieldCheck },
  { label: "QYXai", href: "/platform/qyxai", icon: Sparkles },
  { label: "Developer", href: "/developer", icon: Code2 },
]

export function QuickActions() {
  return (
    <Panel title="Quick actions">
      <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
        {QUICK_ACTIONS.map((a) => {
          const Icon = a.icon
          return (
            <Link
              key={a.label}
              href={a.href}
              className="group flex flex-col items-start gap-3 bg-qyx-obsidian p-4 transition-colors hover:bg-surface-elevated"
            >
              <Icon className="h-4 w-4 text-text-muted transition-colors group-hover:text-champagne" />
              <span className="font-body text-sm text-text-secondary transition-colors group-hover:text-platinum">
                {a.label}
              </span>
            </Link>
          )
        })}
      </div>
    </Panel>
  )
}

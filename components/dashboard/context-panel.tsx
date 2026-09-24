import { EnvironmentBadge } from "@/components/shell/environment-badge"

const SUMMARY = [
  { label: "Open payments", value: "3" },
  { label: "Pending settlements", value: "2" },
  { label: "Exceptions", value: "1" },
  { label: "Active API keys", value: "5" },
]

const STATUS = [
  { label: "Ledger", value: "Synced" },
  { label: "Settlement engine", value: "Nominal" },
  { label: "QYXai", value: "Available" },
  { label: "Webhooks", value: "Delivering" },
]

export function DashboardContext() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
            Context
          </span>
          <EnvironmentBadge env="PRODUCTION" />
        </div>
        <div className="border border-border bg-qyx-obsidian/60 p-4">
          <div className="font-body text-sm text-platinum">Primary Treasury</div>
          <div className="mt-1 font-mono text-[11px] text-text-muted">
            org_qy · ws_personal · acct_primary
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
          At a glance
        </div>
        <ul className="grid grid-cols-2 gap-px border border-border bg-border">
          {SUMMARY.map((s) => (
            <li key={s.label} className="bg-qyx-obsidian p-3">
              <div className="font-display text-xl text-platinum">{s.value}</div>
              <div className="mt-0.5 font-body text-[11px] text-text-muted">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
          System status
        </div>
        <ul className="flex flex-col divide-y divide-border border border-border">
          {STATUS.map((s) => (
            <li
              key={s.label}
              className="flex items-center justify-between bg-qyx-obsidian/60 px-4 py-2.5"
            >
              <span className="font-body text-sm text-text-secondary">
                {s.label}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-success">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
                {s.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

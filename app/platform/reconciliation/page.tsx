import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  Card,
  StatusPill,
  IllustrativeNote,
} from "@/components/workspace/primitives"

const RESULT_STATES = [
  ["MATCHED", "success"],
  ["PENDING", "info"],
  ["MISMATCH", "danger"],
  ["MISSING", "warning"],
  ["DUPLICATE", "warning"],
  ["REVIEW_REQUIRED", "gold"],
] as const

const EXPECTED = [
  ["Reference", "SET-4821"],
  ["Amount", "22,000.00 USD"],
  ["Route", "rail_swift · corr_a"],
  ["Value date", "2026-09-24"],
  ["Counterparty", "cp_9931"],
]

const OBSERVED = [
  ["Reference", "SET-4821"],
  ["Amount", "22,000.00 USD"],
  ["Route", "rail_swift · corr_b"],
  ["Value date", "2026-09-24"],
  ["Counterparty", "cp_9931"],
]

function StatePanel({
  label,
  rows,
  highlightKey,
}: {
  label: string
  rows: string[][]
  highlightKey?: string
}) {
  return (
    <div className="border border-border bg-qyx-obsidian/60">
      <div className="border-b border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
        {label}
      </div>
      <dl className="divide-y divide-border">
        {rows.map(([k, v]) => {
          const mismatch = k === highlightKey
          return (
            <div key={k} className="flex items-center justify-between px-4 py-2.5">
              <dt className="font-body text-sm text-text-muted">{k}</dt>
              <dd
                className={`font-mono text-sm ${
                  mismatch ? "text-danger" : "text-platinum"
                }`}
              >
                {v}
              </dd>
            </div>
          )
        })}
      </dl>
    </div>
  )
}

export default function ReconciliationPage() {
  return (
    <QYXShell title="Reconciliation">
      <PageIntro
        eyebrow="Operations"
        title="Reconciliation"
        description="Expected state is compared against observed state. Differences resolve to a canonical result — never silently merged."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {RESULT_STATES.map(([label, tone]) => (
          <StatusPill key={label} tone={tone}>
            {label}
          </StatusPill>
        ))}
      </div>

      <Card title="RC-338 · SET-4821">
        <div className="grid items-start gap-4 md:grid-cols-[1fr_auto_1fr]">
          <StatePanel label="Expected state" rows={EXPECTED} />
          <div className="flex items-center justify-center py-6 md:py-0 md:pt-16">
            <span className="font-display text-sm tracking-brand text-text-muted">
              VS
            </span>
          </div>
          <StatePanel
            label="Observed state"
            rows={OBSERVED}
            highlightKey="Route"
          />
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
          <span className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
            Result
          </span>
          <StatusPill tone="danger">MISMATCH</StatusPill>
          <span className="font-body text-sm text-text-secondary">
            Correspondent route differs (corr_a vs corr_b).
          </span>
        </div>
        <IllustrativeNote>
          Illustrative comparison. Reconciliation results feed the settlement
          exception queue.
        </IllustrativeNote>
      </Card>
    </QYXShell>
  )
}

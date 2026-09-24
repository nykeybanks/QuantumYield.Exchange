import Link from "next/link"
import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  StatGrid,
  Card,
  DataTable,
  StatusPill,
  IllustrativeNote,
} from "@/components/workspace/primitives"

const STATES: [string, "info" | "warning" | "danger" | "success"][] = [
  ["Pending", "info"],
  ["Processing", "info"],
  ["Exceptions", "danger"],
  ["Completed", "success"],
]

const SETTLEMENTS: [string, string, string, string, "info" | "warning" | "danger" | "success"][] = [
  ["SET-4821", "Cross-border", "22,000.00 USD", "Exception", "danger"],
  ["SET-4820", "Batch payout", "84,220.00 USD", "Processing", "info"],
  ["SET-4818", "Card settlement", "12,940.00 USD", "Completed", "success"],
  ["SET-4815", "Vendor", "9,600.00 USD", "Completed", "success"],
]

export default function SettlementPage() {
  return (
    <QYXShell title="Settlement">
      <PageIntro
        eyebrow="Operations"
        title="Settlement"
        description="A full settlement engine with pending, processing, exceptions and completed states — each transition backed by evidence."
      />

      <StatGrid
        stats={[
          { label: "Pending", value: "2" },
          { label: "Processing", value: "1" },
          { label: "Exceptions", value: "1", note: "requires review" },
          { label: "Completed today", value: "38" },
        ]}
      />

      <div className="mt-6 flex flex-wrap gap-2">
        {STATES.map(([label, tone]) => (
          <StatusPill key={label} tone={tone}>
            {label}
          </StatusPill>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Card title="Settlements">
          <DataTable
            columns={["Reference", "Route", "Amount", "State", ""]}
            rows={SETTLEMENTS.map(([ref, route, amount, state, tone]) => [
              <span key="r" className="font-mono text-platinum">{ref}</span>,
              route,
              <span key="a" className="font-mono">{amount}</span>,
              <StatusPill key="s" tone={tone}>{state}</StatusPill>,
              <Link key="l" href="/platform/reconciliation" className="text-text-muted hover:text-champagne">
                Inspect
              </Link>,
            ])}
          />
        </Card>

        <Card title="SET-4821 · Timeline">
          <ol className="flex flex-col gap-4">
            {[
              ["Created", "09:02", "success"],
              ["Authorized", "09:05", "success"],
              ["Submitted", "09:06", "success"],
              ["Processing", "09:08", "success"],
              ["Route mismatch", "09:12", "danger"],
              ["Review required", "—", "warning"],
            ].map(([label, time, tone], i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className={`inline-block h-2 w-2 shrink-0 rounded-full ${
                    tone === "danger"
                      ? "bg-danger"
                      : tone === "warning"
                        ? "bg-warning"
                        : "bg-success"
                  }`}
                  aria-hidden
                />
                <span className="flex-1 font-body text-sm text-text-secondary">
                  {label}
                </span>
                <span className="font-mono text-[11px] text-text-muted">
                  {time}
                </span>
              </li>
            ))}
          </ol>
          <IllustrativeNote>
            Detail tabs: Overview · Timeline · Route · Policy · Evidence ·
            Ledger · Reconciliation · Audit.
          </IllustrativeNote>
        </Card>
      </div>
    </QYXShell>
  )
}

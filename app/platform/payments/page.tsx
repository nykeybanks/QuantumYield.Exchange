import Link from "next/link"
import { Plus } from "lucide-react"
import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  StatGrid,
  Card,
  DataTable,
  StatusPill,
  PhaseFlow,
  IllustrativeNote,
} from "@/components/workspace/primitives"

const LIFECYCLE = [
  "Create",
  "Review",
  "Authorize",
  "Submitted",
  "Processing",
  "Settlement",
  "Completed",
]

const PAYMENTS: [string, string, string, string, "success" | "warning" | "info" | "neutral"][] = [
  ["PAY-2093", "Vendor payout", "12,400.00 USD", "Awaiting authorization", "warning"],
  ["PAY-2092", "Payroll batch", "84,220.00 USD", "Processing", "info"],
  ["PAY-2091", "Refund", "1,050.00 USD", "Completed", "success"],
  ["PAY-2088", "Supplier invoice", "9,600.00 USD", "Completed", "success"],
  ["PAY-2084", "Cross-border", "22,000.00 USD", "Settlement", "info"],
]

export default function PaymentsPage() {
  return (
    <QYXShell title="Payments">
      <PageIntro
        eyebrow="Financial Services"
        title="Payments"
        description="Structured money movement with an explicit lifecycle — nothing jumps from create to completed."
      />

      <StatGrid
        stats={[
          { label: "In flight", value: "3", note: "across 2 rails" },
          { label: "Awaiting authorization", value: "1" },
          { label: "Settled today", value: "129,470", unit: "USD" },
          { label: "Exceptions", value: "0" },
        ]}
      />

      <div className="mt-6">
        <Card title="Payment lifecycle">
          <PhaseFlow phases={LIFECYCLE} activeIndex={4} />
          <IllustrativeNote>
            Every payment carries a review and authorization step before
            submission. Illustrative example — PAY-2084 shown at Settlement.
          </IllustrativeNote>
        </Card>
      </div>

      <div className="mt-6">
        <Card
          title="Payments"
          action={
            <Link
              href="#"
              className="flex items-center gap-1.5 border border-border-strong bg-surface px-3 py-1.5 font-display text-xs tracking-brand text-platinum transition-colors hover:border-border-active hover:text-champagne"
            >
              <Plus className="h-3.5 w-3.5" />
              CREATE PAYMENT
            </Link>
          }
        >
          <DataTable
            columns={["Reference", "Type", "Amount", "State", ""]}
            rows={PAYMENTS.map(([ref, type, amount, state, tone]) => [
              <span key="r" className="font-mono text-platinum">{ref}</span>,
              type,
              <span key="a" className="font-mono">{amount}</span>,
              <StatusPill key="s" tone={tone}>{state}</StatusPill>,
              <Link key="l" href="#" className="text-text-muted hover:text-champagne">
                View
              </Link>,
            ])}
          />
        </Card>
      </div>
    </QYXShell>
  )
}

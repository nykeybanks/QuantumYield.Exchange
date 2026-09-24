import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  Card,
  DataTable,
  StatusPill,
} from "@/components/workspace/primitives"

const EVENTS: [string, string, string, "info" | "gold" | "neutral"][] = [
  ["09:42", "payment.completed", "PAY-2088", "info"],
  ["09:31", "reconciliation.matched", "RC-338", "info"],
  ["08:55", "qyxai.draft_created", "settlement summary", "gold"],
  ["08:20", "apikey.rotated", "ledger-sync", "neutral"],
  ["08:02", "settlement.exception", "SET-4821", "info"],
  ["Yesterday", "treasury.allocation_updated", "acct_yield", "info"],
]

export default function ActivityPage() {
  return (
    <QYXShell title="Activity">
      <PageIntro
        eyebrow="Operations"
        title="Activity"
        description="A unified, permission-aware event stream across every domain. Distinguishes authoritative state changes from AI-generated drafts."
      />
      <Card title="Event stream">
        <DataTable
          columns={["Time", "Event", "Object", "Source"]}
          rows={EVENTS.map(([time, event, obj, tone]) => [
            <span key="t" className="font-mono text-[11px] text-text-muted">{time}</span>,
            <span key="e" className="font-mono text-platinum">{event}</span>,
            <span key="o" className="font-mono">{obj}</span>,
            <StatusPill key="s" tone={tone}>
              {tone === "gold" ? "AI Draft" : "System"}
            </StatusPill>,
          ])}
        />
      </Card>
    </QYXShell>
  )
}

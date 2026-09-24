import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  Card,
  DataTable,
} from "@/components/workspace/primitives"

const AUDIT: [string, string, string, string][] = [
  ["2026-09-24 09:42", "operator@qy", "payment.authorize", "PAY-2088"],
  ["2026-09-24 09:05", "treasury@qy", "settlement.authorize", "SET-4821"],
  ["2026-09-24 08:20", "system", "apikey.rotate", "ledger-sync"],
  ["2026-09-23 17:10", "admin@qy", "policy.update", "concentration_limit"],
  ["2026-09-23 15:44", "operator@qy", "user.role_grant", "user_9931"],
]

export default function AuditPage() {
  return (
    <QYXShell title="Audit">
      <PageIntro
        eyebrow="Manage"
        title="Audit"
        description="An append-only record of every consequential action. Immutable and permission-aware."
      />
      <Card title="Audit log">
        <DataTable
          columns={["Timestamp", "Principal", "Action", "Object"]}
          rows={AUDIT.map(([ts, who, action, obj]) => [
            <span key="t" className="font-mono text-[11px] text-text-muted">{ts}</span>,
            <span key="w" className="font-mono text-text-secondary">{who}</span>,
            <span key="a" className="font-mono text-platinum">{action}</span>,
            <span key="o" className="font-mono">{obj}</span>,
          ])}
        />
      </Card>
    </QYXShell>
  )
}

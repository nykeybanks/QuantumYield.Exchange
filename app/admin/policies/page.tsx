import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  Card,
  DataTable,
  StatusPill,
} from "@/components/workspace/primitives"

const POLICIES: [string, string, string, "success" | "warning"][] = [
  ["Payment authorization", "Dual approval > 50,000 USD", "Enforced", "success"],
  ["Concentration limit", "Max 30% single counterparty", "1 warning", "warning"],
  ["Settlement window", "Business hours only", "Enforced", "success"],
  ["Data retention", "7 year audit retention", "Enforced", "success"],
]

export default function PoliciesPage() {
  return (
    <QYXShell title="Policies">
      <PageIntro
        eyebrow="Manage"
        title="Policies"
        description="Approval rules, limits and controls applied consistently across every domain."
      />
      <Card title="Active policies">
        <DataTable
          columns={["Policy", "Rule", "Status", ""]}
          rows={POLICIES.map(([name, rule, status, tone]) => [
            <span key="n" className="text-platinum">{name}</span>,
            <span key="r" className="text-text-secondary">{rule}</span>,
            <StatusPill key="s" tone={tone}>{status}</StatusPill>,
            <button key="e" className="font-body text-xs text-text-muted hover:text-champagne">
              Edit
            </button>,
          ])}
        />
      </Card>
    </QYXShell>
  )
}

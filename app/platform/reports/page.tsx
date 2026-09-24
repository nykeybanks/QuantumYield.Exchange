import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  Card,
  DataTable,
  StatusPill,
} from "@/components/workspace/primitives"
import { FileText, Download } from "lucide-react"

const REPORTS: [string, string, string, "success" | "info"][] = [
  ["Monthly settlement statement", "September 2026", "Ready", "success"],
  ["Treasury position report", "Q3 2026", "Ready", "success"],
  ["Reconciliation summary", "This week", "Generating", "info"],
  ["Audit export", "September 2026", "Ready", "success"],
]

export default function ReportsPage() {
  return (
    <QYXShell title="Reports">
      <PageIntro
        eyebrow="Intelligence"
        title="Reports"
        description="Generated reports with source references and audit lineage."
      />
      <Card title="Available reports">
        <DataTable
          columns={["Report", "Period", "Status", ""]}
          rows={REPORTS.map(([name, period, status, tone]) => [
            <span key="n" className="flex items-center gap-2 text-platinum">
              <FileText className="h-3.5 w-3.5 text-text-muted" />
              {name}
            </span>,
            period,
            <StatusPill key="s" tone={tone}>{status}</StatusPill>,
            <button
              key="d"
              className="flex items-center gap-1 font-body text-xs text-text-muted hover:text-champagne"
            >
              <Download className="h-3 w-3" />
              Export
            </button>,
          ])}
        />
      </Card>
    </QYXShell>
  )
}

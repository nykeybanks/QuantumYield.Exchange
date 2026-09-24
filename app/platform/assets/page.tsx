import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  StatGrid,
  Card,
  DataTable,
  StatusPill,
  IllustrativeNote,
} from "@/components/workspace/primitives"

const ASSETS: [string, string, string, "gold" | "info" | "neutral"][] = [
  ["QYT-1", "Treasury instrument", "Registered", "gold"],
  ["USD", "Fiat currency", "Active", "info"],
  ["EUR", "Fiat currency", "Active", "info"],
  ["LOYALTY", "Program credit", "Active", "info"],
  ["DOC-ASSET-9", "Tokenized document", "Registered", "neutral"],
]

export default function AssetsPage() {
  return (
    <QYXShell title="Assets">
      <PageIntro
        eyebrow="Core Platform"
        title="Assets"
        description="A general asset model spanning currencies, instruments and programs. Registration does not imply ownership, valuation, liquidity or custody."
      />

      <StatGrid
        stats={[
          { label: "Registered assets", value: "5" },
          { label: "Networks", value: "3" },
          { label: "Metadata records", value: "5" },
          { label: "Audit entries", value: "128" },
        ]}
      />

      <div className="mt-6">
        <Card title="Registered assets">
          <DataTable
            columns={["Symbol", "Class", "Status", "Detail"]}
            rows={ASSETS.map(([sym, cls, status, tone]) => [
              <span key="s" className="font-mono text-platinum">{sym}</span>,
              cls,
              <StatusPill key="t" tone={tone}>{status}</StatusPill>,
              <span key="d" className="text-text-muted">Overview · Activity · Metadata · Audit</span>,
            ])}
          />
          <IllustrativeNote>
            Registration records existence and metadata only — it is not proof
            of legal ownership, valuation, liquidity, custody or regulatory
            approval.
          </IllustrativeNote>
        </Card>
      </div>
    </QYXShell>
  )
}

import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  StatGrid,
  Card,
  DataTable,
  StatusPill,
  IllustrativeNote,
} from "@/components/workspace/primitives"

const ACCOUNTS: [string, string, string, string, "success" | "info"][] = [
  ["acct_primary", "Operating", "USD", "96,410.10", "success"],
  ["acct_reserve", "Reserve", "USD", "38,250.00", "success"],
  ["acct_eu", "Operating", "EUR", "14,260.32", "success"],
  ["acct_yield", "Allocation", "USD", "6,120.00", "info"],
]

export default function AccountsPage() {
  return (
    <QYXShell title="Accounts">
      <PageIntro
        eyebrow="Financial Services"
        title="Accounts"
        description="Multi-currency accounts with a canonical ledger underneath every movement."
      />

      <StatGrid
        stats={[
          { label: "Accounts", value: "4" },
          { label: "Currencies", value: "2" },
          { label: "Ledger entries", value: "1,204" },
          { label: "Reconciled", value: "100%" },
        ]}
      />

      <div className="mt-6">
        <Card title="Accounts">
          <DataTable
            columns={["Account", "Type", "Currency", "Balance", "State"]}
            rows={ACCOUNTS.map(([id, type, ccy, bal, tone]) => [
              <span key="i" className="font-mono text-platinum">{id}</span>,
              type,
              <span key="c" className="font-mono">{ccy}</span>,
              <span key="b" className="font-mono">{bal}</span>,
              <StatusPill key="s" tone={tone}>Active</StatusPill>,
            ])}
          />
          <IllustrativeNote>Illustrative account balances.</IllustrativeNote>
        </Card>
      </div>
    </QYXShell>
  )
}

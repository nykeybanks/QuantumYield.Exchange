import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  Card,
  DataTable,
  StatusPill,
  IllustrativeNote,
} from "@/components/workspace/primitives"
import { Wallet } from "lucide-react"

const NAV = [
  "Overview",
  "Assets",
  "Activity",
  "Connected Apps",
  "Approvals",
  "Permissions",
  "Networks",
  "Security",
  "Recovery",
]

const ASSETS: [string, string, string][] = [
  ["USD Balance", "Fiat", "96,410.10"],
  ["EUR Balance", "Fiat", "14,260.32"],
  ["Treasury Note QYT-1", "Instrument", "6,120.00"],
  ["Loyalty Credits", "Program", "2,400"],
]

export default function WalletsPage() {
  return (
    <QYXShell title="Wallets">
      <PageIntro
        eyebrow="Core Platform"
        title="Wallets"
        description="Secure wallets with approvals, permissions and network context. Private keys are never exposed."
      />

      <Card className="mb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center border border-border-strong bg-surface">
              <Wallet className="h-5 w-5 text-champagne" />
            </div>
            <div>
              <div className="font-display text-lg tracking-wide text-platinum">
                Primary Wallet
              </div>
              <div className="font-mono text-[11px] text-text-muted">
                qyx1p…9f3a · Account primary · Network: QYX Mainnet
              </div>
            </div>
          </div>
          <StatusPill tone="success">Secure</StatusPill>
        </div>
      </Card>

      <div className="mb-6 flex flex-wrap gap-2">
        {NAV.map((n, i) => (
          <span
            key={n}
            className={`border px-3 py-1.5 font-body text-sm ${
              i === 1
                ? "border-border-active bg-surface-elevated text-champagne"
                : "border-border text-text-secondary"
            }`}
          >
            {n}
          </span>
        ))}
      </div>

      <Card title="Assets">
        <DataTable
          columns={["Asset", "Type", "Balance"]}
          rows={ASSETS.map(([name, type, bal]) => [
            <span key="n" className="text-platinum">{name}</span>,
            type,
            <span key="b" className="font-mono">{bal}</span>,
          ])}
        />
        <IllustrativeNote>
          Illustrative wallet contents. Balances do not represent live custody.
        </IllustrativeNote>
      </Card>
    </QYXShell>
  )
}

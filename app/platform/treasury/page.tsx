import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  StatGrid,
  Card,
  DataTable,
  StatusPill,
  IllustrativeNote,
} from "@/components/workspace/primitives"

const POSITIONS: [string, string, string, string][] = [
  ["Operating", "USD", "96,410.10", "62%"],
  ["Reserve", "USD", "38,250.00", "25%"],
  ["Liquidity buffer", "EUR", "14,260.32", "9%"],
  ["Yield allocation", "USD", "6,120.00", "4%"],
]

export default function TreasuryPage() {
  return (
    <QYXShell title="Treasury">
      <PageIntro
        eyebrow="Financial Services"
        title="Treasury"
        description="Positions, liquidity and allocations across the organization — governed by policy and reported against source data."
      />

      <StatGrid
        stats={[
          { label: "Total positions", value: "155,040", unit: "USD" },
          { label: "Available liquidity", value: "96,410", unit: "USD" },
          { label: "Allocations", value: "4" },
          { label: "Policy checks", value: "Passing", note: "0 breaches" },
        ]}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Card title="Positions & allocations">
          <DataTable
            columns={["Account", "Currency", "Amount", "Allocation"]}
            rows={POSITIONS.map(([acct, ccy, amt, pct]) => [
              <span key="a" className="text-platinum">{acct}</span>,
              <span key="c" className="font-mono">{ccy}</span>,
              <span key="m" className="font-mono">{amt}</span>,
              <div key="p" className="flex items-center gap-2">
                <div className="h-1.5 w-24 bg-graphite">
                  <div
                    className="h-full bg-champagne"
                    style={{ width: pct }}
                  />
                </div>
                <span className="font-mono text-[11px] text-text-muted">{pct}</span>
              </div>,
            ])}
          />
        </Card>

        <Card title="Forecast & policy">
          <ul className="flex flex-col divide-y divide-border">
            {[
              ["Liquidity coverage", "Above threshold", "success"],
              ["30-day outflow forecast", "Within limits", "success"],
              ["Concentration policy", "1 warning", "warning"],
              ["Yield allocation cap", "Within cap", "success"],
            ].map(([label, state, tone]) => (
              <li
                key={label}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <span className="font-body text-sm text-text-secondary">
                  {label}
                </span>
                <StatusPill tone={tone as string}>{state}</StatusPill>
              </li>
            ))}
          </ul>
          <IllustrativeNote>
            Illustrative treasury state. Never represents live reserve balances.
          </IllustrativeNote>
        </Card>
      </div>
    </QYXShell>
  )
}

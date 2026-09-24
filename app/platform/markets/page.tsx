import { QYXShell } from "@/components/shell/qyx-shell"
import { Card, StatusPill, IllustrativeNote } from "@/components/workspace/primitives"
import { LineChart } from "lucide-react"

const WATCHLIST: [string, string, string, "success" | "danger"][] = [
  ["QYX/USD", "1.0428", "+0.62%", "success"],
  ["BTC/USD", "63,180", "-0.94%", "danger"],
  ["ETH/USD", "3,092", "+1.21%", "success"],
  ["EUR/USD", "1.0871", "+0.08%", "success"],
  ["XAU/USD", "2,391", "-0.15%", "danger"],
]

export default function MarketsPage() {
  return (
    <QYXShell title="QYX20 Markets">
      <div className="mb-6 max-w-2xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-champagne">
          Markets
        </div>
        <h2 className="mt-2 font-display text-2xl tracking-wide text-platinum">
          QYX20 Markets
        </h2>
        <p className="mt-2 font-body text-text-secondary">
          A professional market workspace — one financial capability within
          QYX20, not the platform&apos;s identity.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr_260px]">
        {/* Watchlist */}
        <Card title="Watchlist">
          <ul className="flex flex-col divide-y divide-border">
            {WATCHLIST.map(([sym, price, chg, tone]) => (
              <li
                key={sym}
                className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
              >
                <div>
                  <div className="font-mono text-sm text-platinum">{sym}</div>
                  <div className="font-mono text-[11px] text-text-muted">
                    {price}
                  </div>
                </div>
                <span
                  className={`font-mono text-xs ${
                    tone === "success" ? "text-success" : "text-danger"
                  }`}
                >
                  {chg}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Chart workspace */}
        <Card
          title="QYX/USD"
          action={<StatusPill tone="gold">Illustrative · delayed</StatusPill>}
        >
          <div className="relative flex h-72 items-center justify-center border border-border bg-qyx-void/60">
            <div className="qyx-grid absolute inset-0 opacity-50" aria-hidden />
            <div className="relative flex flex-col items-center gap-2 text-text-muted">
              <LineChart className="h-8 w-8" />
              <span className="font-body text-sm">
                Advanced charting workspace
              </span>
              <span className="font-mono text-[11px]">
                Streaming charts mount here in the live environment
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-px border border-border bg-border">
            {[
              ["Open", "1.0371"],
              ["High", "1.0455"],
              ["Low", "1.0348"],
              ["Vol", "12.4M"],
            ].map(([k, v]) => (
              <div key={k} className="bg-qyx-obsidian p-3">
                <div className="font-mono text-[10px] uppercase text-text-muted">
                  {k}
                </div>
                <div className="mt-1 font-mono text-sm text-platinum">{v}</div>
              </div>
            ))}
          </div>
          <IllustrativeNote>
            Illustrative market data for layout only — not live or tradable.
          </IllustrativeNote>
        </Card>

        {/* Order / analysis */}
        <Card title="Order">
          <div className="flex gap-2">
            <button className="flex-1 border border-success/40 bg-success/10 py-2 font-display text-xs tracking-brand text-success">
              BUY
            </button>
            <button className="flex-1 border border-border py-2 font-display text-xs tracking-brand text-text-secondary">
              SELL
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {["Amount", "Price", "Total"].map((label) => (
              <label key={label} className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase text-text-muted">
                  {label}
                </span>
                <input
                  disabled
                  placeholder="0.00"
                  className="border border-border bg-surface px-3 py-2 font-mono text-sm text-platinum placeholder:text-text-muted"
                />
              </label>
            ))}
            <button
              disabled
              className="mt-2 bg-graphite py-2.5 font-display text-xs tracking-brand text-text-muted"
            >
              REVIEW ORDER
            </button>
          </div>
          <IllustrativeNote>Demo order panel — inactive.</IllustrativeNote>
        </Card>
      </div>
    </QYXShell>
  )
}

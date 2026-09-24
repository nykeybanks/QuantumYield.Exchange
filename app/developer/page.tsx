import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  StatGrid,
  Card,
  DataTable,
  StatusPill,
  IllustrativeNote,
} from "@/components/workspace/primitives"
import { EnvironmentBadge } from "@/components/shell/environment-badge"

const ENDPOINTS = [
  ["GET", "/v1/accounts"],
  ["POST", "/v1/payments"],
  ["GET", "/v1/settlements/:id"],
  ["POST", "/v1/webhooks"],
]

const KEYS: [string, string, string][] = [
  ["ledger-sync", "pk_live_••••4f2a", "Production"],
  ["reporting", "pk_live_••••91cd", "Production"],
  ["sandbox-app", "pk_test_••••0b77", "Development"],
]

export default function DeveloperPage() {
  return (
    <QYXShell title="Developer">
      <PageIntro
        eyebrow="Build"
        title="Developer platform"
        description="APIs, SDKs, webhooks and typed environments. Build directly on QYX20 primitives with credentials scoped per application."
      />

      <StatGrid
        stats={[
          { label: "Applications", value: "3" },
          { label: "Active keys", value: "5" },
          { label: "Requests (24h)", value: "48.2K" },
          { label: "Webhook success", value: "99.9%" },
        ]}
      />

      {/* API console */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[220px_1fr_1fr]">
        <Card title="Endpoints">
          <ul className="flex flex-col gap-1">
            {ENDPOINTS.map(([method, path], i) => (
              <li key={path}>
                <button
                  className={`flex w-full items-center gap-2 px-2 py-2 text-left transition-colors ${
                    i === 1 ? "text-platinum" : "text-text-secondary hover:text-platinum"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      method === "GET" ? "text-information" : "text-success"
                    }`}
                  >
                    {method}
                  </span>
                  <span className="font-mono text-xs">{path}</span>
                </button>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="POST /v1/payments">
          <p className="font-body text-sm text-text-secondary">
            Create a payment. Requires authorization before submission.
          </p>
          <div className="mt-4 font-mono text-[11px] text-text-muted">
            <div className="text-text-secondary">Parameters</div>
            <ul className="mt-2 flex flex-col gap-1">
              <li><span className="text-platinum">amount</span> integer · minor units</li>
              <li><span className="text-platinum">currency</span> string · ISO 4217</li>
              <li><span className="text-platinum">destination</span> string · account id</li>
              <li><span className="text-platinum">idempotency_key</span> string</li>
            </ul>
          </div>
        </Card>

        <Card title="Request / response">
          <pre className="overflow-x-auto border border-border bg-qyx-void p-3 font-mono text-[11px] leading-relaxed text-text-secondary">
{`POST /v1/payments
Authorization: Bearer pk_live_…

{
  "amount": 1240000,
  "currency": "USD",
  "destination": "acct_reserve",
  "idempotency_key": "d3f1-88a2"
}

201 Created
{
  "id": "PAY-2094",
  "state": "review_required"
}`}
          </pre>
          <IllustrativeNote>Console shown for documentation — no live execution.</IllustrativeNote>
        </Card>
      </div>

      <div className="mt-6">
        <Card title="API keys">
          <DataTable
            columns={["Application", "Key", "Environment", ""]}
            rows={KEYS.map(([app, key, env]) => [
              <span key="a" className="text-platinum">{app}</span>,
              <span key="k" className="font-mono text-text-muted">{key}</span>,
              <EnvironmentBadge key="e" env={env === "Production" ? "PRODUCTION" : "DEVELOPMENT"} />,
              <StatusPill key="s" tone="success">Active</StatusPill>,
            ])}
          />
          <IllustrativeNote>
            Secrets are shown once at creation and never again. Illustrative keys.
          </IllustrativeNote>
        </Card>
      </div>
    </QYXShell>
  )
}

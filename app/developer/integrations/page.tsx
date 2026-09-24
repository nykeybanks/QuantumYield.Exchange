import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  Card,
  StatusPill,
} from "@/components/workspace/primitives"

const INTEGRATIONS: [string, string, "success" | "neutral"][] = [
  ["Ledger sync", "Streams ledger entries to your warehouse", "success"],
  ["Webhooks", "Event delivery for payments and settlement", "success"],
  ["Notification bus", "Operational alerts and exceptions", "success"],
  ["Data export", "Scheduled reconciliation exports", "neutral"],
]

export default function IntegrationsPage() {
  return (
    <QYXShell title="Integrations">
      <PageIntro
        eyebrow="Build"
        title="Integrations"
        description="Connect QYX20 to external systems through connectors, webhooks and data streams."
      />
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {INTEGRATIONS.map(([name, desc, tone]) => (
          <div key={name} className="bg-qyx-obsidian p-5">
            <div className="flex items-center justify-between">
              <div className="font-display tracking-wide text-platinum">
                {name}
              </div>
              <StatusPill tone={tone}>
                {tone === "success" ? "Connected" : "Available"}
              </StatusPill>
            </div>
            <p className="mt-2 font-body text-sm text-text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </QYXShell>
  )
}

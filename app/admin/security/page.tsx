import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  Card,
  DataTable,
  StatusPill,
} from "@/components/workspace/primitives"

const CONTROLS: [string, string, "success" | "warning"][] = [
  ["Multi-factor authentication", "Enforced org-wide", "success"],
  ["Session policy", "8h idle timeout", "success"],
  ["IP allow list", "3 ranges configured", "success"],
  ["Device trust", "1 device pending review", "warning"],
]

const SESSIONS: [string, string, string][] = [
  ["operator@qy", "eu-west · Chrome", "Active now"],
  ["treasury@qy", "eu-west · Safari", "2h ago"],
  ["dev@qy", "us-east · API", "5h ago"],
]

export default function SecurityPage() {
  return (
    <QYXShell title="Security">
      <PageIntro
        eyebrow="Manage"
        title="Security"
        description="Authentication, sessions and access controls across the organization."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card title="Controls">
          <ul className="flex flex-col divide-y divide-border">
            {CONTROLS.map(([label, detail, tone]) => (
              <li
                key={label}
                className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
              >
                <div>
                  <div className="font-body text-sm text-platinum">{label}</div>
                  <div className="font-body text-xs text-text-muted">
                    {detail}
                  </div>
                </div>
                <StatusPill tone={tone}>
                  {tone === "success" ? "OK" : "Review"}
                </StatusPill>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Active sessions">
          <DataTable
            columns={["Principal", "Context", "Last seen"]}
            rows={SESSIONS.map(([user, ctx, seen]) => [
              <span key="u" className="font-mono text-platinum">{user}</span>,
              ctx,
              <span key="s" className="text-text-muted">{seen}</span>,
            ])}
          />
        </Card>
      </div>
    </QYXShell>
  )
}

import { QYXShell } from "@/components/shell/qyx-shell"
import { Card, StatusPill, IllustrativeNote } from "@/components/workspace/primitives"
import { Sparkles, Send } from "lucide-react"

const FUNCTIONS = [
  "Ask",
  "Research",
  "Analyze",
  "Explain",
  "Draft",
  "Automate",
  "Agents",
  "Workflows",
  "Context",
  "History",
]

const MESSAGES: {
  role: "user" | "ai"
  kind?: string
  tone?: string
  body: string
}[] = [
  { role: "user", body: "Why is settlement SET-4821 flagged?" },
  {
    role: "ai",
    kind: "Retrieval",
    tone: "info",
    body: "System state: SET-4821 is in EXCEPTION. Reconciliation RC-338 recorded a route MISMATCH (corr_a expected, corr_b observed).",
  },
  {
    role: "ai",
    kind: "Analysis",
    tone: "gold",
    body: "The correspondent route differs from the authorized route. This commonly indicates a mid-flight reroute by the intermediary.",
  },
  {
    role: "ai",
    kind: "Recommendation",
    tone: "gold",
    body: "Consider re-authorizing against corr_b or requesting a route correction. Either is an action that requires your review.",
  },
]

const TONE_LABEL: Record<string, string> = {
  System: "info",
  Retrieval: "info",
  Analysis: "gold",
  Recommendation: "gold",
  Draft: "gold",
  Action: "warning",
}

export default function QyxaiPage() {
  return (
    <QYXShell title="QYXai">
      <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
        {/* Function rail */}
        <Card title="Functions">
          <ul className="flex flex-col gap-0.5">
            {FUNCTIONS.map((f, i) => (
              <li key={f}>
                <button
                  className={`flex w-full items-center gap-2 px-2 py-2 text-left font-body text-sm transition-colors ${
                    i === 0
                      ? "text-champagne"
                      : "text-text-secondary hover:text-platinum"
                  }`}
                >
                  {i === 0 && <Sparkles className="h-3.5 w-3.5" />}
                  {f}
                </button>
              </li>
            ))}
          </ul>
        </Card>

        {/* Conversation / canvas */}
        <div className="flex flex-col gap-4">
          <Card title="QYXai · Evidence-grounded">
            <div className="flex flex-col gap-4">
              {MESSAGES.map((m, i) => (
                <div
                  key={i}
                  className={m.role === "user" ? "flex justify-end" : ""}
                >
                  <div
                    className={`max-w-xl border p-4 ${
                      m.role === "user"
                        ? "border-border-strong bg-surface-elevated"
                        : "border-border bg-qyx-obsidian/60"
                    }`}
                  >
                    {m.kind && (
                      <div className="mb-2">
                        <StatusPill tone={TONE_LABEL[m.kind] ?? "neutral"}>
                          {m.kind}
                        </StatusPill>
                      </div>
                    )}
                    <p className="font-body text-sm leading-relaxed text-text-secondary">
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 border border-border bg-surface px-3 py-2">
              <input
                disabled
                placeholder="Ask QYXai — grounded in your system state and evidence"
                className="w-full bg-transparent font-body text-sm text-platinum placeholder:text-text-muted focus:outline-none"
              />
              <button disabled className="text-text-muted">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <IllustrativeNote>
              QYXai distinguishes system state, retrieval, analysis,
              recommendation and drafts. Any action with side effects requires
              explicit review before execution. Illustrative conversation.
            </IllustrativeNote>
          </Card>
        </div>
      </div>
    </QYXShell>
  )
}

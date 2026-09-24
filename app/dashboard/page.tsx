import { QYXShell } from "@/components/shell/qyx-shell"
import { DashboardContext } from "@/components/dashboard/context-panel"
import {
  ContextHeader,
  FinancialOverview,
  AttentionRequired,
  ActivityFeed,
  QyxaiPanel,
  QuickActions,
} from "@/components/dashboard/panels"

export default function DashboardPage() {
  return (
    <QYXShell title="Overview" contextPanel={<DashboardContext />}>
      <ContextHeader />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <FinancialOverview />
        <AttentionRequired />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <ActivityFeed />
        <QyxaiPanel />
      </div>

      <div className="mt-6">
        <QuickActions />
      </div>
    </QYXShell>
  )
}

import { SiteHeader } from "@/components/site-header"
import { DashboardView } from "@/components/dashboard/dashboard-view"

export default function DashboardPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader showAppLink={false} />
      <main className="flex-1 bg-grid">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <DashboardView />
        </div>
      </main>
    </div>
  )
}

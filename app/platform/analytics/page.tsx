import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  StatGrid,
  Card,
  IllustrativeNote,
} from "@/components/workspace/primitives"

const SERIES = [42, 55, 48, 63, 58, 71, 66, 78, 74, 82, 79, 90]

export default function AnalyticsPage() {
  return (
    <QYXShell title="Analytics">
      <PageIntro
        eyebrow="Intelligence"
        title="Analytics"
        description="Reproducible, source-linked analytics. Derived results are always distinguished from authoritative system state."
      />

      <StatGrid
        stats={[
          { label: "Volume (30d)", value: "2.41M", unit: "USD" },
          { label: "Payments (30d)", value: "1,208" },
          { label: "Avg settlement", value: "1.4", unit: "hrs" },
          { label: "Exception rate", value: "0.8%" },
        ]}
      />

      <div className="mt-6">
        <Card title="Settlement volume — trailing 12 periods">
          <div className="flex h-56 items-end gap-2">
            {SERIES.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-graphite to-champagne/70"
                  style={{ height: `${v}%` }}
                />
                <span className="font-mono text-[9px] text-text-muted">
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
          <IllustrativeNote>
            Illustrative analytical result — reproducible from source ledger
            data in the live environment.
          </IllustrativeNote>
        </Card>
      </div>
    </QYXShell>
  )
}

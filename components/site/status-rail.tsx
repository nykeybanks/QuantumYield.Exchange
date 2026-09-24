/**
 * Subtle platform status rail — replaces the legacy sticky crypto ticker on the
 * public surface. Communicates environment and operational status, not prices.
 */
export function StatusRail() {
  const items = [
    { label: "Platform", value: "Operational" },
    { label: "Settlement", value: "Nominal" },
    { label: "QYXai", value: "Available" },
    { label: "Environment", value: "Production" },
  ]
  return (
    <div className="border-b border-border bg-qyx-obsidian/60">
      <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-6 py-2 font-mono text-[11px] tracking-wide text-text-muted">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 whitespace-nowrap">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
            <span className="uppercase">{item.label}</span>
            <span className="text-text-secondary">{item.value}</span>
          </div>
        ))}
        <span className="ml-auto hidden whitespace-nowrap text-text-muted sm:block">
          QYX20 · QuantumYield Unified Financial Infrastructure
        </span>
      </div>
    </div>
  )
}

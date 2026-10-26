"use client"

import { useState } from "react"
import { ArrowUpRight, Layers3, Network, ShieldCheck } from "lucide-react"
import { QYXEmblem, QYXProductMark } from "@/components/brand"

const views = [
  { name: "Experience", icon: Network, title: "Connected by design", description: "A shared gateway for intelligence, infrastructure, and immersive experiences.", href: "#portals", action: "Discover the portals" },
  { name: "Architecture", icon: Layers3, title: "A considered foundation", description: "Explore the proposed application, service, and infrastructure layers behind QYX20.", href: "#architecture", action: "Inspect the architecture" },
  { name: "Security", icon: ShieldCheck, title: "Trust starts with structure", description: "Identity, scoped access, and recovery are design priorities. Implementation and independent review remain planned.", href: "#security", action: "Review security principles" },
]

export function GatewayPreview() {
  const [active, setActive] = useState(0)
  const view = views[active]

  return (
    <div className="overflow-hidden rounded-lg border border-border-strong bg-surface">
      <div className="flex items-center justify-between border-b border-border px-5 py-4 font-mono text-[10px] uppercase tracking-widest">
        <span className="flex items-center gap-2 text-silver"><Layers3 className="size-3.5" aria-hidden="true" />System overview</span>
        <span className="text-gold">Concept / 01</span>
      </div>
      <div className="qyx-system-diagram bg-grid px-5 py-7 sm:px-8">
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground"><span>QYX20 gateway</span><span>Logical topology</span></div>
        <div className="mx-auto mt-5 flex w-fit flex-col items-center rounded border border-border-strong bg-background px-8 py-4">
          <QYXEmblem size={64} alt="QuantumYield Q emblem" />
          <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-silver">Unified core</span>
        </div>
        <div className="mx-auto h-6 w-px bg-gold/60" aria-hidden="true" />
        <div className="mx-auto h-4 w-2/3 border-x border-t border-gold/40" aria-hidden="true" />
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {([['qyxai', 'QYXai', 'Intelligence'], ['qyxos', 'QYXos', 'Foundation'], ['qyxvr', 'QYXvr', 'Experience']] as const).map(([product, name, label]) => (
            <a key={product} href={product === 'qyxos' ? '#architecture' : '#portals'} className="flex min-w-0 flex-col items-center rounded border border-border bg-background px-2 py-4 transition-colors hover:border-gold/50">
              <QYXProductMark product={product} alt={name} height={22} className="max-w-full" />
              <span className="mt-3 font-mono text-[8px] uppercase tracking-wider text-muted-foreground sm:text-[9px]">{label}</span>
            </a>
          ))}
        </div>
        <p className="mt-5 text-center font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Proposed relationships · not live connections</p>
      </div>
      <div className="grid grid-cols-3 border-y border-border" role="group" aria-label="System preview perspective">
        {views.map((item, index) => (
          <button key={item.name} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`flex min-h-12 items-center justify-center gap-2 border-b-2 font-sans text-[11px] transition-colors sm:text-xs ${active === index ? 'border-gold bg-graphite text-gold-soft' : 'border-transparent text-muted-foreground hover:bg-graphite hover:text-foreground'}`}>
            <item.icon className="size-3.5" aria-hidden="true" />{item.name}
          </button>
        ))}
      </div>
      <div className="min-h-44 px-5 py-5 sm:px-6" aria-live="polite" aria-atomic="true">
        <h2 className="font-sans text-sm font-medium">{view.title}</h2>
        <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-muted-foreground">{view.description}</p>
        <a href={view.href} className="mt-3 inline-flex min-h-8 items-center gap-2 text-xs text-gold-soft hover:text-foreground">{view.action}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a>
      </div>
    </div>
  )
}

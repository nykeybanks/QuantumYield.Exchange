"use client"

import { useState } from "react"
import { LAYERS } from "@/lib/platform"
import { FitContent } from "@/components/viewport/fit-content"
import { useViewportContext } from "@/components/viewport/viewport-provider"

export function PlatformLayers() {
  const [active, setActive] = useState(LAYERS[2].id)
  const layer = LAYERS.find(item => item.id === active) ?? LAYERS[0]
  const { acknowledge } = useViewportContext()
  return <section className="workspace-card">
    <header className="card-heading"><h2>Six layers, one proposed platform</h2></header>
    <div className="card-body">
      <div className="layer-explorer">
        <select aria-label="Platform layer" value={active} onChange={event => { setActive(event.target.value); acknowledge(event.target.value) }}>{LAYERS.map(item => <option key={item.id} value={item.id}>{item.index} · {item.name}</option>)}</select>
        <FitContent label="Layer detail">
          <h2 className="intro-title">{layer.name}</h2>
          <p>{layer.tagline}</p>
          {layer.domains.map(domain => <div key={domain} className="record-field"><span>{domain}</span><span className="text-text-muted">Concept domain</span></div>)}
          <p>Each layer is proposed as independent, observable and composable. These are architecture concepts, not verified live services.</p>
        </FitContent>
      </div>
    </div>
  </section>
}

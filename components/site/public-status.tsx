"use client"

import { useViewportContext } from "@/components/viewport/viewport-provider"

export function PublicStatus() {
  const { mode, setMode, reduced } = useViewportContext()
  return <footer className="public-status">
    <p><span className="prototype-dot" aria-hidden="true" />INTERACTIVE PROTOTYPE<span className="public-status-detail"> / No live financial connections</span></p>
    <button type="button" className="motion-toggle" aria-label={mode === "Reduced" ? "Enable balanced motion" : "Reduce motion"} aria-pressed={reduced} onClick={() => setMode(mode === "Reduced" ? "Balanced" : "Reduced")}><span aria-hidden="true">{reduced ? "−" : "≈"}</span><span className="motion-label">{reduced ? "Reduced motion" : "Motion on"}</span></button>
  </footer>
}

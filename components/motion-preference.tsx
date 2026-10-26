"use client"

import { useEffect, useState } from "react"

type MotionMode = "balanced" | "immersive" | "reduced"

export function MotionPreference() {
  const [mode, setMode] = useState<MotionMode>("balanced")
  useEffect(() => {
    document.documentElement.dataset.motion = mode
    return () => { delete document.documentElement.dataset.motion }
  }, [mode])

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="motion-mode" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Interface motion</label>
      <select id="motion-mode" value={mode} onChange={(event) => setMode(event.target.value as MotionMode)} className="min-h-11 w-44 rounded border border-border-strong bg-surface px-3 text-xs text-foreground" aria-describedby="motion-note">
        <option value="balanced">Balanced</option>
        <option value="immersive">Immersive</option>
        <option value="reduced">Reduced</option>
      </select>
      <p id="motion-note" className="text-[10px] text-muted-foreground">Always respects device reduced-motion settings.</p>
    </div>
  )
}

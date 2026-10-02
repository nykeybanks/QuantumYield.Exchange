"use client"

import { useEffect, useRef, useState } from "react"
import { QyxLogo } from "./qyx-logo"

export function Preloader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "complete">("loading")
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    const finish = () => {
      if (!cancelled) setPhase("leaving")
    }
    const logo = root.current?.querySelector("img")
    const timeout = window.setTimeout(finish, 2500)

    Promise.allSettled([
      document.fonts.ready,
      logo?.decode() ?? Promise.resolve(),
    ]).then(finish)

    return () => {
      cancelled = true
      window.clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (phase !== "leaving") return
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const timeout = window.setTimeout(() => setPhase("complete"), reducedMotion ? 0 : 300)
    return () => window.clearTimeout(timeout)
  }, [phase])

  if (phase === "complete") return null

  return (
    <div
      ref={root}
      className="qyx-preloader"
      data-phase={phase}
      role="status"
      aria-live="polite"
      aria-label="Preparing QYX20 interface"
    >
      <div className="flex flex-col items-center gap-8" aria-hidden="true">
        <QyxLogo />
        <div className="flex flex-col items-center gap-4">
          <div className="qyx-loading-track"><span /></div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Preparing interface
          </p>
        </div>
      </div>
    </div>
  )
}

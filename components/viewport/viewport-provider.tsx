"use client"

import { createContext, useContext, useEffect, useRef, useState, type Dispatch, type SetStateAction, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import type { Workspace } from "@/lib/nav"

export type MotionMode = "Balanced" | "Immersive" | "Reduced"
export type WelcomeDraft = { step: number; workspace: Workspace; destination: string; confirmed: boolean }
const initialWelcome: WelcomeDraft = { step: 0, workspace: "Personal", destination: "/dashboard", confirmed: false }
const ViewportContext = createContext({
  welcome: initialWelcome,
  setWelcome: (() => {}) as Dispatch<SetStateAction<WelcomeDraft>>,
  workspace: "Personal" as Workspace,
  setWorkspace: (_value: Workspace) => {},
  mode: "Balanced" as MotionMode,
  setMode: (_value: MotionMode) => {},
  reduced: false,
  scene: "",
  acknowledge: (_scene: string) => {},
})

export function ViewportProvider({ children }: { children: ReactNode }) {
  const [welcome, setWelcome] = useState(initialWelcome)
  const [workspace, setWorkspace] = useState<Workspace>("Personal")
  const [mode, setMode] = useState<MotionMode>("Balanced")
  const [systemReduced, setSystemReduced] = useState(false)
  const [scene, acknowledge] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotion = () => setSystemReduced(preference.matches)
    updateMotion()
    preference.addEventListener("change", updateMotion)
    const viewport = window.visualViewport
    const updateViewport = () => {
      // Pinch zoom needs native panning, not a layout reflow into the magnified area.
      if (viewport && viewport.scale !== 1) return
      document.documentElement.style.setProperty("--visible-height", `${viewport?.height ?? window.innerHeight}px`)
      document.documentElement.style.setProperty("--visible-top", `${viewport?.offsetTop ?? 0}px`)
    }
    updateViewport()
    window.addEventListener("resize", updateViewport)
    viewport?.addEventListener("resize", updateViewport)
    viewport?.addEventListener("scroll", updateViewport)
    return () => {
      preference.removeEventListener("change", updateMotion)
      window.removeEventListener("resize", updateViewport)
      viewport?.removeEventListener("resize", updateViewport)
      viewport?.removeEventListener("scroll", updateViewport)
    }
  }, [])

  const reduced = systemReduced || mode === "Reduced"
  return (
    <ViewportContext.Provider value={{ workspace, setWorkspace, mode, setMode, reduced, scene, acknowledge, welcome, setWelcome }}>
      <div className="viewport-root" data-motion={reduced ? "reduced" : mode.toLowerCase()}>
        <SceneContinuity identity={`${pathname}:${workspace}:${scene}`} reduced={reduced} />
        {children}
      </div>
    </ViewportContext.Provider>
  )
}

function SceneContinuity({ identity, reduced }: { identity: string; reduced: boolean }) {
  const surface = useRef<HTMLDivElement>(null)
  const animation = useRef<Animation | null>(null)
  const groups = useRef<Animation[]>([])
  const previous = useRef(identity)
  useEffect(() => {
    const node = surface.current
    if (!node) return
    if (reduced) {
      animation.current?.cancel()
      groups.current.forEach(group => group.cancel())
      groups.current = []
      node.dataset.running = "false"
      previous.current = identity
      return
    }
    if (previous.current === identity) return
    const direction = identity.localeCompare(previous.current) >= 0 ? 1 : -1
    const current = getComputedStyle(node).transform
    const headings = Array.from(document.querySelectorAll<HTMLElement>('.scene-slot:not([hidden]) .card-heading h2, [data-scene-heading]')).filter(heading => heading.checkVisibility({ visibilityProperty: true }))
    const startingStyles = headings.map(heading => ({ transform: getComputedStyle(heading).transform, opacity: getComputedStyle(heading).opacity }))
    animation.current?.cancel()
    groups.current.forEach(group => group.cancel())
    groups.current = headings.map((heading, i) => heading.animate([
      { transform: startingStyles[i].transform === "none" ? `translateX(${direction * 4}px)` : startingStyles[i].transform, opacity: .65 },
      { transform: "translateX(0)", opacity: 1 },
    ], { delay: 150, duration: 2400, easing: "cubic-bezier(0.22,1,0.36,1)" }))
    previous.current = identity
    node.dataset.running = "true"
    // One shared surface retargets; controls and their state never enter animation layers.
    const next = node.animate([
      { transform: current === "none" ? `translateX(${direction * -8}px) scaleX(.12)` : current, opacity: .75, offset: 0 },
      { transform: `translateX(${direction * -4}px) scaleX(.3)`, opacity: .85, offset: .06 },
      { transform: "translateX(0) scaleX(.84)", opacity: .6, offset: .7 },
      { transform: "translateX(0) scaleX(.96)", opacity: .35, offset: .85 },
      { transform: "translateX(0) scaleX(1)", opacity: 0, offset: 1 },
    ], { duration: 3000, easing: "cubic-bezier(0.22,1,0.36,1)" })
    animation.current = next
    next.onfinish = () => { node.dataset.running = "false" }
    return () => { next.onfinish = null }
  }, [identity, reduced])
  useEffect(() => () => { animation.current?.cancel(); groups.current.forEach(group => group.cancel()) }, [])
  return <div ref={surface} className="scene-continuity" aria-hidden="true" data-running="false" />
}

export function useViewportContext() { return useContext(ViewportContext) }

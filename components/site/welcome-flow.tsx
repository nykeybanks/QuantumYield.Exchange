"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { SiteHeader } from "./site-header"
import { PublicStatus } from "./public-status"
import { FitContent } from "@/components/viewport/fit-content"
import { useViewportContext, type MotionMode } from "@/components/viewport/viewport-provider"
import { WORKSPACES, type Workspace } from "@/lib/nav"

const descriptions: Record<Workspace, string> = {
  Personal: "Explore accounts, wallets and assets.",
  Treasury: "Review liquidity and treasury concepts.",
  Settlement: "Follow the proposed settlement lifecycle.",
  Developer: "Inspect APIs and integration concepts.",
  AI: "Explore QYXai and analytics views.",
  Operations: "Review activity and reconciliation.",
  Institutional: "Explore organization and policy controls.",
}
const destinations: Record<Workspace, { label: string; href: string }[]> = {
  Personal: [{ label: "Accounts", href: "/platform/accounts" }, { label: "Wallets", href: "/platform/wallets" }],
  Treasury: [{ label: "Treasury", href: "/platform/treasury" }, { label: "Assets", href: "/platform/assets" }],
  Settlement: [{ label: "Settlement", href: "/platform/settlement" }, { label: "Reconciliation", href: "/platform/reconciliation" }],
  Developer: [{ label: "Developer tools", href: "/developer" }, { label: "Integrations", href: "/developer/integrations" }],
  AI: [{ label: "QYXai", href: "/platform/qyxai" }, { label: "Analytics", href: "/platform/analytics" }],
  Operations: [{ label: "Activity", href: "/platform/activity" }, { label: "Reconciliation", href: "/platform/reconciliation" }],
  Institutional: [{ label: "Organization", href: "/admin" }, { label: "Policies", href: "/admin/policies" }],
}
const steps = [
  { label: "Your workspace", title: "Choose your perspective.", description: "Which workspace would you like to explore?" },
  { label: "Your starting point", title: "Make your first move.", description: "Choose the view that opens first." },
  { label: "Ready to explore", title: "A clear starting point.", description: "Review your choices before entering the demo." },
]

export function WelcomeFlow() {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const { welcome, setWelcome, setWorkspace, mode, setMode, reduced, acknowledge } = useViewportContext()
  const options = [{ label: "Platform overview", href: "/dashboard" }, ...destinations[welcome.workspace]]
  const destination = options.find(option => option.href === welcome.destination) ?? options[0]
  const step = steps[welcome.step]
  const advance = (next: number) => {
    setWelcome(current => ({ ...current, step: next }))
    acknowledge(`welcome:${next}`)
  }
  const enter = () => {
    if (!welcome.confirmed || pending) return
    setWorkspace(welcome.workspace)
    acknowledge(destination.href)
    startTransition(() => router.push(destination.href))
  }

  return <div className="public-shell front-shell">
    <SiteHeader />
    <main className="welcome-main" id="main-content">
      <div className="welcome-frame">
        <aside className="welcome-aside" aria-label="Welcome progress">
          <div className="welcome-aside-intro"><p className="front-eyebrow">WELCOME / QYX20</p><h2>Your perspective.<br />Your starting point.</h2><p>A short introduction to the QuantumYield platform concept.</p></div>
          <ol className="welcome-steps">{steps.map((item, i) => <li key={item.label} aria-current={i === welcome.step ? "step" : undefined}><span className="welcome-step-number">{i < welcome.step ? <Check size={16} aria-label="Completed" /> : String(i + 1).padStart(2, "0")}</span>{item.label}</li>)}</ol>
          <p className="welcome-session-note">No account is created. Preferences stay in this browsing session and reset on reload.</p>
        </aside>
        <div className="welcome-workflow">
          <header className="welcome-heading"><p className="front-eyebrow">WELCOME · {String(welcome.step + 1).padStart(2, "0")} / 03</p><h1 data-scene-heading aria-live="polite">{step.title}</h1><p>{step.description}</p></header>
          <div className="welcome-stage">
            <div hidden={welcome.step !== 0} inert={welcome.step !== 0} role="group" aria-label="Choose a workspace"><FitContent label="Workspaces" items={WORKSPACES.map(workspace => ({ id: workspace, content: <label className="welcome-choice"><input type="radio" name="welcome-workspace" value={workspace} checked={welcome.workspace === workspace} onChange={() => setWelcome(current => ({ ...current, workspace, destination: "/dashboard" }))} /><span><strong>{workspace}</strong><small>{descriptions[workspace]}</small></span></label> }))} /></div>
            <div hidden={welcome.step !== 1} inert={welcome.step !== 1} role="group" aria-label="Choose a starting view"><FitContent label="Starting views" items={options.map(option => ({ id: option.href, content: <label className="welcome-choice"><input type="radio" name="welcome-destination" value={option.href} checked={destination.href === option.href} onChange={() => setWelcome(current => ({ ...current, destination: option.href }))} /><span><strong>{option.label}</strong><small>{option.href === "/dashboard" ? "Start with the full platform overview." : `Open the ${option.label} prototype view.`}</small></span></label> }))} /></div>
            <div hidden={welcome.step !== 2} inert={welcome.step !== 2}><FitContent label="Review">
              <div className="welcome-summary" data-keep-together><span>Workspace</span><strong>{welcome.workspace}</strong></div>
              <div className="welcome-summary" data-keep-together><span>Starting view</span><strong>{destination.label}</strong></div>
              <label className="settings-field">Motion preference<select value={mode} onChange={event => setMode(event.target.value as MotionMode)}>{["Balanced", "Immersive", "Reduced"].map(value => <option key={value}>{value}</option>)}</select></label>
              <p className="welcome-disclosure">{reduced ? "Reduced motion is active." : "Scene transitions take three seconds; controls respond immediately."} System reduced motion always takes priority.</p>
              <p className="welcome-disclosure">Illustrative data only. No live transactions, account creation or financial connections. Your choices reset on reload.</p>
              <label className="welcome-confirm"><input type="checkbox" checked={welcome.confirmed} onChange={event => setWelcome(current => ({ ...current, confirmed: event.target.checked }))} /><span>I understand this is an interactive prototype.</span></label>
            </FitContent></div>
          </div>
          <footer className="welcome-controls">
            <button type="button" className="front-button front-button-secondary" disabled={welcome.step === 0 || pending} onClick={() => advance(welcome.step - 1)}><ArrowLeft size={16} aria-hidden="true" />Back</button>
            <span>{welcome.step + 1} of 3</span>
            {welcome.step < 2 ? <button type="button" className="front-button front-button-primary" onClick={() => advance(welcome.step + 1)}>Continue<ArrowRight size={16} aria-hidden="true" /></button> : <button type="button" className="front-button front-button-primary" disabled={!welcome.confirmed || pending} onClick={enter} aria-busy={pending}>{pending ? "Opening…" : "Enter demo"}<ArrowRight size={16} aria-hidden="true" /></button>}
          </footer>
        </div>
      </div>
    </main>
    <PublicStatus />
  </div>
}

"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Sparkles, PanelRight } from "lucide-react"
import { QYX20Lockup } from "@/components/brand/wordmarks"
import { GlobalSearch } from "./global-search"
import { EnvironmentBadge } from "./environment-badge"
import { NAV_GROUPS, WORKSPACES, type Workspace } from "@/lib/nav"
import { cn } from "@/lib/utils"

export function QYXShell({
  children,
  contextPanel,
  title,
}: {
  children: ReactNode
  contextPanel?: ReactNode
  title?: string
}) {
  const pathname = usePathname()
  const [workspace, setWorkspace] = useState<Workspace>("Personal")
  const [wsOpen, setWsOpen] = useState(false)
  const [panelOpen, setPanelOpen] = useState(true)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top command bar */}
      <header className="sticky top-0 z-40 flex items-center gap-4 border-b border-border bg-qyx-void/90 px-4 py-3 backdrop-blur-xl">
        <Link href="/" aria-label="QYX20 home">
          <QYX20Lockup emblemClassName="h-6 w-6" className="text-base" />
        </Link>

        {/* Operational context breadcrumb */}
        <div className="hidden items-center gap-2 border-l border-border pl-4 font-mono text-xs text-text-muted md:flex">
          <span className="text-text-secondary">QuantumYield</span>
          <span aria-hidden>/</span>
          <div className="relative">
            <button
              type="button"
              onClick={() => setWsOpen((v) => !v)}
              className="flex items-center gap-1 text-platinum transition-colors hover:text-champagne"
            >
              {workspace}
              <ChevronDown className="h-3 w-3" />
            </button>
            {wsOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-44 border border-border-strong bg-qyx-obsidian py-1 shadow-xl">
                {WORKSPACES.map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => {
                      setWorkspace(w)
                      setWsOpen(false)
                    }}
                    className={cn(
                      "block w-full px-3 py-1.5 text-left font-body text-sm transition-colors hover:bg-surface-elevated",
                      w === workspace ? "text-champagne" : "text-text-secondary",
                    )}
                  >
                    {w}
                  </button>
                ))}
              </div>
            )}
          </div>
          <span aria-hidden>/</span>
          <span className="text-text-secondary">Primary</span>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <GlobalSearch />
          <Link
            href="/platform/qyxai"
            className="flex items-center gap-1.5 border border-border-active/50 bg-surface px-3 py-1.5 font-display text-xs tracking-brand text-champagne transition-colors hover:bg-surface-elevated"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">QYXai</span>
          </Link>
          <EnvironmentBadge env="PRODUCTION" className="hidden lg:inline-flex" />
          <div
            className="flex h-8 w-8 items-center justify-center border border-border-strong bg-surface-elevated font-display text-xs text-platinum"
            aria-label="Account"
          >
            QY
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Left navigation */}
        <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-qyx-obsidian/40 lg:flex">
          <nav className="flex-1 overflow-y-auto px-3 py-5">
            {NAV_GROUPS.map((group) => (
              <div key={group.title} className="mb-6">
                <div className="px-3 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                  {group.title}
                </div>
                <ul className="flex flex-col gap-0.5">
                  {group.items.map((item) => {
                    const active = pathname === item.href
                    const Icon = item.icon
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3 border-l-2 px-3 py-2 font-body text-sm transition-colors duration-[120ms]",
                            active
                              ? "border-l-border-active bg-surface-elevated text-platinum"
                              : "border-l-transparent text-text-secondary hover:bg-surface hover:text-platinum",
                          )}
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main workspace */}
        <main className="min-w-0 flex-1">
          {title && (
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h1 className="font-display text-lg tracking-wide text-platinum">
                {title}
              </h1>
              {contextPanel && (
                <button
                  type="button"
                  onClick={() => setPanelOpen((v) => !v)}
                  className="text-text-muted transition-colors hover:text-platinum xl:hidden"
                  aria-label="Toggle context panel"
                >
                  <PanelRight className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
          <div className="px-6 py-6">{children}</div>
        </main>

        {/* Optional context panel */}
        {contextPanel && (
          <aside
            className={cn(
              "w-80 shrink-0 border-l border-border bg-qyx-obsidian/40 xl:block",
              panelOpen ? "hidden xl:block" : "hidden",
            )}
          >
            <div className="p-5">{contextPanel}</div>
          </aside>
        )}
      </div>

      {/* Status / environment footer */}
      <footer className="flex items-center gap-4 border-t border-border bg-qyx-void px-6 py-2 font-mono text-[11px] text-text-muted">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
          Platform operational
        </span>
        <span className="hidden sm:inline">Region: eu-west</span>
        <span className="hidden md:inline">Workspace: {workspace}</span>
        <span className="ml-auto">QYX20 · v0.1 · Illustrative environment</span>
      </footer>
    </div>
  )
}

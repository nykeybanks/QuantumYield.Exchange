"use client"

import { useEffect, useState } from "react"
import { Search, CornerDownLeft } from "lucide-react"

const CATEGORIES = [
  "Accounts",
  "Wallets",
  "Assets",
  "Payments",
  "Settlements",
  "Users",
  "Policies",
  "Integrations",
  "Documents",
  "Audit",
  "Documentation",
]

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex items-center gap-2 border border-border bg-surface px-3 py-1.5 text-text-muted transition-colors hover:border-border-strong hover:text-text-secondary"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden font-body text-sm sm:inline">Search QYX20</span>
        <kbd className="ml-2 hidden border border-border px-1.5 font-mono text-[10px] sm:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-qyx-void/80 px-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl border border-border-strong bg-qyx-obsidian shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 text-text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search accounts, payments, policies, docs…"
                className="w-full bg-transparent py-4 font-body text-platinum placeholder:text-text-muted focus:outline-none"
              />
              <kbd className="border border-border px-1.5 font-mono text-[10px] text-text-muted">
                ESC
              </kbd>
            </div>
            <div className="p-3">
              <div className="px-2 pb-2 font-mono text-[10px] uppercase tracking-wide text-text-muted">
                Categories
              </div>
              <ul className="grid grid-cols-2 gap-1">
                {CATEGORIES.filter((c) =>
                  c.toLowerCase().includes(query.toLowerCase()),
                ).map((c) => (
                  <li key={c}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-2 text-left font-body text-sm text-text-secondary transition-colors hover:bg-surface-elevated hover:text-platinum"
                    >
                      {c}
                      <CornerDownLeft className="h-3 w-3 text-text-muted" />
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-border px-2 pt-3 font-body text-xs text-text-muted">
                Results are permission-aware. This is an illustrative search
                surface.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

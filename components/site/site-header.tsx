"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { QYX20Lockup } from "@/components/brand/wordmarks"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Platform", href: "#platform" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Architecture", href: "#architecture" },
  { label: "Developer", href: "/developer" },
  { label: "Ecosystem", href: "#ecosystem" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-qyx-void/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="QYX20 home">
          <QYX20Lockup />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-sm text-text-secondary transition-colors duration-[120ms] hover:text-platinum"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/dashboard"
            className="font-body text-sm text-text-secondary transition-colors hover:text-platinum"
          >
            Sign in
          </Link>
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-1.5 border border-border-strong bg-surface-elevated px-4 py-2 font-display text-xs tracking-brand text-platinum transition-colors hover:border-border-active hover:text-champagne"
          >
            OPEN QYX20
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-platinum lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border transition-all duration-[220ms] lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-transparent",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 font-body text-sm text-text-secondary hover:text-platinum"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center gap-1.5 border border-border-strong bg-surface-elevated px-4 py-2.5 font-display text-xs tracking-brand text-platinum"
          >
            OPEN QYX20
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </div>
    </header>
  )
}

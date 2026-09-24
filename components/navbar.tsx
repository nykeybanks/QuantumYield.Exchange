"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { QyxLogo } from "./qyx-logo"
import { Button } from "./ui"
import { navItems } from "@/lib/data"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border py-2.5" : "border-b border-transparent py-4"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Primary">
        <a href="#top" className="shrink-0" aria-label="QYX20 home">
          <QyxLogo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} onMouseEnter={() => setOpenMenu(item.label)}>
              <button
                className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors ${
                  openMenu === item.label ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                aria-expanded={openMenu === item.label}
              >
                {item.label}
                {item.columns && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            Sign In
          </button>
          <Button className="px-5 py-2.5">Launch App</Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mega menu */}
      <div
        className={`absolute inset-x-0 top-full hidden origin-top lg:block ${
          openMenu ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {navItems.map((item) =>
          item.columns && openMenu === item.label ? (
            <div key={item.label} className="glass border-b border-border">
              <div className="mx-auto grid max-w-7xl gap-8 px-8 py-8 md:grid-cols-3 lg:grid-cols-4">
                {item.columns.map((col) => (
                  <div key={col.title}>
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-gold">{col.title}</p>
                    <ul className="space-y-3">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <button className="group text-left">
                            <span className="block text-sm text-foreground transition-colors group-hover:text-gold">
                              {link.label}
                            </span>
                            {link.description && (
                              <span className="block text-xs text-muted-foreground">{link.description}</span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : null,
        )}
      </div>

      {/* Mobile full-screen nav */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <QyxLogo />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-8">
            <ul className="space-y-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <p className="font-display text-lg tracking-wide text-foreground">{item.label}</p>
                  {item.columns && (
                    <div className="mt-4 space-y-5 border-l border-border pl-4">
                      {item.columns.map((col) => (
                        <div key={col.title}>
                          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold">{col.title}</p>
                          <ul className="space-y-2">
                            {col.links.map((link) => (
                              <li key={link.label} className="text-sm text-muted-foreground">
                                {link.label}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-border p-5">
            <Button variant="secondary">Sign In</Button>
            <Button>Launch App</Button>
          </div>
        </div>
      )}
    </header>
  )
}

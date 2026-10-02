"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronDown, Menu } from "lucide-react"
import { MobileNavigation } from "./mobile-navigation"
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

  const closeMobileMenu = useCallback(() => setMobileOpen(false), [])

  return (
    <header
      className={`qyx-site-header fixed inset-x-0 top-0 z-50 border-b py-2 transition-colors duration-200 sm:py-3 ${
        scrolled ? "glass border-border" : "border-transparent bg-background/90"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Primary">
        <a href="#top" className="shrink-0" aria-label="QYX20 home">
          <QyxLogo />
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <li key={item.label} onMouseEnter={() => setOpenMenu(item.label)}>
              <button
                className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors ${
                  openMenu === item.label ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                onKeyDown={(event) => { if (event.key === "Escape") setOpenMenu(null) }}
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

        <div className="hidden items-center gap-2 xl:flex">
          <button className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            Sign In
          </button>
          <Button className="px-5 py-2.5">Launch App</Button>
        </div>

        <button
          className="flex size-11 items-center justify-center rounded-lg border border-border text-foreground hover:border-gold/50 xl:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={mobileOpen}
          aria-controls={mobileOpen ? "mobile-navigation" : undefined}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mega menu */}
      <div
        className={`absolute inset-x-0 top-full hidden origin-top xl:block ${
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
                          <a href={link.href} onClick={() => setOpenMenu(null)} className="group block text-left">
                            <span className="block text-sm text-foreground transition-colors group-hover:text-gold">
                              {link.label}
                            </span>
                            {link.description && (
                              <span className="block text-xs text-muted-foreground">{link.description}</span>
                            )}
                          </a>
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
      {mobileOpen && <MobileNavigation onClose={closeMobileMenu} />}
    </header>
  )
}

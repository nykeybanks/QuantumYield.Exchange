"use client"

import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight, ChevronDown, X } from "lucide-react"
import { navItems } from "@/lib/data"
import { QyxLogo } from "./qyx-logo"

export function MobileNavigation({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const element = dialog.current
    if (!element) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    element.showModal()
    element.querySelector<HTMLButtonElement>("button")?.focus({ preventScroll: true })
    document.body.style.overflow = "hidden"
    const desktop = window.matchMedia("(min-width: 1280px)")
    const closeOnDesktop = () => { if (desktop.matches) onClose() }
    desktop.addEventListener("change", closeOnDesktop)
    return () => {
      desktop.removeEventListener("change", closeOnDesktop)
      element.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [onClose])

  return createPortal(
    <dialog
      ref={dialog}
      id="mobile-navigation"
      className="qyx-mobile-navigation"
      aria-labelledby="mobile-navigation-title"
      onCancel={(event) => { event.preventDefault(); onClose() }}
    >
      <div className="qyx-mobile-navigation-header">
        <a href="#top" aria-label="QYX20 home" onClick={onClose}><QyxLogo /></a>
        <button type="button" onClick={onClose} aria-label="Close menu" className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border hover:border-gold/50">
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>
      <div className="qyx-mobile-navigation-body">
        <div className="flex items-center justify-between">
          <h2 id="mobile-navigation-title" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigation</h2>
          <span className="font-mono text-xs text-gold">QYX20</span>
        </div>
        <nav aria-label="Mobile">
          {navItems.map((item, index) => (
            <details key={item.label} name="mobile-nav-group" open={index === 0} className="group border-b border-border">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between font-display text-base">
                {item.label}<ChevronDown className="size-4 text-gold transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="flex flex-col gap-5 pb-5">
                {item.columns?.map((column) => (
                  <div key={column.title} className="flex flex-col gap-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{column.title}</p>
                    <ul className="flex flex-col">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} onClick={onClose} className="flex min-h-11 items-center justify-between text-sm text-silver transition-colors hover:text-foreground">
                            <span>{link.label}</span><ArrowUpRight className="size-3.5 shrink-0 text-chrome" aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </nav>
      </div>
      <div className="qyx-mobile-navigation-footer">
        <a href="#portals" onClick={onClose} className="flex min-h-12 items-center justify-center rounded-lg bg-gold font-medium text-gold-foreground hover:bg-gold-soft">Explore portals</a>
        <a href="#developers" onClick={onClose} className="flex min-h-12 items-center justify-center rounded-lg border border-border text-sm text-foreground hover:border-gold/50">For developers</a>
      </div>
    </dialog>,
    document.body,
  )
}

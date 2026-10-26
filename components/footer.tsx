import { QYXBrandSignature } from "@/components/brand"
import { MotionPreference } from "./motion-preference"

const columns = [
  { title: "Explore", links: [{ label: "QYX20 overview", href: "#top" }, { label: "Ecosystem concepts", href: "#portals" }, { label: "Design priorities", href: "#features" }] },
  { title: "Foundation", links: [{ label: "Architecture", href: "#architecture" }, { label: "Security principles", href: "#security" }, { label: "Developer roadmap", href: "#developers" }] },
  { title: "About this experience", links: [{ label: "Development phases", href: "#roadmap" }, { label: "Brand & disclosure", href: "#brand-disclosure" }] },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <a href="#top" aria-label="QuantumYield home"><QYXBrandSignature /></a>
            <p className="mt-5 max-w-xs text-pretty font-body text-sm leading-relaxed text-muted-foreground">The connectivity standard.<br />Precision in every connection.</p>
            <div className="mt-7"><MotionPreference /></div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">{col.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}><a href={link.href} className="inline-flex min-h-8 items-center text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div id="brand-disclosure" className="mt-12 border-t border-border pt-6 font-body text-xs leading-relaxed text-muted-foreground">
          <p>QuantumYield™, QYX™, and QYX20™ are brand identifiers. Use of ™ does not imply registered trademark status. Official artwork is reproduced without modification.</p>
          <p className="mt-2">Interface prototype. Product capabilities, integrations, and financial services shown are concepts or planned features, not verified live services. No investment, security certification, or regulatory approval is implied.</p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} QuantumYield. All rights reserved.</p>
          <p className="text-balance text-center font-display text-[10px] uppercase leading-relaxed tracking-[0.16em] text-chrome sm:text-xs sm:tracking-[0.24em]">
            QuantumYield Online Web-3 Gateway
          </p>
        </div>
      </div>
    </footer>
  )
}

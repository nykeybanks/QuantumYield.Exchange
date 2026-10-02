import { QyxLogo } from "./qyx-logo"
import { Button } from "./ui"

const columns = [
  {
    title: "QYX Portals",
    links: ["QYXai — AI Gateway", "QYXdx — Data Exchange", "QYXvr — Virtual Reality", "QYXar — Augmented Reality"],
  },
  {
    title: "More Portals",
    links: [
      "QYXcc — Computing / Cloud",
      "QYXds — Data Storage",
      "QYXnc — Network / Connectivity",
      "QYXes — Energy / Sustainability",
    ],
  },
  {
    title: "Legal",
    links: ["Terms of Use", "Privacy Policy", "Cookie Policy", "Disclaimer"],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <QyxLogo />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Building the future of decentralized finance, one block at a time.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="secondary" className="px-5 py-2.5">
                Learn More
              </Button>
              <Button className="px-5 py-2.5">Launch App</Button>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">{col.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <button className="text-left text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 QYX20. All rights reserved.</p>
          <p className="text-balance text-center font-display text-[10px] uppercase leading-relaxed tracking-[0.16em] text-chrome sm:text-xs sm:tracking-[0.24em]">
            QuantumYield Online Web-3 Gateway
          </p>
        </div>
      </div>
    </footer>
  )
}

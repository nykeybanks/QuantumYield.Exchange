import Link from "next/link"

import { Logo } from "@/components/logo"

const COLUMNS = [
  {
    title: "Protocol",
    links: [
      { label: "Vaults", href: "/#vaults" },
      { label: "Routing engine", href: "/#how-it-works" },
      { label: "Security & audits", href: "/#security" },
      { label: "App", href: "/dashboard" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Risk framework", href: "#" },
      { label: "Audit reports", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "X / Twitter", href: "#" },
      { label: "Discord", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Governance forum", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Non-custodial yield routing across lending, staking, and liquidity
            markets. Your keys, your assets, always.
          </p>
        </div>
        {COLUMNS.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">{column.title}</h3>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-border/60 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} QuantumYield.Exchange. Not investment advice.</p>
        <p>Smart contract risk is real. Deposit only what you can afford to lose.</p>
      </div>
    </footer>
  )
}

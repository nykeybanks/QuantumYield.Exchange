import Link from "next/link"
import { BrandSignature } from "@/components/brand/wordmarks"

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Payments", href: "/platform/payments" },
      { label: "Treasury", href: "/platform/treasury" },
      { label: "Settlement", href: "/platform/treasury" },
      { label: "Wallets", href: "/platform/wallets" },
      { label: "Markets", href: "/platform/markets" },
      { label: "QYXai", href: "/platform/qyxai" },
    ],
  },
  {
    title: "Developer",
    links: [
      { label: "Overview", href: "/developer" },
      { label: "API Reference", href: "/developer" },
      { label: "SDKs", href: "/developer" },
      { label: "Webhooks", href: "/developer" },
      { label: "Environments", href: "/developer" },
    ],
  },
  {
    title: "Manage",
    links: [
      { label: "Organization", href: "/admin" },
      { label: "Identity & Users", href: "/admin" },
      { label: "Verification", href: "/admin" },
      { label: "Security", href: "/admin" },
      { label: "Audit", href: "/admin" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Architecture", href: "/#architecture" },
      { label: "Ecosystem", href: "/#ecosystem" },
      { label: "Governance", href: "/#ecosystem" },
      { label: "Status", href: "/#ecosystem" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-qyx-void">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <BrandSignature />
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-text-muted">
              QuantumYield's unified platform architecture for identity, assets,
              payments, settlement, intelligence and developer services.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
                  {col.title}
                </div>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-body text-sm text-text-muted transition-colors hover:text-platinum"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-text-muted">
            © {new Date().getFullYear()} QuantumYield · QYX20. All rights reserved.
          </p>
          <p className="max-w-xl font-body text-[11px] leading-relaxed text-text-muted">
            QYX20 surfaces marked illustrative are demonstrations and do not
            represent live balances, custody, valuation, liquidity or regulatory
            authorization.
          </p>
        </div>
      </div>
    </footer>
  )
}

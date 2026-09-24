import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { QYXEmblem } from "@/components/brand/qyx-emblem"

const CAPABILITIES = [
  "Identity",
  "Assets",
  "Payments",
  "Intelligence",
  "Settlement",
  "Data",
  "Developer Infrastructure",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="qyx-grid absolute inset-0" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-active/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 border border-border px-3 py-1.5 font-mono text-[11px] tracking-wide text-text-secondary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-champagne" aria-hidden />
            QUANTUMYIELD · UNIFIED FINANCIAL INFRASTRUCTURE
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="text-metallic">QYX20</span>
            <span className="mt-4 block text-platinum-sheen text-3xl sm:text-4xl lg:text-5xl">
              Unified Financial Infrastructure
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-text-secondary text-pretty">
            One platform architecture spanning identity, accounts, wallets,
            assets, payments, treasury, settlement, intelligence,
            interoperability and developer services — engineered as coherent
            infrastructure, not a collection of products.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
            {CAPABILITIES.map((c) => (
              <span
                key={c}
                className="font-mono text-xs tracking-wide text-text-muted"
              >
                {c}
                <span className="ml-3 text-border-strong" aria-hidden>
                  ·
                </span>
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="group inline-flex items-center justify-center gap-2 bg-platinum px-6 py-3.5 font-display text-sm tracking-brand text-qyx-void transition-colors hover:bg-champagne"
            >
              OPEN QYX20
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#platform"
              className="inline-flex items-center justify-center gap-2 border border-border-strong px-6 py-3.5 font-display text-sm tracking-brand text-platinum transition-colors hover:border-border-active hover:text-champagne"
            >
              EXPLORE PLATFORM
            </Link>
            <Link
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-display text-sm tracking-brand text-text-secondary transition-colors hover:text-platinum"
            >
              VIEW ARCHITECTURE
            </Link>
          </div>
        </div>

        {/* Focal emblem — the single place we permit real illumination */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute h-64 w-64 rounded-full qyx-focal-glow"
            aria-hidden
          />
          <div className="relative flex h-72 w-72 items-center justify-center border border-border bg-qyx-obsidian/40 sm:h-80 sm:w-80">
            <div className="absolute inset-0 qyx-grid opacity-60" aria-hidden />
            <QYXEmblem className="relative h-40 w-40" />
            {/* corner ticks */}
            <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-border-active" aria-hidden />
            <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-border-active" aria-hidden />
            <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-border-active" aria-hidden />
            <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-border-active" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}

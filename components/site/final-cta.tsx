import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { QYXEmblem } from "@/components/brand/qyx-emblem"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="qyx-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center">
        <QYXEmblem className="h-14 w-14" />
        <h2 className="mt-8 font-display text-4xl font-semibold tracking-tight text-platinum text-balance sm:text-5xl">
          Operate on unified financial infrastructure
        </h2>
        <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-text-secondary text-pretty">
          Bring identity, money movement, treasury, settlement and intelligence
          onto one coherent platform — with developer infrastructure built in.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="group inline-flex items-center justify-center gap-2 bg-platinum px-7 py-3.5 font-display text-sm tracking-brand text-qyx-void transition-colors hover:bg-champagne"
          >
            OPEN QYX20
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/developer"
            className="inline-flex items-center justify-center gap-2 border border-border-strong px-7 py-3.5 font-display text-sm tracking-brand text-platinum transition-colors hover:border-border-active hover:text-champagne"
          >
            DEVELOPER PLATFORM
          </Link>
        </div>
      </div>
    </section>
  )
}

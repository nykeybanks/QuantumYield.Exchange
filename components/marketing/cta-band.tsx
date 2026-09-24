import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Put your capital in motion.
          </h2>
          <p className="mt-2 max-w-md text-pretty text-muted-foreground">
            Connect a wallet or try demo mode — no signup, no email, ever.
          </p>
        </div>
        <Button size="lg" render={<Link href="/dashboard" />} nativeButton={false}>
          Launch App
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </section>
  )
}

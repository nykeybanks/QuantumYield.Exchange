import { Reveal } from "./reveal"
import { trustLogos } from "@/lib/data"

export function TrustSection() {
  return (
    <section className="border-y border-border bg-surface/40 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-center text-sm uppercase tracking-[0.28em] text-muted-foreground">
            Powering the best teams
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4">
            {trustLogos.map((logo) => (
              <li
                key={logo}
                className="text-center font-display text-lg font-medium tracking-wide text-chrome/80 transition-colors hover:text-silver"
              >
                {logo}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

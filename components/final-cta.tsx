import { Reveal } from "./reveal"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <div aria-hidden className="absolute inset-0 bg-radial-gold" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Built around a more connected future.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Explore the QuantumYield™ vision. A considered ecosystem, a shared identity, and a clear distinction between what is designed and what is available.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#portals" className="qyx-action w-full sm:w-auto">Explore the ecosystem</a>
            <a href="#developers" className="qyx-action w-full sm:w-auto" data-variant="secondary">Developer roadmap</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

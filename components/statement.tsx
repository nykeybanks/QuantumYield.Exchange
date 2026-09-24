import { Reveal } from "./reveal"

export function Statement() {
  return (
    <section className="relative mx-auto max-w-5xl px-5 py-28 text-center lg:px-8 lg:py-40">
      <Reveal>
        <p className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          <span className="text-muted-foreground">Complex technology, </span>
          <span className="text-foreground">made remarkably simple.</span>
        </p>
      </Reveal>
      <Reveal delay={120}>
        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          QuantumYield complexity underneath. QYX20 simplicity on top.
        </p>
      </Reveal>
    </section>
  )
}

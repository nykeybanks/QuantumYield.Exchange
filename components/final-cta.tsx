import { Reveal } from "./reveal"
import { Button } from "./ui"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <div aria-hidden className="absolute inset-0 bg-radial-gold" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Ready to Transform Your Life with Web3?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Join thousands of companies already using QuantumYield to streamline their operations and boost
            productivity.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button className="w-full sm:w-auto">Start Your Free Trial</Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              QYX20 Documentation
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

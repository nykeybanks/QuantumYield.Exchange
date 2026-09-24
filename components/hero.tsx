import { Play } from "lucide-react"
import { Button, SectionLabel } from "./ui"
import { Reveal } from "./reveal"

function QuantumVisual() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(65%_60%_at_50%_40%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="absolute left-1/2 top-[42%] h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 640 640" className="h-full w-full">
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="640" y2="640" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c6a85a" stopOpacity="0.55" />
              <stop offset="1" stopColor="#c6a85a" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e6d3a0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c6a85a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g className="animate-orbit" style={{ transformOrigin: "320px 320px" }}>
            <ellipse cx="320" cy="320" rx="300" ry="120" fill="none" stroke="url(#ring)" strokeWidth="1" />
            <circle cx="620" cy="320" r="3" fill="#c6a85a" />
          </g>
          <g className="animate-orbit-reverse" style={{ transformOrigin: "320px 320px" }}>
            <ellipse
              cx="320"
              cy="320"
              rx="120"
              ry="300"
              fill="none"
              stroke="url(#ring)"
              strokeWidth="1"
              transform="rotate(30 320 320)"
            />
            <circle cx="320" cy="20" r="2.5" fill="#d9c084" />
          </g>
          <circle cx="320" cy="320" r="230" fill="none" stroke="#c6a85a" strokeOpacity="0.12" strokeWidth="1" />
          <circle cx="320" cy="320" r="150" fill="none" stroke="#c6a85a" strokeOpacity="0.18" strokeWidth="1" />
          <circle cx="320" cy="320" r="120" fill="url(#core)" />
        </svg>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24">
      <QuantumVisual />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <SectionLabel>QuantumYield Online Web-3 Gateway</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-8 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-silver">Luxury-grade Web3 suite</span>
            <br />
            <span className="text-gradient-gold">for the modern era</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            QYX20 combines cutting-edge blockchain technology with user-centric design to create a seamless, secure,
            and scalable platform for the next generation of decentralized applications.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button className="w-full sm:w-auto">Start Free Trial</Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </section>
  )
}

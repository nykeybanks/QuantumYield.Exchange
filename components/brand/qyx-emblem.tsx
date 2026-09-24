import { cn } from "@/lib/utils"

/**
 * QYXEmblem — canonical angular geometric Q mark.
 * Placeholder for the official QuantumYield production emblem: exact proportions,
 * restrained metallic treatment, no substitute shield, no generic crypto coin.
 * Swap the SVG for the supplied production asset when available.
 */
export function QYXEmblem({
  className,
  title = "QYX20",
}: {
  className?: string
  title?: string
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={cn("h-8 w-8", className)}
    >
      <defs>
        <linearGradient id="qyx-emblem-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3ead9" />
          <stop offset="42%" stopColor="#e6c7a0" />
          <stop offset="80%" stopColor="#b79355" />
          <stop offset="100%" stopColor="#8f7040" />
        </linearGradient>
      </defs>
      {/* Outer angular ring — chamfered octagonal Q body */}
      <path
        d="M50 6 L84 24 L84 62 L62 84 L18 84 L16 62 L16 24 Z"
        fill="none"
        stroke="url(#qyx-emblem-metal)"
        strokeWidth="5"
        strokeLinejoin="miter"
      />
      {/* Inner counter */}
      <path
        d="M50 30 L66 39 L66 57 L54 69 L34 69 L34 39 Z"
        fill="none"
        stroke="url(#qyx-emblem-metal)"
        strokeWidth="3"
        opacity="0.5"
        strokeLinejoin="miter"
      />
      {/* The Q tail — sharp diagonal */}
      <path
        d="M58 60 L90 92"
        stroke="url(#qyx-emblem-metal)"
        strokeWidth="6"
        strokeLinecap="square"
      />
    </svg>
  )
}

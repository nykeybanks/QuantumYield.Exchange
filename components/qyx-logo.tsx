export function QyxLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span aria-hidden className="relative inline-flex h-7 w-7 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.5" y="2.5" width="27" height="27" rx="7" stroke="url(#qyxg)" strokeWidth="1.25" />
          <path d="M11 11 L16 16 L11 21" stroke="url(#qyxg)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 16 L21 21" stroke="var(--color-gold)" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="16" cy="16" r="1.4" fill="var(--color-gold)" />
          <defs>
            <linearGradient id="qyxg" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e6d3a0" />
              <stop offset="1" stopColor="#9c8544" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-[0.2em] text-foreground">QYX20</span>
    </span>
  )
}

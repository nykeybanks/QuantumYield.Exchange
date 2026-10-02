export function QyxLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex shrink-0 items-center ${className}`}>
      <img
        src="/brand/qyx/source-05/lockups/qyx20-lockup.png"
        alt="QYX20 by QuantumYield — The Connectivity Standard."
        width={208}
        height={79}
        className="block h-auto w-40 object-contain"
        draggable={false}
        decoding="async"
      />
    </span>
  )
}

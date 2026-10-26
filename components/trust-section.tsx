import { QYXProductMark } from "@/components/brand"

const products = [
  { product: "qyx20", name: "QYX20", role: "The gateway" },
  { product: "qyxos", name: "QYXos", role: "The foundation" },
  { product: "qyxai", name: "QYXai", role: "The intelligence" },
  { product: "qyxvr", name: "QYXvr", role: "The experience" },
] as const

export function TrustSection() {
  return (
    <section id="ecosystem-overview" aria-label="QuantumYield ecosystem concepts" className="border-y border-border bg-surface/40 py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <p>One identity. A shared vision.</p><span className="hidden sm:inline">Ecosystem concepts</span>
        </div>
        <ul className="mt-7 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {products.map(({ product, name, role }) => (
            <li key={product} className="flex flex-col items-center border-l border-border first:border-l-0">
              <QYXProductMark product={product} alt={name} height={27} />
              <span className="mt-4 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

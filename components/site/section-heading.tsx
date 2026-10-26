export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div><p className="intro-eyebrow">{eyebrow}</p><h2 className="intro-title text-balance">{title}</h2>{description && <p className="intro-description text-pretty">{description}</p>}</div>
}

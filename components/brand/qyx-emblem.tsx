import { QYXEmblem as CanonicalEmblem } from "./QYXEmblem"

export function QYXEmblem({ className, title = "QYX" }: { className?: string; title?: string }) {
  return <CanonicalEmblem size={32} className={className} alt={title} />
}

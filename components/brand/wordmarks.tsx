import { cn } from "@/lib/utils"
import { QYXEmblem } from "./qyx-emblem"
import { QYXProductMark } from "./QYXProductMark"
import { QuantumYieldWordmark as CanonicalWordmark } from "./QuantumYieldWordmark"

export function QYXWordmark({ className }: { className?: string }) {
  return <QYXProductMark product="qyx20" alt="QYX20" height={24} className={className} />
}
export function QuantumYieldWordmark({ className }: { className?: string }) {
  return <CanonicalWordmark height={18} className={className} />
}
export function QYX20Lockup({ className, emblemClassName }: { className?: string; emblemClassName?: string }) {
  return <span className={cn("brand-lockup", className)}><QYXEmblem className={emblemClassName} title="" /><QYXWordmark /></span>
}
export function BrandSignature({ className }: { className?: string }) {
  return <span className={cn("brand-signature", className)}><QYXWordmark /><QuantumYieldWordmark /></span>
}

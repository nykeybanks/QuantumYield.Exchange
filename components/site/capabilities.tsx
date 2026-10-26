import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { DOMAINS } from "@/lib/platform"
import { SectionHeading } from "./section-heading"

export function Capabilities() {
  return <>
    <SectionHeading eyebrow="Capabilities" title="Financial services, intelligence and infrastructure" description="The proposed capabilities share an identity, ledger, policy and evidence model. Trading is one domain, not the whole platform." />
    {DOMAINS.map(domain => <div key={domain.title}>
      <p className="intro-eyebrow">{domain.eyebrow} · Concept</p>
      <Link href={domain.href} className="hero-action"><h3 className="text-balance">{domain.title}</h3><ArrowUpRight size={18} className="shrink-0" aria-hidden="true" /></Link>
      <p className="text-text-secondary">{domain.description}</p>
      <p className="text-text-muted">{domain.points.join(" · ")}</p>
    </div>)}
  </>
}

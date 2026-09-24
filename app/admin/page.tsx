import Link from "next/link"
import { QYXShell } from "@/components/shell/qyx-shell"
import {
  PageIntro,
  StatGrid,
  Card,
} from "@/components/workspace/primitives"
import {
  Building2,
  Fingerprint,
  Users,
  ShieldCheck,
  BadgeCheck,
  Lock,
  Plug,
  Landmark,
  Scale,
  ScrollText,
  KeyRound,
} from "lucide-react"

const AREAS = [
  { icon: Building2, label: "Organization", desc: "Structure & entities", href: "/admin" },
  { icon: Fingerprint, label: "Identity", desc: "Identity providers", href: "/admin" },
  { icon: Users, label: "Users", desc: "Members & access", href: "/admin" },
  { icon: ShieldCheck, label: "Roles", desc: "Role definitions", href: "/admin" },
  { icon: KeyRound, label: "Permissions", desc: "Fine-grained grants", href: "/admin" },
  { icon: BadgeCheck, label: "Verification", desc: "Identity & org KYC", href: "/admin" },
  { icon: Lock, label: "Security", desc: "Sessions & MFA", href: "/admin/security" },
  { icon: Plug, label: "Integrations", desc: "Connected systems", href: "/developer/integrations" },
  { icon: Landmark, label: "Finance", desc: "Currencies & gateways", href: "/admin" },
  { icon: Scale, label: "Policies", desc: "Approval & limits", href: "/admin/policies" },
  { icon: ScrollText, label: "Audit", desc: "Immutable log", href: "/admin/audit" },
  { icon: KeyRound, label: "Developer Credentials", desc: "Keys & apps", href: "/developer" },
]

export default function AdminPage() {
  return (
    <QYXShell title="Manage">
      <PageIntro
        eyebrow="Institutional · Manage"
        title="Management & control"
        description="The QYX20 control environment — organization, identity, verification, security, finance, policies and audit in one hierarchy."
      />

      <StatGrid
        stats={[
          { label: "Members", value: "24" },
          { label: "Roles", value: "6" },
          { label: "Open verifications", value: "2" },
          { label: "Policy breaches", value: "0" },
        ]}
      />

      <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((a) => {
          const Icon = a.icon
          return (
            <Link
              key={a.label}
              href={a.href}
              className="group flex items-start gap-4 bg-qyx-obsidian p-5 transition-colors hover:bg-surface-elevated"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-border-strong bg-surface">
                <Icon className="h-4 w-4 text-text-muted transition-colors group-hover:text-champagne" />
              </div>
              <div>
                <div className="font-display tracking-wide text-platinum">
                  {a.label}
                </div>
                <div className="mt-0.5 font-body text-sm text-text-muted">
                  {a.desc}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </QYXShell>
  )
}

import type { LucideIcon } from "lucide-react"
import {
  Home,
  Wallet,
  Coins,
  ArrowLeftRight,
  Landmark,
  ShieldCheck,
  Repeat,
  Activity,
  Sparkles,
  BarChart3,
  FileText,
  Code2,
  Plug,
  Terminal,
  Building2,
  Lock,
  Scale,
  ScrollText,
  LineChart,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
  icon: LucideIcon
}

export type NavGroup = {
  title: string
  items: NavItem[]
}

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Home",
    items: [{ label: "Overview", href: "/dashboard", icon: Home }],
  },
  {
    title: "Money",
    items: [
      { label: "Accounts", href: "/platform/accounts", icon: Landmark },
      { label: "Wallets", href: "/platform/wallets", icon: Wallet },
      { label: "Assets", href: "/platform/assets", icon: Coins },
      { label: "Payments", href: "/platform/payments", icon: ArrowLeftRight },
      { label: "Treasury", href: "/platform/treasury", icon: Landmark },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Settlement", href: "/platform/settlement", icon: ShieldCheck },
      { label: "Reconciliation", href: "/platform/reconciliation", icon: Repeat },
      { label: "Activity", href: "/platform/activity", icon: Activity },
    ],
  },
  {
    title: "Markets",
    items: [{ label: "QYX20 Markets", href: "/platform/markets", icon: LineChart }],
  },
  {
    title: "Intelligence",
    items: [
      { label: "QYXai", href: "/platform/qyxai", icon: Sparkles },
      { label: "Analytics", href: "/platform/analytics", icon: BarChart3 },
      { label: "Reports", href: "/platform/reports", icon: FileText },
    ],
  },
  {
    title: "Build",
    items: [
      { label: "APIs", href: "/developer", icon: Code2 },
      { label: "Integrations", href: "/developer/integrations", icon: Plug },
      { label: "Developer", href: "/developer", icon: Terminal },
    ],
  },
  {
    title: "Manage",
    items: [
      { label: "Organization", href: "/admin", icon: Building2 },
      { label: "Security", href: "/admin/security", icon: Lock },
      { label: "Policies", href: "/admin/policies", icon: Scale },
      { label: "Audit", href: "/admin/audit", icon: ScrollText },
    ],
  },
]

export const WORKSPACES = [
  "Personal",
  "Treasury",
  "Settlement",
  "Developer",
  "AI",
  "Operations",
  "Institutional",
] as const

export type Workspace = (typeof WORKSPACES)[number]

export const ENVIRONMENTS = [
  "LOCAL",
  "DEVELOPMENT",
  "INTEGRATION",
  "QA",
  "UAT",
  "STAGING",
  "PRODUCTION",
] as const

export type Environment = (typeof ENVIRONMENTS)[number]

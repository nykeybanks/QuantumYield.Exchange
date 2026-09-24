export type Layer = {
  id: string
  index: string
  name: string
  tagline: string
  domains: string[]
}

/** The QYX20 layered architecture, top (experience) to bottom (infrastructure). */
export const LAYERS: Layer[] = [
  {
    id: "experience",
    index: "L6",
    name: "Experience",
    tagline: "Unified surfaces for people, teams and institutions.",
    domains: ["Consumer", "Business", "Institutional", "Operations", "Mobile"],
  },
  {
    id: "intelligence",
    index: "L5",
    name: "Intelligence",
    tagline: "Evidence-grounded reasoning across every domain.",
    domains: ["QYXai", "Analytics", "Reporting", "Signals", "Agents"],
  },
  {
    id: "financial-services",
    index: "L4",
    name: "Financial Services",
    tagline: "Accounts, payments, treasury, settlement and markets.",
    domains: ["Accounts", "Payments", "Treasury", "Settlement", "Markets"],
  },
  {
    id: "core-platform",
    index: "L3",
    name: "Core Platform",
    tagline: "Identity, wallets, assets, policy and the ledger.",
    domains: ["Identity", "Wallets", "Assets", "Ledger", "Policy"],
  },
  {
    id: "interoperability",
    index: "L2",
    name: "Interoperability",
    tagline: "Networks, rails, connectors and external systems.",
    domains: ["Networks", "Rails", "Connectors", "Bridges", "Webhooks"],
  },
  {
    id: "infrastructure",
    index: "L1",
    name: "Infrastructure",
    tagline: "Compute, data, security and observability foundations.",
    domains: ["Compute", "Data", "Security", "Observability", "Regions"],
  },
]

export type Domain = {
  title: string
  eyebrow: string
  description: string
  points: string[]
  href: string
}

export const DOMAINS: Domain[] = [
  {
    eyebrow: "Financial Services",
    title: "Accounts & Money Movement",
    description:
      "Multi-currency accounts, structured payment lifecycles and programmable money movement with a canonical ledger underneath every transaction.",
    points: ["Accounts", "Payments", "Ledger", "Money movement"],
    href: "/platform/payments",
  },
  {
    eyebrow: "Treasury & Settlement",
    title: "Treasury & Settlement",
    description:
      "Positions, liquidity and allocations alongside a full settlement engine with reconciliation, exceptions and evidence at every state transition.",
    points: ["Positions", "Settlement", "Reconciliation", "Exceptions"],
    href: "/platform/treasury",
  },
  {
    eyebrow: "Intelligence",
    title: "QYXai Intelligence",
    description:
      "Reasoning grounded in system state and document evidence — clearly separating authoritative state from analysis, inference and drafts.",
    points: ["Ask", "Analyze", "Draft", "Agents"],
    href: "/platform/qyxai",
  },
  {
    eyebrow: "Core Platform",
    title: "Identity, Wallets & Assets",
    description:
      "Verifiable identity, secure wallets and a general asset model — approvals, permissions and networks without ever exposing private keys.",
    points: ["Identity", "Wallets", "Assets", "Approvals"],
    href: "/platform/wallets",
  },
  {
    eyebrow: "Markets",
    title: "QYX20 Markets",
    description:
      "Professional market workspaces with streaming data and advanced charting — one financial capability among many, not the whole platform.",
    points: ["Charts", "Order flow", "Watchlists", "Analysis"],
    href: "/platform/markets",
  },
  {
    eyebrow: "Developer Platform",
    title: "Developer Infrastructure",
    description:
      "APIs, SDKs, webhooks and typed environments so teams can build directly on QYX20 primitives with credentials scoped per application.",
    points: ["APIs", "SDKs", "Webhooks", "Environments"],
    href: "/developer",
  },
]

export const ECOSYSTEM = [
  { name: "QYX20 Platform", role: "Unified financial surface" },
  { name: "QYXai", role: "Intelligence layer" },
  { name: "QYX Markets", role: "Market workspaces" },
  { name: "QYX Marketplace", role: "Assets, apps & integrations" },
  { name: "QYX Developer", role: "APIs & SDKs" },
  { name: "QYX Treasury", role: "Institutional operations" },
]

export const ROADMAP = [
  { phase: "Foundation", status: "Live", detail: "Identity, ledger, accounts and the core platform shell." },
  { phase: "Money Movement", status: "In progress", detail: "Payment lifecycles, settlement and reconciliation." },
  { phase: "Intelligence", status: "In progress", detail: "QYXai evidence-grounded reasoning across domains." },
  { phase: "Developer", status: "Preview", detail: "Public APIs, SDKs, webhooks and environments." },
  { phase: "Institutional", status: "Planned", detail: "Treasury operations, governance and controls." },
]

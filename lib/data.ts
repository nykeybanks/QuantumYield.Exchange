export type NavItem = {
  label: string
  columns?: { title: string; links: { label: string; href: string; description?: string }[] }[]
}

export const navItems: NavItem[] = [
  {
    label: "Platform",
    columns: [
      {
        title: "Core",
        links: [
          { label: "Overview", href: "#top", description: "The QYX20 gateway at a glance" },
          { label: "Wallets", href: "#financial-flow", description: "Non-custodial and smart accounts" },
          { label: "Settlement", href: "#financial-flow", description: "Proposed settlement flow" },
        ],
      },
      {
        title: "Experience",
        links: [
          { label: "Transaction Experience", href: "#features", description: "Planned transaction model" },
          { label: "Cross-Chain", href: "#features", description: "Unified multi-network protocol" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [{ title: "By need", links: [
      { label: "Enterprise Security", href: "#security", description: "Multi-layer protection" },
      { label: "DeFi Integration", href: "#features", description: "Staking, yield, governance" },
      { label: "Payments", href: "#financial-flow", description: "Routing and reconciliation" },
    ] }],
  },
  {
    label: "Technology",
    columns: [{ title: "Infrastructure", links: [
      { label: "Architecture", href: "#architecture", description: "Cloud-native, API-first" },
      { label: "Control & Data Plane", href: "#control-data-plane", description: "Governed execution" },
      { label: "Security Layers", href: "#security", description: "Security-by-design" },
    ] }],
  },
  {
    label: "Portals",
    columns: [
      { title: "Gateways", links: [
        { label: "QYXai — AI Gateway", href: "#portals" },
        { label: "QYXdx — Data Exchange", href: "#portals" },
        { label: "QYXvr — Virtual Reality", href: "#portals" },
        { label: "QYXar — Augmented Reality", href: "#portals" },
      ] },
      { title: "Infrastructure", links: [
        { label: "QYXcc — Computing / Cloud", href: "#portals" },
        { label: "QYXds — Data Storage", href: "#portals" },
        { label: "QYXnc — Network / Connectivity", href: "#portals" },
        { label: "QYXes — Energy / Sustainability", href: "#portals" },
      ] },
    ],
  },
  {
    label: "Developers",
    columns: [{ title: "Build", links: [
      { label: "API Access", href: "#developers", description: "REST & event-driven APIs" },
      { label: "SDKs", href: "#developers", description: "Typed client libraries" },
      { label: "Documentation", href: "#developers", description: "QYX20 Documentation" },
    ] }],
  },
  {
    label: "Resources",
    columns: [{ title: "Learn", links: [
      { label: "Tutorials", href: "#developers" },
      { label: "Sample Applications", href: "#developers" },
      { label: "Testing Consoles", href: "#developers" },
    ] }],
  },
]

export type ValueProp = {
  title: string
  short: string
  detail: string
}

export const valueProps: ValueProp[] = [
  {
    title: "Security by Design",
    short: "A proposed layered approach to identity, permissions, and data protection.",
    detail: "Security principles guide the concept. Controls, audits, and independent validation are not represented as complete.",
  },
  {
    title: "Considered Execution",
    short: "A design focused on clear transaction states and understandable costs.",
    detail: "Settlement performance and fees depend on future implementation and network selection. No performance guarantees are made.",
  },
  {
    title: "Connected Experiences",
    short: "A shared interface concept for navigating multiple networks and services.",
    detail: "Cross-network capabilities are planned. No bridges, asset transfers, or live connections are available in this prototype.",
  },
]

export type Feature = {
  title: string
  description: string
  status: string
}

export const features: Feature[] = [
  { title: "Transaction Experience", description: "A planned approach to clear fees and sponsored transactions. Sponsorship rules, supported networks, and costs remain to be defined.", status: "CONCEPT" },
  { title: "Cross-Chain Integration", description: "A proposed shared interface across blockchain networks. Supported networks and bridge providers are not yet verified.", status: "PLANNED" },
  { title: "Layered Security", description: "Design priorities include scoped permissions, multi-signature controls, and recovery. No completed audit or security certification is claimed.", status: "DESIGN PRIORITY" },
  { title: "Settlement Visibility", description: "A concept for tracking execution, confirmation, and reconciliation. Settlement speed depends on the selected network and implementation.", status: "CONCEPT" },
]

export type TokenMetric = {
  label: string
  value: string
  detail: string
}

export const tokenMetrics: TokenMetric[] = [
  { label: "Total Supply", value: "TBD", detail: "No verified token supply specification is published in this prototype." },
  { label: "Circulating Supply", value: "Unverified", detail: "No live chain data is connected. This interface does not report circulation." },
  { label: "Distribution", value: "TBD", detail: "Allocation and distribution terms require an approved specification." },
  { label: "Token Utility", value: "Concept", detail: "Utility and governance are exploratory concepts, not available services or an investment offer." },
]

export type Milestone = {
  quarter: string
  title: string
  items: string[]
  status: "Prototype" | "Planned"
}

export const roadmap: Milestone[] = [
  { quarter: "PHASE 01", title: "Experience Foundation", items: ["Canonical brand system", "Responsive interface", "Interactive concept explorer"], status: "Prototype" },
  { quarter: "PHASE 02", title: "Platform Definition", items: ["Architecture specification", "Network evaluation", "Security requirements"], status: "Planned" },
  { quarter: "PHASE 03", title: "Integration Research", items: ["Sandbox validation", "Provider evaluation", "Independent review"], status: "Planned" },
  { quarter: "PHASE 04", title: "Release Readiness", items: ["Operational validation", "Documentation", "Release criteria — dates TBD"], status: "Planned" },
]

export type Portal = {
  id: string
  name: string
  category: string
  description: string
  capabilities: string[]
}

export const portals: Portal[] = [
  {
    id: "QYXai",
    name: "QYXai",
    category: "Artificial Intelligence Gateway",
    description:
      "Advanced machine learning and AI integration for predictive analytics, automated trading strategies, and intelligent contract optimization.",
    capabilities: ["Neural Network Analysis", "Predictive Modeling", "Smart Contract AI", "Automated Optimization"],
  },
  {
    id: "QYXdx",
    name: "QYXdx",
    category: "Data Exchange",
    description:
      "Seamless data exchange and API integration hub connecting QYX20 with external systems, oracles, and real-world data sources.",
    capabilities: ["Real-time Data Feeds", "Oracle Integration", "API Marketplace", "Cross-Platform Sync"],
  },
  {
    id: "QYXvr",
    name: "QYXvr",
    category: "Virtual Reality Interface",
    description:
      "Immersive VR environment for blockchain visualization, virtual meetings, and 3D data exploration in the metaverse.",
    capabilities: ["3D Blockchain Visualization", "Virtual Conferences", "Immersive Trading", "Metaverse Integration"],
  },
  {
    id: "QYXar",
    name: "QYXar",
    category: "Augmented Reality System",
    description:
      "AR-enhanced mobile experience overlaying blockchain data onto the real world for intuitive interaction and visualization.",
    capabilities: ["AR Data Overlay", "Mobile-First Design", "Real-World Integration", "Gesture Controls"],
  },
  {
    id: "QYXcc",
    name: "QYXcc",
    category: "Computing / Cloud",
    description:
      "Decentralized computing power for complex calculations, rendering, and AI model training across the QYX20 network.",
    capabilities: ["GPU/CPU Sharing", "Distributed Processing", "Render Farms", "AI Training Clusters"],
  },
  {
    id: "QYXds",
    name: "QYXds",
    category: "Data Storage",
    description:
      "Secure, distributed data storage solution with encryption, redundancy, and instant retrieval across the blockchain.",
    capabilities: ["IPFS Integration", "Encrypted Storage", "Data Redundancy", "Instant Retrieval"],
  },
  {
    id: "QYXnc",
    name: "QYXnc",
    category: "Network / Connectivity",
    description:
      "Core networking layer managing node communication, consensus mechanisms, and cross-chain interoperability.",
    capabilities: ["Node Management", "Consensus Protocol", "Cross-Chain Bridges", "Network Monitoring"],
  },
  {
    id: "QYXes",
    name: "QYXes",
    category: "Energy / Sustainability Hub",
    description:
      "Green blockchain initiative tracking carbon credits, renewable energy certificates, and sustainable mining operations.",
    capabilities: ["Carbon Tracking", "Green Mining", "Energy Credits", "Sustainability Metrics"],
  },
]

export const architectureLayers = [
  { label: "Applications", detail: "User-facing experiences built on the QYX20 gateway." },
  { label: "AI Services", detail: "Intelligent services powering optimization and analysis." },
  { label: "Business Services", detail: "Domain logic for payments, wallets and workflows." },
  { label: "Core Platform", detail: "The unified QuantumYield platform runtime." },
  { label: "API Gateway", detail: "API-first entry point for all platform capabilities." },
  { label: "Service Mesh", detail: "Secure, observable service-to-service communication." },
  { label: "Runtime", detail: "Event-driven execution environment." },
  { label: "Containers", detail: "Portable, isolated workload units." },
  { label: "Operating Systems", detail: "Hardened base for platform workloads." },
  { label: "Cloud Infrastructure", detail: "Cloud-native foundation across regions." },
]

export const financialFlow = [
  { label: "Accounts", detail: "Identity-linked account primitives." },
  { label: "Wallets", detail: "Custodial and non-custodial wallet management." },
  { label: "Assets", detail: "Tokenized and native asset representation." },
  { label: "Treasury", detail: "Reserve and treasury operations." },
  { label: "Liquidity", detail: "Liquidity provisioning and routing." },
  { label: "Payments", detail: "Inbound and outbound value movement." },
  { label: "Routing", detail: "Optimal path selection across networks." },
  { label: "Settlement", detail: "Finalization of value transfer." },
  { label: "Ledger", detail: "Immutable record of state." },
  { label: "Reconciliation", detail: "Continuous balance verification." },
  { label: "Reporting", detail: "Transparent, exportable insight." },
]

export const controlPlane = [
  "Policies",
  "Configuration",
  "Governance",
  "Identity Governance",
  "Deployment",
  "Infrastructure Management",
]

export const dataPlane = [
  "API Requests",
  "Payments",
  "Wallet Operations",
  "Workflows",
  "Analytics",
  "AI Execution",
  "Business Transactions",
]

export const securityLayers = [
  { label: "Identity", detail: "Establish who is acting within the system." },
  { label: "Authentication", detail: "Verify the acting identity." },
  { label: "Authorization", detail: "Grant scoped permissions." },
  { label: "Encryption", detail: "Protect data in transit and at rest." },
  { label: "Policies", detail: "Enforce organizational rules." },
  { label: "Monitoring", detail: "Observe activity continuously." },
  { label: "Audit", detail: "Maintain a verifiable trail." },
  { label: "Recovery", detail: "Restore safely when needed." },
]

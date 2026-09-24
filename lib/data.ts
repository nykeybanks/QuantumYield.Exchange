export type NavItem = {
  label: string
  columns?: { title: string; links: { label: string; description?: string }[] }[]
}

export const navItems: NavItem[] = [
  {
    label: "Platform",
    columns: [
      {
        title: "Core",
        links: [
          { label: "Overview", description: "The QYX20 gateway at a glance" },
          { label: "Wallets", description: "Non-custodial and smart accounts" },
          { label: "Settlement", description: "Near-instant transaction finality" },
        ],
      },
      {
        title: "Experience",
        links: [
          { label: "Gasless Transactions", description: "Meta-transaction relayer" },
          { label: "Cross-Chain", description: "Unified multi-network protocol" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "By need",
        links: [
          { label: "Enterprise Security", description: "Multi-layer protection" },
          { label: "DeFi Integration", description: "Staking, yield, governance" },
          { label: "Payments", description: "Routing and reconciliation" },
        ],
      },
    ],
  },
  {
    label: "Technology",
    columns: [
      {
        title: "Infrastructure",
        links: [
          { label: "Architecture", description: "Cloud-native, API-first" },
          { label: "Control & Data Plane", description: "Governed execution" },
          { label: "Security Layers", description: "Security-by-design" },
        ],
      },
    ],
  },
  {
    label: "Portals",
    columns: [
      {
        title: "Gateways",
        links: [
          { label: "QYXai — AI Gateway" },
          { label: "QYXdx — Data Exchange" },
          { label: "QYXvr — Virtual Reality" },
          { label: "QYXar — Augmented Reality" },
        ],
      },
      {
        title: "Infrastructure",
        links: [
          { label: "QYXcc — Computing / Cloud" },
          { label: "QYXds — Data Storage" },
          { label: "QYXnc — Network / Connectivity" },
          { label: "QYXes — Energy / Sustainability" },
        ],
      },
    ],
  },
  {
    label: "Developers",
    columns: [
      {
        title: "Build",
        links: [
          { label: "API Access", description: "REST & event-driven APIs" },
          { label: "SDKs", description: "Typed client libraries" },
          { label: "Documentation", description: "QYX20 Documentation" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        title: "Learn",
        links: [
          { label: "Tutorials" },
          { label: "Sample Applications" },
          { label: "Testing Consoles" },
        ],
      },
    ],
  },
]

export type ValueProp = {
  title: string
  short: string
  detail: string
}

export const valueProps: ValueProp[] = [
  {
    title: "Enterprise Security",
    short: "Military-grade encryption and multi-layer security protocols protect your assets.",
    detail:
      "Identity, authentication, authorization and encryption operate as coordinated layers — security is treated as foundational infrastructure, not an add-on.",
  },
  {
    title: "Lightning Fast",
    short: "Sub-second transaction finality with near-zero gas fees for all users.",
    detail:
      "An optimized consensus mechanism and meta-transaction system deliver responsive settlement while keeping the experience effortless for every user.",
  },
  {
    title: "Cross-Chain Ready",
    short: "Seamlessly interact with multiple blockchain networks from one platform.",
    detail:
      "A unified protocol bridges assets across Ethereum, BSC, Polygon and more, so multi-network activity feels like a single environment.",
  },
]

export type Feature = {
  title: string
  description: string
  status: string
}

export const features: Feature[] = [
  {
    title: "Gasless Transactions",
    description:
      "Execute transactions without worrying about gas fees. Our innovative meta-transaction system covers the costs.",
    status: "FOUNDATION",
  },
  {
    title: "Cross-Chain Integration",
    description: "Bridge assets seamlessly across Ethereum, BSC, Polygon, and more with our unified protocol.",
    status: "INTEGRATION",
  },
  {
    title: "Advanced Security",
    description:
      "Multi-signature wallets, time-locked transactions, and audited smart contracts ensure maximum protection.",
    status: "BUILD",
  },
  {
    title: "Instant Settlement",
    description: "Experience near-instant transaction finality with our optimized consensus mechanism.",
    status: "VALIDATION",
  },
]

export type TokenMetric = {
  label: string
  value: string
  detail: string
}

export const tokenMetrics: TokenMetric[] = [
  {
    label: "Total Supply",
    value: "1,000,000,000",
    detail: "The fixed total supply of QYX, denominated in QYX tokens.",
  },
  {
    label: "Circulating Supply",
    value: "300,000,000",
    detail: "QYX currently circulating across the ecosystem.",
  },
  {
    label: "Max Cap",
    value: "1,000,000,000",
    detail: "The maximum cap of QYX that can ever exist.",
  },
  {
    label: "Token Type",
    value: "Utility & Governance",
    detail: "QYX powers platform utility and on-chain governance participation.",
  },
]

export type Milestone = {
  quarter: string
  title: string
  items: string[]
  status: "Completed" | "In Progress"
}

export const roadmap: Milestone[] = [
  {
    quarter: "Q4 2025",
    title: "Platform Launch",
    items: ["Mainnet deployment", "Token generation event", "Initial DEX listings"],
    status: "Completed",
  },
  {
    quarter: "Q1 2026",
    title: "Ecosystem Expansion",
    items: ["Cross-chain bridges", "Mobile wallet release", "Partnership announcements"],
    status: "Completed",
  },
  {
    quarter: "Q2 2026",
    title: "DeFi Integration",
    items: ["Staking platform", "Yield farming", "Governance portal"],
    status: "In Progress",
  },
  {
    quarter: "Q3 2026",
    title: "Enterprise Solutions",
    items: ["B2B partnerships", "API marketplace", "Developer grants program"],
    status: "In Progress",
  },
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

export const trustLogos = ["Nvidia", "Column", "GitHub", "Nike", "Lemon Squeezy", "Laravel", "Lilly", "OpenAI"]

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

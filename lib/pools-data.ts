export type RiskLevel = "low" | "medium" | "high"

export type YieldPool = {
  id: string
  vault: string
  protocol: string
  chain: string
  asset: string
  apy: number
  apyChange7d: number
  tvl: number
  risk: RiskLevel
  strategy: string
}

export const yieldPools: YieldPool[] = [
  {
    id: "usdc-stable-router",
    vault: "Stable Router",
    protocol: "Aave v3",
    chain: "Base",
    asset: "USDC",
    apy: 6.42,
    apyChange7d: 0.18,
    tvl: 84_500_000,
    risk: "low",
    strategy: "Auto-compounding lending across correlated stablecoin markets.",
  },
  {
    id: "eth-lst-arb",
    vault: "ETH LST Arbitrage",
    protocol: "Lido + EigenLayer",
    chain: "Ethereum",
    asset: "ETH",
    apy: 9.87,
    apyChange7d: 0.64,
    tvl: 132_900_000,
    risk: "medium",
    strategy: "Restaked liquid staking with delta-neutral basis capture.",
  },
  {
    id: "usdt-perp-basis",
    vault: "Perp Basis Harvester",
    protocol: "GMX v2",
    chain: "Arbitrum",
    asset: "USDT",
    apy: 14.21,
    apyChange7d: -0.92,
    tvl: 41_200_000,
    risk: "high",
    strategy: "Funding-rate arbitrage between spot and perpetual futures.",
  },
  {
    id: "btc-covered-call",
    vault: "BTC Covered Call",
    protocol: "Ribbon",
    chain: "Ethereum",
    asset: "WBTC",
    apy: 8.05,
    apyChange7d: 0.31,
    tvl: 58_300_000,
    risk: "medium",
    strategy: "Weekly covered-call writing routed to the best premium.",
  },
  {
    id: "usdc-quantum-router",
    vault: "Quantum Router Prime",
    protocol: "Multi-protocol",
    chain: "Base",
    asset: "USDC",
    apy: 11.36,
    apyChange7d: 0.47,
    tvl: 97_600_000,
    risk: "medium",
    strategy: "Real-time rebalancing across 14 lending and LP venues.",
  },
  {
    id: "sol-lst-yield",
    vault: "SOL Liquid Staking+",
    protocol: "Marinade",
    chain: "Solana",
    asset: "SOL",
    apy: 7.18,
    apyChange7d: -0.12,
    tvl: 23_400_000,
    risk: "low",
    strategy: "Validator-diversified liquid staking with MEV rebates.",
  },
  {
    id: "dai-rwa-tbill",
    vault: "RWA T-Bill Ladder",
    protocol: "Ondo Finance",
    chain: "Ethereum",
    asset: "DAI",
    apy: 5.24,
    apyChange7d: 0.02,
    tvl: 76_800_000,
    risk: "low",
    strategy: "Tokenized short-duration treasury ladder, rolled weekly.",
  },
  {
    id: "usdc-lp-concentrated",
    vault: "Concentrated LP Optimizer",
    protocol: "Uniswap v4",
    chain: "Base",
    asset: "USDC/ETH",
    apy: 18.63,
    apyChange7d: 1.85,
    tvl: 19_700_000,
    risk: "high",
    strategy: "Auto-adjusting concentrated liquidity ranges with hedging.",
  },
]

export function formatUsd(value: number, opts: { compact?: boolean } = {}) {
  if (opts.compact) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value)
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value)
}

export function totalTvl() {
  return yieldPools.reduce((sum, pool) => sum + pool.tvl, 0)
}

export function averageApy() {
  return yieldPools.reduce((sum, pool) => sum + pool.apy, 0) / yieldPools.length
}

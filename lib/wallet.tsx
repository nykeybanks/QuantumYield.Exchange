"use client"

import * as React from "react"

type WalletStatus = "disconnected" | "connecting" | "connected"
type WalletKind = "injected" | "demo" | null

type WalletState = {
  status: WalletStatus
  address: string | null
  chainName: string | null
  balanceEth: number | null
  kind: WalletKind
}

type WalletContextValue = WalletState & {
  connectInjected: () => Promise<void>
  connectDemo: () => void
  disconnect: () => void
  hasInjectedProvider: boolean
}

const WalletContext = React.createContext<WalletContextValue | null>(null)

const CHAIN_NAMES: Record<string, string> = {
  "0x1": "Ethereum",
  "0x89": "Polygon",
  "0xa4b1": "Arbitrum",
  "0x2105": "Base",
  "0xaa36a7": "Sepolia",
}

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

function getInjectedProvider(): any {
  if (typeof window === "undefined") return null
  return (window as any).ethereum ?? null
}

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<WalletState>({
    status: "disconnected",
    address: null,
    chainName: null,
    balanceEth: null,
    kind: null,
  })
  const [hasInjectedProvider, setHasInjectedProvider] = React.useState(false)

  React.useEffect(() => {
    setHasInjectedProvider(!!getInjectedProvider())
  }, [])

  const connectInjected = React.useCallback(async () => {
    const provider = getInjectedProvider()
    if (!provider) return

    setState((s) => ({ ...s, status: "connecting" }))
    try {
      const accounts: string[] = await provider.request({
        method: "eth_requestAccounts",
      })
      const chainId: string = await provider.request({ method: "eth_chainId" })
      const address = accounts[0]

      let balanceEth: number | null = null
      try {
        const balanceHex: string = await provider.request({
          method: "eth_getBalance",
          params: [address, "latest"],
        })
        balanceEth = Number(BigInt(balanceHex)) / 1e18
      } catch {
        balanceEth = null
      }

      setState({
        status: "connected",
        address,
        chainName: CHAIN_NAMES[chainId] ?? `Chain ${chainId}`,
        balanceEth,
        kind: "injected",
      })
    } catch {
      setState((s) => ({ ...s, status: "disconnected" }))
    }
  }, [])

  const connectDemo = React.useCallback(() => {
    setState({
      status: "connected",
      address: "0xA17c8f4e92B6C4F3a11D5C0e9F2B4A6D8C1E3F70",
      chainName: "Base (Demo)",
      balanceEth: 4.8271,
      kind: "demo",
    })
  }, [])

  const disconnect = React.useCallback(() => {
    setState({
      status: "disconnected",
      address: null,
      chainName: null,
      balanceEth: null,
      kind: null,
    })
  }, [])

  const value: WalletContextValue = {
    ...state,
    connectInjected,
    connectDemo,
    disconnect,
    hasInjectedProvider,
  }

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}

export function useWallet() {
  const ctx = React.useContext(WalletContext)
  if (!ctx) throw new Error("useWallet must be used within a WalletProvider")
  return ctx
}

export { shortenAddress }

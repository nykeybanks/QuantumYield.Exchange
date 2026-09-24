import { RadarIcon } from "lucide-react"

import { WalletConnectButton } from "@/components/wallet-connect-button"

export function ConnectGate() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-card/40 px-6 py-20 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <RadarIcon className="size-6" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-medium">Connect a wallet to continue</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Connect a browser wallet or explore with demo mode to see your
          portfolio and deposit into a vault.
        </p>
      </div>
      <WalletConnectButton />
    </div>
  )
}

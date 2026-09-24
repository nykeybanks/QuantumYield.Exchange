"use client"

import { useState } from "react"
import { toast } from "sonner"
import { ChevronDownIcon, LogOutIcon, WalletIcon, FlaskConicalIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { shortenAddress, useWallet } from "@/lib/wallet"

export function WalletConnectButton() {
  const { status, address, chainName, kind, connectInjected, connectDemo, disconnect, hasInjectedProvider } =
    useWallet()
  const [pending, setPending] = useState(false)
  const [open, setOpen] = useState(false)

  if (status === "connected" && address) {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          render={<Button variant="outline" size="default" onClick={() => setOpen((o) => !o)} />}
        >
          <span className="size-1.5 rounded-full bg-primary" data-icon="inline-start" aria-hidden />
          <span className="text-nums">{shortenAddress(address)}</span>
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuGroup>
            <DropdownMenuLabel>
              <div className="flex flex-col gap-0.5">
                <span className="font-normal text-muted-foreground">
                  {kind === "demo" ? "Demo wallet" : "Connected wallet"}
                </span>
                <span className="text-nums text-sm">{chainName}</span>
              </div>
            </DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard?.writeText(address)
                toast.success("Address copied")
                setOpen(false)
              }}
            >
              <CopyIcon data-icon="inline-start" />
              Copy address
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                disconnect()
                setOpen(false)
              }}
            >
              <LogOutIcon data-icon="inline-start" />
              Disconnect
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        render={<Button onClick={() => setOpen((o) => !o)} />}
        disabled={pending}
      >
        <WalletIcon data-icon="inline-start" />
        {pending ? "Connecting…" : "Connect Wallet"}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Choose a connection method</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            disabled={!hasInjectedProvider || pending}
            onClick={async () => {
              setPending(true)
              await connectInjected()
              setPending(false)
              setOpen(false)
            }}
          >
            <WalletIcon data-icon="inline-start" />
            <div className="flex flex-col">
              <span>Browser wallet</span>
              <span className="text-xs text-muted-foreground">
                {hasInjectedProvider ? "MetaMask & injected wallets" : "No injected wallet detected"}
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              connectDemo()
              toast.success("Demo wallet connected", {
                description: "You're viewing simulated portfolio data.",
              })
              setOpen(false)
            }}
          >
            <FlaskConicalIcon data-icon="inline-start" />
            <div className="flex flex-col">
              <span>Demo mode</span>
              <span className="text-xs text-muted-foreground">Explore with simulated funds</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

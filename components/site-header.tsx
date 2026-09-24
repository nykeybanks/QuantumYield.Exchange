import Link from "next/link"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { href: "/#vaults", label: "Vaults" },
  { href: "/#how-it-works", label: "Routing Engine" },
  { href: "/#security", label: "Security" },
]

export function SiteHeader({
  rightSlot,
  showAppLink = true,
}: {
  rightSlot?: React.ReactNode
  showAppLink?: boolean
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {rightSlot}
          {showAppLink ? (
            <Button render={<Link href="/dashboard" />} nativeButton={false}>
              Launch App
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  )
}

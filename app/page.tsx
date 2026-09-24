import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/marketing/hero"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { VaultsPreview } from "@/components/marketing/vaults-preview"
import { SecurityBand } from "@/components/marketing/security-band"
import { CtaBand } from "@/components/marketing/cta-band"

export default function LandingPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <VaultsPreview />
        <SecurityBand />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  )
}

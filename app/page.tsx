import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Statement } from "@/components/statement"
import { TrustSection } from "@/components/trust-section"
import { FutureDefi } from "@/components/future-defi"
import { Features } from "@/components/features"
import { TokenEconomics } from "@/components/token-economics"
import { Roadmap } from "@/components/roadmap"
import { PortalExplorer } from "@/components/portal-explorer"
import { Ecosystem } from "@/components/ecosystem"
import { Architecture } from "@/components/architecture"
import { FinancialFlow } from "@/components/financial-flow"
import { ControlDataPlane } from "@/components/control-data-plane"
import { SecurityLayers } from "@/components/security-layers"
import { DeveloperSection } from "@/components/developer-section"
import { FinalCta } from "@/components/final-cta"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <TrustSection />
        <FutureDefi />
        <Features />
        <TokenEconomics />
        <Roadmap />
        <PortalExplorer />
        <Ecosystem />
        <Architecture />
        <FinancialFlow />
        <ControlDataPlane />
        <SecurityLayers />
        <DeveloperSection />
        <FinalCta />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

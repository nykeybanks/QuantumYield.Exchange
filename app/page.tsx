import { StatusRail } from "@/components/site/status-rail"
import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { PlatformLayers } from "@/components/site/platform-layers"
import { Capabilities } from "@/components/site/capabilities"
import { Architecture } from "@/components/site/architecture"
import { Ecosystem } from "@/components/site/ecosystem"
import { FinalCTA } from "@/components/site/final-cta"
import { SiteFooter } from "@/components/site/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <StatusRail />
      <SiteHeader />
      <main>
        <Hero />
        <PlatformLayers />
        <Capabilities />
        <Architecture />
        <Ecosystem />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  )
}

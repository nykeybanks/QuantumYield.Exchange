import { FrontPage } from "@/components/site/front-page"
import { Card } from "@/components/workspace/primitives"
import { PlatformLayers } from "@/components/site/platform-layers"
import { Capabilities } from "@/components/site/capabilities"
import { Architecture } from "@/components/site/architecture"
import { Ecosystem } from "@/components/site/ecosystem"
import { FinalCTA } from "@/components/site/final-cta"
import { SiteFooter } from "@/components/site/site-footer"

export default function HomePage() {
  return (
    <FrontPage sections={[
          { id: "platform", label: "Platform layers", content: <PlatformLayers /> },
          { id: "capabilities", label: "Capabilities", content: <Card title="Capabilities · concept architecture"><Capabilities /></Card> },
          { id: "architecture", label: "Architecture & evidence", content: <Card title="Architecture · proposed model"><Architecture /></Card> },
          { id: "ecosystem", label: "Ecosystem & roadmap", content: <Card title="Ecosystem · roadmap"><Ecosystem /></Card> },
          { id: "explore", label: "Explore the prototype", content: <Card title="Explore QYX20"><FinalCTA /></Card> },
          { id: "directory", label: "Directory & notices", content: <Card title="Directory & notices"><SiteFooter /></Card> },
    ]} />
  )
}

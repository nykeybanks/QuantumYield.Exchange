import type React from "react"
import type { Metadata, Viewport } from "next"
import { qyxFontVariables } from "@/lib/qyx-fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "QYX20™ — The Connectivity Standard | QuantumYield",
  description:
    "Explore the QYX20 interface prototype by QuantumYield. A unified vision for connected experiences, intelligent services, and Web3 infrastructure. Capabilities are planned, not live financial services.",
  applicationName: "QYX20",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: {
      url: "/brand/qyx/source-05/lockups/app-icon.png",
      type: "image/png",
      sizes: "79x76",
    },
  },
  keywords: ["QYX20", "QuantumYield", "Web3", "DeFi", "blockchain", "gateway"],
  openGraph: {
    title: "QYX20™ — The Connectivity Standard",
    description: "A connected ecosystem, precisely engineered. Explore the QuantumYield interface prototype.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${qyxFontVariables}`}>
      <body className="qyx-root antialiased">
        <a href="#main-content" className="qyx-skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}

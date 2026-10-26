import type { Metadata, Viewport } from "next"
import { Orbitron, Inter, Exo_2, JetBrains_Mono } from "next/font/google"
import { ViewportProvider } from "@/components/viewport/viewport-provider"
import "./globals.css"
import "@/styles/viewport.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "QYX20 — Financial Infrastructure Prototype by QuantumYield",
    template: "%s — QYX20",
  },
  description:
    "QYX20 is QuantumYield's unified platform architecture for identity, accounts, wallets, assets, payments, treasury, settlement, intelligence, interoperability, developer services, data and institutional operations.",
  applicationName: "QYX20",
  keywords: [
    "QYX20",
    "QuantumYield",
    "financial infrastructure",
    "settlement",
    "treasury",
    "payments",
    "developer platform",
  ],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/brand/qyx/source-05/logos/q-emblem-white.png",
    apple: "/brand/qyx/source-05/logos/q-emblem-white.png",
  },
  openGraph: {
    title: "QYX20 — Unified Financial Infrastructure",
    description:
      "QuantumYield's unified platform for identity, assets, payments, settlement, intelligence and developer services.",
    siteName: "QYX20",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} ${exo2.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="qyx-root bg-background text-foreground font-sans antialiased">
        <ViewportProvider>{children}</ViewportProvider>
      </body>
    </html>
  )
}

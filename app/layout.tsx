import type { Metadata, Viewport } from "next"
import { Orbitron, Exo_2, JetBrains_Mono } from "next/font/google"
import "./globals.css"

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
    default: "QYX20 — Unified Financial Infrastructure by QuantumYield",
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
    icon: "/icon.svg",
    apple: "/icon.svg",
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
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${exo2.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="bg-background text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  )
}

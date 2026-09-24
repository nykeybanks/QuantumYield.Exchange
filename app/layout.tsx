import type React from "react"
import type { Metadata, Viewport } from "next"
import { Orbitron, Exo_2 } from "next/font/google"
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

export const metadata: Metadata = {
  title: "QYX20 — QuantumYield Online Web-3 Gateway",
  description:
    "QYX20 combines cutting-edge blockchain technology with user-centric design to create a seamless, secure, and scalable platform for the next generation of decentralized applications.",
  applicationName: "QYX20",
  manifest: "/manifest.webmanifest",
  keywords: ["QYX20", "QuantumYield", "Web3", "DeFi", "blockchain", "gateway"],
  openGraph: {
    title: "QYX20 — QuantumYield Online Web-3 Gateway",
    description: "Luxury-grade Web3 suite for the modern era.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${orbitron.variable} ${exo2.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}

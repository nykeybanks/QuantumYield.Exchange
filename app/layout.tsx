import type { Metadata, Viewport } from "next"
import { Orbitron, Inter, Exo_2, JetBrains_Mono } from "next/font/google"
import { ViewportProvider } from "@/components/viewport/viewport-provider"
import "./globals.css"
import "@/styles/viewport.css"
import "@/styles/public.css"

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
    "Explore QuantumYield's QYX20 interactive prototype. Discover the proposed platform, browse workspaces, and start a guided introduction to money, operations and intelligence.",
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
    title: "QYX20 — Connected. By design.",
    description:
      "Explore QuantumYield's proposed financial platform through an interactive prototype and guided welcome experience. No live financial connections.",
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

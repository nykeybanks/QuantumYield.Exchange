import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json({
    name: "QYX20 — QuantumYield Online Web-3 Gateway",
    short_name: "QYX20",
    description: "Luxury-grade Web3 suite for the modern era.",
    start_url: "/",
    display: "standalone",
    background_color: "#050506",
    theme_color: "#050506",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  })
}

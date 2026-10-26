import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json({
    name: "QYX20™ — The Connectivity Standard",
    short_name: "QYX20",
    description: "QuantumYield interface prototype. Explore a connected ecosystem concept.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    icons: [
      {
        src: "/brand/qyx/source-05/lockups/app-icon.png",
        sizes: "79x76",
        type: "image/png",
        purpose: "any",
      },
    ],
  })
}

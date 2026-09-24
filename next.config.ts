import path from "node:path"
import type { NextConfig } from "next"

// See scripts/noop-next-adapter.mjs: this sandbox's NEXT_ADAPTER_PATH points
// at a file that doesn't exist, which otherwise crashes the dev/build server
// before it can serve anything.
const nextConfig: NextConfig = {
  adapterPath: path.join(process.cwd(), "scripts/noop-next-adapter.mjs"),
  allowedDevOrigins: ["sb-36ri7i9rrhas.vercel.run", "*.vercel.run"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },
}

export default nextConfig

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // [railway] standalone server output; also valid on Vercel
  output: 'standalone',
  // [railway] standalone server output; also valid on Vercel
  output: 'standalone',
  // [railway] ported from vercel.json (Vercel keeps reading vercel.json; Next.js applies these too)
  async headers() {
    return [
      {
        "source": "/(.*)",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "DENY"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          }
        ]
      }
    ];
  },
  trailingSlash: true
};

export default nextConfig;

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 90, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    const sources = 'whatsapp|youtube|facebook|tik-tok|instagram|google'

    return [
      // /{lp}/{fonte} → /{lp}?utm_source={fonte}  (qualquer LP)
      {
        source: `/:lp/:source(${sources})`,
        destination: '/:lp?utm_source=:source',
        permanent: false,
      },
      // /{fonte} → /protecao-veicular?utm_source={fonte}  (fallback sem LP)
      {
        source: `/:source(${sources})`,
        destination: '/protecao-veicular?utm_source=:source',
        permanent: false,
      },
    ]
  },
}

export default nextConfig

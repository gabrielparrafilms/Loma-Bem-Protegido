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
    return [
      { source: '/whatsapp', destination: '/protecao-veicular?utm_source=whatsapp', permanent: false },
      { source: '/youtube', destination: '/protecao-veicular?utm_source=youtube', permanent: false },
      { source: '/facebook', destination: '/protecao-veicular?utm_source=facebook', permanent: false },
      { source: '/tik-tok', destination: '/protecao-veicular?utm_source=tik-tok', permanent: false },
      { source: '/instagram', destination: '/protecao-veicular?utm_source=instagram', permanent: false },
      { source: '/google', destination: '/protecao-veicular?utm_source=google', permanent: false },
    ]
  },
}

export default nextConfig

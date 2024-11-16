/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    craCompat: true,
    optimizeServerReact: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index,follow'
          }
        ]
      }
    ]
  }
};

export default nextConfig;

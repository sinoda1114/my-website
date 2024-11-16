/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'standalone',
  swcMinify: true,
  experimental: {
    runtime: 'edge'
  }
};

export default nextConfig;

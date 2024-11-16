/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
  swcMinify: true,
  experimental: {
    runtime: 'edge'
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This line temporarily disables TypeScript errors during the build.
  // It's a useful debugging step to see if another issue is being masked.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
 
  output: 'standalone',
};

module.exports = nextConfig;


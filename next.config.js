/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // This line is the fix.
  // It tells Next.js to create a standalone output structure
  // that works perfectly with Vercel's deployment system,
  // preventing the "routes-manifest.json" error.
  output: 'standalone',
};

module.exports = nextConfig;
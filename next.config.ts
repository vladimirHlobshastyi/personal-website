import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next.js 15.5.19's segment explorer can emit a missing-key warning on navigation.
  experimental: { devtoolSegmentExplorer: false },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

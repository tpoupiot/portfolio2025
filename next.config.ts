import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.giphy.com',
      },
    ],
  },
};

export default nextConfig;

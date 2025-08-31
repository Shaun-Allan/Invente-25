import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1338',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'strapi',
        port: '1338',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'ssnsnucinvente.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;

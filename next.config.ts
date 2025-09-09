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
      {
        protocol: 'http',
        hostname: 'ssnsnucinvente.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  // Reduce filesystem writes during dev to avoid ENOSPC
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable persistent caching in development to minimize disk usage
      // This prevents Webpack from writing .next/cache pack files
      // See: https://webpack.js.org/configuration/other-options/#cache
      // @ts-ignore - Next's type does not expose full Webpack config
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;

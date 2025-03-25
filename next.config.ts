import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ota-gin.onrender.com',
        port: '',
        pathname: '/static/hotels/**',
        search: '',
      },
    ],
     domains: [
      "ota-gin.onrender.com",
    ],
  },

  skipTrailingSlashRedirect: true, // double slash handling
};

// https://ota-gin.onrender.co

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/my-portfolio',
    assetPrefix: '/my-portfolio',
  } : {})
};

export default nextConfig;

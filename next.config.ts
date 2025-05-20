import type { NextConfig } from "next";
import './globals.css'

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

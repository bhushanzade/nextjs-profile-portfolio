import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : "standalone",
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@ui-kit': path.resolve(__dirname, 'src/ui-kits'),
      '@type': path.resolve(__dirname, 'src/types'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@lib': path.resolve(__dirname, 'src/lib')
    };
    return config;
  },
  images: {
    unoptimized: isProd ? true : false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nullplex.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**'
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

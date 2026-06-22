import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "maddl.agency",
        pathname: "/app/uploads/**",
      },
    ],
  },
};

export default nextConfig;

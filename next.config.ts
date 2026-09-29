import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/cv.pdf", destination: "/api/cv" }];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: import.meta.dirname },
  async rewrites() {
    return [{ source: "/cv.pdf", destination: "/api/cv" }];
  },
};

export default nextConfig;

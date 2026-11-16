import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // noindex, nofollow mientras el sitio no esté listo para buscadores
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;

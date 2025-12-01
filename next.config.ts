import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    domains: [
      "localhost",
      "dr-online-rust.vercel.app",
      "dev.dronline24h.com.br",
      "dronline24h.com.br",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-512765aca21640d886b453f659d50e24.r2.dev",
        port: "",
        pathname: "/dronline/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "dr-online-rust.vercel.app",
      },
      {
        protocol: "https",
        hostname: "dev.dronline24h.com.br",
      },

      {
        protocol: "https",
        hostname: "dronline24h.com.br",
      },
    ],
  },
};

export default withPayload(nextConfig);

import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    domains: ["localhost", "dr-online-rust.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-512765aca21640d886b453f659d50e24.r2.dev",
        port: "",
        pathname: "/dronline/**", // cobre /dronline/Scene-1.mov
        // search: '' // opcional (para controlar querystring)
      },
      {
        protocol: "http",
        hostname: "localhost:3000",
      },
      {
        protocol: "https",
        hostname: "dr-online-rust.vercel.app",
      },
    ],
  },
};

export default withPayload(nextConfig);

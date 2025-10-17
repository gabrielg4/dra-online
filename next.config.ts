import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-512765aca21640d886b453f659d50e24.r2.dev",
        port: "",
        pathname: "/dronline/**", // cobre /dronline/Scene-1.mov
        // search: '' // opcional (para controlar querystring)
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", //Static HTML data
  images: {unoptimized: true},
  basePath: "/tafelrunde-catering",
  assetPrefix: "/tafelrunde-catering/"
  //reactStrictMode: true,
};

export default nextConfig;

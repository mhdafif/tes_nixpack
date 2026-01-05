import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Build standalone server bundle (for Nixpacks/containers)
  /* config options here */
};

export default nextConfig;

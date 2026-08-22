import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // A production build and a running dev server must not share a build
  // directory: the build overwrites the dev server's chunks, which surfaces as
  // a stale or empty stylesheet (black text on the dark canvas). The QA scripts
  // set NEXT_DIST_DIR so they can build and serve alongside `pnpm dev`.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
};

export default nextConfig;

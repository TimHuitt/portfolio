import type { NextConfig } from "next";

const config: NextConfig = {
  async redirects() {
    return [
      { source: "/cases", destination: "/case-study", permanent: false },
      { source: "/project/:id", destination: "/projects/:id", permanent: false },
    ];
  },
};

export default config;

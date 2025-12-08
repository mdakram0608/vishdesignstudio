import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        // Only error on actual errors, not warnings
        ignoreDuringBuilds: false,
    },
};

export default nextConfig;

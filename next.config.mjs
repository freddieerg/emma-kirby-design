/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-243033a27b3d4f2688a28673503147e9.r2.dev',
      },
    ],
  },
};

export default nextConfig;

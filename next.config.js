/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // Add your external domains here
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com",'firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;

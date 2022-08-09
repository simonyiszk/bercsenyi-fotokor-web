/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placekitten.com", "placehold.jp", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;

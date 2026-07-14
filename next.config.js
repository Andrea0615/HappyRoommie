/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No remote image domains are configured: this project intentionally does
  // not fetch data, images, or assets from external domains. All images are
  // local, self-hosted files.
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;

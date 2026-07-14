/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No remote image domains are configured: this project intentionally does
  // not fetch data, images, or assets from happyroomie.mx or any other
  // external/official domain. All images are local, self-hosted files.
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig


const withTM = require("next-transpile-modules")(["@shopify/hydrogen"]);

module.exports = withTM({
  reactStrictMode: false,
  images: {
    domains: ['cdn.shopify.com'],
  },
});
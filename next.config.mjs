/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }
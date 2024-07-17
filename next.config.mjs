/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DOMAIN_FRONTEND: process.env.DOMAIN_FRONTEND
  }
};

export default nextConfig;

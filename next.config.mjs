/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['async_hooks', 'node:async_hooks'],
};

export default nextConfig;

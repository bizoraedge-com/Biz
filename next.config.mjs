/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['async_hooks', 'node:async_hooks'],
  webpack: (config, { isServer, nextRuntime }) => {
    if (isServer && nextRuntime === 'edge') {
      config.externals = [...(config.externals || []), 'async_hooks', 'node:async_hooks'];
    }
    return config;
  },
};

export default nextConfig;

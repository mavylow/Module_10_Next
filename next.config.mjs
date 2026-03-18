/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  output: "export",

  basePath: "/Module_10_Next",

  trailingSlash: true,

  assetPrefix: "/Module_10_Next",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

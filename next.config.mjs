/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/3bornes" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // No basePath needed with custom domain
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

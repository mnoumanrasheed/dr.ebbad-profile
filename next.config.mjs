/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/public-health",
        destination: "/clinical-experience",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

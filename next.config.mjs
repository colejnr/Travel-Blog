/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
      },
    ],
  },

  output: "standalone",
};

export default nextConfig;

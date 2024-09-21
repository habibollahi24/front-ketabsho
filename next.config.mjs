/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // hostname: 'localhost',
        hostname: 'backend-kebsho.onrender.com',
      },
    ],
  },
};

export default nextConfig;

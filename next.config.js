/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gecvaishali.ac.in',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/en/pricing",
        permanent: true,
      },
      {
        source: "/purchase-success",
        destination: "/en/purchase-success",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

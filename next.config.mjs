/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["irohtltdtmjavmknkshk.supabase.co"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/qrcode",
        destination: "/carta",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

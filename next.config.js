/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/hr-dashboard',
        permanent: false
      },
    
    ];
  },
};

module.exports = nextConfig;

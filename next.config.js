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

<<<<<<< HEAD
    async redirects() {
        return [
          {
            source: '/',
            destination: '/hr-dashboard',
            permanent: false
          },
        
        ];
      },
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
}

module.exports = nextConfig
=======
module.exports = nextConfig;
>>>>>>> 1096bcffef2d39ac0eb2199eb0832a9fd5b2e801

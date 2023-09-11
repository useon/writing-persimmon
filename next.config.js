/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    urlImports: ['https://esm.sh']
  },
};

module.exports = nextConfig;

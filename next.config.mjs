/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    SECRET: process.env.SECRET,
    BASE_URL: process.env.BASE_URL,
    MANAGEMENT_API_URL: process.env.MANAGEMENT_API_URL,
    ORDERS_API_URL: process.env.ORDERS_API_URL,
    ZIPCODE_API_URL: process.env.ZIPCODE_API_URL,
  },
}

export default nextConfig

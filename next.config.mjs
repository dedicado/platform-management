/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SECRET: process.env.SECRET ?? '',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? '',
    USER_API_URL: process.env.USER_API_URL ?? '',
    ORGANIZATION_API_URL: process.env.ORGANIZATION_API_URL ?? '',
    ORDER_API_URL: process.env.ORDER_API_URL ?? '',
    ZIPCODE_API_URL: process.env.ZIPCODE_API_URL ?? '',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3.sa-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig

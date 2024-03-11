import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  env: {
    SECRET: process.env.SECRET ?? '',
    BASE_URL: process.env.BASE_URL ?? '',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? '',
    USER_API_URL: process.env.USER_API_URL ?? '',
    ORGANIZATION_API_URL: process.env.ORGANIZATION_API_URL ?? '',
    ORDER_API_URL: process.env.ORDER_API_URL ?? '',
    ZIPCODE_API_URL: process.env.ZIPCODE_API_URL ?? '',
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY ?? '',
    MAPBOX_STYLES: process.env.MAPBOX_STYLES ?? '',
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

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)

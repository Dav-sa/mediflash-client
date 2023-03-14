/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["assets.coingecko.com", "i.seadn.io"],
  },
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
  },
}

export default nextConfig

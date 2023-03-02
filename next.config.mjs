/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["assets.coingecko.com"],
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

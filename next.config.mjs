/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["img.freepik.com", "images.unsplash.com"],
  },
}

export default nextConfig

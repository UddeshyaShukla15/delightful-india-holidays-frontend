import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "delightfulindiaholidays.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.rajasthancab.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/day-tours",
        destination: "/india-day-tours",
      },
      {
        source: "/custom-tours",
        destination: "/custum-tours",
      },
      {
        source: "/luxury-india",
        destination: "/luxury-tour-packages",
      },
      {
        source: "/contact-us",
        destination: "/contact",
      },
    ];
  },
};

export default nextConfig;


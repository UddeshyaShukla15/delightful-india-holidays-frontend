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
  async redirects() {
    return [
      {
        source: "/tours/:id",
        destination: "/:id",
        permanent: true,
      },
    ];
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
      {
        source: "/honeymoon-tour-packages",
        destination: "/honeymoon-tours",
      },
      {
        source: "/group-tours",
        destination: "/group-tour-packages",
      },
      {
        source: "/wildlife-tour-packages",
        destination: "/wildlife-tours",
      },
      {
        source: "/same-day-tour-packages",
        destination: "/same-day-tours",
      },
    ];
  },
};

export default nextConfig;


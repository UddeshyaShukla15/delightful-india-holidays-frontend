"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const posts = [
    {
      id: "shopping-in-agra",
      title: "Shopping in Agra: The Only Guide You Need for Handicrafts, Marble, and Textiles",
      badge: "Travel Guide",
      image: "/assets/images/jaipur-shop-768x367.jpg",
      link: "/blogs/shopping-in-agra",
    },
    {
      id: "international-yoga-festival-rishikesh",
      title: "International Yoga Festival Rishikesh 2027: Dates, Venue, Passes & Guide",
      badge: "Rajasthan Festival",
      image: "/assets/images/international-yoga-festival-768x512.webp",
      link: "/blogs/international-yoga-festival-rishikesh",
    },
    {
      id: "hemis-festival-ladakh",
      title: "Hemis Festival Ladakh 2026: Dates, History, Celebrations & Travel Guide",
      badge: "Ladakh Festival",
      image: "/assets/images/hemis-festival-768x397.webp",
      link: "/blogs/hemis-festival",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading mb-2">News &amp; Blog</h2>
          <div className="font-roboto text-[15px] sm:text-[16px] text-gray-500">
            Read the Blog on The Travel Planners, and Explore Ideas
          </div>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-white rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100"
            >
              {/* Thumbnail with Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Link href={post.link} className="block h-full w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
                <div className="absolute top-3 left-3 bg-[#FFAF19] text-white text-[12px] font-semibold px-3 py-1 rounded-[4px] shadow-sm">
                  {post.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-times text-[20px] sm:text-[22px] font-semibold text-black leading-snug line-clamp-2 mb-4 group-hover:text-[#FFAF19] transition-colors">
                  <Link href={post.link}>{post.title}</Link>
                </h3>

                <div className="mt-auto pt-2">
                  <Link
                    href={post.link}
                    className="font-roboto text-[14px] font-medium text-black hover:text-[#FFAF19] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Read More »</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

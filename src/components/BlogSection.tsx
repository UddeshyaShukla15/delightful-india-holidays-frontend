"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/mockData";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

export default function BlogSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase">
            Travel Insights &amp; Guides
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#192a3d] mt-1 font-serif">
            News &amp; Blog
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Read the Blog on The Travel Planners, and Explore Ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#faf7f2] border border-[#e8dcc8]/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 rounded-full bg-[#192a3d]/85 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  {post.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-[11px] text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-[#c9a766]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 text-[#c9a766]" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#192a3d] group-hover:text-[#c9a766] transition-colors leading-snug line-clamp-2 mb-3">
                  {post.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-3 mb-6 flex-1">
                  {post.excerpt}
                </p>

                <div className="pt-3 border-t border-[#e8dcc8]/70 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-[#c9a766] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Read More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[11px] text-gray-400">By {post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { ChevronRight, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "@/data/mockData";

export default function BlogsPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Extract unique categories for filter
  const categories = ["All", "Travel Guide", "Rajasthan Festival", "Blog", "Destination", "Activities"];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc]">
      <TopBar onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />

      {/* 1. Hero Header Banner (Matches cloned website Blocksy layout) */}
      <section className="bg-[#f2f5f7] border-b border-[#e1e8ed] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#192a3d] font-sans tracking-tight mb-3">
            Blogs
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#E78031] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-semibold">Blogs</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#E78031] text-white shadow-sm"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#E78031] hover:text-[#E78031]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid (3 Columns on Desktop, exactly like cloned site) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Category Pill Tag */}
              <div className="px-5 pt-4 pb-2 flex items-center gap-1.5 text-xs font-bold text-[#c8860a] uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-[#c8860a]" />
                <span>{post.category}</span>
              </div>

              {/* Featured Image (4/3 aspect ratio from cloned site) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Title & Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h2 className="text-lg sm:text-[21px] font-bold text-[#192a3d] group-hover:text-[#E78031] transition-colors leading-snug line-clamp-3 mb-4">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed font-normal">
                  {post.excerpt}
                </p>

                {/* Author & Date Footer Strip */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-gray-700 font-semibold">{post.author}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{post.date}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />

      <EnquiryModal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} />
      <WhatsAppFloatingButton />
    </div>
  );
}

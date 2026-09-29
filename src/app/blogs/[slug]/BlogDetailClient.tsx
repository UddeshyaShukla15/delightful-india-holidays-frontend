"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { BlogPost } from "@/data/mockData";
import {
  Calendar,
  User,
  Clock,
  ChevronRight,
  Share2,
  Tag,
  Phone,
  Mail,
  Send,
  Compass,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface SectionItem {
  type: "p" | "list";
  text?: string;
  items?: string[];
}

interface BlogSection {
  heading?: string;
  level?: string;
  content: SectionItem[];
}

interface BlogDetailData {
  slug: string;
  title: string;
  sections?: BlogSection[];
}

interface BlogDetailClientProps {
  post: BlogPost;
  details?: BlogDetailData;
  relatedPosts: BlogPost[];
}

export default function BlogDetailClient({
  post,
  details,
  relatedPosts,
}: BlogDetailClientProps) {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Quick form state in sidebar
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSidebarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc]">
      <TopBar onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />

      {/* Breadcrumb Bar */}
      <div className="bg-[#f2f5f7] border-b border-[#e1e8ed] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-[#E78031] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/blogs" className="hover:text-[#E78031] transition-colors">
            Blogs
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#c8860a] font-semibold">{post.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 hidden sm:inline" />
          <span className="text-gray-900 font-semibold line-clamp-1 max-w-xs sm:max-w-md hidden sm:inline">
            {post.title}
          </span>
        </div>
      </div>

      {/* Main Layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Article Column (8 cols) */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fdf6ec] border border-[#f0dfc0] text-[#c8860a] text-xs font-bold uppercase tracking-wider mb-4">
              <Tag className="w-3.5 h-3.5" />
              <span>{post.category}</span>
            </div>

            {/* Post Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#192a3d] font-sans leading-tight mb-5">
              {post.title}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 pb-6 mb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#c8860a]" />
                <span className="text-gray-900 font-semibold">{post.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{post.readTime}</span>
              </span>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md mb-10 bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Post Excerpt Highlight Box */}
            {post.excerpt && (
              <div className="p-5 sm:p-6 rounded-2xl bg-[#faf7f2] border-l-4 border-[#c8860a] mb-10 text-gray-700 text-base sm:text-lg leading-relaxed italic">
                &ldquo;{post.excerpt}&rdquo;
              </div>
            )}

            {/* Full Post Content Sections */}
            <div className="prose prose-lg max-w-none space-y-8 text-gray-800 leading-relaxed font-sans">
              {details?.sections && details.sections.length > 0 ? (
                details.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    {section.heading && (
                      <h2
                        className={`font-bold text-[#192a3d] pt-4 tracking-tight ${
                          section.level === "h3"
                            ? "text-xl sm:text-2xl text-[#c8860a]"
                            : "text-2xl sm:text-3xl border-b border-gray-100 pb-2"
                        }`}
                      >
                        {section.heading}
                      </h2>
                    )}

                    {section.content.map((item, iIdx) => {
                      if (item.type === "list" && item.items) {
                        return (
                          <ul key={iIdx} className="space-y-2.5 my-4 pl-2">
                            {item.items.map((li, lIdx) => (
                              <li key={lIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700">
                                <span className="text-[#c8860a] font-bold mt-1">&#8226;</span>
                                <span>{li}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={iIdx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {item.text}
                        </p>
                      );
                    })}
                  </div>
                ))
              ) : (
                <div className="text-gray-700 space-y-4">
                  <p>{post.excerpt}</p>
                </div>
              )}
            </div>

            {/* Share and Action Strip */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Share Post:</span>
                <button
                  onClick={handleShare}
                  className="px-3.5 py-1.5 rounded-lg bg-gray-100 hover:bg-[#E78031] hover:text-white text-gray-700 text-xs font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? "Link Copied!" : "Copy Link"}</span>
                </button>
              </div>

              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="px-5 py-2 rounded-xl bg-[#c8860a] hover:bg-[#b57605] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Plan A Trip To India</span>
              </button>
            </div>
          </article>

          {/* Sidebar Column (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Free Consultation Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#c8860a] to-[#e8a820] absolute top-0 left-0" />
              <h3 className="text-xl font-bold text-[#192a3d] mb-2 font-sans">Free Consultation</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed">
                Connect directly with our local Rajasthan travel experts for customized itinerary planning.
              </p>

              {formSubmitted ? (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-medium flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Thank you! Our travel expert will contact you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSidebarSubmit} className="space-y-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#c8860a]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#c8860a]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#c8860a]"
                  />
                  <textarea
                    rows={3}
                    placeholder="Tell us your travel plans or dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#c8860a]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#E78031] hover:bg-[#d06b20] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send My Enquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Founder Mini Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#f0dfc0] shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#2d7dd2] shadow-sm flex-shrink-0">
                  <Image
                    src="/assets/images/kamal.png"
                    alt="Kamal Kishor - Tour Consultant"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1208] text-base">Kamal Kishor</h4>
                  <div className="text-[11px] font-semibold text-[#c8860a] uppercase tracking-wider">
                    Author &amp; Travel Expert
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium">15+ Years in Rajasthan Tourism</div>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Passionate local travel planner based in Jaisalmer. Creating authentic, tailored journeys across
                Rajasthan and India.
              </p>

              <a
                href="https://wa.me/+918209778044"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Popular Tour Categories */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-base font-bold text-[#192a3d] mb-4 font-sans pb-2 border-b border-gray-100">
                Explore Top Tours
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/golden-triangle-tours"
                    className="flex items-center justify-between text-gray-700 hover:text-[#E78031] transition-colors py-1"
                  >
                    <span>Golden Triangle Tours</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rajasthan-tours"
                    className="flex items-center justify-between text-gray-700 hover:text-[#E78031] transition-colors py-1"
                  >
                    <span>Rajasthan Heritage Tours</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/india-tour-packages"
                    className="flex items-center justify-between text-gray-700 hover:text-[#E78031] transition-colors py-1"
                  >
                    <span>All India Tour Packages</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/india-day-tours"
                    className="flex items-center justify-between text-gray-700 hover:text-[#E78031] transition-colors py-1"
                  >
                    <span>Same Day Sightseeing Tours</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/car-driver-hire"
                    className="flex items-center justify-between text-gray-700 hover:text-[#E78031] transition-colors py-1"
                  >
                    <span>Private Car &amp; Driver Hire</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Related Blog Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-[#192a3d] mb-4 font-sans pb-2 border-b border-gray-100">
                  Recent Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((rPost) => (
                    <Link
                      key={rPost.id}
                      href={`/blogs/${rPost.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={rPost.image}
                          alt={rPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-[#E78031] transition-colors line-clamp-2 leading-snug">
                          {rPost.title}
                        </h4>
                        <span className="text-[11px] text-gray-400 block mt-1">{rPost.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      <Footer />

      <EnquiryModal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} />
      <WhatsAppFloatingButton />
    </div>
  );
}

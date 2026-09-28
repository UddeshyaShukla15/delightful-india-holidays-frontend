"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { customerReviews } from "@/data/mockData";

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(customerReviews.length / reviewsPerPage);

  const displayedReviews = customerReviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase">
              Guest Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#192a3d] mt-1 font-serif">
              What Travelers Say About Us
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Real unfiltered reviews from guests who explored India with our private drivers, guides, and desert camps.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
              className="p-2.5 rounded-full border border-gray-200 text-gray-700 hover:border-[#c9a766] hover:text-[#c9a766] transition-colors cursor-pointer"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs font-semibold text-gray-500 px-2">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
              className="p-2.5 rounded-full border border-gray-200 text-gray-700 hover:border-[#c9a766] hover:text-[#c9a766] transition-colors cursor-pointer"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-2xl bg-[#faf7f2] p-7 border border-[#e8dcc8]/80 shadow-sm hover:shadow-md transition-all relative"
            >
              <Quote className="h-8 w-8 text-[#c9a766]/30 absolute top-6 right-6" />

              <div>
                {/* Platform badge & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      review.platform === "Google"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {review.platform} Review
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-[#e8dcc8]/70">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192a3d] text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                      <span>{review.name}</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 fill-blue-50" />
                    </h4>
                    {review.tourName && (
                      <span className="text-[11px] text-[#c9a766] font-medium block">
                        {review.tourName}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-[11px] text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

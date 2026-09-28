"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { customerReviews } from "@/data/mockData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;
  const maxIndex = Math.max(0, customerReviews.length - reviewsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf7f2] border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Google Reviews Badge Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[16px] text-gray-900">EXCELLENT</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFAF19] text-[#FFAF19]" />
                  ))}
                </div>
              </div>
              <p className="text-[13px] text-gray-500">Based on 61 Google reviews</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <a
              href="https://delightfulindiaholidays.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold text-[#228B48] hover:underline"
            >
              Write a review
            </a>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous reviews"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-700 hover:text-black hover:border-gray-500 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next reviews"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-700 hover:text-black hover:border-gray-500 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Carousel Viewport */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {customerReviews.map((review) => (
              <div
                key={review.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
              >
                <div className="h-full flex flex-col justify-between bg-white rounded-[10px] p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div>
                    {/* Author & Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#192a3d] text-white flex items-center justify-center font-bold text-sm">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-black flex items-center gap-1">
                            <span>{review.name}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
                          </h4>
                          <span className="text-[12px] text-gray-400">{review.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#FFAF19] text-[#FFAF19]" />
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <p className="font-roboto text-[13px] sm:text-[14px] text-gray-700 leading-relaxed line-clamp-5">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Verified {review.platform} Review</span>
                    <span>{review.tourName || "Verified Guest"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

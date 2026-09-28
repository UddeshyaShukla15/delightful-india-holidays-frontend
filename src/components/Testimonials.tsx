"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [googleIndex, setGoogleIndex] = useState(0);
  const [tripAdvisorIndex, setTripAdvisorIndex] = useState(0);
  const [isGooglePaused, setIsGooglePaused] = useState(false);
  const [isTripAdvisorPaused, setIsTripAdvisorPaused] = useState(false);

  // Google Reviews Data matching image
  const googleReviews = [
    {
      id: "g1",
      name: "Lorenzo Fong Pon...",
      time: "1 year ago",
      avatar: "/assets/images/Mr.Padam-Singh.jpeg",
      rating: 5,
      text: "Rauf took me here and it was a very good time! Very knowledgeable, hospitable and genuine",
    },
    {
      id: "g2",
      name: "Play Warrior",
      time: "1 year ago",
      avatar: "/assets/images/icons8-vendor-100.png",
      rating: 5,
      text: "Best Travel Company in jaisalmer",
    },
    {
      id: "g3",
      name: "megumi",
      time: "1 year ago",
      avatar: "/assets/images/icons8-blogger-100.png",
      rating: 5,
      text: "フォート、ハヴェリ観をアレンジしてもらいました。ハイシーズンだったのですごい人混みでしたが、主要どころは抑えら...",
      hasReadMore: true,
    },
    {
      id: "g4",
      name: "Scott Rohlfs",
      time: "1 year ago",
      avatar: "/assets/images/icons8-add-male-user-group-100.png",
      rating: 5,
      text: "Delightful India Holidays created a once in a lifetime experience for our Golden Triangle trip. The private driver was punctual, polite, and made us feel safe throughout.",
      hasReadMore: true,
    },
    {
      id: "g5",
      name: "Aleksandra Nowak",
      time: "1 year ago",
      avatar: "/assets/images/icons8-internship-100.png",
      rating: 5,
      text: "Exceptional service from Kamal and his team! From airport pickup in Delhi to the serene desert dunes in Jaisalmer, everything was perfectly organized.",
      hasReadMore: true,
    },
  ];

  // TripAdvisor Reviews Data matching image
  const tripAdvisorReviews = [
    {
      id: "t1",
      name: "Play W",
      time: "1 year ago",
      avatar: "/assets/images/Romantic-Jaisalmer1-300x200.jpeg",
      rating: 5,
      text: "Tolle erfahrung Dorf in der wüste sehr schön und erfahrung kann kaum durch etwas kaputt gemacht...",
      hasReadMore: true,
    },
    {
      id: "t2",
      name: "Anna P",
      time: "1 year ago",
      avatar: "/assets/images/Jaipur-Agra-img-300x200.jpg",
      rating: 5,
      text: "Excellent day tour Fantastyczne zwiedzanie, świetny przewodnik przygotowany na szybkie...",
      hasReadMore: true,
    },
    {
      id: "t3",
      name: "Andrey N",
      time: "1 year ago",
      avatar: "/assets/images/Agra-Jaipur-Tour-img-300x200.jpg",
      rating: 5,
      text: "Best Tour with the Best Guide Rauf Rauf was incredible, he was very helpful, generous and communicative...",
      hasReadMore: true,
    },
    {
      id: "t4",
      name: "Cindy S",
      time: "1 year ago",
      avatar: "/assets/images/dih-about-us-300x225.jpeg",
      rating: 5,
      text: "Unbelievable experience traveling across Rajasthan. The desert camp was like something out of a fairytale, and our guide treated us like family.",
      hasReadMore: true,
    },
    {
      id: "t5",
      name: "David M",
      time: "2 years ago",
      avatar: "/assets/images/Pink-City-img-300x200.jpg",
      rating: 5,
      text: "The best travel planners in India! Honest pricing, no tourist traps, top condition vehicles, and friendly chauffeurs.",
      hasReadMore: true,
    },
  ];

  const maxGoogle = Math.max(0, googleReviews.length - 3);
  const maxTripAdvisor = Math.max(0, tripAdvisorReviews.length - 3);

  // Automatic Swiping for Google Reviews
  useEffect(() => {
    if (isGooglePaused || maxGoogle <= 0) return;
    const timer = setInterval(() => {
      setGoogleIndex((prev) => (prev < maxGoogle ? prev + 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, [isGooglePaused, maxGoogle]);

  // Automatic Swiping for TripAdvisor Reviews
  useEffect(() => {
    if (isTripAdvisorPaused || maxTripAdvisor <= 0) return;
    const timer = setInterval(() => {
      setTripAdvisorIndex((prev) => (prev < maxTripAdvisor ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [isTripAdvisorPaused, maxTripAdvisor]);

  const handleGooglePrev = () => {
    setGoogleIndex((prev) => (prev > 0 ? prev - 1 : maxGoogle));
  };
  const handleGoogleNext = () => {
    setGoogleIndex((prev) => (prev < maxGoogle ? prev + 1 : 0));
  };

  const handleTripAdvisorPrev = () => {
    setTripAdvisorIndex((prev) => (prev > 0 ? prev - 1 : maxTripAdvisor));
  };
  const handleTripAdvisorNext = () => {
    setTripAdvisorIndex((prev) => (prev < maxTripAdvisor ? prev + 1 : 0));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* ================= ROW 1: GOOGLE REVIEWS (Auto-swiping) ================= */}
        <div
          className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6"
          onMouseEnter={() => setIsGooglePaused(true)}
          onMouseLeave={() => setIsGooglePaused(false)}
        >
          {/* Left Summary Box */}
          <div className="w-full lg:w-[260px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/assets/images/cropped-DIH-1-1-e1718169220798-180x180.webp"
                  alt="Delightful India Holidays"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-[14px] leading-tight text-gray-900">
                  Delightful India
                </p>
                <p className="font-bold text-[14px] leading-tight text-gray-900">
                  Holidays
                </p>
              </div>
            </div>

            {/* 5 Gold Stars */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]"
                />
              ))}
            </div>

            <p className="text-[13px] text-gray-700 mb-4 font-medium">
              61 Google reviews
            </p>

            <a
              href="https://delightfulindiaholidays.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-2 px-4 rounded-[6px] border border-gray-300 text-[13px] font-semibold text-gray-800 hover:bg-gray-50 transition-colors shadow-2xs"
            >
              Write a review
            </a>
          </div>

          {/* Right Carousel with 3 Cards & Arrows */}
          <div className="relative flex-1 w-full overflow-hidden">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={handleGooglePrev}
              aria-label="Previous Google reviews"
              className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 text-gray-700 shadow-md border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-105 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={handleGoogleNext}
              aria-label="Next Google reviews"
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 text-gray-700 shadow-md border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-105 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Cards Track */}
            <div className="overflow-hidden px-4">
              <div
                className="flex transition-transform duration-700 ease-in-out gap-4"
                style={{
                  transform: `translateX(-${googleIndex * 33.333}%)`,
                }}
              >
                {googleReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] flex-shrink-0"
                  >
                    <div className="h-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
                      <div>
                        {/* Top: Avatar, Name, Time, Google Logo */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                              <Image
                                src={rev.avatar}
                                alt={rev.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-[14px] text-gray-900 leading-tight truncate max-w-[130px]">
                                {rev.name}
                              </h4>
                              <p className="text-[12px] text-gray-400">{rev.time}</p>
                            </div>
                          </div>

                          {/* Google G Logo */}
                          <div className="w-5 h-5 flex-shrink-0">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
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
                        </div>

                        {/* Stars + Blue Verified Checkmark */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <div className="flex items-center gap-0.5">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]"
                              />
                            ))}
                          </div>
                          {/* Google Blue Verified Checkmark */}
                          <span className="w-4 h-4 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-[10px]">
                            ✓
                          </span>
                        </div>

                        {/* Review text */}
                        <p className="text-[13px] text-gray-700 leading-relaxed line-clamp-3">
                          {rev.text}
                        </p>
                      </div>

                      {rev.hasReadMore && (
                        <div className="mt-2 text-left">
                          <span className="text-[12px] text-gray-400 cursor-pointer hover:underline">
                            Read more
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= ROW 2: TRIPADVISOR REVIEWS (Auto-swiping) ================= */}
        <div
          className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6"
          onMouseEnter={() => setIsTripAdvisorPaused(true)}
          onMouseLeave={() => setIsTripAdvisorPaused(false)}
        >
          {/* Left Summary Box */}
          <div className="w-full lg:w-[260px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-[22px] tracking-tight text-gray-900 mb-2">
              EXCELLENT
            </h3>

            {/* 5 TripAdvisor Green Circles */}
            <div className="flex items-center gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full bg-[#00AA6C] flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              ))}
            </div>

            <p className="text-[13px] text-gray-700 mb-3 font-medium">
              Based on 79 reviews
            </p>

            {/* TripAdvisor Logo with Owl */}
            <div className="flex items-center justify-center gap-1.5">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#00AA6C">
                <circle cx="8" cy="12" r="3" fill="#00AA6C" />
                <circle cx="8" cy="12" r="1.5" fill="#fff" />
                <circle cx="8" cy="12" r="0.6" fill="#000" />
                <circle cx="16" cy="12" r="3" fill="#00AA6C" />
                <circle cx="16" cy="12" r="1.5" fill="#fff" />
                <circle cx="16" cy="12" r="0.6" fill="#000" />
                <path d="M12 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
                <path d="M12 8c2.5 0 4.8.8 6.7 2.2l1.6-1.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-1.5 1.5c.5 1.1.8 2.3.8 3.5 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-1.2.3-2.4.8-3.5L2.3 10c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.6 1.6C7.2 8.8 9.5 8 12 8z" fill="none" stroke="#00AA6C" strokeWidth="1.2" />
              </svg>
              <span className="font-bold text-[15px] text-gray-900 tracking-tight">
                Tripadvisor
              </span>
            </div>
          </div>

          {/* Right Carousel with 3 Cards & Arrows */}
          <div className="relative flex-1 w-full overflow-hidden">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={handleTripAdvisorPrev}
              aria-label="Previous TripAdvisor reviews"
              className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 text-gray-700 shadow-md border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-105 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={handleTripAdvisorNext}
              aria-label="Next TripAdvisor reviews"
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 text-gray-700 shadow-md border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-105 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Cards Track */}
            <div className="overflow-hidden px-4">
              <div
                className="flex transition-transform duration-700 ease-in-out gap-4"
                style={{
                  transform: `translateX(-${tripAdvisorIndex * 33.333}%)`,
                }}
              >
                {tripAdvisorReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] flex-shrink-0"
                  >
                    <div className="h-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
                      <div>
                        {/* Top: Avatar, Name, Time, TripAdvisor Logo */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                              <Image
                                src={rev.avatar}
                                alt={rev.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-[14px] text-gray-900 leading-tight truncate max-w-[130px]">
                                {rev.name}
                              </h4>
                              <p className="text-[12px] text-gray-400">{rev.time}</p>
                            </div>
                          </div>

                          {/* TripAdvisor Mini Icon */}
                          <div className="w-5 h-5 rounded-full bg-[#00AA6C] flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-[10px] font-bold">🦉</span>
                          </div>
                        </div>

                        {/* TripAdvisor 5 Green Dots + Blue Verified Checkmark */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <div className="flex items-center gap-1">
                            {[...Array(rev.rating)].map((_, i) => (
                              <div
                                key={i}
                                className="w-3.5 h-3.5 rounded-full bg-[#00AA6C] flex items-center justify-center"
                              >
                                <div className="w-1 h-1 rounded-full bg-white" />
                              </div>
                            ))}
                          </div>
                          {/* Verified Blue Checkmark */}
                          <span className="w-4 h-4 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-[10px]">
                            ✓
                          </span>
                        </div>

                        {/* Review text */}
                        <p className="text-[13px] text-gray-700 leading-relaxed line-clamp-3">
                          {rev.text}
                        </p>
                      </div>

                      {rev.hasReadMore && (
                        <div className="mt-2 text-left">
                          <span className="text-[12px] text-gray-400 cursor-pointer hover:underline">
                            Read more
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

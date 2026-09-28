"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TravelToIndiaSection() {
  const [slideIndex, setSlideIndex] = useState(0);

  const guideSlides = [
    {
      title: "Spiritual Travel in India",
      image: "/assets/images/varanasi-image-1024x545.jpg",
    },
    {
      title: "How to travel India by Regions",
      image: "/assets/images/rishikesh-image-2-2-1024x545.jpg",
    },
    {
      title: "Best Time to Travel to India",
      image: "/assets/images/jaipur-2-768x409.jpg",
    },
  ];

  const handlePrev = () => {
    setSlideIndex((prev) => (prev > 0 ? prev - 1 : guideSlides.length - 1));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev < guideSlides.length - 1 ? prev + 1 : 0));
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whyChoosePoints = [
    {
      title: "1. Tailor-Made Holiday Experiences",
      description:
        "Every traveler is unique. We create personalized itineraries based on your interests, travel style, budget, and schedule for a truly unforgettable Indian holiday.",
    },
    {
      title: "2. Local Experts & Trusted Guides",
      description:
        "Our knowledgeable local guides and drivers provide authentic insights, ensuring you discover the true essence of each destination with safety and comfort.",
    },
    {
      title: "3. Quality Service & Transparent Pricing",
      description:
        "We believe in honest hospitality. Enjoy carefully selected accommodations, reliable transport, and clear pricing with no hidden charges.",
    },
    {
      title: "4. 24/7 Travel Assistance",
      description:
        "From the moment you start planning until you return home, our dedicated support team is available around the clock to assist you at every step.",
    },
  ];

  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Part A: Travel to India */}
        <div>
          <h2 className="section-heading mb-6 sm:mb-8">Travel to India</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Create Your Personalized Tour banner - redirects in same tab to /plan-my-tour */}
            <div className="flex flex-col bg-white rounded-[10px] overflow-hidden group shadow-sm border border-gray-100">
              <Link href="/plan-my-tour" className="relative aspect-[16/10] w-full overflow-hidden rounded-[10px] block">
                <Image
                  src="/assets/images/create-your-personalized-tour-1024x683.png"
                  alt="Create Your Personalized Tour"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>
              <div className="p-4 text-center">
                <Link
                  href="/plan-my-tour"
                  className="font-times text-[22px] sm:text-[26px] font-semibold text-black hover:text-[#FFAF19] transition-colors inline-block"
                >
                  Create Your <br />
                  Personalized Tour
                </Link>
              </div>
            </div>

            {/* Right: 3-slide guide carousel */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-full aspect-[16/10] rounded-[10px] overflow-hidden shadow-sm border border-gray-100 group">
                <Image
                  src={guideSlides[slideIndex].image}
                  alt={guideSlides[slideIndex].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Left Arrow */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous guide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-all cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next guide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-all cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
                  </svg>
                </button>
              </div>

              {/* Title under image */}
              <div className="mt-4 text-center">
                <h4 className="font-times text-[22px] sm:text-[24px] font-semibold text-black">
                  {guideSlides[slideIndex].title}
                </h4>
              </div>

              {/* Read More button - scrolls to home page top */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleScrollToTop}
                  className="inline-flex items-center gap-1.5 bg-[#228B48] hover:bg-[#1a7038] text-white text-[14px] font-medium px-6 py-2.5 rounded-[20px] transition-all shadow-sm cursor-pointer"
                >
                  <span>Read More</span>
                  <svg
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 256 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Part B: Why Delightful India Holidays? - All 4 blocks side by side */}
        <div className="pt-8">
          <h2 className="section-heading mb-6">Why Delightful India Holidays?</h2>

          <p className="font-roboto text-[15px] sm:text-[16px] text-gray-700 max-w-4xl mx-auto text-center leading-relaxed mb-12">
            At Delightful India Holidays, we believe every journey should be memorable, comfortable, and truly authentic. Our experienced local travel experts design personalized holidays that showcase India’s rich culture, heritage, wildlife, and breathtaking landscapes. From your first inquiry to the end of your trip, we ensure a seamless travel experience with trusted services, transparent pricing, and dedicated support.
          </p>

          {/* 4 Blocks Side-by-Side in 1 Row on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#faf7f2] p-6 rounded-[10px] border border-[#e8dcc8]/70 hover:shadow-md transition-shadow"
              >
                <h4 className="font-roboto text-[16px] sm:text-[17px] font-semibold text-black mb-3 leading-snug">
                  {point.title}
                </h4>
                <p className="font-roboto text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

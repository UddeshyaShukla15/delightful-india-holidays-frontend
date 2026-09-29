"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Phone, Mail, MapPin } from "lucide-react";

export default function AboutPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />

      {/* 1. Hero Banner for About Us with Background Photo from Main Website */}
      <section className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/images/about-hero-bg.webp"
          alt="About Delightful India Holidays - Golden Sand Dunes Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark Overlay 50% */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Title */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md font-sans">
            About Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. About Delightful India Holidays - Two Column Section (Content on left, Photo on right) */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Content Column (Left) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#192a3d] font-sans leading-tight">
                About Delightful India Holidays
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                Embark on a dream journey across India with ease and comfort, courtesy of DELIGHTFUL INDIA HOLIDAYS. We
                extend a warm invitation to experience the luxury and comfort provided by our world-class tourist
                agency. Our mission is to offer unparalleled value for both your money and time through our
                high-quality services. Our dedicated team members curate attractive tour packages designed to make your
                travels unforgettable, allowing you to fully immerse yourself in the rich art, culture, and heritage of
                India. Backed by a team of industry-qualified professionals, we ensure that your queries receive the
                perfect suggestions, fostering happy and lasting relationships through our exceptional services. Come,
                explore, and cherish the magnificence of India with DELIGHTFUL INDIA HOLIDAYS.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                Our meticulously crafted itineraries cover a vast array of destinations, from the bustling streets of
                Delhi to the serene backwaters of Kerala, the majestic forts and palaces of Rajasthan to the spiritual
                ambiance of Varanasi. We offer customized packages to cater to individual preferences, whether you
                seek adventure, relaxation, cultural immersion, or a mix of everything. Our fleet of modern vehicles
                and experienced drivers guarantees a safe and comfortable journey, while our knowledgeable guides enrich
                your travel experience with fascinating insights into India’s history and traditions. With DELIGHTFUL
                INDIA HOLIDAYS, every moment of your trip is designed to be seamless and enjoyable, ensuring that you
                take home not just memories, but stories to cherish for a lifetime. Come, let us make your Indian
                adventure a delightful reality.
              </p>
            </div>

            {/* Photo Column (Right) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                <Image
                  src="/assets/images/dih-about-us.jpeg"
                  alt="Delightful India Holidays team and tours in front of heritage monument"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Best Travel Agency for Domestic Holiday Tour Booking in India + 4 Boxes */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#faf7f2] border-y border-[#e8dcc8]/60">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#192a3d] font-sans leading-snug">
                Best Travel Agency for Domestic Holiday Tour
                <span className="block mt-1">Booking in India</span>
              </h2>
            </div>

            {/* 4 Counter Boxes Side by Side */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {/* Box 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-[#e8dcc8] shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c8860a] font-serif mb-2 tracking-tight group-hover:scale-105 transition-transform">
                  51000+
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-700">
                  Happy Costumer
                </div>
              </div>

              {/* Box 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-[#e8dcc8] shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c8860a] font-serif mb-2 tracking-tight group-hover:scale-105 transition-transform">
                  20000+
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-700">
                  Tours Booked
                </div>
              </div>

              {/* Box 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-[#e8dcc8] shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c8860a] font-serif mb-2 tracking-tight group-hover:scale-105 transition-transform">
                  350+
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-700">
                  Amazing Tours
                </div>
              </div>

              {/* Box 4 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-[#e8dcc8] shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c8860a] font-serif mb-2 tracking-tight group-hover:scale-105 transition-transform">
                  15+
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-700">
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Founder / Author Card (Exact match of shared image) */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-[1150px] mx-auto bg-white rounded-[20px] shadow-[0_8px_40px_rgba(180,110,20,0.13)] border border-[#f0dfc0] overflow-hidden relative">
            {/* Top golden header bar */}
            <div className="h-[7px] w-full bg-gradient-to-r from-[#c8860a] via-[#e8a820] to-[#c8860a]" />

            <div className="p-6 sm:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 relative">
              {/* Left Column: Avatar & Role Badge */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                {/* Avatar circle with blue border & author badge */}
                <div className="relative w-[115px] h-[115px] rounded-full border-4 border-[#2d7dd2] shadow-[0_4px_20px_rgba(45,125,210,0.28)] bg-gradient-to-br from-[#1a4fa0] to-[#2d7dd2]">
                  <Image
                    src="/assets/images/kamal.png"
                    alt="Kamal Kishor - Tour Consultant"
                    fill
                    className="object-cover rounded-full"
                    sizes="115px"
                  />
                  {/* Author Green Pill Badge */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#138808] text-white text-[11px] font-bold px-3 py-0.5 rounded-full border-2 border-white shadow-sm whitespace-nowrap z-10">
                    Author
                  </span>
                </div>

                {/* Tour Consultant Badge */}
                <span className="mt-1 bg-gradient-to-r from-[#c8860a] to-[#e8a820] text-white text-[11px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase shadow-sm whitespace-nowrap">
                  🐪 TOUR CONSULTANT
                </span>
              </div>

              {/* Right Column: Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Brand label */}
                <p className="text-[#c8860a] text-xs font-bold tracking-[1.5px] uppercase mb-1 flex items-center justify-center md:justify-start gap-2">
                  <span className="inline-block w-4 h-0.5 bg-[#c8860a] rounded-full" />
                  DELIGHTFUL INDIA HOLIDAYS
                </p>

                {/* Heading */}
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1208] mb-3 leading-tight">
                  Hello, I&apos;m Kamal
                </h2>

                {/* Bio text */}
                <p className="text-sm sm:text-[15px] text-[#5a4a30] leading-relaxed mb-5">
                  We believe that every traveler deserves a unique and memorable desert experience tailored to their
                  interests and budget. At <strong className="text-[#c8860a] font-bold">Delightful India Holidays</strong> our experienced local team has been creating unforgettable journeys across Jaisalmer and the Thar Desert for years. From authentic camel safaris and desert camping to Jaisalmer sightseeing tours, cultural experiences, and customized Rajasthan tour packages, we ensure comfort, safety, and genuine Rajasthani hospitality for families, couples, solo travelers, and groups.
                </p>

                {/* 4 Stats Items */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 max-w-2xl">
                  <div className="bg-[#fdf6ec] border border-[#f0dfc0] rounded-xl py-2.5 px-3.5 text-center">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#c8860a] block">
                      15+
                    </span>
                    <span className="text-[11px] font-semibold text-[#9a7d50] uppercase tracking-wider block mt-0.5">
                      YEARS EXP.
                    </span>
                  </div>

                  <div className="bg-[#fdf6ec] border border-[#f0dfc0] rounded-xl py-2.5 px-3.5 text-center">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#c8860a] block">
                      51000+
                    </span>
                    <span className="text-[11px] font-semibold text-[#9a7d50] uppercase tracking-wider block mt-0.5">
                      HAPPY TOURISTS
                    </span>
                  </div>

                  <div className="bg-[#fdf6ec] border border-[#f0dfc0] rounded-xl py-2.5 px-3.5 text-center">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#c8860a] block">
                      350+
                    </span>
                    <span className="text-[11px] font-semibold text-[#9a7d50] uppercase tracking-wider block mt-0.5">
                      TOUR PACKAGES
                    </span>
                  </div>

                  <div className="bg-[#fdf6ec] border border-[#f0dfc0] rounded-xl py-2.5 px-3.5 text-center">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#c8860a] block">
                      5.0★
                    </span>
                    <span className="text-[11px] font-semibold text-[#9a7d50] uppercase tracking-wider block mt-0.5">
                      TRIPADVISOR
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#e8a820] via-[#f0dfc0] to-transparent mb-4" />

                {/* Social links */}
                <p className="text-xs font-bold text-[#9a7d50] uppercase tracking-wider mb-2.5">
                  CONNECT WITH US
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/marvincamelsafari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#1877f2] hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/marvin_camel_safari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="https://x.com/MarvinSafari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-black hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>Twitter / X</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@MarvinCamelSafariDayTours"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#ff0000] hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>YouTube</span>
                  </a>

                  {/* Pinterest */}
                  <a
                    href="https://in.pinterest.com/marvincamelsafari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#e60023] hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.33 1.365-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                    <span>Pinterest</span>
                  </a>

                  {/* TripAdvisor */}
                  <a
                    href="https://www.tripadvisor.in/Attraction_Review-g297667-d26630526-Reviews-Marvin_Camel_Safari_Day_Tours-Jaisalmer_Jaisalmer_District_Rajasthan.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-black bg-[#34e0a1] hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 2.22.724 4.27 1.95 5.932l-1.89 3.018a.6.6 0 0 0 .508.92h18.864a.6.6 0 0 0 .508-.92l-1.89-3.018A9.957 9.957 0 0 0 22 12c0-5.523-4.477-10-10-10zm-5 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-10-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                    </svg>
                    <span>TripAdvisor</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/+918209778044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#25d366] hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Watermark decorative camel */}
              <span className="absolute bottom-16 right-8 text-4xl opacity-15 pointer-events-none select-none hidden md:block">
                🐪
              </span>
            </div>

            {/* Bottom Footer Contact Strip */}
            <div className="bg-[#fdf0dc] border-t border-[#f0dfc0] px-6 sm:px-10 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#7a5c28] font-medium">
              <a
                href="tel:+91-9636784713"
                className="inline-flex items-center gap-2 hover:text-[#c8860a] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c8860a]" />
                <span>+91-9636784713</span>
              </a>

              <a
                href="mailto:delightfulindiaholidays@gmail.com"
                className="inline-flex items-center gap-2 hover:text-[#c8860a] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#c8860a]" />
                <span>delightfulindiaholidays@gmail.com</span>
              </a>

              <span className="inline-flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c8860a]" />
                <span>Kalakar Colony, Jaisalmer, Rajasthan</span>
              </span>
            </div>
          </div>
        </section>

        {/* 5. Meet Our Expert Team (Exact match from main website) */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#e8dcc8]/60">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a] tracking-tight">
                Meet Our Expert Team
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
                Dedicated travel consultants with years of experience crafting unforgettable journeys across India.
                Personalized service, local expertise, and passion for creating magical travel moments.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Team Member 1: Kamal Kishor */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:border-[#ba7a17] hover:shadow-[0_12px_32px_rgba(186,122,23,0.15)] group">
                <div className="relative h-[270px] w-full bg-gradient-to-br from-[#fef3e2] to-[#fce8cc] overflow-hidden">
                  <Image
                    src="/assets/images/kamal.png"
                    alt="Kamal Kishor - Founder"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="p-7 space-y-3">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">Kamal Kishor</h3>
                  <p className="text-sm font-semibold text-[#ba7a17] tracking-wide">Founder &amp; Travel Expert</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    15+ years of expertise in crafting luxury experiences across India with deep knowledge of authentic
                    destinations and cultural nuances.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {["Golden Triangle", "Jaisalmer", "India", "Rajasthan"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#fff3e0] text-[#d99d16] border border-[#ffe0b2] hover:bg-[#ba7a17] hover:text-white px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Team Member 2: Mr.Padam Singh */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:border-[#ba7a17] hover:shadow-[0_12px_32px_rgba(186,122,23,0.15)] group">
                <div className="relative h-[270px] w-full bg-gradient-to-br from-[#fef3e2] to-[#fce8cc] overflow-hidden">
                  <Image
                    src="/assets/images/Mr.Padam-Singh.jpeg"
                    alt="Mr.Padam Singh - Guide"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="p-7 space-y-3">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">Mr.Padam Singh</h3>
                  <p className="text-sm font-semibold text-[#ba7a17] tracking-wide">Guide</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    English-speaking guides from Jaisalmer with over 24 years of experience.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {["Jaisalmer", "Spanish", "Italian", "French", "English"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#fff3e0] text-[#d99d16] border border-[#ffe0b2] hover:bg-[#ba7a17] hover:text-white px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <EnquiryModal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} />
      <WhatsAppFloatingButton />
    </div>
  );
}

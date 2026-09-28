"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { teamMembers, companyInfo } from "@/data/mockData";
import {
  Award,
  Users,
  Compass,
  Star,
  CheckCircle,
  PhoneCall,
  Mail,
  ShieldCheck,
  Heart,
  Globe2,
} from "lucide-react";

export default function AboutPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />

      {/* Hero Banner for About Us */}
      <section className="relative bg-[#192a3d] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-[radial-gradient(#c9a766_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-2 inline-block">
            About Delightful India Holidays
          </span>
          <h1 className="text-3xl sm:text-5xl font-light font-serif mb-4">
            Passionate Local Travel Planners
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Founded in the golden desert sands of Jaisalmer, we curate bespoke, authentic, and luxurious journeys
            across Rajasthan, the Golden Triangle, and every corner of magnificent India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Founder Story: "Hello, I'm Kamal" */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#faf7f2]">
                <Image
                  src="/assets/images/kamal-1024x757.png"
                  alt="Kamal Kishor - Founder of Delightful India Holidays"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-2xl bg-[#192a3d] p-5 text-white shadow-xl border border-[#c9a766]">
                <div className="text-3xl font-extrabold text-[#c9a766] font-serif">15+</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-300">
                  Years of Desert Hospitality
                </div>
              </div>
            </div>

            {/* Story Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a766]">
                Founder&apos;s Message
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#192a3d] font-serif leading-tight">
                Hello, I&apos;m <span className="italic text-[#c9a766] font-normal">Kamal Kishor</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We believe that every traveler deserves a unique and memorable desert experience tailored to their
                interests and budget. At <strong>Delightful India Holidays</strong>, our experienced local team has
                been creating unforgettable journeys across Jaisalmer and the Thar Desert for years.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                From authentic camel safaris and desert camping to Jaisalmer sightseeing tours, cultural experiences,
                and customized Rajasthan and Golden Triangle tour packages, we ensure comfort, safety, and genuine
                Rajasthani hospitality for families, couples, solo travelers, and groups.
              </p>

              {/* 4 Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="rounded-xl bg-[#faf7f2] p-4 text-center border border-[#e8dcc8]">
                  <div className="text-2xl font-bold text-[#192a3d] font-serif">15+</div>
                  <div className="text-[11px] text-gray-600 font-medium">Years Exp.</div>
                </div>
                <div className="rounded-xl bg-[#faf7f2] p-4 text-center border border-[#e8dcc8]">
                  <div className="text-2xl font-bold text-[#192a3d] font-serif">51,000+</div>
                  <div className="text-[11px] text-gray-600 font-medium">Happy Tourists</div>
                </div>
                <div className="rounded-xl bg-[#faf7f2] p-4 text-center border border-[#e8dcc8]">
                  <div className="text-2xl font-bold text-[#192a3d] font-serif">350+</div>
                  <div className="text-[11px] text-gray-600 font-medium">Tour Packages</div>
                </div>
                <div className="rounded-xl bg-[#faf7f2] p-4 text-center border border-[#e8dcc8]">
                  <div className="text-2xl font-bold text-[#c9a766] font-serif flex items-center justify-center gap-0.5">
                    <span>5.0</span>
                    <Star className="h-4 w-4 fill-[#c9a766]" />
                  </div>
                  <div className="text-[11px] text-gray-600 font-medium">TripAdvisor</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setEnquiryModalOpen(true)}
                  className="rounded-xl bg-[#c9a766] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#b8924f] transition-all cursor-pointer"
                >
                  Plan A Tour With Kamal
                </button>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="rounded-xl border border-gray-300 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-50 transition-all inline-flex items-center gap-2"
                >
                  <PhoneCall className="h-4 w-4 text-[#c9a766]" />
                  <span>{companyInfo.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Expert Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf7f2] border-t border-[#e8dcc8]/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase">
                Experienced Guides &amp; Planners
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#192a3d] mt-1 font-serif">
                Meet Our Expert Team
              </h2>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Dedicated travel consultants with years of experience crafting unforgettable journeys across India.
                Personalized service, local expertise, and passion for creating magical travel moments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden border border-[#e8dcc8] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-3 left-3 rounded-full bg-[#192a3d]/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {member.experience}
                    </div>
                  </div>

                  <div className="p-7 space-y-3">
                    <h3 className="text-xl font-bold text-[#192a3d]">{member.name}</h3>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#c9a766]">
                      {member.role}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="pt-3 border-t border-gray-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                        Specialties / Languages
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.specialties.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="rounded-lg bg-[#faf7f2] border border-[#e8dcc8] px-2.5 py-1 text-[11px] font-medium text-gray-700"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
      <WhatsAppFloatingButton />
    </div>
  );
}

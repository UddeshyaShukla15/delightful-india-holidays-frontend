"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { companyInfo, tourPackages } from "@/data/mockData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Calendar,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourId: "",
    travelDate: "",
    adults: 2,
    children: 0,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[#192a3d] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-[radial-gradient(#c9a766_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-2 inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-light font-serif mb-4">
            Plan Your Dream India Journey
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Fill in the details below and our destination specialist Kamal will craft a customized itinerary and
            send a no-obligation quote within 2–4 hours.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a766]">
                Direct Communication
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#192a3d] font-serif mt-1">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Whether you have questions, need local travel tips, or want to create a tailor-made private itinerary,
                please don&apos;t hesitate to contact us.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-4 rounded-2xl bg-[#faf7f2] p-5 border border-[#e8dcc8]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#192a3d] text-[#c9a766] flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Reach us by Phone / WhatsApp
                  </h4>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-base font-bold text-[#192a3d] hover:text-[#c9a766] transition-colors block mt-0.5"
                  >
                    {companyInfo.phoneFormatted}
                  </a>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Available 24x7 for tourist queries &amp; emergencies
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 rounded-2xl bg-[#faf7f2] p-5 border border-[#e8dcc8]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#192a3d] text-[#c9a766] flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Email Address
                  </h4>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-base font-bold text-[#192a3d] hover:text-[#c9a766] transition-colors block mt-0.5"
                  >
                    {companyInfo.email}
                  </a>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Average response time: 2–4 hours
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl bg-[#faf7f2] p-5 border border-[#e8dcc8]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#192a3d] text-[#c9a766] flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Office Address
                  </h4>
                  <p className="text-sm font-bold text-[#192a3d] mt-0.5">
                    {companyInfo.address}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Delightful India Holidays &bull; Jaisalmer, Rajasthan
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 rounded-2xl bg-[#faf7f2] p-5 border border-[#e8dcc8]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#192a3d] text-[#c9a766] flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Operating Hours
                  </h4>
                  <p className="text-sm font-bold text-[#192a3d] mt-0.5">
                    Monday – Sunday: 8:00 AM – 10:00 PM IST
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1">
                    On-trip drivers &amp; guides available 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-5 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-gray-900">Need Instant Itinerary Advice?</h4>
                <p className="text-xs text-gray-600">Chat with Kamal directly on WhatsApp</p>
              </div>
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#25D366] px-4 py-2 text-xs font-bold uppercase text-white hover:bg-[#20ba59] transition-colors"
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* Right Column: Working Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#e8dcc8] shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c9a766]">
                  Custom Tour Planner
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-[#192a3d] font-serif mt-1">
                  Send Your Inquiry
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Tell us where you want to go and our experts will customize every detail.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Enquiry Received!</h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you, <strong className="text-gray-900">{formData.name}</strong>. We have received your inquiry.
                    Our tour coordinator will send a detailed personalized itinerary and quote to{" "}
                    <strong>{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-xl bg-[#c9a766] px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-[#b8924f]"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Tour of Interest */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                      Tour Package of Interest
                    </label>
                    <select
                      value={formData.tourId}
                      onChange={(e) => setFormData({ ...formData, tourId: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                    >
                      <option value="">-- I Want A Fully Customized India Tour --</option>
                      {tourPackages.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.title} ({t.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          required
                          placeholder="you@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Travel Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 96367 84713"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                        Estimated Travel Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                          type="date"
                          value={formData.travelDate}
                          onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                          className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                        Adults (12+ yrs)
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                          type="number"
                          min="1"
                          max="50"
                          value={formData.adults}
                          onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })}
                          className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                        Children (under 12)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={formData.children}
                        onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) || 0 })}
                        className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                      Travel Preferences &amp; Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <textarea
                        rows={4}
                        placeholder="Please tell us about your travel plans, budget, preferred hotels (3★, 4★, 5★, Heritage Palace), places you want to visit, or any special requests..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#c9a766] py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#b8924f] transition-all cursor-pointer"
                    >
                      {loading ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Travel Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-center text-xs text-gray-400">
                    🔒 We protect your privacy. Zero spam. Personalized travel itinerary guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

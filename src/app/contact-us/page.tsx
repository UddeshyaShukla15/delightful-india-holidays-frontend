"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Phone, Mail, MapPin, CheckCircle, Copy, Send } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    occupation: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const countryCodes = [
    { code: "+91", label: "🇮🇳 +91 (India)" },
    { code: "+1", label: "🇺🇸 +1 (USA)" },
    { code: "+44", label: "🇬🇧 +44 (UK)" },
    { code: "+61", label: "🇦🇺 +61 (Australia)" },
    { code: "+971", label: "🇦🇪 +971 (UAE)" },
    { code: "+65", label: "🇸🇬 +65 (Singapore)" },
    { code: "+60", label: "🇲🇾 +60 (Malaysia)" },
    { code: "+49", label: "🇩🇪 +49 (Germany)" },
    { code: "+33", label: "🇫🇷 +33 (France)" },
    { code: "+81", label: "🇯🇵 +81 (Japan)" },
    { code: "+86", label: "🇨🇳 +86 (China)" },
    { code: "+7", label: "🇷🇺 +7 (Russia)" },
    { code: "+55", label: "🇧🇷 +55 (Brazil)" },
    { code: "+27", label: "🇿🇦 +27 (South Africa)" },
    { code: "+234", label: "🇳🇬 +234 (Nigeria)" },
    { code: "+94", label: "🇱🇰 +94 (Sri Lanka)" },
    { code: "+977", label: "🇳🇵 +977 (Nepal)" },
    { code: "+880", label: "🇧🇩 +880 (Bangladesh)" },
  ];

  const workWithUsItems = [
    {
      title: "BLOGGER",
      icon: "/assets/images/icons8-blogger-100.png",
      description:
        "We are a small team that enjoys working closely with our guests to help them plan a personalized trip to India. If you would like to work with us on promoting India to your readers.",
    },
    {
      title: "VENDOR",
      icon: "/assets/images/icons8-vendor-100.png",
      description:
        "We are a small team that enjoys working closely with our guests to help them plan a personalized trip to India. If you are a vendor who can help us make a difference to our guest trips.",
    },
    {
      title: "INTERNSHIP",
      icon: "/assets/images/icons8-internship-100.png",
      description:
        "We are a small team that enjoys working closely with our guests to help them plan a personalized trip to India. If you would like to intern with us and experience how it is to live in India",
    },
    {
      title: "JOIN THE TEAM",
      icon: "/assets/images/icons8-add-male-user-group-100.png",
      description:
        "We are a small team that enjoys working closely with our guests to help them plan a personalized trip to India. If you would like to join our super diverse and super fun team! Get in touch!",
    },
  ];

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      errors.email = "Enter a valid email.";
    }
    if (!formData.occupation) {
      errors.occupation = "Please select an option.";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errors.message = "Please share a brief message.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    return [
      "🌏 *New Enquiry – Delightful India Holidays*",
      "",
      `👤 *Name:* ${formData.fullName.trim()}`,
      `📧 *Email:* ${formData.email.trim()}`,
      `📞 *Contact:* ${formData.countryCode} ${formData.phone.trim()}`,
      `💼 *Occupation:* ${formData.occupation}`,
      "",
      "💬 *Message:*",
      formData.message.trim(),
      "",
      "— Sent via Enquiry Form",
    ].join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setShowModal(true);
  };

  const handleOpenWhatsApp = () => {
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/919636784713?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleCopyDetails = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar />

      {/* Hero Banner: ONLY heading 'Get in Touch' with background image from main website */}
      <section className="relative min-h-[260px] sm:min-h-[350px] flex items-center justify-center overflow-hidden">
        {/* Background Image from main website */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/contact/get-in-touch-hero.png"
            alt="Get in Touch"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle dark gradient overlay to ensure heading contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Heading only */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
          <h1 className="text-4xl sm:text-6xl lg:text-[65px] font-serif font-normal text-white tracking-normal drop-shadow-md">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* Main Content: Left Side Direct Contact & Right Side Form */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Get in Touch & Contact Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#192a3d] mb-4">
                Get in Touch
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-sans max-w-lg">
                We would love to hear from you! Whether you have questions, feedback, or just want to say hello, please don’t hesitate to reach out.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-[#faf8f5] rounded-xl border border-[#ede5d8]">
                <div className="w-12 h-12 rounded-full bg-[#E78031] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-1">
                    Reach us by Phone
                  </div>
                  <a
                    href="tel:+919636784713"
                    className="text-lg font-bold text-gray-900 hover:text-[#E78031] transition-colors"
                  >
                    +91 96367 84713
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-[#faf8f5] rounded-xl border border-[#ede5d8]">
                <div className="w-12 h-12 rounded-full bg-[#E78031] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:delightfulindiaholidays@gmail.com"
                    className="text-lg font-semibold text-gray-900 hover:text-[#E78031] transition-colors break-all"
                  >
                    delightfulindiaholidays@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 bg-[#faf8f5] rounded-xl border border-[#ede5d8]">
                <div className="w-12 h-12 rounded-full bg-[#E78031] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-1">
                    Address
                  </div>
                  <p className="text-base font-medium text-gray-900">
                    Near Airforce Circle, Dhibba Para, Jaisalmer
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[260px] w-full">
              <iframe
                title="Delightful India Holidays Location"
                src="https://maps.google.com/maps?q=Delightful%20India%20Holidays&t=m&z=10&output=embed&iwloc=near"
                className="w-full h-full border-0"
                loading="lazy"
                aria-label="Delightful India Holidays"
              />
            </div>
          </div>

          {/* Right Column: Form Card matching main website */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[20px] shadow-[0_8px_48px_rgba(92,61,30,0.13),0_2px_8px_rgba(92,61,30,0.07)] border border-[#ede5d8] overflow-hidden">
              {/* Form Card Header */}
              <div className="bg-gradient-to-br from-[#5C3D1E] via-[#482b13] to-[#3A2010] text-white p-7 sm:p-9 relative overflow-hidden">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8741A]" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F5E6CC]">
                    Delightful India Holidays
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mb-2">
                  Plan Your <span className="italic text-[#F5C97A]">Dream</span>
                  <br />
                  India Journey
                </h2>
                <p className="text-sm text-white/80 font-light font-sans max-w-sm">
                  Fill in your details and we&apos;ll craft a tailor-made experience just for you.
                </p>
              </div>

              {/* Sparkle Divider */}
              <div className="flex items-center gap-3 px-7 sm:px-9 pt-5">
                <div className="flex-1 h-[1px] bg-[#DFC9A0]" />
                <span className="text-[#C9921A] text-sm">✦</span>
                <div className="flex-1 h-[1px] bg-[#DFC9A0]" />
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="p-7 sm:p-9 space-y-4 font-sans">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5C3D1E] mb-1.5">
                    Full Name <span className="text-[#E8741A]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: "" });
                    }}
                    placeholder="e.g. Ravi Sharma"
                    className={`w-full bg-[#FDF6EC] border ${
                      formErrors.fullName ? "border-[#C0392B] bg-[#FEF2F0]" : "border-[#DFC9A0]"
                    } rounded-xl px-4 py-2.5 text-sm text-[#1E1410] focus:border-[#E8741A] focus:bg-white focus:ring-2 focus:ring-[#E8741A]/20 outline-none transition-all`}
                  />
                  {formErrors.fullName && (
                    <p className="text-xs text-[#C0392B] mt-1 font-medium">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5C3D1E] mb-1.5">
                    Email Address <span className="text-[#E8741A]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: "" });
                    }}
                    placeholder="you@example.com"
                    className={`w-full bg-[#FDF6EC] border ${
                      formErrors.email ? "border-[#C0392B] bg-[#FEF2F0]" : "border-[#DFC9A0]"
                    } rounded-xl px-4 py-2.5 text-sm text-[#1E1410] focus:border-[#E8741A] focus:bg-white focus:ring-2 focus:ring-[#E8741A]/20 outline-none transition-all`}
                  />
                  {formErrors.email && (
                    <p className="text-xs text-[#C0392B] mt-1 font-medium">{formErrors.email}</p>
                  )}
                </div>

                {/* Occupation */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5C3D1E] mb-1.5">
                    Occupation <span className="text-[#E8741A]">*</span>
                  </label>
                  <select
                    value={formData.occupation}
                    onChange={(e) => {
                      setFormData({ ...formData, occupation: e.target.value });
                      if (formErrors.occupation) setFormErrors({ ...formErrors, occupation: "" });
                    }}
                    className={`w-full bg-[#FDF6EC] border ${
                      formErrors.occupation ? "border-[#C0392B] bg-[#FEF2F0]" : "border-[#DFC9A0]"
                    } rounded-xl px-4 py-2.5 text-sm text-[#1E1410] focus:border-[#E8741A] focus:bg-white focus:ring-2 focus:ring-[#E8741A]/20 outline-none transition-all cursor-pointer`}
                  >
                    <option value="">— Select —</option>
                    <option value="Blogger">Blogger</option>
                    <option value="Vendor">Vendor</option>
                    <option value="Video Editor">Video Editor</option>
                    <option value="Business">Business</option>
                    <option value="B2B">B2B</option>
                    <option value="Other">Other</option>
                  </select>
                  {formErrors.occupation && (
                    <p className="text-xs text-[#C0392B] mt-1 font-medium">{formErrors.occupation}</p>
                  )}
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5C3D1E] mb-1.5">
                    Contact Number <span className="text-[#E8741A]">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-36 bg-[#FDF6EC] border border-[#DFC9A0] rounded-xl px-2.5 py-2.5 text-xs sm:text-sm text-[#1E1410] focus:border-[#E8741A] focus:bg-white outline-none cursor-pointer flex-shrink-0"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (formErrors.phone) setFormErrors({ ...formErrors, phone: "" });
                      }}
                      placeholder="98765 43210"
                      className={`flex-1 min-w-0 bg-[#FDF6EC] border ${
                        formErrors.phone ? "border-[#C0392B] bg-[#FEF2F0]" : "border-[#DFC9A0]"
                      } rounded-xl px-4 py-2.5 text-sm text-[#1E1410] focus:border-[#E8741A] focus:bg-white focus:ring-2 focus:ring-[#E8741A]/20 outline-none transition-all`}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-xs text-[#C0392B] mt-1 font-medium">{formErrors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5C3D1E] mb-1.5">
                    Your Message <span className="text-[#E8741A]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: "" });
                    }}
                    placeholder="Tell us about your dream trip — destinations, travel dates, group size, special requests…"
                    className={`w-full bg-[#FDF6EC] border ${
                      formErrors.message ? "border-[#C0392B] bg-[#FEF2F0]" : "border-[#DFC9A0]"
                    } rounded-xl p-4 text-sm text-[#1E1410] focus:border-[#E8741A] focus:bg-white focus:ring-2 focus:ring-[#E8741A]/20 outline-none transition-all resize-y`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-[#C0392B] mt-1 font-medium">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#E8741A] to-[#C9921A] hover:opacity-95 text-white font-semibold py-3.5 px-6 rounded-xl shadow-[0_4px_16px_rgba(232,116,26,0.25)] hover:shadow-[0_6px_24px_rgba(232,116,26,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>
                </div>

                {/* Privacy Policy Disclaimer */}
                <p className="text-center text-xs text-gray-500 pt-2 leading-relaxed">
                  🔒 Your details are shared only with our travel team.
                  <br />
                  By submitting you agree to our{" "}
                  <Link href="/" className="text-[#E8741A] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal matching main website */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 text-center shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-green-100 text-[#27AE60] mx-auto flex items-center justify-center text-3xl mb-4">
              ✅
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#5C3D1E] mb-2">
              Enquiry Received!
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Your details have been submitted. We&apos;ll review it and get back to you shortly via WhatsApp.
            </p>

            <div className="bg-[#FDF6EC] border border-[#DFC9A0] rounded-xl p-4 text-left text-xs sm:text-sm space-y-2 mb-6 font-sans">
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Name:</span>
                <span className="font-semibold text-gray-900">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Email:</span>
                <span className="font-semibold text-gray-900">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Phone:</span>
                <span className="font-semibold text-gray-900">
                  {formData.countryCode} {formData.phone}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Occupation:</span>
                <span className="font-semibold text-gray-900">{formData.occupation}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Open WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={handleCopyDetails}
                className="w-full border border-[#E8741A] text-[#E8741A] hover:bg-[#E8741A]/5 font-semibold py-2.5 px-6 rounded-xl transition-all"
              >
                {copied ? "✅ Copied to clipboard!" : "📋 Copy Details"}
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-xs text-gray-400 hover:text-gray-600 pt-1"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Work with Us Section (4 Items from main website) */}
      <section className="bg-[#FAF8F5] border-t border-[#ede5d8] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1250px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#192a3d] mb-3">
              Work with Us
            </h2>
            <div className="h-0.5 w-16 bg-[#E78031] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workWithUsItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#ede5d8] shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
              >
                <div className="relative w-[100px] h-[100px] mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E78031] uppercase tracking-wide mb-3 font-sans">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (includes Credibility Section + Complete Footer) */}
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

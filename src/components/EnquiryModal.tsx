"use client";

import React, { useState } from "react";
import { X, Send, Calendar, User, Mail, Phone, Users, CheckCircle, MessageSquare } from "lucide-react";
import { tourPackages } from "@/data/mockData";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTourId?: string;
}

export default function EnquiryModal({ isOpen, onClose, selectedTourId }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourId: selectedTourId || "",
    travelDate: "",
    adults: 2,
    children: 0,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync if selectedTourId changes
  React.useEffect(() => {
    if (selectedTourId) {
      setFormData((prev) => ({ ...prev, tourId: selectedTourId }));
    }
  }, [selectedTourId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all border border-[#e8dcc8]">
        {/* Header banner */}
        <div className="bg-[#192a3d] px-6 py-5 text-white flex items-center justify-between border-b border-[#c9a766]/30">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c9a766]">
              Delightful India Holidays
            </span>
            <h3 className="text-xl font-bold text-white">Plan Your Dream Journey</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">Enquiry Received!</h4>
            <p className="text-sm text-gray-600">
              Thank you, <strong className="text-gray-900">{formData.name}</strong>. Our tour specialist Kamal and the
              team will review your request and get back to you within 2–4 hours with a custom itinerary & best price.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="w-full rounded-xl bg-[#c9a766] px-6 py-3 font-semibold text-white hover:bg-[#b8924f] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Tour Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                Tour Package of Interest
              </label>
              <select
                value={formData.tourId}
                onChange={(e) => setFormData({ ...formData, tourId: e.target.value })}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#c9a766] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
              >
                <option value="">-- Custom / General Tour Enquiry --</option>
                {tourPackages.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title} ({t.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2.5 text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
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
                    className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2.5 text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                  />
                </div>
              </div>
            </div>

            {/* Phone & Travel Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2.5 text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2.5 text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                  />
                </div>
              </div>
            </div>

            {/* Guests */}
            <div className="grid grid-cols-2 gap-3">
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
                    className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2 text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none"
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
                  className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1">
                Your Travel Requirements / Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  rows={3}
                  placeholder="Tell us about your travel dates, pickup location, hotel preferences (3★, 4★, Heritage), or special requests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 pl-9 pr-3.5 py-2 text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#c9a766] py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#b8924f] hover:shadow-lg transition-all"
              >
                {loading ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send My Enquiry</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-center text-xs text-gray-500">
              🔒 We respect your privacy. No spam. Instant WhatsApp support available.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

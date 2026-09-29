"use client";

import React, { useState } from "react";
import { Bookmark, Send, User, Mail, Phone, Globe, CheckCircle } from "lucide-react";

interface DestinationEnquiryFormProps {
  cityName?: string;
}

const COUNTRIES = [
  "usa",
  "UK",
  "Australia",
  "Canada",
  "India",
  "malaysia",
  "Singapore",
  "China",
  "Japan",
  "Germany",
  "France",
  "Italy",
  "South Korea",
  "Ireland",
  "Luxembourg",
  "Qatar",
  "Switzerland",
  "San Marino",
  "New Zealand",
  "Norway",
  "Austria",
  "Hong Kong",
  "Sweden",
  "Finland",
  "Spain",
  "russia",
  "hungary",
  "Greenland",
  "Denmark",
  "Iceland",
  "Other",
];

const VEHICLES = [
  "Toyota Etios",
  "Maruti Suzuki Ciaz",
  "Swift Dzire",
  "Toyota Crysta",
  "Luxury Tempo Traveler",
  "35 Seater AC Coach",
  "45 Seater Luxury Volvo",
  "27 Seater Deluxe Coach",
  "18 Seater AC Coach",
  "Toyota Camry",
  "BMW 5 Series",
  "BMW 7 Series",
  "Mercedes S-Class",
  "Audi",
];

const HOTEL_CLASSES = [
  "Five Star Heritage",
  "Five Star Luxury",
  "Five Star",
  "Four Star",
  "Budget Class",
];

const BUDGETS = [
  "Flexible",
  "Less than 500 USD",
  "1000 Above USD",
];

export default function DestinationEnquiryForm({ cityName = "Delhi" }: DestinationEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "usa",
    tripDate: "",
    travellers: "",
    vehicle: "Toyota Etios",
    hotelCategory: "Five Star Heritage",
    tourBudget: "Flexible",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="enquiry-section" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container with orange border exactly like the user's screenshot */}
      <div className="border-[2.5px] border-[#ea7d28] rounded-[4px] bg-white overflow-hidden shadow-sm">
        {/* Top Header Bar: Orange with Bookmark icon & "Enquiry" text. No language icon. */}
        <div className="bg-[#ea7d28] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Bookmark className="w-5 h-5 fill-white text-white" />
            <span className="font-semibold text-lg tracking-wide">Enquiry</span>
          </div>
          {/* No language icon per user instructions */}
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Thank You for Your Enquiry!
              </h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto mb-5 font-light">
                Our tour consultant has received your details and will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="bg-[#ea7d28] text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#d46d20]"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Row 1: Name, Email, Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                <div>
                  <label className="text-[13px] text-gray-800 font-medium mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                    <span>Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:border-[#ea7d28] text-gray-800"
                  />
                </div>

                <div>
                  <label className="text-[13px] text-gray-800 font-medium mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:border-[#ea7d28] text-gray-800"
                  />
                </div>

                <div>
                  <label className="text-[13px] text-gray-800 font-medium mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 fill-gray-800 text-gray-800" />
                    <span>Phone</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:border-[#ea7d28] text-gray-800"
                  />
                </div>
              </div>

              {/* Row 2: Select Country, Trip Date, No of Traveller */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                <div>
                  <label className="text-[13px] text-gray-800 font-medium mb-1.5 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-500" />
                    <span>Select Country</span>
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:border-[#ea7d28] text-gray-800"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[13px] text-gray-800 font-medium mb-1.5 block">
                    Trip Date
                  </label>
                  <input
                    type="text"
                    placeholder="Arrival Date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    value={formData.tripDate}
                    onChange={(e) => setFormData({ ...formData, tripDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:border-[#ea7d28] text-gray-800"
                  />
                </div>

                <div>
                  <label className="text-[13px] text-gray-800 font-medium mb-1.5 block">
                    No of Traveller
                  </label>
                  <input
                    type="text"
                    placeholder="No of Traveller"
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:border-[#ea7d28] text-gray-800"
                  />
                </div>
              </div>

              {/* Row 3: Select Vehicle type, Select Hotel Category, Tour Budget */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                <div>
                  <label className="text-[13px] text-gray-800 font-medium mb-1.5 block">
                    Select Vehicle type
                  </label>
                  <select
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:border-[#ea7d28] text-gray-800"
                  >
                    {VEHICLES.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[13px] text-gray-800 font-medium mb-1.5 block">
                    Select Hotel Category
                  </label>
                  <select
                    value={formData.hotelCategory}
                    onChange={(e) => setFormData({ ...formData, hotelCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:border-[#ea7d28] text-gray-800"
                  >
                    {HOTEL_CLASSES.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[13px] text-gray-800 font-medium mb-1.5 block">
                    Tour Budget
                  </label>
                  <select
                    value={formData.tourBudget}
                    onChange={(e) => setFormData({ ...formData, tourBudget: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:border-[#ea7d28] text-gray-800"
                  >
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="text-[13px] text-gray-800 font-medium mb-1.5 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:border-[#ea7d28] text-gray-800 resize-none"
                />
              </div>

              {/* Submit Button on Bottom Left exactly as in screenshot */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-[#ea7d28] hover:bg-[#d66f22] text-white px-5 py-2.5 rounded-[4px] text-sm font-medium transition-all shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? "Submitting..." : "Enquire Now"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { tourPackages, tourCategories } from "@/data/mockData";
import { Search, SlidersHorizontal, MapPin, Compass } from "lucide-react";

function ToursCatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All Tours";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [durationFilter, setDurationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>(undefined);

  // Sync category if URL parameter changes
  React.useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleOpenEnquiry = (tourId?: string) => {
    setSelectedTourId(tourId);
    setEnquiryModalOpen(true);
  };

  // Filter logic
  const filteredTours = useMemo(() => {
    return tourPackages.filter((tour) => {
      // Category match
      const matchesCategory =
        selectedCategory === "All Tours" || tour.category === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        tour.title.toLowerCase().includes(query) ||
        tour.route.toLowerCase().includes(query) ||
        tour.overview.toLowerCase().includes(query);

      // Duration match
      let matchesDuration = true;
      if (durationFilter === "short") {
        matchesDuration = tour.duration.includes("1 Day") || tour.duration.includes("2 Days") || tour.duration.includes("3 Days") || tour.duration.includes("Same Day") || tour.duration.includes("Full Day");
      } else if (durationFilter === "medium") {
        matchesDuration = tour.duration.includes("4 Days") || tour.duration.includes("5 Days") || tour.duration.includes("6 Days") || tour.duration.includes("7 Days");
      } else if (durationFilter === "long") {
        matchesDuration = tour.duration.includes("8 Days") || tour.duration.includes("9 Days") || tour.duration.includes("10 Days");
      }

      return matchesCategory && matchesSearch && matchesDuration;
    });
  }, [selectedCategory, searchQuery, durationFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar onOpenEnquiry={() => handleOpenEnquiry()} />
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Hero Banner for Tour Listing */}
      <section className="relative bg-[#192a3d] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-[radial-gradient(#c9a766_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-2 inline-block">
            Tailor-Made India Itineraries
          </span>
          <h1 className="text-3xl sm:text-5xl font-light font-serif mb-4">
            India Tour Packages &amp; Sightseeing
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Choose from over 350+ private chauffeured tours across the Golden Triangle, Rajasthan, South India,
            and Jaisalmer desert camps — all fully customizable to your schedule.
          </p>
        </div>
      </section>

      {/* Main Tour Catalog */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filter Toolbar */}
        <div className="bg-[#faf7f2] p-5 rounded-2xl border border-[#e8dcc8] mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by city, tour name, or route..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
              />
            </div>

            {/* Quick Filters: Duration & Sort */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 focus:border-[#c9a766] focus:outline-none"
              >
                <option value="all">All Durations</option>
                <option value="short">Short (1–3 Days)</option>
                <option value="medium">Medium (4–7 Days)</option>
                <option value="long">Extended (8+ Days)</option>
              </select>

              <button
                onClick={() => {
                  setSelectedCategory("All Tours");
                  setSearchQuery("");
                  setDurationFilter("all");
                }}
                className="text-xs text-[#c9a766] hover:underline font-semibold whitespace-nowrap"
              >
                Reset All
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#e8dcc8]/60 no-scrollbar">
            {tourCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#192a3d] text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-gray-500 font-medium">
            Showing <strong className="text-gray-900">{filteredTours.length}</strong> tour packages
            {selectedCategory !== "All Tours" && (
              <span> in <strong className="text-[#c9a766]">{selectedCategory}</strong></span>
            )}
          </p>
        </div>

        {/* Tour Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} onEnquire={handleOpenEnquiry} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl bg-gray-50 border border-dashed border-gray-300">
            <Compass className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800">No matching tour packages found</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
              We couldn&apos;t find any tour matching your search filters. Try clearing your search keyword or changing the category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All Tours");
                setSearchQuery("");
                setDurationFilter("all");
              }}
              className="mt-4 rounded-xl bg-[#c9a766] px-5 py-2 text-xs font-bold uppercase text-white hover:bg-[#b8924f]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        selectedTourId={selectedTourId}
      />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default function ToursPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ToursCatalogContent />
    </Suspense>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Search,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  CheckCircle,
  X,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { tourPackages, TourPackage, tourCategories } from "@/data/mockData";

export default function AdminToursPage() {
  const [tours, setTours] = useState<TourPackage[]>(tourPackages);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Tours");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New tour form state
  const [newTour, setNewTour] = useState({
    title: "",
    category: "Golden Triangle Tours",
    duration: "3 Days / 2 Nights",
    route: "Delhi – Agra – Jaipur",
    startingPrice: "₹9,999",
    overview: "",
    image: "/assets/images/Golden-Triangle-Tour-img-1024x684.jpg",
  });

  const filteredTours = tours.filter((t) => {
    const matchesCategory =
      selectedCategory === "All Tours" || t.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      t.title.toLowerCase().includes(query) ||
      t.route.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const handleDeleteTour = (id: string) => {
    if (confirm("Are you sure you want to remove this tour package from the catalog?")) {
      setTours((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const handleAddTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = newTour.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const createdTour: TourPackage = {
      id: slug || `custom-tour-${Date.now()}`,
      title: newTour.title,
      category: newTour.category,
      duration: newTour.duration,
      route: newTour.route,
      startingPrice: newTour.startingPrice,
      rating: 5.0,
      reviewsCount: 1,
      image: newTour.image,
      overview: newTour.overview,
      highlights: ["Experienced chauffeur with AC car", "Handpicked hotels", "24/7 Support"],
      itinerary: [
        {
          day: 1,
          title: "Arrival and Sightseeing",
          description: newTour.overview || "Begin your personalized tour journey.",
        },
      ],
      inclusions: ["Chauffeured vehicle", "Breakfast", "Guide services"],
      exclusions: ["Monument entries", "Personal expenses"],
    };

    setTours([createdTour, ...tours]);
    setIsAddModalOpen(false);
    setNewTour({
      title: "",
      category: "Golden Triangle Tours",
      duration: "3 Days / 2 Nights",
      route: "Delhi – Agra – Jaipur",
      startingPrice: "₹9,999",
      overview: "",
      image: "/assets/images/Golden-Triangle-Tour-img-1024x684.jpg",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Tour Packages Catalog
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Create, update, or remove tour itineraries displayed on the public site.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#c9a766] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#b8924f] transition-all cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Tour</span>
        </button>
      </div>

      {/* Search & Category Filter */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search tours..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2 text-xs text-slate-900 focus:border-[#c9a766] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none"
          >
            {tourCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <span className="text-xs text-slate-400 whitespace-nowrap">
            {filteredTours.length} packages
          </span>
        </div>
      </div>

      {/* Tours Table */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Tour Package</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Duration &amp; Route</th>
                <th className="py-3 px-4">Starting Price</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTours.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-16 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                        <Image
                          src={t.image}
                          alt={t.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 hover:text-[#c9a766]">
                          {t.title}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          /{t.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                      {t.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-800">{t.duration}</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5 truncate max-w-xs">
                      <MapPin className="h-3 w-3 text-[#c9a766]" />
                      <span>{t.route}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-bold text-slate-900 font-serif">
                    {t.startingPrice}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-1 font-bold text-slate-800">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span>{t.rating.toFixed(1)}</span>
                      <span className="text-[11px] font-normal text-slate-400">
                        ({t.reviewsCount})
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right whitespace-nowrap space-x-2">
                    <Link
                      href={`/${t.id}`}
                      target="_blank"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 inline-block transition-colors"
                      title="View on Public Site"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => handleDeleteTour(t.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Delete Tour"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Tour Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl p-6 border border-slate-200 animate-in fade-in">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Add New Tour Package</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="rounded-full p-1 text-slate-400 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleAddTourSubmit} className="space-y-4 pt-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Tour Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 Days Royal Rajasthan Heritage Tour"
                  value={newTour.title}
                  onChange={(e) => setNewTour({ ...newTour, title: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:border-[#c9a766] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={newTour.category}
                    onChange={(e) => setNewTour({ ...newTour, category: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none"
                  >
                    {tourCategories.filter((c) => c !== "All Tours").map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Duration</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 4 Days / 3 Nights"
                    value={newTour.duration}
                    onChange={(e) => setNewTour({ ...newTour, duration: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Destination Route</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur – Agra – Delhi"
                    value={newTour.route}
                    onChange={(e) => setNewTour({ ...newTour, route: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Starting Price</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹12,500"
                    value={newTour.startingPrice}
                    onChange={(e) => setNewTour({ ...newTour, startingPrice: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Overview &amp; Highlights</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the tour itinerary, attractions, and unique features..."
                  value={newTour.overview}
                  onChange={(e) => setNewTour({ ...newTour, overview: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#c9a766] text-white font-bold hover:bg-[#b8924f]"
                >
                  Save Tour Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

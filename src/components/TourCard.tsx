"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Clock, Star } from "lucide-react";
import { TourPackage } from "@/data/mockData";

interface TourCardProps {
  tour: TourPackage;
  onEnquire?: (tourId: string) => void;
}

export default function TourCard({ tour, onEnquire }: TourCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Tour Image with Hover Zoom */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Link href={`/tours/${tour.id}`} className="block h-full w-full">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>

        {/* Duration badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-[#192a3d]/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm shadow-sm">
          <Clock className="h-3 w-3 text-[#c9a766]" />
          <span>{tour.duration}</span>
        </div>

        {/* Rating badge */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-gray-800 backdrop-blur-sm shadow-sm">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span>{tour.rating.toFixed(1)}</span>
        </div>

        {/* Price tag on image bottom */}
        <div className="absolute bottom-3 right-3 z-10 rounded-lg bg-[#c9a766] px-2.5 py-1 text-xs font-bold text-white shadow-md">
          From {tour.startingPrice}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category tag */}
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#c9a766] mb-1">
          {tour.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#192a3d] group-hover:text-[#c9a766] transition-colors line-clamp-1 mb-2">
          <Link href={`/tours/${tour.id}`}>{tour.title}</Link>
        </h3>

        {/* Route / Destination */}
        <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-4">
          <MapPin className="h-3.5 w-3.5 text-[#c9a766] flex-shrink-0" />
          <span className="truncate">{tour.route}</span>
        </div>

        <p className="text-xs text-gray-500 line-clamp-2 mb-5 flex-1">
          {tour.overview}
        </p>

        {/* Action Buttons Matching Live Site: 'Send Enquery' and 'View Details' */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100 mt-auto">
          <button
            onClick={() => onEnquire && onEnquire(tour.id)}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-[#c9a766] bg-transparent py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-[#c9a766] hover:bg-[#c9a766] hover:text-white transition-all cursor-pointer"
          >
            <span>Send Enquiry</span>
            <ArrowRight className="h-3 w-3" />
          </button>

          <Link
            href={`/tours/${tour.id}`}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#192a3d] py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c9a766] transition-all text-center shadow-sm"
          >
            <span>View Details</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

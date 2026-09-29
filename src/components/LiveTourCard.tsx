"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TourPackage } from "@/data/mockData";

interface LiveTourCardProps {
  tour: TourPackage;
  onEnquire?: (tourId: string) => void;
}

export default function LiveTourCard({ tour, onEnquire }: LiveTourCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-[10px] overflow-hidden transition-all duration-300 group">
      {/* Tour Image with rounded corners and hover zoom */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[10px] bg-gray-100">
        <Link href={`/${tour.id}`} className="block h-full w-full">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col pt-4 pb-2">
        {/* Title */}
        <h3 className="font-times text-[22px] sm:text-[26px] font-semibold text-black text-left leading-snug line-clamp-1 mb-2 hover:text-[#FFAF19] transition-colors">
          <Link href={`/${tour.id}`}>{tour.title}</Link>
        </h3>

        {/* Route with Green Map Marker */}
        <div className="flex items-center gap-2 mb-5">
          <span className="flex-shrink-0 text-[#228B48]">
            <svg
              className="w-4 h-4 fill-[#228B48]"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
            </svg>
          </span>
          <span className="font-roboto text-[15px] sm:text-[16px] font-semibold text-black truncate">
            {tour.route}
          </span>
        </div>

        {/* Action Buttons: Send Enquery and View Details */}
        <div className="flex flex-wrap items-center gap-3 mt-auto">
          {/* Send Enquery Button */}
          <button
            type="button"
            onClick={() => onEnquire && onEnquire(tour.id)}
            className="inline-flex items-center justify-center gap-2 bg-[#228B48] hover:bg-[#1a7038] text-white text-[14px] sm:text-[15px] font-medium px-5 py-2.5 rounded-[20px] transition-all cursor-pointer shadow-sm hover:shadow"
          >
            <span>Send Enquery</span>
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </button>

          {/* View Details Button */}
          <Link
            href={`/${tour.id}`}
            className="inline-flex items-center justify-center gap-2 bg-[#E78031] hover:bg-[#d46d20] text-white text-[14px] sm:text-[15px] font-medium px-5 py-2.5 rounded-[20px] transition-all shadow-sm hover:shadow"
          >
            <span>View Details</span>
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { TourPackage } from "@/data/mockData";
import LiveTourCard from "./LiveTourCard";

interface TourGrid3Props {
  tours: TourPackage[];
  onEnquire?: (tourId: string) => void;
}

export default function TourGrid3({ tours, onEnquire }: TourGrid3Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
      {tours.map((tour) => (
        <LiveTourCard key={tour.id} tour={tour} onEnquire={onEnquire} />
      ))}
    </div>
  );
}

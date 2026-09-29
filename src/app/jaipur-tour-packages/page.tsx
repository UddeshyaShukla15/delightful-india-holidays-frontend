import React from "react";
import { Metadata } from "next";
import DayTourDestinationView, { DestinationData } from "@/components/DayTourDestinationView";
import destinationDataJson from "@/data/dayToursDestinationData.json";

export const metadata: Metadata = {
  title: "Jaipur Tour Packages - Delightful India Holidays",
  description:
    "Explore the Pink City with curated Jaipur Tour Packages. Visit Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, and enjoy desert & heritage excursions.",
};

export default function JaipurTourPackagesPage() {
  const data = (destinationDataJson as Record<string, DestinationData>)["jaipur"];

  return <DayTourDestinationView data={data} />;
}

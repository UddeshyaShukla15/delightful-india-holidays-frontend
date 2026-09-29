import React from "react";
import { Metadata } from "next";
import DayTourDestinationView, { DestinationData } from "@/components/DayTourDestinationView";
import destinationDataJson from "@/data/dayToursDestinationData.json";

export const metadata: Metadata = {
  title: "Agra Tour Packages - Delightful India Holidays",
  description:
    "Discover the beauty of Agra and the Taj Mahal with our Agra Tour Packages. Explore Agra Fort, Mehtab Bagh, Fatehpur Sikri, and day tours from Delhi.",
};

export default function AgraTourPackagesPage() {
  const data = (destinationDataJson as Record<string, DestinationData>)["agra"];

  return <DayTourDestinationView data={data} />;
}

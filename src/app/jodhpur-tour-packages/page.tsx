import React from "react";
import { Metadata } from "next";
import DayTourDestinationView, { DestinationData } from "@/components/DayTourDestinationView";
import destinationDataJson from "@/data/dayToursDestinationData.json";

export const metadata: Metadata = {
  title: "Jodhpur Tour Packages - Delightful India Holidays",
  description:
    "Explore the Blue City with Jodhpur Tour Packages. Visit Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, Mandore Gardens, and Osian desert tours.",
};

export default function JodhpurTourPackagesPage() {
  const data = (destinationDataJson as Record<string, DestinationData>)["jodhpur"];

  return <DayTourDestinationView data={data} />;
}

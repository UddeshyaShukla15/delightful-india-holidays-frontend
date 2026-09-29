import React from "react";
import { Metadata } from "next";
import LuxuryToursClient from "./LuxuryToursClient";

export const metadata: Metadata = {
  title: "Luxury Tour Packages - Delightful India Holidays",
  description:
    "Experience the finest luxury India tours designed for discerning travelers. Explore 30 bespoke luxury packages, heritage palace stays, 5-star hotel partners, private chauffeurs, and customized itineraries across India.",
};

export default function LuxuryTourPackagesPage() {
  return <LuxuryToursClient />;
}

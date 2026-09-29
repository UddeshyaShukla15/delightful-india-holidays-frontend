import React from "react";
import { Metadata } from "next";
import GoldenTriangleClient from "./GoldenTriangleClient";

export const metadata: Metadata = {
  title: "Golden Triangle Tour Packages - Delhi, Agra & Jaipur Tours | Delightful India Holidays",
  description:
    "Explore the best Golden Triangle Tour Packages covering Delhi, Agra, and Jaipur. Discover iconic heritage monuments, Taj Mahal, forts, palaces, and customized tour itineraries.",
};

export default function GoldenTriangleToursPage() {
  return <GoldenTriangleClient />;
}


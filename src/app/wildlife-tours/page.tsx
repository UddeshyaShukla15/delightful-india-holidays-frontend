import React from "react";
import { Metadata } from "next";
import WildlifeClient from "./WildlifeClient";

export const metadata: Metadata = {
  title: "Wildlife Tours India - Tiger Safaris & National Parks | Delightful India Holidays",
  description:
    "Explore thrilling Wildlife Tours in India. Book tiger safaris in Ranthambore, Jim Corbett, Bandhavgarh, and Asiatic lion tracking in Gir National Park.",
};

export default function WildlifeToursPage() {
  return <WildlifeClient />;
}

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { tourPackages } from "@/data/mockData";
import TourDetailClient from "./TourDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tourPackages.map((tour) => ({
    id: tour.id,
  }));
}

export default async function TourDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tour = tourPackages.find((t) => t.id === id);

  if (!tour) {
    notFound();
  }

  // Get 3 related tours from the same category or overall
  const relatedTours = tourPackages
    .filter((t) => t.id !== tour.id && (t.category === tour.category || t.featured))
    .slice(0, 3);

  return <TourDetailClient tour={tour} relatedTours={relatedTours} />;
}

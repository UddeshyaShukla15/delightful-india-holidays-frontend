import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const tour = tourPackages.find((t) => t.id === id);
  if (!tour) {
    return {
      title: "Tour Not Found - Delightful India Holidays",
    };
  }
  return {
    title: `${tour.title} - Delightful India Holidays`,
    description: tour.overview,
  };
}

export default async function DynamicTourDetailPage({ params }: PageProps) {
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

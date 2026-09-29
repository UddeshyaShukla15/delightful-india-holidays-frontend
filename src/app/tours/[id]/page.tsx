import { redirect } from "next/navigation";
import { tourPackages } from "@/data/mockData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tourPackages.map((tour) => ({
    id: tour.id,
  }));
}

export default async function TourRedirectPage({ params }: PageProps) {
  const { id } = await params;
  redirect(`/${id}`);
}

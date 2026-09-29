import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogPosts } from "@/data/mockData";
import blogDetailsDataRaw from "@/data/blogDetailsData.json";
import BlogDetailClient from "./BlogDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const blogDetailsData = blogDetailsDataRaw as Record<
  string,
  {
    slug: string;
    title: string;
    sections_count: number;
    sections: {
      heading?: string;
      level?: string;
      content: { type: "p" | "list"; text?: string; items?: string[] }[];
    }[];
  }
>;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found - Delightful India Holidays",
    };
  }

  return {
    title: `${post.title} - Delightful India Holidays`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    notFound();
  }

  const details = blogDetailsData[post.slug] || blogDetailsData[slug];

  // Get 3 related posts
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return <BlogDetailClient post={post} details={details} relatedPosts={relatedPosts} />;
}

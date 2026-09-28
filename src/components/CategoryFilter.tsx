"use client";

import React from "react";
import { tourCategories } from "@/data/mockData";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth">
      {tourCategories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              isSelected
                ? "bg-[#192a3d] text-white shadow-md border border-[#192a3d]"
                : "bg-white text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] border border-gray-200"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

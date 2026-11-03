"use client";

import { FaqCategoryDef, FaqCategoryId } from "@/types/trust-faq.types";
import { cn } from "@/lib/utils";

export interface FaqCategoryFilterProps {
  categories: readonly FaqCategoryDef[];
  selectedCategory: FaqCategoryId;
  onSelectCategory: (category: FaqCategoryId) => void;
  className?: string;
}

export function FaqCategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  className,
}: FaqCategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="FAQ Category Filters"
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 sm:gap-2.5",
        className
      )}
    >
      {categories.map((cat) => {
        const isActive = selectedCategory === cat.id;

        return (
          <button
            key={cat.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              "inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none border",
              isActive
                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                : "bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground active:scale-[0.98]"
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}


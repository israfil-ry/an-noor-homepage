"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Briefcase01Icon,
  Restaurant01Icon,
  ShoppingBag01Icon,
  Navigation01Icon,
  Store01Icon,
} from "@hugeicons/core-free-icons";
import { JobCategory, JOB_CATEGORIES } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface JobCategoryPillsProps {
  selectedCategory: JobCategory;
  onSelectCategory: (category: JobCategory) => void;
  className?: string;
}

const CATEGORY_ICONS = {
  all: Briefcase01Icon,
  restaurant: Restaurant01Icon,
  grocery: ShoppingBag01Icon,
  delivery: Navigation01Icon,
  other: Store01Icon,
} as const;

export function JobCategoryPills({
  selectedCategory,
  onSelectCategory,
  className,
}: JobCategoryPillsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-muted/60 border border-border/80 select-none",
        className,
      )}
    >
      {JOB_CATEGORIES.map((tab) => {
        const isActive = selectedCategory === tab.id;
        const IconComponent = CATEGORY_ICONS[tab.id];

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectCategory(tab.id)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-background/80",
            )}
          >
            <HugeiconsIcon icon={IconComponent} size={15} strokeWidth={1.75} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

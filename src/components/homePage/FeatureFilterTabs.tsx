"use client";

import { FeatureCategory } from "@/types/features.types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface FeatureFilterTabsProps {
  selectedCategory: FeatureCategory;
  onSelectCategory: (category: FeatureCategory) => void;
  counts: Record<FeatureCategory, number>;
  className?: string;
}

interface TabOption {
  id: FeatureCategory;
  label: string;
}

const TABS: readonly TabOption[] = [
  { id: "all", label: "All Features" },
  { id: "worship", label: "Daily Worship" },
  { id: "community", label: "Community Lifestyle" },
] as const;

export function FeatureFilterTabs({
  selectedCategory,
  onSelectCategory,
  counts,
  className,
}: FeatureFilterTabsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-muted/60 border border-border/80 max-w-fit mx-auto select-none",
        className
      )}
    >
      {TABS.map((tab) => {
        const isActive = selectedCategory === tab.id;
        const count = counts[tab.id] ?? 0;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectCategory(tab.id)}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-background/60"
            )}
          >
            <span>{tab.label}</span>
            <Badge
              variant="outline"
              className={cn(
                "py-0 px-1.5 text-[10px] font-bold rounded-full",
                isActive
                  ? "border-primary-foreground/30 bg-primary-foreground/20 text-primary-foreground"
                  : "border-border bg-card text-muted-foreground"
              )}
            >
              {count}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}


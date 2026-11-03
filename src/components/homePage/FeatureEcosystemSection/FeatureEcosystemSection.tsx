"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { FeatureFilterTabs } from "./FeatureFilterTabs";
import { FeatureCard } from "./FeatureCard";
import { FEATURE_ITEMS, FeatureCategory } from "@/types/features.types";
import { cn } from "@/lib/utils";

export interface FeatureEcosystemSectionProps {
  className?: string;
  initialCategory?: FeatureCategory;
}

export function FeatureEcosystemSection({
  className,
  initialCategory = "all",
}: FeatureEcosystemSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<FeatureCategory>(initialCategory);

  const counts = useMemo<Record<FeatureCategory, number>>(() => {
    return {
      all: FEATURE_ITEMS.length,
      worship: FEATURE_ITEMS.filter((f) => f.category === "worship").length,
      community: FEATURE_ITEMS.filter((f) => f.category === "community").length,
    };
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return FEATURE_ITEMS;
    return FEATURE_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="features"
      aria-label="Core Feature Ecosystem"
      className={cn("w-full py-16 sm:py-24 bg-background", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-1.5 py-1 px-3.5 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-xs"
          >
            <span>Comprehensive Islamic Ecosystem</span>
          </Badge>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Everything You Need for Faith & Community,{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              Unified in One App
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            Seamlessly balancing daily spiritual devotion with verified local lifestyle tools designed specifically for Muslims in the modern world.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="mt-8">
            <FeatureFilterTabs
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              counts={counts}
            />
          </div>
        </div>

        {/* 9-Box Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}


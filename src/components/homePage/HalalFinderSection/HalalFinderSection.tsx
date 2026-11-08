"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  InformationCircleIcon,
  Navigation01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { HalalCategoryPills } from "./HalalCategoryPills";
import { HalalPlaceCard } from "./HalalPlaceCard";
import { HalalPreviewDialog } from "./HalalPreviewDialog";
import { HalalCategory, FEATURED_HALAL_PLACES } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface HalalFinderSectionProps {
  className?: string;
}

const HALAL_PILLARS = [
  {
    icon: Location01Icon,
    title: "Discover Local Halal Places",
    description:
      "Browse restaurants, grocery stores and halal businesses near your location, whether you are exploring your neighbourhood or visiting a new city.",
  },
  {
    icon: InformationCircleIcon,
    title: "Check Details Before You Visit",
    description:
      "View available business descriptions, photos, opening hours and contact information. Check any listed halal information and contact the business if you need clarification.",
  },
  {
    icon: Navigation01Icon,
    title: "Find Your Way Easily",
    description:
      "Use the listed address and directions to plan your visit, or reach out to the business using its available contact options.",
  },
] as const;

export function HalalFinderSection({ className }: HalalFinderSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<HalalCategory>("all");

  const filteredPlaces =
    selectedCategory === "all"
      ? FEATURED_HALAL_PLACES
      : FEATURED_HALAL_PLACES.filter((p) => p.category === selectedCategory);

  const activePlace = filteredPlaces[0] ?? FEATURED_HALAL_PLACES[0];

  return (
    <section
      id="halal-finder"
      aria-label="Nearby Halal Directory Showcase"
      className={cn(
        "w-full py-16 sm:py-24 bg-linear-to-b from-background via-muted/30 to-background ",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Feature Narrative & Interactive Category Pills */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1">
            <Badge
              variant="outline"
              className="mb-4 inline-flex items-center gap-1.5 p-3 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-2xs"
            >
              <span>Halal Food & Business Finder</span>
            </Badge>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Find Halal Restaurants & Grocery{" "}
              <span className="text-primary underline decoration-primary/30 underline-offset-8">
                Stores Near You
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Looking for a place to eat or shop? Explore halal restaurants,
              halal grocery stores and local businesses with AnNoor. Find nearby
              options, review available listing information and get directions
              to your next stop.
            </p>

            {/* Interactive Category Selector */}
            {/* <div className="mt-6 w-full">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                Filter by Establishment Category
              </span>
              <HalalCategoryPills
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div> */}

            {/* 3 Core Value Props */}
            <div className="mt-8 space-y-4 w-full">
              {HALAL_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group flex items-start gap-3.5 rounded-2xl border border-border/70 bg-card/60 p-3.5 sm:p-4 transition-all duration-200 hover:border-primary/30 hover:bg-card shadow-2xs"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground shadow-2xs">
                    <HugeiconsIcon
                      icon={pillar.icon}
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Frame + Featured Card Preview */}
          <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Phone Mockup Frame */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-border/80 bg-card p-3 shadow-md max-w-[280px] sm:max-w-[300px] w-full transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xs">
                  <Image
                    src="/images/app/nearby-halal-mockup.png"
                    alt="An-Noor Nearby Halal Mobile Directory Screen"
                    width={780}
                    height={1688}
                    className="w-full h-auto object-cover select-none"
                    sizes="(max-width: 640px) 280px, 300px"
                    priority={false}
                  />
                </div>
              </div>

              {/* Dynamic Floating Place Card Preview */}
              <div className="w-full mt-4 sm:-mt-10 sm:relative sm:z-10 max-w-sm sm:max-w-md">
                <HalalPlaceCard
                  place={activePlace}
                  className="shadow-lg border-primary/20 bg-card/95"
                />

                {/* Directory Modal Trigger */}
                <div className="mt-4 flex justify-center">
                  <HalalPreviewDialog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

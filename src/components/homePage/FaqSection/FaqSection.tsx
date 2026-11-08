"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { HelpCircleIcon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { FaqCategoryFilter } from "./FaqCategoryFilter";
import { FaqAccordionList } from "./FaqAccordionList";
import { FaqSupportCard } from "./FaqSupportCard";
import {
  FAQ_CATEGORIES,
  FAQ_ITEMS,
  FaqCategoryId,
} from "@/types/trust-faq.types";
import { cn } from "@/lib/utils";

export interface FaqSectionProps {
  className?: string;
}

export function FaqSection({ className }: FaqSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<FaqCategoryId>("all");

  const filteredItems =
    selectedCategory === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className={cn("w-full py-16 sm:py-24 bg-primary/5", className)}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-1.5 p-3 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-2xs"
          >
            {/* <HugeiconsIcon icon={HelpCircleIcon} size={14} /> */}
            <span>Frequently Asked Questions</span>
          </Badge>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Answers to{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              Common Questions
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our prayer calculation accuracy,
            halal directory verification, and privacy philosophy.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8 flex justify-center">
          <FaqCategoryFilter
            categories={FAQ_CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Accordion Questions List */}
        <div className="mb-12">
          <FaqAccordionList items={filteredItems} />
        </div>

        {/* Support & Partner Inquiries Card */}
        <FaqSupportCard />
      </div>
    </section>
  );
}

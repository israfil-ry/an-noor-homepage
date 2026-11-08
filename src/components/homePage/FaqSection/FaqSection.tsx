import { HugeiconsIcon } from "@hugeicons/react";
import { HelpCircleIcon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { FaqAccordionList } from "./FaqAccordionList";

import { FAQ_ITEMS } from "@/types/trust-faq.types";
import { cn } from "@/lib/utils";
import { FaqHelpLinks } from "./FaqHelpLinks";

export interface FaqSectionProps {
  className?: string;
}

export function FaqSection({ className }: FaqSectionProps) {
  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className={cn("w-full py-12 sm:py-20 lg:py-24 bg-primary/5", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Column: stacks on top for mobile/tablet, sticky on desktop */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24 xl:top-28">
            <Badge
              variant="outline"
              className="mb-4 inline-flex items-center gap-1.5 p-3 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-2xs"
            >
              <span>Frequently Asked Questions</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Your Questions,
              <span className="block w-fit text-primary underline decoration-primary/30 underline-offset-8">
                Our Answers
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
              Want to know more about prayer accuracy, halal verification, or
              how we protect your privacy? Visit our help center or reach us
              directly.
            </p>

            <FaqHelpLinks className="mt-6 w-full" />
          </div>

          {/* Right Column: accordion cards */}
          <div className="lg:col-span-7 w-full min-w-0">
            <FaqAccordionList items={FAQ_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}

// FaqSection.tsx
// FaqHelpLinks.tsx
// FaqAccordionList.tsx
// FaqAccordionItem.tsx

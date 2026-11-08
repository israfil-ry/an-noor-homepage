"use client";

import { useId } from "react";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { FaqItem } from "@/types/trust-faq.types";
import { cn } from "@/lib/utils";

export interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
  className,
}: FaqAccordionItemProps) {
  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;

  return (
    <div
      className={cn(
        "w-full rounded-2xl sm:rounded-3xl border bg-card px-4 sm:px-6 transition-all duration-300 motion-reduce:transition-none",
        isOpen
          ? "border-primary/30 shadow-xs"
          : "border-border hover:border-primary/20",
        className,
      )}
    >
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full min-h-[60px] sm:min-h-[64px] cursor-pointer items-center justify-between gap-3 sm:gap-4 py-4 sm:py-5 text-left rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="min-w-0 text-sm sm:text-base font-semibold leading-snug text-foreground">
            {item.question}
          </span>

          <Plus
            aria-hidden="true"
            size={20}
            strokeWidth={2.25}
            className={cn(
              "shrink-0 transition-all duration-300 motion-reduce:transition-none",
              isOpen
                ? "rotate-45 text-primary"
                : "rotate-0 text-muted-foreground",
            )}
          />
        </button>
      </h3>

      {/* Smooth height animation without measuring: grid rows 0fr -> 1fr */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-4 sm:pb-5 pr-1 sm:pr-8 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            <p>{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

import type { FaqItem } from "@/types/trust-faq.types";
import { cn } from "@/lib/utils";
import { FaqAccordionItem } from "./FaqAccordionItem";

export interface FaqAccordionListProps {
  items: readonly FaqItem[];
  className?: string;
}

export function FaqAccordionList({ items, className }: FaqAccordionListProps) {
  // First item open by default. Use useState<string | null>(null) for all closed.
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cn("flex flex-col gap-3 sm:gap-4", className)}>
      {items.map((item) => (
        <FaqAccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() =>
            setOpenId((current) => (current === item.id ? null : item.id))
          }
        />
      ))}
    </div>
  );
}

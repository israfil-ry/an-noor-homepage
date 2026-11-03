import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Compass01Icon,
  Quran01Icon,
  Book02Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { SpiritualPreviewDialog } from "./SpiritualPreviewDialog";
import { SpiritualToolItem } from "@/types/features.types";
import { cn } from "@/lib/utils";

export interface SpiritualToolCardProps {
  tool: SpiritualToolItem;
  className?: string;
}

const TOOL_ICONS = {
  compass: Compass01Icon,
  quran: Quran01Icon,
  book: Book02Icon,
  tasbih: CheckmarkCircle01Icon,
} as const;

export function SpiritualToolCard({ tool, className }: SpiritualToolCardProps) {
  const IconComponent = TOOL_ICONS[tool.iconName] ?? Compass01Icon;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md select-none",
        className
      )}
    >
      <div>
        {/* Top Header: Icon + Arabic Title Tag */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground shadow-xs">
            <HugeiconsIcon icon={IconComponent} size={20} strokeWidth={1.5} />
          </div>

          <span className="text-lg font-bold text-muted-foreground/80 font-serif">
            {tool.arabicTitle}
          </span>
        </div>

        {/* Tool Title & Subtitle */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
          {tool.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-primary mt-1 mb-3">
          {tool.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
          {tool.description}
        </p>

        {/* Feature Highlights Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tool.highlights.map((highlight) => (
            <Badge
              key={highlight}
              variant="outline"
              className="text-[10px] font-medium py-0.5 px-2.5 rounded-full border-border bg-muted/50 text-muted-foreground"
            >
              {highlight}
            </Badge>
          ))}
        </div>
      </div>

      {/* Embedded Phone Screenshot Container & Action Trigger */}
      <div className="relative mt-2 rounded-2xl border border-border/70 bg-gradient-to-b from-muted/30 to-muted/80 p-4 flex flex-col items-center">
        <div className="relative overflow-hidden rounded-xl border-2 border-foreground/10 bg-background shadow-md max-w-[190px] w-full transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src={tool.imageSrc}
            alt={tool.imageAlt}
            width={780}
            height={1688}
            className="w-full h-auto object-cover select-none"
            sizes="(max-width: 768px) 190px, 220px"
          />
        </div>

        {/* View Screen Trigger Button */}
        <div className="mt-4 w-full flex justify-center">
          <SpiritualPreviewDialog tool={tool} />
        </div>
      </div>
    </div>
  );
}


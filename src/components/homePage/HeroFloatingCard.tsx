import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mosque01Icon,
  Restaurant01Icon,
  Calendar01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { FloatingCardData } from "@/types/prayer.types";
import { cn } from "@/lib/utils";

export interface HeroFloatingCardProps {
  card: FloatingCardData;
  className?: string;
}

const CATEGORY_ICONS = {
  prayer: Mosque01Icon,
  halal: Restaurant01Icon,
  event: Calendar01Icon,
} as const;

export function HeroFloatingCard({ card, className }: HeroFloatingCardProps) {
  const IconComponent = CATEGORY_ICONS[card.category] ?? Mosque01Icon;

  return (
    <div
      className={cn(
        "group flex items-start gap-3 rounded-2xl border border-border/80 bg-card/95 p-3.5 sm:p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 select-none",
        className
      )}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
        <HugeiconsIcon icon={IconComponent} size={18} strokeWidth={1.5} />
      </div>

      <div className="flex flex-col min-w-0 text-left">
        <div className="flex items-center gap-2 mb-1">
          <Badge
            variant="outline"
            className="text-[10px] py-0 px-2 font-medium border-primary/20 bg-primary/5 text-primary"
          >
            {card.badge}
          </Badge>
        </div>
        <span className="text-xs sm:text-sm font-semibold tracking-tight text-foreground truncate">
          {card.title}
        </span>
        <span className="text-[11px] sm:text-xs text-muted-foreground truncate">
          {card.subtitle}
        </span>
      </div>
    </div>
  );
}

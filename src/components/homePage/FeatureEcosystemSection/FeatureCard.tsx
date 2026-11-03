import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock01Icon,
  Compass01Icon,
  Moon02Icon,
  Quran01Icon,
  Book02Icon,
  CheckmarkCircle01Icon,
  Mosque01Icon,
  Restaurant01Icon,
  Calendar01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { FeatureItem, FeatureIconName } from "@/types/features.types";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  item: FeatureItem;
  className?: string;
}

const FEATURE_ICONS: Record<FeatureIconName, typeof Clock01Icon> = {
  clock: Clock01Icon,
  compass: Compass01Icon,
  moon: Moon02Icon,
  quran: Quran01Icon,
  book: Book02Icon,
  tasbih: CheckmarkCircle01Icon,
  mosque: Mosque01Icon,
  restaurant: Restaurant01Icon,
  calendar: Calendar01Icon,
};

export function FeatureCard({ item, className }: FeatureCardProps) {
  const IconComponent = FEATURE_ICONS[item.iconName] ?? Clock01Icon;
  const isCommunity = item.category === "community";

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none",
        className
      )}
    >
      <div>
        {/* Top Header: Icon + Category Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground shadow-xs">
            <HugeiconsIcon icon={IconComponent} size={20} strokeWidth={1.5} />
          </div>

          <Badge
            variant="outline"
            className={cn(
              "text-[10px] font-semibold py-0.5 px-2.5 rounded-full",
              isCommunity
                ? "border-accent/30 bg-accent/10 text-accent"
                : "border-primary/20 bg-primary/5 text-primary"
            )}
          >
            {item.badgeText}
          </Badge>
        </div>

        {/* Feature Title */}
        <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
          {item.title}
        </h3>

        {/* Subtitle tag */}
        <p className="text-xs font-medium text-primary mt-0.5 mb-2.5">
          {item.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Bottom Link Prompt */}
      <div className="mt-5 pt-3.5 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
        <span>Learn More</span>
        <HugeiconsIcon
          icon={ArrowRight01Icon}
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}


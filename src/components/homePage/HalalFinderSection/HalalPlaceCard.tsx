import { HugeiconsIcon } from "@hugeicons/react";
import {
  StarIcon,
  Location01Icon,
  CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { HalalPlaceItem } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface HalalPlaceCardProps {
  place: HalalPlaceItem;
  className?: string;
}

export function HalalPlaceCard({ place, className }: HalalPlaceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-2xs transition-all duration-200 hover:border-primary/40 hover:shadow-sm select-none",
        className
      )}
    >
      <div>
        {/* Top Badges: Category & Open Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge
            variant="outline"
            className="text-[10px] font-semibold py-0.5 px-2.5 rounded-full border-border bg-muted/60 text-muted-foreground"
          >
            {place.categoryLabel}
          </Badge>

          <span
            className={cn(
              "inline-flex items-center gap-1 text-[11px] font-semibold",
              place.isOpenNow ? "text-accent" : "text-muted-foreground"
            )}
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                place.isOpenNow ? "bg-accent" : "bg-muted-foreground/60"
              )}
            />
            {place.isOpenNow ? "Open Now" : "Closed"}
          </span>
        </div>

        {/* Place Title & Rating */}
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-150 leading-snug">
            {place.name}
          </h4>
          <span className="text-xs font-mono font-medium text-muted-foreground shrink-0">
            {place.priceLevel}
          </span>
        </div>

        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
          {place.cuisine}
        </p>

        {/* Rating & Distance Meta */}
        <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
          <div className="inline-flex items-center gap-1 font-semibold text-foreground">
            <HugeiconsIcon
              icon={StarIcon}
              size={13}
              className="text-amber-500 fill-amber-500"
            />
            <span>{place.rating.toFixed(1)}</span>
            <span className="text-[11px] font-normal text-muted-foreground">
              ({place.reviewCount})
            </span>
          </div>

          <span>•</span>

          <div className="inline-flex items-center gap-1">
            <HugeiconsIcon icon={Location01Icon} size={13} />
            <span>{place.distance}</span>
          </div>
        </div>
      </div>

      {/* Bottom Certification Badge */}
      <div className="mt-4 pt-3 border-t border-border/70 flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
          <HugeiconsIcon icon={CheckmarkBadge01Icon} size={15} />
          <span>{place.certificationAuthority}</span>
        </div>

        {place.isHandSlaughtered && (
          <Badge
            variant="outline"
            className="text-[9px] font-bold py-0 px-2 rounded-full border-primary/20 bg-primary/5 text-primary"
          >
            Hand-Slaughtered
          </Badge>
        )}
      </div>
    </div>
  );
}

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Moon02Icon,
  SunriseIcon,
  Sun03Icon,
  SunsetIcon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { PrayerTimeItem } from "@/types/prayer.types";
import { cn } from "@/lib/utils";

export interface PrayerTimeStripProps {
  prayers: PrayerTimeItem[];
  timeRemainingText?: string;
  className?: string;
}

const PRAYER_ICONS = {
  moon: Moon02Icon,
  sunrise: SunriseIcon,
  sun: Sun03Icon,
  sunset: SunsetIcon,
} as const;

export function PrayerTimeStrip({
  prayers,
  timeRemainingText = "in 1h 48m",
  className,
}: PrayerTimeStripProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5",
        className
      )}
    >
      {prayers.map((prayer) => {
        const IconComponent = PRAYER_ICONS[prayer.iconName] ?? Sun03Icon;
        const isNext = prayer.isNext;

        return (
          <div
            key={prayer.id}
            className={cn(
              "relative flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 select-none",
              isNext
                ? "border-primary bg-primary/10 shadow-md ring-2 ring-primary/20 scale-[1.02]"
                : prayer.isPassed
                ? "border-border/60 bg-muted/30 opacity-75 hover:opacity-100"
                : "border-border bg-card hover:border-primary/30 hover:bg-muted/40 shadow-xs"
            )}
          >
            {/* Top Indicator / Badge */}
            <div className="w-full flex items-center justify-between mb-2">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                {prayer.arabicLabel}
              </span>

              {isNext ? (
                <Badge
                  variant="outline"
                  className="text-[9px] py-0 px-1.5 font-bold border-accent/40 bg-accent/20 text-accent animate-pulse"
                >
                  Next
                </Badge>
              ) : prayer.isPassed ? (
                <span className="text-[9px] text-muted-foreground/60 font-medium">
                  Passed
                </span>
              ) : (
                <span className="text-[9px] text-muted-foreground font-medium">
                  Upcoming
                </span>
              )}
            </div>

            {/* Icon Graphic */}
            <div
              className={cn(
                "flex size-10 items-center justify-center rounded-xl mb-2 transition-colors",
                isNext
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-muted text-primary"
              )}
            >
              <HugeiconsIcon icon={IconComponent} size={20} strokeWidth={1.5} />
            </div>

            {/* Prayer English Name */}
            <span
              className={cn(
                "text-xs sm:text-sm font-semibold tracking-tight mb-0.5",
                isNext ? "text-primary" : "text-foreground"
              )}
            >
              {prayer.label}
            </span>

            {/* Prayer Time */}
            <span
              className={cn(
                "text-sm sm:text-base font-bold font-mono",
                isNext ? "text-primary" : "text-foreground"
              )}
            >
              {prayer.time}
            </span>

            {/* Next Prayer Countdown Sub-Badge */}
            {isNext && (
              <span className="mt-1.5 text-[10px] font-medium text-primary">
                Next {timeRemainingText}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

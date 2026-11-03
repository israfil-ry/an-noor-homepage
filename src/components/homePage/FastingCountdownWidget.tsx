import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Moon02Icon,
  Sun03Icon,
  Compass01Icon,
  Mosque01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DailyPrayerSnapshot } from "@/types/prayer.types";
import { cn } from "@/lib/utils";

export interface FastingCountdownWidgetProps {
  snapshot: DailyPrayerSnapshot;
  className?: string;
}

export function FastingCountdownWidget({
  snapshot,
  className,
}: FastingCountdownWidgetProps) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-4 border-t border-border/80",
        className
      )}
    >
      {/* Fasting & Ramadan Times Info */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {/* Sehri / Suhur Card */}
        <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2 shadow-xs">
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HugeiconsIcon icon={Moon02Icon} size={15} />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] text-muted-foreground uppercase font-medium">
              Sehri Ends
            </span>
            <span className="text-xs sm:text-sm font-bold font-mono text-foreground">
              {snapshot.sehriTime}
            </span>
          </div>
        </div>

        {/* Iftar Card */}
        <div className="flex items-center gap-2.5 rounded-xl border border-primary/30 bg-primary/5 px-3 py-2 shadow-xs">
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <HugeiconsIcon icon={Sun03Icon} size={15} />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] text-primary uppercase font-bold tracking-tight">
              Iftar Starts
            </span>
            <span className="text-xs sm:text-sm font-bold font-mono text-primary">
              {snapshot.iftarTime}
            </span>
          </div>
        </div>

        {/* Fasting Countdown Badge */}
        <Badge
          variant="outline"
          className="py-1 px-3 text-xs font-semibold border-primary/20 bg-muted/60 text-primary rounded-full shadow-xs"
        >
          <span className="size-1.5 rounded-full bg-accent mr-1.5 animate-pulse" />
          <span>{snapshot.fastingCountdownText}</span>
        </Badge>
      </div>

      {/* Quick Action CTAs */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <Link href="#features">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 rounded-xl border-border bg-card text-foreground hover:bg-muted font-medium min-h-[38px] px-3 shadow-xs cursor-pointer"
          >
            <HugeiconsIcon
              icon={Compass01Icon}
              size={15}
              className="text-primary"
            />
            <span className="text-xs sm:text-sm">Qibla Direction</span>
          </Button>
        </Link>

        <Link href="#community">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 rounded-xl border-primary/25 bg-primary/5 text-primary hover:bg-primary/10 font-medium min-h-[38px] px-3 shadow-xs cursor-pointer"
          >
            <HugeiconsIcon icon={Mosque01Icon} size={15} />
            <span className="text-xs sm:text-sm">Donate to Mosque</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

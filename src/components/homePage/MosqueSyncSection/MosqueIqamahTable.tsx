import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { IqamahTime } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface MosqueIqamahTableProps {
  schedule: readonly IqamahTime[];
  masjidName: string;
  className?: string;
}

export function MosqueIqamahTable({
  schedule,
  masjidName,
  className,
}: MosqueIqamahTableProps) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-border bg-card/90 p-4 sm:p-5 shadow-xs backdrop-blur-xs select-none",
        className
      )}
    >
      {/* Table Header with Live Status */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/70">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HugeiconsIcon icon={Clock01Icon} size={15} strokeWidth={2} />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground leading-tight">
              {masjidName}
            </h4>
            <p className="text-[11px] text-muted-foreground">
              Official Timetable • Auto-Synced
            </p>
          </div>
        </div>

        <Badge
          variant="outline"
          className="inline-flex items-center gap-1 text-[10px] font-semibold py-0.5 px-2 rounded-full border-accent/40 bg-accent/10 text-accent"
        >
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          <span>Live Iqamah</span>
        </Badge>
      </div>

      {/* Timetable Rows */}
      <div className="space-y-1.5">
        <div className="grid grid-cols-3 text-[11px] font-semibold text-muted-foreground px-2.5 py-1 uppercase tracking-wider">
          <span>Prayer</span>
          <span className="text-center">Adhan</span>
          <span className="text-right">Iqamah</span>
        </div>

        {schedule.map((item) => (
          <div
            key={item.prayer}
            className={cn(
              "grid grid-cols-3 items-center px-2.5 py-2 rounded-xl text-xs sm:text-sm transition-colors duration-150",
              item.isNext
                ? "bg-primary/10 border border-primary/25 font-bold text-foreground shadow-2xs"
                : "hover:bg-muted/50 text-foreground/90 font-medium"
            )}
          >
            <div className="flex items-center gap-1.5">
              <span>{item.prayer}</span>
              {item.isNext && (
                <Badge
                  variant="outline"
                  className="hidden xs:inline-flex text-[9px] font-extrabold px-1.5 py-0 border-primary/30 bg-primary text-primary-foreground rounded-full"
                >
                  Next
                </Badge>
              )}
            </div>

            <span className="text-center text-xs text-muted-foreground font-mono">
              {item.adhan}
            </span>

            <div className="flex items-center justify-end gap-1 font-mono font-bold text-right text-primary">
              {item.isNext && (
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  size={13}
                  className="text-primary hidden sm:inline-block"
                />
              )}
              <span>{item.iqamah}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


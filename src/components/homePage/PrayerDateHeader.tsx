"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DailyPrayerSnapshot, LocationOption } from "@/types/prayer.types";
import { cn } from "@/lib/utils";

export interface PrayerDateHeaderProps {
  snapshot: DailyPrayerSnapshot;
  locations: readonly LocationOption[];
  selectedLocationId: string;
  onSelectLocation: (locationId: string) => void;
  className?: string;
}

export function PrayerDateHeader({
  snapshot,
  locations,
  selectedLocationId,
  onSelectLocation,
  className,
}: PrayerDateHeaderProps) {
  const currentLocation =
    locations.find((l) => l.id === selectedLocationId) ?? snapshot.location;

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/80",
        className
      )}
    >
      {/* Date & Hijri Section */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <HugeiconsIcon icon={Calendar01Icon} size={20} strokeWidth={1.5} />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-bold text-foreground">
              {snapshot.gregorianDate}
            </span>
          </div>
          <span className="text-xs text-primary font-medium tracking-tight">
            {snapshot.hijriDate}
          </span>
        </div>
      </div>

      {/* Location Selector Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground hidden md:inline">
          Location:
        </span>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-xl border-border bg-card text-foreground hover:bg-muted font-medium min-h-[38px] px-3 shadow-xs"
              >
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={14}
                  className="text-primary shrink-0"
                />
                <span className="text-xs sm:text-sm font-semibold truncate max-w-[140px]">
                  {currentLocation.label}
                </span>
              </Button>
            }
          />

          <DropdownMenuContent
            align="end"
            className="w-56 rounded-2xl bg-card border-border p-1.5 shadow-lg text-foreground"
          >
            <div className="px-2 py-1.5 text-[11px] font-semibold text-muted-foreground">
              Select Diaspora City
            </div>
            {locations.map((loc) => (
              <DropdownMenuItem
                key={loc.id}
                onClick={() => onSelectLocation(loc.id)}
                className={cn(
                  "flex items-center justify-between px-2.5 py-2 text-xs rounded-xl cursor-pointer transition-colors",
                  loc.id === selectedLocationId
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "hover:bg-muted text-foreground"
                )}
              >
                <span>{loc.label}</span>
                {loc.id === selectedLocationId && (
                  <span className="text-[10px] uppercase font-bold tracking-wider">
                    Active
                  </span>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

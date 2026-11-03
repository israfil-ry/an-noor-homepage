"use client";

import { usePrayerTimePreview } from "@/hooks/usePrayerTimePreview";
import { PrayerDateHeader } from "./PrayerDateHeader";
import { PrayerTimeStrip } from "./PrayerTimeStrip";
import { FastingCountdownWidget } from "./FastingCountdownWidget";
import { cn } from "@/lib/utils";

export interface PrayerSnapshotSectionProps {
  className?: string;
  initialLocationId?: string;
}

export function PrayerSnapshotSection({
  className,
  initialLocationId = "irving",
}: PrayerSnapshotSectionProps) {
  const {
    snapshot,
    locations,
    selectedLocationId,
    setLocation,
  } = usePrayerTimePreview({ initialLocationId });

  return (
    <section
      id="prayer-times"
      aria-label="Daily Prayer Snapshot"
      className={cn("w-full py-10 sm:py-14 bg-background select-none", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Glass/Card Surface Container */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-5 sm:p-7 shadow-sm backdrop-blur-sm space-y-6">
          {/* Top Decorative Emerald Glow Pill */}
          <div className="absolute top-0 right-1/4 w-72 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none -z-10" />

          {/* 1. Date, Hijri Calendar & Location Selector Header */}
          <PrayerDateHeader
            snapshot={snapshot}
            locations={locations}
            selectedLocationId={selectedLocationId}
            onSelectLocation={setLocation}
          />

          {/* 2. 5 Daily Prayer Times Strip with Dynamic Highlight */}
          <PrayerTimeStrip
            prayers={snapshot.prayers}
            timeRemainingText={snapshot.timeRemainingText}
          />

          {/* 3. Fasting (Sehri / Iftar) Timetable & Quick Actions */}
          <FastingCountdownWidget snapshot={snapshot} />
        </div>
      </div>
    </section>
  );
}

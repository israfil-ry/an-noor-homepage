import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mosque01Icon,
  Clock01Icon,
  Notification01Icon,
  Coins01Icon,
  CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { MosqueIqamahTable } from "./MosqueIqamahTable";
import { MosqueDetailDialog } from "./MosqueDetailDialog";
import { FEATURED_MASJID } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface MosqueSyncSectionProps {
  className?: string;
}

const MOSQUE_PILLARS = [
  {
    icon: Clock01Icon,
    title: "Direct Timetable Sync",
    description:
      "Real-time congregation schedules pushed directly by authorized mosque administrators, not approximated estimates.",
  },
  {
    icon: Notification01Icon,
    title: "Smart Departure Alerts",
    description:
      "Travel-aware notifications factoring in traffic and distance so you arrive in time for Takbiratul Ihram.",
  },
  {
    icon: Coins01Icon,
    title: "100% Zero-Commission Giving",
    description:
      "Donate directly to your masjid's official campaigns with zero platform cut or hidden intermediary fees.",
  },
] as const;

export function MosqueSyncSection({ className }: MosqueSyncSectionProps) {
  return (
    <section
      id="community"
      aria-label="Mosque Iqamah & Community Sync"
      className={cn(
        "w-full py-16 sm:py-24 bg-gradient-to-b from-background via-muted/20 to-background",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Mobile App Frame + Live Iqamah Overlay */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Phone Mockup Frame */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-border/80 bg-card p-3 shadow-md max-w-[280px] sm:max-w-[300px] w-full transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xs">
                  <Image
                    src={FEATURED_MASJID.imageSrc}
                    alt="An-Noor Nearby Mosques App Screen"
                    width={780}
                    height={1688}
                    className="w-full h-auto object-cover select-none"
                    sizes="(max-width: 640px) 280px, 300px"
                    priority={false}
                  />
                </div>
              </div>

              {/* Floating Live Timetable Card */}
              <div className="w-full mt-4 sm:-mt-12 sm:relative sm:z-10 max-w-sm sm:max-w-md">
                <MosqueIqamahTable
                  schedule={FEATURED_MASJID.iqamahSchedule}
                  masjidName={FEATURED_MASJID.name}
                  className="shadow-lg border-primary/20 bg-card/95"
                />

                {/* Interactive Modal Trigger */}
                <div className="mt-4 flex justify-center">
                  <MosqueDetailDialog masjid={FEATURED_MASJID} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Narrative & Value Props */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <Badge
              variant="outline"
              className="mb-4 inline-flex items-center gap-1.5 py-1 px-3.5 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-2xs"
            >
              <HugeiconsIcon icon={Mosque01Icon} size={14} />
              <span>Local Mosque Synchronization</span>
            </Badge>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Live Iqamah Timetables &amp;{" "}
              <span className="text-primary underline decoration-primary/30 underline-offset-8">
                Never Miss Jama&apos;ah
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Living in North America and Western diaspora communities requires more than just astronomical prayer times. An-Noor directly synchronizes with your local Islamic center so you always know the exact congregation start time, Friday Khutbah schedule, and urgent masjid announcements.
            </p>

            {/* Value Pillars List */}
            <div className="mt-8 space-y-4 w-full">
              {MOSQUE_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group flex items-start gap-3.5 rounded-2xl border border-border/70 bg-card/60 p-3.5 sm:p-4 transition-all duration-200 hover:border-primary/30 hover:bg-card shadow-2xs"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground shadow-2xs">
                    <HugeiconsIcon icon={pillar.icon} size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mosque Partnership Pill */}
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <HugeiconsIcon
                icon={CheckmarkBadge01Icon}
                size={16}
                className="text-primary shrink-0"
              />
              <span>
                Verified partner mosques include Islamic Center of Irving (ICI), VRIC, and DFW Islamic societies.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


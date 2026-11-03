import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  UserGroupIcon,
  CalendarAdd01Icon,
  Location01Icon,
  CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { EventHighlightCard } from "./EventHighlightCard";
import { EventDetailDialog } from "./EventDetailDialog";
import { FEATURED_EVENT } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface EventsShowcaseSectionProps {
  className?: string;
}

const EVENT_PILLARS = [
  {
    icon: UserGroupIcon,
    title: "Curated Ummah Gatherings",
    description:
      "Stay connected through inspirational lectures, family dinners, youth halaqas, and charitable community fundraisers.",
  },
  {
    icon: CalendarAdd01Icon,
    title: "Instant Calendar Sync",
    description:
      "One-tap synchronization with Google Calendar, Apple iCal, and Outlook so your family never misses a gathering.",
  },
  {
    icon: Location01Icon,
    title: "RSVP & Family Attendance",
    description:
      "Turn-by-turn venue navigation, parking information, and attendee count tracking for seamless community planning.",
  },
] as const;

export function EventsShowcaseSection({
  className,
}: EventsShowcaseSectionProps) {
  return (
    <section
      id="events"
      aria-label="Islamic Community Events Showcase"
      className={cn(
        "w-full py-16 sm:py-24 bg-gradient-to-b from-background via-muted/20 to-background border-t border-border/60",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Mobile App Frame + Featured Event Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Phone Mockup Frame */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-border/80 bg-card p-3 shadow-md max-w-[280px] sm:max-w-[300px] w-full transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xs">
                  <Image
                    src={FEATURED_EVENT.imageSrc}
                    alt="An-Noor Islamic Events Mobile Screen"
                    width={780}
                    height={1688}
                    className="w-full h-auto object-cover select-none"
                    sizes="(max-width: 640px) 280px, 300px"
                    priority={false}
                  />
                </div>
              </div>

              {/* Floating Featured Event Card */}
              <div className="w-full mt-4 sm:-mt-12 sm:relative sm:z-10 max-w-sm sm:max-w-md">
                <EventHighlightCard
                  event={FEATURED_EVENT}
                  className="shadow-lg border-primary/20 bg-card/95"
                />

                {/* Event Details Dialog Trigger */}
                <div className="mt-4 flex justify-center">
                  <EventDetailDialog event={FEATURED_EVENT} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Event Pillars */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <Badge
              variant="outline"
              className="mb-4 inline-flex items-center gap-1.5 py-1 px-3.5 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-2xs"
            >
              <HugeiconsIcon icon={Calendar01Icon} size={14} />
              <span>Islamic Community Events</span>
            </Badge>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Stay Connected to the{" "}
              <span className="text-primary underline decoration-primary/30 underline-offset-8">
                Community
              </span>{" "}
              &amp; Sacred Knowledge
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Strengthen brotherhood and sisterhood across your diaspora community. An-Noor unifies local Islamic center events, visiting scholar seminars, youth sports tournaments, and sisters&apos; study circles in one reliable, ad-free calendar.
            </p>

            {/* 3 Core Value Props */}
            <div className="mt-8 space-y-4 w-full">
              {EVENT_PILLARS.map((pillar) => (
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

            {/* Trust Footnote */}
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <HugeiconsIcon
                icon={CheckmarkBadge01Icon}
                size={16}
                className="text-primary shrink-0"
              />
              <span>
                All community events are vetted by local partner Islamic organizations.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


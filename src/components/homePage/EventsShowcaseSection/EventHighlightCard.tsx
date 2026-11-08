"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  CalendarAdd01Icon,
  Location01Icon,
  UserGroupIcon,
  CheckmarkCircle01Icon,
  Ticket01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IslamicEventItem } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface EventHighlightCardProps {
  event: IslamicEventItem;
  className?: string;
}

export function EventHighlightCard({
  event,
  className,
}: EventHighlightCardProps) {
  const [calendarAdded, setCalendarAdded] = useState(false);

  const handleAddToCalendar = () => {
    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 3000);
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md select-none",
        className,
      )}
    >
      <div>
        {/* Top Badges: Category & Date Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Badge
            variant="outline"
            className="text-[10px] font-semibold py-0.5 px-2.5 rounded-full border-primary/30 bg-primary/10 text-primary"
          >
            {/* <HugeiconsIcon icon={Ticket01Icon} size={11} className="mr-1 inline" /> */}
            {event.admission}
          </Badge>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            <HugeiconsIcon icon={Calendar01Icon} size={13} />
            <span>{event.dateBadge}</span>
          </span>
        </div>

        {/* Event Title & Subtitle */}
        <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-150 leading-snug">
          {event.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
          {event.subtitle}
        </p>

        {/* Speaker & Venue Meta Blocks */}
        <div className="mt-4 pt-3 border-t border-border/70 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <div className="flex size-6 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
              <HugeiconsIcon icon={UserGroupIcon} size={14} />
            </div>
            <div>
              <span>{event.speakerName}</span>
              <span className="text-[11px] font-normal text-muted-foreground block">
                {event.speakerTitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex size-6 items-center justify-center rounded-lg bg-muted text-muted-foreground shrink-0">
              <HugeiconsIcon icon={Location01Icon} size={14} />
            </div>
            <span className="text-xs truncate">
              {event.venueName} • {event.venueAddress}
            </span>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-4 space-y-1.5">
          {event.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <HugeiconsIcon
                icon={CheckmarkCircle01Icon}
                size={13}
                className="text-primary shrink-0"
              />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer: Add to Calendar */}
      {/* <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between gap-3">
        <Button
          type="button"
          onClick={handleAddToCalendar}
          variant={calendarAdded ? "default" : "outline"}
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-semibold py-2 transition-all duration-200 cursor-pointer shadow-2xs",
            calendarAdded
              ? "bg-accent text-accent-foreground"
              : "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
          )}
        >
          <HugeiconsIcon
            icon={calendarAdded ? CheckmarkCircle01Icon : CalendarAdd01Icon}
            size={16}
          />
          <span>
            {calendarAdded ? "Added to Calendar!" : "Add to Calendar"}
          </span>
        </Button>
      </div> */}
    </div>
  );
}

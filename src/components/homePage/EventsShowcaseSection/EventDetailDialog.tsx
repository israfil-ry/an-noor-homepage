import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  CheckmarkCircle01Icon,
  Ticket01Icon,
} from "@hugeicons/core-free-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IslamicEventItem } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface EventDetailDialogProps {
  event: IslamicEventItem;
  className?: string;
}

export function EventDetailDialog({
  event,
  className,
}: EventDetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "group inline-flex items-center gap-2 rounded-xl border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-xs sm:text-sm py-2 px-4 transition-all duration-200 cursor-pointer shadow-2xs",
              className,
            )}
          >
            {/* <HugeiconsIcon
              icon={Calendar01Icon}
              size={16}
              className="transition-transform duration-200 group-hover:scale-110"
            /> */}
            <span>View Event Details &amp; RSVP</span>
          </Button>
        }
      />

      <DialogContent className="max-w-xl overflow-hidden rounded-3xl border-border bg-card p-0 shadow-xl max-h-[90vh] flex flex-col">
        <DialogHeader className="p-6 pb-4 border-b border-border bg-muted/20">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/10 text-primary text-[10px] font-bold"
            >
              <HugeiconsIcon
                icon={Ticket01Icon}
                size={11}
                className="mr-1 inline"
              />
              {event.admission}
            </Badge>
            <Badge
              variant="outline"
              className="border-border bg-background text-muted-foreground text-[10px] font-medium"
            >
              <HugeiconsIcon
                icon={Calendar01Icon}
                size={11}
                className="mr-1 inline"
              />
              {event.timeString}
            </Badge>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
            {event.title}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
            {event.speakerName} ({event.speakerTitle}) • {event.venueName}
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 overflow-y-auto flex flex-col items-center space-y-4">
          <div className="relative overflow-hidden rounded-2xl border-2 border-foreground/10 bg-background shadow-md max-w-[240px] w-full">
            <Image
              src={event.detailsImageSrc}
              alt={`${event.title} Event Details Screen`}
              width={780}
              height={1688}
              className="w-full h-auto object-cover"
              sizes="240px"
            />
          </div>

          {/* Event Highlights Pill */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 w-full space-y-2">
            <span className="text-xs font-bold text-foreground block">
              Program Highlights
            </span>
            {event.highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  size={14}
                  className="text-primary shrink-0 mt-0.5"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

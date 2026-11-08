import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  CheckmarkBadge01Icon,
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
import { cn } from "@/lib/utils";

export interface JobPreviewDialogProps {
  className?: string;
}

export function JobPreviewDialog({ className }: JobPreviewDialogProps) {
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
            <span>Explore Nearby Jobs Screen</span>
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
              Community Job Board
            </Badge>
            <Badge
              variant="outline"
              className="border-border bg-background text-muted-foreground text-[10px] font-medium"
            >
              <HugeiconsIcon
                icon={Location01Icon}
                size={11}
                className="mr-1 inline"
              />
              North America &amp; Diaspora
            </Badge>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
            Nearby Jobs in An-Noor
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
            Browse openings by distance, see pay and deadlines at a glance, and
            reach employers by email, call, or text.
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 overflow-y-auto flex flex-col items-center space-y-4">
          <div className="relative overflow-hidden rounded-2xl border-2 border-foreground/10 bg-background shadow-md max-w-[240px] w-full">
            <Image
              src="/images/app/nearby-jobs.png"
              alt="An-Noor Nearby Jobs Mobile Screen"
              width={780}
              height={2112}
              className="w-full h-auto object-cover"
              sizes="240px"
            />
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 w-full">
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-foreground mb-1">
              <HugeiconsIcon
                icon={CheckmarkBadge01Icon}
                size={16}
                className="text-primary shrink-0"
              />
              <span>Community-Friendly Workplaces</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Employers share pay, location, and application deadlines upfront,
              so you can find work that fits your values and your schedule.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

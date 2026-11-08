import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  Mail01Icon,
  Call02Icon,
  BubbleChatIcon,
  Calendar03Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { JobPlaceItem, JobContactMethod } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface JobPlaceCardProps {
  job: JobPlaceItem;
  className?: string;
}

const CONTACT_META: Record<
  JobContactMethod,
  { label: string; icon: typeof Mail01Icon }
> = {
  email: { label: "Email", icon: Mail01Icon },
  call: { label: "Call", icon: Call02Icon },
  text: { label: "Text", icon: BubbleChatIcon },
};

export function JobPlaceCard({ job, className }: JobPlaceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-2xs transition-all duration-200 hover:border-primary/40 hover:shadow-sm select-none",
        className,
      )}
    >
      {/* Top: Category & Deadline */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <Badge
          variant="outline"
          className="text-[10px] font-semibold py-0.5 px-2.5 rounded-full border-border bg-muted/60 text-muted-foreground"
        >
          {job.categoryLabel}
        </Badge>

        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
          <HugeiconsIcon icon={Calendar03Icon} size={12} />
          Deadline: {job.deadline}
        </span>
      </div>

      {/* Title & Address */}
      <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-150 leading-snug">
        {job.title}
      </h4>
      <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <HugeiconsIcon icon={Location01Icon} size={13} className="shrink-0" />
        <span className="line-clamp-1">{job.address}</span>
      </p>

      {/* Pay & Company */}
      <div className="mt-3 pt-3 border-t border-border/70 flex items-center justify-between gap-2">
        <span className="text-sm font-bold text-primary">{job.pay}</span>
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs text-muted-foreground truncate">
            {job.company}
          </span>
          <span className="text-xs font-semibold text-foreground underline underline-offset-2 decoration-border shrink-0">
            Details
          </span>
        </div>
      </div>

      {/* Contact Actions */}
      <div
        className={cn(
          "mt-3 grid gap-2",
          job.contactMethods.length === 3 ? "grid-cols-3" : "grid-cols-2",
        )}
      >
        {job.contactMethods.map((method) => {
          const meta = CONTACT_META[method];
          return (
            <div
              key={method}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-background py-2 text-xs font-semibold text-foreground transition-colors duration-200 group-hover:border-primary/20"
            >
              <HugeiconsIcon icon={meta.icon} size={15} strokeWidth={1.75} />
              <span>{meta.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

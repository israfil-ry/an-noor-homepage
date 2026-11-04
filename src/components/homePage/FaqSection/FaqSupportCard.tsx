import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, HelpCircleIcon } from "@hugeicons/core-free-icons";
import { APP_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface FaqSupportCardProps {
  className?: string;
}

export function FaqSupportCard({ className }: FaqSupportCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-primary/20 bg-gradient-to-r from-card via-primary/5 to-card p-6 sm:p-8 text-center sm:text-left shadow-xs",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
          <HugeiconsIcon icon={HelpCircleIcon} size={24} />
        </div>

        <div>
          <h4 className="text-base sm:text-lg font-bold text-foreground">
            Still Have Questions or Looking to Partner?
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Whether you want to connect your local mosque&apos;s Iqamah
            timetable, suggest a verified halal market, or give feedback, our
            team is here.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
        <Link
          href={`mailto:${APP_CONFIG.supportEmail}`}
          aria-label="Email An-Noor Support Team"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 min-h-[44px] text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs transition-all duration-200 hover:bg-primary-hover active:scale-[0.98]"
        >
          <HugeiconsIcon icon={Mail01Icon} size={16} />
          <span>Email Support</span>
        </Link>
      </div>
    </div>
  );
}

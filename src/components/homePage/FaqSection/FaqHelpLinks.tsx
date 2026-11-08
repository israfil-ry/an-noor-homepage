import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { HelpCircleIcon, Call02Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export interface FaqHelpLinksProps {
  className?: string;
}

const SUPPORT_PHONE = "9452674223";

export function FaqHelpLinks({ className }: FaqHelpLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6",
        className,
      )}
    >
      <Link
        href="/contact"
        className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground shadow-2xs transition-all duration-200 hover:border-primary/30 hover:text-primary active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <HugeiconsIcon icon={HelpCircleIcon} size={18} strokeWidth={1.75} />
        <span>Help Center</span>
      </Link>

      <Link
        href={`tel:${SUPPORT_PHONE}`}
        aria-label={`Call An-Noor Support at ${SUPPORT_PHONE}`}
        className="inline-flex min-h-[44px] min-w-0 items-center gap-2 rounded-md text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <HugeiconsIcon
          icon={Call02Icon}
          size={18}
          strokeWidth={1.75}
          className="shrink-0"
        />
        <span className="whitespace-nowrap">{SUPPORT_PHONE}</span>
      </Link>
    </div>
  );
}

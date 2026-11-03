import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Download01Icon } from "@hugeicons/core-free-icons";
import { APP_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface AppDownloadBadgesProps {
  className?: string;
  variant?: "default" | "compact" | "hero";
  showDirectApk?: boolean;
}

export function AppDownloadBadges({
  className,
  variant = "default",
  showDirectApk = true,
}: AppDownloadBadgesProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3",
        isCompact ? "gap-2" : "gap-3.5",
        className
      )}
    >
      {/* Official Google Play Store Button */}
      <Link
        href={APP_CONFIG.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download An-Noor on Google Play"
        className={cn(
          "group inline-flex items-center gap-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-200 hover:bg-primary-hover shadow-sm hover:shadow active:scale-[0.98] select-none",
          isCompact
            ? "min-h-[44px] px-3.5 py-2 text-xs"
            : "min-h-[48px] px-4 py-2.5 text-sm"
        )}
      >
        <svg
          className="size-5 shrink-0 transition-transform duration-200 group-hover:scale-110 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3.609 1.814L13.792 12 3.61 22.186a1.597 1.597 0 0 1-.22-.816V2.63c0-.31.08-.59.22-.816zm11.24 11.24l2.12-2.12-11.89-6.86 9.77 8.98zm0 1.892l-9.77 8.98 11.89-6.86-2.12-2.12zm1.414-1.414l3.18 1.836c.94.544.94 1.432 0 1.976l-3.18 1.836-2.3-2.3 2.3-2.348z" />
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] font-normal uppercase tracking-wider text-primary-foreground/80">
            GET IT ON
          </span>
          <span className="text-sm font-semibold tracking-tight">Google Play</span>
        </div>
      </Link>

      {/* Direct APK Download Button */}
      {showDirectApk && (
        <Link
          href={APP_CONFIG.apkDownloadUrl}
          aria-label="Download An-Noor Direct APK"
          className={cn(
            "group inline-flex items-center gap-2.5 rounded-xl border border-border bg-card text-card-foreground font-medium transition-all duration-200 hover:bg-muted hover:border-primary/30 active:scale-[0.98] select-none",
            isCompact
              ? "min-h-[44px] px-3.5 py-2 text-xs"
              : "min-h-[48px] px-4 py-2.5 text-sm"
          )}
        >
          <HugeiconsIcon
            icon={Download01Icon}
            size={16}
            strokeWidth={1.5}
            className="text-primary transition-transform duration-200 group-hover:-translate-y-0.5"
          />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] font-normal text-muted-foreground">
              Direct Install
            </span>
            <span className="text-sm font-medium">Download APK</span>
          </div>
        </Link>
      )}
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type MobilePlatform = "android" | "ios";

export interface QrPlatformCardProps {
  platform: MobilePlatform;
  title: string;
  subtitle: string;
  DownloadButton: React.ComponentType<{ url: string }>;
  badgeAlt: string;
  badgeHref?: string;
  className?: string;
}

export function QrPlatformCard({
  platform,
  title,
  subtitle,
  DownloadButton,
  badgeAlt,
  badgeHref = "#",
  className,
}: QrPlatformCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between rounded-2xl border border-border bg-card/80 p-4 sm:p-5 text-center shadow-xs transition-all duration-200 hover:border-primary/30",
        className,
      )}
    >
      {/* Platform Title & Subtitle */}
      <div className="space-y-1 mb-3">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>

      {/* Branded Scannable QR Code Container */}
      <div className="relative flex size-40 sm:size-44 items-center justify-center rounded-2xl border-2 border-primary/20 bg-muted/40 p-3 shadow-inner my-2">
        <svg
          className="size-32 sm:size-36 text-foreground"
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-label={`QR Code for ${title}`}
        >
          {/* Outer Corner Finder Patterns */}
          <rect x="0" y="0" width="30" height="30" rx="4" fill="currentColor" />
          <rect
            x="6"
            y="6"
            width="18"
            height="18"
            rx="2"
            fill="var(--color-card)"
          />
          <rect
            x="10"
            y="10"
            width="10"
            height="10"
            rx="1"
            fill="var(--color-primary)"
          />

          <rect
            x="70"
            y="0"
            width="30"
            height="30"
            rx="4"
            fill="currentColor"
          />
          <rect
            x="76"
            y="6"
            width="18"
            height="18"
            rx="2"
            fill="var(--color-card)"
          />
          <rect
            x="80"
            y="10"
            width="10"
            height="10"
            rx="1"
            fill="var(--color-primary)"
          />

          <rect
            x="0"
            y="70"
            width="30"
            height="30"
            rx="4"
            fill="currentColor"
          />
          <rect
            x="6"
            y="76"
            width="18"
            height="18"
            rx="2"
            fill="var(--color-card)"
          />
          <rect
            x="10"
            y="80"
            width="10"
            height="10"
            rx="1"
            fill="var(--color-primary)"
          />

          {/* Internal Data Blocks */}
          <rect x="36" y="6" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="48" y="6" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="36" y="18" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="48" y="24" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="18" y="36" width="8" height="8" rx="1" fill="currentColor" />
          <rect
            x="36"
            y="36"
            width="12"
            height="12"
            rx="2"
            fill={
              platform === "android"
                ? "var(--color-accent)"
                : "var(--color-primary)"
            }
          />
          <rect x="54" y="36" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="72" y="36" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="84" y="44" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="36" y="54" width="8" height="8" rx="1" fill="currentColor" />
          <rect
            x="52"
            y="54"
            width="14"
            height="8"
            rx="1"
            fill="currentColor"
          />
          <rect x="72" y="54" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="36" y="72" width="8" height="8" rx="1" fill="currentColor" />
          <rect
            x="50"
            y="72"
            width="12"
            height="12"
            rx="2"
            fill="currentColor"
          />
          <rect
            x="70"
            y="70"
            width="10"
            height="10"
            rx="2"
            fill="currentColor"
          />
          <rect
            x="84"
            y="84"
            width="10"
            height="10"
            rx="2"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Official Download Badge Button Underneath */}
      <div className="mt-3 pt-2 w-full flex justify-center">
        <Link
          href={badgeHref}
          aria-label={badgeAlt}
          className="group inline-flex items-center justify-center transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring rounded-xl select-none"
        >
          <DownloadButton url={badgeHref} />
        </Link>
      </div>
    </div>
  );
}

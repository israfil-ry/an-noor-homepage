import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type BadgeSize = "sm" | "md" | "lg";

export interface GooglePlayBadgeProps {
  className?: string;
  size?: BadgeSize;
  href?: string;
  priority?: boolean;
}

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: "h-[36px]",
  md: "h-[44px]",
  lg: "h-[48px]",
};

export function GooglePlayBadge({
  className,
  size = "md",
  href = "#",
  priority = false,
}: GooglePlayBadgeProps) {
  return (
    <Link
      href={href}
      aria-label="Download An-Noor on Google Play"
      className={cn(
        "group relative inline-flex items-center justify-center transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring rounded-xl select-none shrink-0",
        className,
      )}
    >
      <Image
        src="/images/badges/google-play-badge.png"
        alt="GET IT ON Google Play"
        width={261}
        height={81}
        priority={priority}
        className={cn(
          SIZE_CLASSES[size],
          "w-auto rounded-xl object-contain shadow-xs transition-shadow duration-200 group-hover:shadow-md",
        )}
      />
    </Link>
  );
}

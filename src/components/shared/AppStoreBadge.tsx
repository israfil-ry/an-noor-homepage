import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BadgeSize } from "./GooglePlayBadge";

export interface AppStoreBadgeProps {
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

export function AppStoreBadge({
  className,
  size = "md",
  href = "#",
  priority = false,
}: AppStoreBadgeProps) {
  return (
    <Link
      href={href}
      aria-label="Download An-Noor on the App Store"
      className={cn(
        "group relative inline-flex items-center justify-center transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring rounded-xl select-none shrink-0",
        className
      )}
    >
      <Image
        src="/images/badges/app-store-badge.png"
        alt="Download on the App Store"
        width={240}
        height={81}
        priority={priority}
        className={cn(
          SIZE_CLASSES[size],
          "w-auto rounded-xl object-contain shadow-xs transition-shadow duration-200 group-hover:shadow-md"
        )}
      />
    </Link>
  );
}


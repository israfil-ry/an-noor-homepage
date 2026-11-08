import { GooglePlayBadge, BadgeSize } from "./GooglePlayBadge";
import { AppStoreBadge } from "./AppStoreBadge";
import { cn } from "@/lib/utils";
import GooglePlayButton from "./GooglePlayButton";
import AppStoreButton from "./AppStoreButton";

export interface StoreDownloadBadgesProps {
  className?: string;
  size?: BadgeSize;
  direction?: "row" | "column";
  googlePlayHref?: string;
  appStoreHref?: string;
  showGooglePlay?: boolean;
  showAppStore?: boolean;
  priority?: boolean;
}

export function StoreDownloadBadges({
  className,
  size = "md",
  direction = "row",
  googlePlayHref = "#",
  appStoreHref = "#",
  showGooglePlay = true,
  showAppStore = true,
  priority = false,
}: StoreDownloadBadgesProps) {
  const isColumn = direction === "column";

  return (
    <div
      className={cn(
        "flex items-center",
        isColumn
          ? "flex-col gap-2.5 w-full"
          : "flex-row flex-wrap gap-3 sm:gap-3.5",
        className,
      )}
    >
      {showGooglePlay && (
        // <GooglePlayBadge
        //   size={size}
        //   href={googlePlayHref}
        //   priority={priority}
        //   className={isColumn ? "w-full justify-center" : undefined}
        // />
        <GooglePlayButton />
      )}

      {showAppStore && (
        // <AppStoreBadge
        //   size={size}
        //   href={appStoreHref}
        //   priority={priority}
        //   className={isColumn ? "w-full justify-center" : undefined}
        // />
        <AppStoreButton url={appStoreHref} />
      )}
    </div>
  );
}

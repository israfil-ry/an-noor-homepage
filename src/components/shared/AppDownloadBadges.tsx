import { StoreDownloadBadges } from "./StoreDownloadBadges";
import { BadgeSize } from "./GooglePlayBadge";

export interface AppDownloadBadgesProps {
  className?: string;
  variant?: "default" | "compact" | "hero";
  showDirectApk?: boolean;
  googlePlayHref?: string;
  appStoreHref?: string;
}

export function AppDownloadBadges({
  className,
  variant = "default",
  googlePlayHref = "#",
  appStoreHref = "#",
}: AppDownloadBadgesProps) {
  const size: BadgeSize = variant === "compact" ? "sm" : "md";

  return (
    <StoreDownloadBadges
      size={size}
      direction="row"
      googlePlayHref={googlePlayHref}
      appStoreHref={appStoreHref}
      className={className}
    />
  );
}

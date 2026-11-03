import { StoreDownloadBadges } from "@/components/shared/StoreDownloadBadges";

export interface HeroStoreBadgesProps {
  className?: string;
  googlePlayHref?: string;
  appStoreHref?: string;
}

export function HeroStoreBadges({
  className,
  googlePlayHref = "#",
  appStoreHref = "#",
}: HeroStoreBadgesProps) {
  return (
    <StoreDownloadBadges
      size="md"
      direction="row"
      googlePlayHref={googlePlayHref}
      appStoreHref={appStoreHref}
      priority={true}
      className={className}
    />
  );
}

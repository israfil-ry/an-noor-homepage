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
  qrCodeSrc: string; // Optional prop for QR code image source
}

export function QrPlatformCard({
  platform,
  title,
  subtitle,
  DownloadButton,
  badgeAlt,
  badgeHref = "#",
  className,
  qrCodeSrc,
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
        <Image
          src={qrCodeSrc}
          alt={`QR Code for ${title}`}
          width={128}
          height={128}
          className="rounded-lg"
        />
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

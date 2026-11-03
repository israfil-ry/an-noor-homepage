import { Badge } from "@/components/ui/badge";
import { AppDownloadBadges } from "@/components/shared/AppDownloadBadges";
import { QrCodeModal } from "./QrCodeModal";
import { APP_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface HeroContentProps {
  className?: string;
}

export function HeroContent({ className }: HeroContentProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center lg:items-start text-center lg:text-left",
        className
      )}
    >
      {/* Trust Tag Badge */}
      <Badge
        variant="outline"
        className="mb-6 inline-flex items-center gap-2 py-1.5 px-4 text-xs font-medium border-primary/25 bg-primary/5 text-primary rounded-full shadow-xs"
      >
        <span className="size-2 rounded-full bg-accent animate-pulse" />
        <span>100% Free • Ad-Free • Built for the Global Ummah</span>
      </Badge>

      {/* Value Proposition Headline */}
      <h1 className="max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
        Your Complete Daily{" "}
        <span className="text-primary underline decoration-primary/30 underline-offset-8">
          Islamic Companion
        </span>{" "}
        & Local Halal Living Guide
      </h1>

      {/* Sub-headline */}
      <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
        {APP_CONFIG.subTagline}
      </p>

      {/* CTA Group: Store Badges + Desktop QR Code Trigger */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
        <AppDownloadBadges variant="hero" showDirectApk={true} />
        <QrCodeModal className="hidden sm:inline-flex" />
      </div>

      {/* Micro Social Proof / Diaspora note */}
      <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
        <div className="flex -space-x-1.5 overflow-hidden">
          <div className="inline-block size-6 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-[9px] font-bold text-primary">
            TX
          </div>
          <div className="inline-block size-6 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-[9px] font-bold text-accent">
            IL
          </div>
          <div className="inline-block size-6 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[9px] font-bold text-secondary-foreground">
            UK
          </div>
        </div>
        <span>Trusted by Muslims in Irving, Dallas, Chicago, London & beyond.</span>
      </div>
    </div>
  );
}

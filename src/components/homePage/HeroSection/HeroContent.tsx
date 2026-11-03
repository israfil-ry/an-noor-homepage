import { Badge } from "@/components/ui/badge";
import { HeroStoreBadges } from "./HeroStoreBadges";
import { QrCodeModal } from "./QrCodeModal";
import { HeroSocialProof } from "./HeroSocialProof";
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

      {/* CTA Group: Official Store Badges + Harmonized Dark QR Code Trigger */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5">
        <HeroStoreBadges />
        <QrCodeModal />
      </div>

      {/* Micro Social Proof & Community Avatar Stack */}
      <HeroSocialProof />
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { AppDownloadBadges } from "@/components/shared/AppDownloadBadges";
import { APP_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className={cn(
        "relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-muted/50 via-background to-background",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Trust Tag Badge */}
        <Badge
          variant="outline"
          className="mb-6 inline-flex items-center gap-2 py-1.5 px-4 text-xs font-medium border-primary/20 bg-primary/5 text-primary rounded-full shadow-xs"
        >
          <span className="size-2 rounded-full bg-accent animate-pulse" />
          <span>100% Free • Ad-Free • Built for the Global Ummah</span>
        </Badge>

        {/* Value Proposition Headline */}
        <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
          Your Complete Daily{" "}
          <span className="text-primary underline decoration-primary/30 underline-offset-8">
            Islamic Companion
          </span>{" "}
          & Local Halal Living Guide
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {APP_CONFIG.subTagline}
        </p>

        {/* App Download Badges CTA Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <AppDownloadBadges variant="hero" showDirectApk={true} />
        </div>
      </div>
    </section>
  );
}

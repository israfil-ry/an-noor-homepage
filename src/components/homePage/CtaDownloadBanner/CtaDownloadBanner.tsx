import { HugeiconsIcon } from "@hugeicons/react";
import { SmartPhone01Icon, ShieldCheckIcon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { StoreDownloadBadges } from "@/components/shared/StoreDownloadBadges";
import { CtaQrScannerBox } from "./CtaQrScannerBox";
import { CtaMockupVisual } from "./CtaMockupVisual";
import { cn } from "@/lib/utils";

export interface CtaDownloadBannerProps {
  className?: string;
}

export function CtaDownloadBanner({ className }: CtaDownloadBannerProps) {
  return (
    <section
      id="download"
      aria-label="Download An-Noor App"
      className={cn("w-full py-16 sm:py-24 ", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-emerald-dark via-primary to-brand-emerald p-8 sm:p-12 lg:p-16 text-primary-foreground shadow-2xl">
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 size-96 rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 size-96 rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Conversion Copy & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <Badge
                variant="outline"
                className="mb-4 inline-flex items-center gap-1.5 py-1 px-3.5 text-xs font-semibold border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground rounded-full shadow-2xs backdrop-blur-xs"
              >
                {/* <HugeiconsIcon icon={SmartPhone01Icon} size={14} /> */}
                <span>Take AnNoor with You</span>
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary-foreground leading-[1.12]">
                {/* Begin Your Daily Journey with{" "}
                {" "}
                Today */}
                Your Daily Muslim Companion,{" "}
                <span className="underline decoration-primary-foreground/30 underline-offset-8">
                  Wherever Life Takes You
                </span>
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-primary-foreground/90 leading-relaxed max-w-xl">
                Check prayer times, read the Quran and find Qibla direction
                wherever you go. Discover nearby mosques, halal food and local
                jobs with AnNoor—bringing faith and everyday life together.
              </p>

              {/* Conversion Actions Group: Official Store Badges + QR Scanner */}
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 w-full">
                <StoreDownloadBadges
                  size="md"
                  direction="row"
                  googlePlayHref="#"
                  appStoreHref="#"
                  variant="light"
                  className="[&_a]:border-primary-foreground/20"
                />

                {/* <CtaQrScannerBox className="hidden md:flex" /> */}
              </div>

              {/* Trust Guarantee Footnote */}
              <div className="mt-6 flex items-center gap-2 text-xs text-primary-foreground/80">
                <HugeiconsIcon
                  icon={ShieldCheckIcon}
                  size={15}
                  className="shrink-0 text-primary-foreground"
                />
                <span>
                  Compatible with Android 8.0+ &amp; iOS 15.0+ • 100% Free &amp;
                  Ad-Free • No Data Monetization
                </span>
              </div>
            </div>

            {/* Right Column: Mobile App Showcase Mockup Visual */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <CtaMockupVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

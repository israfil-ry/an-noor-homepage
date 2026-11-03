import { HeroContent } from "./HeroContent";
import { HeroMockupPreview } from "./HeroMockupPreview";
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
        "relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32 bg-gradient-to-b from-muted/40 via-background to-background",
        className
      )}
    >
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_65%)] opacity-[0.06] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Conversion Actions */}
          <div className="lg:col-span-7">
            <HeroContent />
          </div>

          {/* Right Column: Native Mobile Phone Mockup & Floating Contextual Cards */}
          <div className="lg:col-span-5">
            <HeroMockupPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

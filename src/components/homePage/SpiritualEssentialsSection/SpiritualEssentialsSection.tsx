import { Badge } from "@/components/ui/badge";
import { SpiritualToolCard } from "./SpiritualToolCard";
import { SPIRITUAL_TOOLS } from "@/types/features.types";
import { cn } from "@/lib/utils";

export interface SpiritualEssentialsSectionProps {
  className?: string;
}

export function SpiritualEssentialsSection({
  className,
}: SpiritualEssentialsSectionProps) {
  return (
    <section
      id="spiritual-tools"
      aria-label="Spiritual Essentials Showcase"
      className={cn(
        "w-full py-16 sm:py-24 bg-gradient-to-b from-background via-muted/30 to-background",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-1.5 py-1 px-3.5 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-xs"
          >
            <span>Personal Devotion Toolkit</span>
          </Badge>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Pocket Spiritual Essentials{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              Crafted for Focus
            </span>{" "}
            & Sacred Connection
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            Distraction-free, ad-free Islamic tools engineered to deepen your personal relationship with Allah throughout your daily journey.
          </p>
        </div>

        {/* 4-Pillar Grid (2 columns on md/lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SPIRITUAL_TOOLS.map((tool) => (
            <SpiritualToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}


import { Badge } from "@/components/ui/badge";
import { FeatureCard } from "./FeatureCard";
import { FeatureCardLarge } from "./FeatureCardLarge";
import { FEATURE_ITEMS } from "@/types/features.types";
import { cn } from "@/lib/utils";

import { Headphones } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon } from "@hugeicons/core-free-icons";

export interface FeatureEcosystemSectionProps {
  className?: string;
}

export function FeatureEcosystemSection({
  className,
}: FeatureEcosystemSectionProps) {
  return (
    <section
      id="features"
      aria-label="Core Feature Ecosystem"
      className={cn("w-full py-16 sm:py-24 bg-primary/5", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-1.5 p-3 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-xs"
          >
            <span>Faith & Everyday Life</span>
          </Badge>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            {/* Everything You Need for Faith & Community,{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              Unified in One App
            </span> */}
            Prayer Times, Quran & Your Local{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              {" "}
              Community in One App{" "}
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            Make room for faith in your daily routine with AnNoor. Get Adhan
            reminders, read the Quran, find Qibla direction, and discover nearby
            mosques, halal places and local jobs.
          </p>
        </div>

        {/* Large Featured Cards */}
        <div className="grid grid-cols-1 mb-5 lg:mb-4 gap-4 md:grid-cols-2">
          {/* Prayer Times Card */}
          <FeatureCardLarge
            title="Prayer Times & Adhan"
            description="Check daily prayer times for your location and receive Adhan reminders to help you plan your day around Salah."
            icon={
              <HugeiconsIcon icon={Clock01Icon} size={26} strokeWidth={1.8} />
            }
            backgroundClassName="bg-[#176B32]"
            textClassName="text-white"
            descriptionClassName="text-white/75"
            iconContainerClassName="bg-white/15 text-white"
            decoration="clock"
            decorationClassName="text-white/10"
          />

          {/* Quran Audio Card */}
          <FeatureCardLarge
            title="Quran Reading & Recitation"
            description="Bring Quran reading into your daily routine with recitations, translations and bookmarks for the verses you want to revisit."
            icon={<Headphones size={26} strokeWidth={1.8} />}
            backgroundClassName="bg-[#F0F7F0]"
            textClassName="text-[#14251A]"
            descriptionClassName="text-[#718074]"
            borderClassName="border-[#DCEBDD]"
            iconContainerClassName="bg-white text-[#176B32]"
            decoration="headphones"
            decorationClassName="text-[#C8E4CC]/80"
          />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURE_ITEMS.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

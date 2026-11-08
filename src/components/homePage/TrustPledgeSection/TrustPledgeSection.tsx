import { HugeiconsIcon } from "@hugeicons/react";
import { ShieldCheckIcon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { TrustPledgeCard } from "./TrustPledgeCard";
import { TrustMetricsStrip } from "./TrustMetricsStrip";
import { TRUST_PILLARS, TRUST_METRICS } from "@/types/trust-faq.types";
import { cn } from "@/lib/utils";

export interface TrustPledgeSectionProps {
  className?: string;
}

export function TrustPledgeSection({ className }: TrustPledgeSectionProps) {
  return (
    <section
      id="about"
      aria-label="Ethics and Privacy Pledge"
      className={cn("w-full py-16 sm:py-24 bg-primary/5", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-1.5 p-3 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-2xs"
          >
            {/* <HugeiconsIcon icon={ShieldCheckIcon} size={14} /> */}
            <span>About AnNoor</span>
          </Badge>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Helping You Stay Close to{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              {" "}
              Faith & Community{" "}
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            AnNoor brings daily Islamic tools and useful local information
            together in one app. Our purpose is simple: make it easier to
            practise your faith, find places you need and stay connected with
            the people around you.
          </p>
        </div>

        {/* 3 Trust Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_PILLARS.map((pillar) => (
            <TrustPledgeCard key={pillar.id} pillar={pillar} />
          ))}
        </div>

        {/* 4-Point Guarantee Strip */}
        {/* <TrustMetricsStrip metrics={TRUST_METRICS} /> */}
      </div>
    </section>
  );
}

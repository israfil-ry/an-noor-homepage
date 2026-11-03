import { HugeiconsIcon } from "@hugeicons/react";
import { SparklesIcon } from "@hugeicons/core-free-icons";
import { TrustMetric } from "@/types/trust-faq.types";
import { cn } from "@/lib/utils";

export interface TrustMetricsStripProps {
  metrics: readonly TrustMetric[];
  className?: string;
}

export function TrustMetricsStrip({
  metrics,
  className,
}: TrustMetricsStripProps) {
  return (
    <div
      className={cn(
        "w-full rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-6 sm:p-8 backdrop-blur-xs",
        className
      )}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
        {metrics.map((metric, index) => (
          <div
            key={metric.id}
            className={cn(
              "flex flex-col items-center text-center",
              index !== 0 && "pt-6 sm:pt-0 sm:pl-6"
            )}
          >
            <div className="flex items-center gap-1.5 text-primary mb-1">
              <HugeiconsIcon icon={SparklesIcon} size={16} />
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight font-mono text-foreground">
                {metric.value}
              </span>
            </div>

            <div className="text-sm font-bold text-foreground">
              {metric.label}
            </div>

            <p className="mt-1 text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


import { HugeiconsIcon } from "@hugeicons/react";
import {
  ShieldCheckIcon,
  SecurityLockIcon,
  CheckmarkBadge01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { TrustPillarItem } from "@/types/trust-faq.types";
import { cn } from "@/lib/utils";

export interface TrustPledgeCardProps {
  pillar: TrustPillarItem;
  className?: string;
}

const ICON_MAP = {
  shield: ShieldCheckIcon,
  lock: SecurityLockIcon,
  verified: CheckmarkBadge01Icon,
} as const;

export function TrustPledgeCard({ pillar, className }: TrustPledgeCardProps) {
  const IconComponent = ICON_MAP[pillar.iconName] ?? ShieldCheckIcon;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div>
        {/* Top Header: Glyph Container + Pill Badge */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-xs transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <HugeiconsIcon icon={IconComponent} size={28} />
          </div>

          <Badge
            variant="outline"
            className="text-[11px] font-semibold py-1 px-3 border-primary/20 bg-primary/5 text-primary rounded-full shadow-2xs"
          >
            {pillar.badgeText}
          </Badge>
        </div>

        {/* Pillar Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
          {pillar.title}
        </h3>

        {/* Pillar Description */}
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {pillar.description}
        </p>
      </div>

      {/* Bullet Highlight List */}
      <div className="mt-6 pt-5 border-t border-border/60 space-y-2.5">
        {pillar.highlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-2.5">
            <HugeiconsIcon
              icon={CheckmarkCircle01Icon}
              size={16}
              className="text-primary shrink-0"
            />
            <span className="text-xs font-medium text-foreground/80">
              {highlight}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


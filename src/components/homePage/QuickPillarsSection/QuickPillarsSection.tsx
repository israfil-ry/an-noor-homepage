import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock01Icon,
  Compass01Icon,
  Restaurant01Icon,
  Mosque01Icon,
  Quran01Icon,
  ShieldCheckIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export interface QuickPillarsSectionProps {
  className?: string;
}

const PILLARS = [
  { label: "Prayer Times", icon: Clock01Icon, href: "#prayer-times" },
  { label: "Qibla Direction", icon: Compass01Icon, href: "#features" },
  { label: "Nearby Halal", icon: Restaurant01Icon, href: "#halal-finder" },
  { label: "Mosque Sync", icon: Mosque01Icon, href: "#community" },
  { label: "Holy Quran", icon: Quran01Icon, href: "#features" },
  { label: "Privacy First", icon: ShieldCheckIcon, href: "#about" },
] as const;

export function QuickPillarsSection({ className }: QuickPillarsSectionProps) {
  return (
    <section
      id="pillars"
      aria-label="Core Pillars"
      className={cn("w-full py-12 bg-background", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.label}
              href={pillar.href}
              className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/40 hover:shadow-sm hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-muted text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                <HugeiconsIcon icon={pillar.icon} size={20} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium text-foreground text-center">
                {pillar.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

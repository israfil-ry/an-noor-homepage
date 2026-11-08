import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  Compass01Icon,
  Quran01Icon,
  Restaurant01Icon,
  Home01Icon,
  Mosque01Icon,
  Calendar01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import { Logo } from "@/components/shared/Logo";
import { Badge } from "@/components/ui/badge";
import { HeroFloatingCard } from "./HeroFloatingCard";
import { FloatingCardData } from "@/types/prayer.types";
import { cn } from "@/lib/utils";

export interface HeroMockupPreviewProps {
  className?: string;
}

const FLOATING_CARDS: readonly FloatingCardData[] = [
  {
    id: "mosque-sync",
    badge: "Mosque Sync",
    title: "Dhuhr Iqamah 1:15 PM",
    subtitle: "Islamic Center Irving • 1.2 mi",
    category: "prayer",
  },
  {
    id: "halal-directory",
    badge: "Nearby Halal",
    title: "14 Restaurants & 8 Groceries",
    subtitle: "Irving, TX • 100% Hand-Slaughtered",
    category: "halal",
  },
  {
    id: "community-event",
    badge: "Community Halaqa",
    title: "Sirat: Walking the Prophetic Path",
    subtitle: "This Saturday after Asr • Free RSVP",
    category: "event",
  },
] as const;

export function HeroMockupPreview({ className }: HeroMockupPreviewProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center py-6 select-none",
        className,
      )}
    >
      {/* Background Ambient Glow */}
      <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl -z-10 pointer-events-none" />

      {/* Main Native Smartphone Container */}
      <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[310px] md:max-w-[330px] rounded-[2.5rem] border-[6px] border-foreground/15 bg-card p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
        {/* Top Camera Punch Hole / Pill Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
          <div className="h-3.5 w-16 rounded-full bg-foreground/20 flex items-center justify-center">
            <div className="size-2 rounded-full bg-foreground/50" />
          </div>
        </div>

        {/* Screen Display Frame */}
        <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-background text-foreground flex flex-col pt-5">
          {/* Mobile Screen Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-border/40 bg-muted/30">
            <div className="flex items-center gap-1.5">
              <HugeiconsIcon
                icon={Location01Icon}
                size={13}
                className="text-primary shrink-0"
              />
              <span className="text-[11px] font-medium text-foreground truncate max-w-[90px]">
                Irving, TX
              </span>
            </div>

            <Logo variant="compact" asLink={false} />
          </div>

          {/* Featured Active Prayer Card */}
          <div className="p-3.5 space-y-3">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-3.5 text-foreground shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <Badge
                  variant="outline"
                  className="text-[9px] py-0 px-2 font-medium border-primary/30 bg-primary/10 text-primary"
                >
                  Next Prayer
                </Badge>
                <span className="text-[10px] text-muted-foreground font-mono">
                  in 1h 48m
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-foreground">
                    Dhuhr
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    Islamic Center Irving Sync
                  </p>
                </div>
                <span className="text-lg font-bold text-primary font-mono">
                  11:42 AM
                </span>
              </div>
            </div>

            {/* Quick Action Pills in Phone */}
            <div className="grid grid-cols-4 gap-1.5 text-center">
              <div className="flex flex-col items-center gap-1 rounded-xl bg-muted/60 p-2 text-foreground">
                <HugeiconsIcon
                  icon={Compass01Icon}
                  size={16}
                  className="text-primary"
                />
                <span className="text-[9px] font-medium">Qibla</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl bg-muted/60 p-2 text-foreground">
                <HugeiconsIcon
                  icon={Quran01Icon}
                  size={16}
                  className="text-primary"
                />
                <span className="text-[9px] font-medium">Quran</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl bg-muted/60 p-2 text-foreground">
                <HugeiconsIcon
                  icon={Restaurant01Icon}
                  size={16}
                  className="text-primary"
                />
                <span className="text-[9px] font-medium">Halal</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl bg-muted/60 p-2 text-foreground">
                <HugeiconsIcon
                  icon={Mosque01Icon}
                  size={16}
                  className="text-primary"
                />
                <span className="text-[9px] font-medium">Mosques</span>
              </div>
            </div>

            {/* Simulated Content Feed */}
            <div className="rounded-xl border border-border/60 bg-card p-2.5 space-y-1">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-semibold text-foreground">
                  Today&apos;s Hadith
                </span>
                <span className="text-primary text-[9px] font-medium">
                  Daily
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground leading-snug line-clamp-2">
                &ldquo;The best of people are those that bring the most benefit
                to the rest of mankind.&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom App Navigation Mockup */}
          <div className="mt-auto border-t border-border/40 bg-card px-3 py-2 flex items-center justify-around text-muted-foreground">
            <div className="flex flex-col items-center text-primary">
              <HugeiconsIcon icon={Home01Icon} size={14} />
              <span className="text-[8px] font-semibold mt-0.5">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <HugeiconsIcon icon={Clock01Icon} size={14} />
              <span className="text-[8px] mt-0.5">Prayer</span>
            </div>
            <div className="flex flex-col items-center">
              <HugeiconsIcon icon={Restaurant01Icon} size={14} />
              <span className="text-[8px] mt-0.5">Halal</span>
            </div>
            <div className="flex flex-col items-center">
              <HugeiconsIcon icon={Calendar01Icon} size={14} />
              <span className="text-[8px] mt-0.5">Events</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contextual Micro-Cards (Desktop / Tablet view) */}
      <div className="hidden lg:block absolute -left-12 top-10 w-64 z-10 animate-pulse-subtle">
        <HeroFloatingCard card={FLOATING_CARDS[0]} />
      </div>

      <div className="hidden lg:block absolute -right-10 top-24 w-68 z-10">
        <HeroFloatingCard card={FLOATING_CARDS[1]} />
      </div>

      <div className="hidden lg:block absolute -left-8 bottom-8 w-68 z-10">
        <HeroFloatingCard card={FLOATING_CARDS[2]} />
      </div>

      {/* Stacked Floating Cards for Mobile / Small Screens */}
      <div className="lg:hidden mt-6 flex flex-col gap-2.5 w-full max-w-sm px-2">
        {FLOATING_CARDS.map((card) => (
          <HeroFloatingCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

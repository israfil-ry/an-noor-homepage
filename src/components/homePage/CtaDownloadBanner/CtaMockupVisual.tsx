import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkBadge01Icon,
  ShieldCheckIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export interface CtaMockupVisualProps {
  className?: string;
}

export function CtaMockupVisual({ className }: CtaMockupVisualProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center select-none",
        className
      )}
    >
      {/* Background Soft Glow */}
      <div className="absolute -inset-4 rounded-full bg-primary-foreground/15 blur-3xl pointer-events-none" />

      {/* Main Smartphone Shell */}
      <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[290px] rounded-[2.5rem] border-[5px] border-primary-foreground/30 bg-card p-2.5 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
        {/* Top Speaker Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
          <div className="h-3 w-14 rounded-full bg-foreground/20" />
        </div>

        {/* Screen Display Frame */}
        <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-background shadow-inner">
          <Image
            src="/images/app/home-mockup.png"
            alt="An-Noor Android App Interface"
            width={780}
            height={1688}
            className="w-full h-auto object-cover select-none"
            sizes="(max-width: 640px) 240px, 290px"
            priority={false}
          />
        </div>

        {/* Floating Verified Trust Pill Badge */}
        <div className="absolute -bottom-3 -left-4 z-20 hidden sm:flex items-center gap-2 rounded-xl border border-primary/20 bg-card px-3 py-1.5 shadow-lg text-foreground">
          <HugeiconsIcon
            icon={ShieldCheckIcon}
            size={16}
            className="text-primary shrink-0"
          />
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold">100% Ad-Free</span>
            <span className="text-[9px] text-muted-foreground">
              Privacy First
            </span>
          </div>
        </div>

        {/* Floating Community Sync Pill Badge */}
        <div className="absolute -top-3 -right-4 z-20 hidden sm:flex items-center gap-2 rounded-xl border border-primary/20 bg-card px-3 py-1.5 shadow-lg text-foreground">
          <HugeiconsIcon
            icon={CheckmarkBadge01Icon}
            size={16}
            className="text-primary shrink-0"
          />
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold">Mosque Sync</span>
            <span className="text-[9px] text-muted-foreground">
              Live Iqamah
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


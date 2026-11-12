import { HugeiconsIcon } from "@hugeicons/react";
import { UserCircle02Icon, StarIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { COMMUNITY_MEMBERS } from "@/lib/constants";

export interface HeroSocialProofProps {
  readonly className?: string;
}

export function HeroSocialProof({ className }: HeroSocialProofProps) {
  return (
    <div
      className={cn(
        "mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-muted-foreground",
        className,
      )}
    >
      {/* Community Avatar Stack */}
      <div
        className="flex -space-x-2 overflow-visible"
        aria-label="Diaspora Muslim community members"
      >
        {COMMUNITY_MEMBERS.map((member) => (
          <div
            key={member.id}
            title={member.label}
            aria-label={member.label}
            className={cn(
              "relative flex size-7 sm:size-8 items-center justify-center rounded-full ring-2 ring-background shadow-xs transition-transform duration-200 hover:scale-110 hover:z-10 select-none",
              member.bgClass,
              member.textClass,
            )}
          >
            <Image
              src={member.imgSrc}
              alt={member.label}
              fill
              className="rounded-full"
            />
            {/* <HugeiconsIcon
              icon={UserCircle02Icon}
              size={18}
              strokeWidth={1.75}
              aria-hidden="true"
            /> */}
          </div>
        ))}
      </div>

      {/* Trust Rating & Narrative */}
      <div className="flex flex-wrap items-center gap-1.5 text-left">
        <div className="inline-flex items-center gap-1 font-semibold text-foreground">
          <HugeiconsIcon
            icon={StarIcon}
            size={14}
            className="text-accent fill-accent"
            aria-hidden="true"
          />
          <span>5.0</span>
        </div>
        <span className="text-muted-foreground/60">•</span>
        <span>
          Trusted by{" "}
          <strong className="font-semibold text-foreground">10,000+</strong>{" "}
          Muslims in Irving, Dallas, Chicago, London &amp; beyond.
        </span>
      </div>
    </div>
  );
}

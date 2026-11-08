import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. Higher = slower. */
  duration?: number;
  /** Scroll left-to-right instead of right-to-left. */
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  duration,
  reverse = false,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden py-4 [--gap:1.5rem] [gap:var(--gap)]",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        // Reduced motion: no animation, let people scroll manually instead
        "motion-reduce:overflow-x-auto",
        className,
      )}
      style={{ "--duration": `${duration}s` } as CSSProperties}
    >
      {/* Two identical tracks create the seamless loop. The copy is hidden from assistive tech. */}
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={cn(
            "flex min-w-full shrink-0 items-stretch justify-around [gap:var(--gap)] animate-marquee motion-reduce:animate-none",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

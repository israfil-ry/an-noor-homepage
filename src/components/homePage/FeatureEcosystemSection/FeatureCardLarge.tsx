import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FeatureDecoration = "clock" | "headphones" | "book" | "none";

export interface FeatureCardLargeProps {
  title: string;
  description: string;
  icon: ReactNode;

  // Background and foreground styling
  backgroundClassName?: string;
  textClassName?: string;
  descriptionClassName?: string;
  borderClassName?: string;

  // Icon container styling
  iconContainerClassName?: string;

  // Decorative background shape
  decoration?: FeatureDecoration;
  decorationClassName?: string;

  // Additional card styling
  className?: string;
}

function DecorativeShape({ type }: { type: FeatureDecoration }) {
  if (type === "none") return null;

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[200px] w-[200px]"
      aria-hidden="true"
    >
      {type === "clock" && (
        <>
          <circle
            cx="100"
            cy="100"
            r="79"
            stroke="currentColor"
            strokeWidth="5"
          />
          <path
            d="M100 59V100L128 119"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {type === "headphones" && (
        <>
          <path
            d="M24 108V88C24 46 58 12 100 12C142 12 176 46 176 88V108"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M24 108H47V169H24V108Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            d="M153 108H176V169H153V108Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </>
      )}

      {type === "book" && (
        <>
          <path
            d="M100 45C78 29 49 25 22 35V155C49 145 78 149 100 165"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M100 45C122 29 151 25 178 35V155C151 145 122 149 100 165"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M100 45V165"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export function FeatureCardLarge({
  title,
  description,
  icon,

  backgroundClassName = "bg-[#176B32]",
  textClassName = "text-white",
  descriptionClassName = "text-white/75",
  borderClassName = "border-transparent",

  iconContainerClassName = "bg-white/15 text-white",

  decoration = "clock",
  decorationClassName = "text-white/10",

  className,
}: FeatureCardLargeProps) {
  return (
    <div
      className={cn(
        "group relative isolate flex min-h-[258px] flex-col justify-start",
        "overflow-hidden rounded-[32px] border p-8 sm:p-[38px]",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg",
        backgroundClassName,
        borderClassName,
        className,
      )}
    >
      {/* Decorative Background Shape */}
      {decoration !== "none" && (
        <div
          className={cn(
            "pointer-events-none absolute -bottom-[48px] -right-[10px]",
            "z-[-1] transition-transform duration-500",
            "group-hover:scale-105",
            decorationClassName,
          )}
        >
          <DecorativeShape type={decoration} />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={cn(
            "mb-7 flex size-[58px] items-center justify-center",
            "rounded-[17px] shadow-sm",
            iconContainerClassName,
          )}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className={cn(
            "mb-3 text-xl font-bold tracking-tight sm:text-2xl",
            textClassName,
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "max-w-[440px] text-sm leading-relaxed sm:text-[15px]",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

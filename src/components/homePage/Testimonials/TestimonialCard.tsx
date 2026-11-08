import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  const { quote, highlight, name, role, countryCode, countryName, avatarUrl } =
    testimonial;

  return (
    <figure
      className={cn(
        "group/card relative flex h-full w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 flex-col rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xs transition-all duration-300 hover:border-primary/30 hover:shadow-md",
        className,
      )}
    >
      <Quote
        aria-hidden="true"
        size={28}
        strokeWidth={1}
        className="fill-muted-foreground/25 text-muted-foreground/25"
      />

      {/* Quote with highlighted key phrase */}
      <blockquote className="mt-4 text-sm sm:text-base leading-8 text-muted-foreground">
        {quote}{" "}
        <span className="box-decoration-clone rounded-md bg-primary/5 px-2 py-1 font-medium text-foreground dark:bg-amber-500/20">
          {highlight}
        </span>
      </blockquote>

      {/* Author row (pinned to the bottom so all cards align) */}
      <figcaption className="mt-auto flex items-center justify-between gap-3 pt-8">
        <div className="flex min-w-0 items-center gap-3">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={name}
              width={48}
              height={48}
              className="size-12 shrink-0 rounded-full border border-border object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-bold text-primary"
            >
              {getInitials(name)}
            </div>
          )}

          <div className="min-w-0">
            <p className="truncate text-sm sm:text-base font-bold text-foreground">
              {name}
            </p>
            <p className="truncate text-xs text-muted-foreground">{role}</p>
          </div>
        </div>

        {/* <Image
          src={`https://flagcdn.com/w80/${countryCode}.png`}
          alt={countryName}
          title={countryName}
          width={32}
          height={24}
          unoptimized
          className="h-6 w-8 shrink-0 rounded-[3px] object-cover shadow-2xs"
        /> */}
      </figcaption>
    </figure>
  );
}

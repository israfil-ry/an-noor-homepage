import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/shared/Marquee";
import { TestimonialCard } from "./TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface TestimonialsSectionProps {
  className?: string;
}

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      aria-label="Community Testimonials"
      className={cn(
        "w-full overflow-hidden py-16 sm:py-24 bg-muted/30",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-1.5 p-3 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-2xs"
          >
            <span>Voices from Our Community</span>
          </Badge>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Trusted by Muslims{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              Around the World
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From catching every prayer on time to finding halal food and local
            work, here is how An-Noor fits into everyday life for students,
            families, and professionals in the community.
          </p>
        </div>
      </div>

      {/* Full-bleed infinite marquee */}
      <Marquee duration={10}>
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Marquee>
    </section>
  );
}

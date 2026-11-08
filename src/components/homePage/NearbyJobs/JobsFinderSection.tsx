"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  InformationCircleIcon,
  Mail01Icon,
  Briefcase01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { JobPlaceCard } from "./JobPlaceCard";
import { JobPreviewDialog } from "./JobPreviewDialog";
import { JobCategory, FEATURED_JOBS } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface JobsFinderSectionProps {
  className?: string;
}

const JOB_PILLARS = [
  {
    icon: Location01Icon,
    title: "Explore Nearby Job Openings",
    description:
      "Find opportunities at local businesses and check the job location to see which openings fit your daily commute.",
  },
  {
    icon: InformationCircleIcon,
    title: "Review the Details That Matter",
    description:
      "Read the job description and check available pay, employer information and application deadlines before getting in touch.",
  },
  {
    icon: Mail01Icon,
    title: "Contact Employers Directly",
    description:
      "Use the email, call or text options provided in the listing to ask questions and discuss how to apply.",
  },
  {
    icon: Briefcase01Icon,
    title: "Reach Local Job Seekers",
    description:
      "Post your vacancy with a clear description, location, pay information and preferred contact method to help applicants understand the role.",
  },
] as const;

export function JobsFinderSection({ className }: JobsFinderSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<JobCategory>("all");

  const filteredJobs =
    selectedCategory === "all"
      ? FEATURED_JOBS
      : FEATURED_JOBS.filter((j) => j.category === selectedCategory);

  const activeJob = filteredJobs[0] ?? FEATURED_JOBS[0];

  return (
    <section
      id="nearby-jobs"
      aria-label="Nearby Jobs Showcase"
      className={cn("w-full py-16 sm:py-24 bg-primary/5", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Frame + Featured Job Card */}
          <div className="lg:col-span-6 flex flex-col items-center order-1">
            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Phone Mockup Frame */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-border/80 bg-card p-3 shadow-md max-w-[280px] sm:max-w-[300px] w-full transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xs">
                  <Image
                    src="/images/app/nearby-jobs.png"
                    alt="An-Noor Nearby Jobs Mobile Screen"
                    width={780}
                    height={2112}
                    className="w-full h-auto object-cover select-none"
                    sizes="(max-width: 640px) 280px, 300px"
                    priority={false}
                  />
                </div>
              </div>

              {/* Dynamic Floating Job Card Preview */}
              <div className="w-full mt-4 sm:-mt-10 sm:relative sm:z-10 max-w-sm sm:max-w-md">
                <JobPlaceCard
                  job={activeJob}
                  className="shadow-lg border-primary/20 bg-card/95"
                />

                <div className="mt-4 flex justify-center">
                  <JobPreviewDialog />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Category Pills */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-2">
            <Badge
              variant="outline"
              className="mb-4 inline-flex items-center gap-1.5 p-3 text-xs font-semibold border-primary/25 bg-primary/5 text-primary rounded-full shadow-2xs"
            >
              <span>Local Jobs & Community Opportunities</span>
            </Badge>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Find Jobs Near You. Connect with{" "}
              <span className="text-primary underline decoration-primary/30 underline-offset-8">
                Local Employers.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Discover local job opportunities with AnNoor’s job finder. Explore
              nearby openings, review job details and connect with employers.
              Hiring for your business? Share your vacancy with people searching
              for work in your area.
            </p>

            {/* Interactive Category Selector */}
            {/* <div className="mt-6 w-full">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                Filter by Job Category
              </span>
              <JobCategoryPills
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div> */}

            {/* 3 Core Value Props */}
            <div className="mt-8 space-y-4 w-full">
              {JOB_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group flex items-start gap-3.5 rounded-2xl border border-border/70 bg-card/60 p-3.5 sm:p-4 transition-all duration-200 hover:border-primary/30 hover:bg-card shadow-2xs"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground shadow-2xs">
                    <HugeiconsIcon
                      icon={pillar.icon}
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

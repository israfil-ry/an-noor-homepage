"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  Mail01Icon,
  Add01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { JobCategoryPills } from "./JobCategoryPills";
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
    title: "Jobs Right Around You",
    description:
      "See openings sorted by distance, from restaurants and grocery stores to delivery roles, with address, pay, and deadline up front.",
  },
  {
    icon: Mail01Icon,
    title: "Reach Employers Directly",
    description:
      "Skip the application portals. Email, call, or text the employer in one tap, with no middlemen and no waiting.",
  },
  {
    icon: Add01Icon,
    title: "Post a Job in Minutes",
    description:
      "Running a business? List your opening for the community, set the pay and deadline, and choose how applicants contact you.",
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
              <span>Community Job Board</span>
            </Badge>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Find Work{" "}
              <span className="text-primary underline decoration-primary/30 underline-offset-8">
                Close to Home
              </span>
              , Hire from Your Community
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Whether you&apos;re looking for your next shift or your next hire,
              Nearby Jobs connects Muslim job seekers and local businesses with
              transparent pay, clear deadlines, and direct contact, all within
              your neighborhood.
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

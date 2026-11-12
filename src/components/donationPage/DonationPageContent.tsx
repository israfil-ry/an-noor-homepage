import { ShieldCheck, HeartHandshake } from "lucide-react";

import DonationAmountCard from "./DonationAmountCard";
import DonationIntroCard from "./DonationIntroCard";
import { Badge } from "../ui/badge";

export default function DonationPageContent() {
  return (
    <div className="w-full bg-muted/40">
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-6 inline-flex items-center gap-2 p-3 text-xs font-medium border-primary/25 bg-primary/5 text-primary rounded-full shadow-xs"
            >
              <span>Support Our Mission</span>
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Support AnNoor
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Help us continue serving the Muslim Ummah with a clean,
              distraction-free Islamic experience. Every contribution makes a
              difference.
            </p>
          </div>

          {/* Donation Content */}
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
            <DonationIntroCard />

            <DonationAmountCard />
          </div>

          {/* Trust Information */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-border bg-white px-6 py-6 text-center shadow-sm sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Your Support Matters
              </h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                We are committed to keeping AnNoor accessible,
                privacy-conscious, and free from disruptive advertisements.
                Thank you for supporting our mission.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

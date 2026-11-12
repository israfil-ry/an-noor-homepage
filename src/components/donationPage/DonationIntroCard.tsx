import { HeartHandshake, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DonationIntroCard() {
  return (
    <Card className="h-full rounded-3xl border border-border bg-white py-0 shadow-sm ring-1 ring-foreground/5">
      <CardContent className="p-7 sm:p-9">
        {/* Icon and Heading */}
        <div className="mb-7 flex items-center gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-primary sm:h-[72px] sm:w-[72px]">
            <HeartHandshake className="h-9 w-9" strokeWidth={1.8} />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Help AnNoor
            </h2>

            <p className="mt-1 text-sm font-medium text-primary">
              Together, we can make a difference
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          <p>
            Our mission is to support the Muslim Ummah in serving the Deen. To
            keep our app clean and free from distractions, we do not display
            Google Ads.
          </p>

          <p>
            You can support our team and help us continue this mission by making
            a small donation. Every contribution is greatly appreciated and
            helps us keep this work going.
          </p>

          <p className="font-medium text-gray-900">
            JazakAllahu Khairan for your support!
          </p>
        </div>

        {/* Small Mission Highlight */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

          <p className="text-sm leading-6 text-emerald-900">
            Every contribution, big or small, helps us continue building tools
            that benefit the Muslim community.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

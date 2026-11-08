import { HeroSection } from "@/components/homePage/HeroSection/HeroSection";
import { FeatureEcosystemSection } from "@/components/homePage/FeatureEcosystemSection/FeatureEcosystemSection";
import { HalalFinderSection } from "@/components/homePage/HalalFinderSection/HalalFinderSection";
import { EventsShowcaseSection } from "@/components/homePage/EventsShowcaseSection/EventsShowcaseSection";
import { TrustPledgeSection } from "@/components/homePage/TrustPledgeSection/TrustPledgeSection";
import { FaqSection } from "@/components/homePage/FaqSection/FaqSection";
import { CtaDownloadBanner } from "@/components/homePage/CtaDownloadBanner/CtaDownloadBanner";
import { JobsFinderSection } from "@/components/homePage/NearbyJobs/JobsFinderSection";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section Centerpiece Component */}
      <HeroSection />

      {/* 2. Live Interactive Daily Prayer Snapshot Bar Component */}
      {/* <PrayerSnapshotSection /> */}

      {/* 3. Quick Pillars Navigation Jump Strip */}
      {/* <QuickPillarsSection /> */}

      {/* 4. Core Feature Ecosystem Grid (9 Pillars with Category Filter Tabs) */}
      <FeatureEcosystemSection />

      {/* 5. Spiritual Essentials 4-Pillar Showcase with Mobile App UI Previews */}
      {/* <SpiritualEssentialsSection /> */}

      {/* 6. Community Showcase 1: Mosque Sync & Live Iqamah Times */}
      {/* <MosqueSyncSection /> */}

      {/* 7. Community Showcase 2: Nearby Halal Food & Grocery Directory */}
      <HalalFinderSection />

      <JobsFinderSection />

      {/* 8. Community Showcase 3: Islamic Community Events & Gatherings */}
      <EventsShowcaseSection />

      {/* 9. Trust, Ethics & Privacy Pledge Component (#about) */}
      <TrustPledgeSection />

      {/* 10. Frequently Asked Questions Accordion (#faq) */}
      <FaqSection />

      {/* 11. High-Converting App Store Download CTA Banner (#download) */}
      <CtaDownloadBanner />
    </div>
  );
}

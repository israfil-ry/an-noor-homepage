import { HeroSection } from "@/components/homePage/HeroSection/HeroSection";
import { PrayerSnapshotSection } from "@/components/homePage/PrayerSnapshotSection/PrayerSnapshotSection";
import { QuickPillarsSection } from "@/components/homePage/QuickPillarsSection/QuickPillarsSection";
import { FeatureEcosystemSection } from "@/components/homePage/FeatureEcosystemSection/FeatureEcosystemSection";
import { SpiritualEssentialsSection } from "@/components/homePage/SpiritualEssentialsSection/SpiritualEssentialsSection";
import { MosqueSyncSection } from "@/components/homePage/MosqueSyncSection/MosqueSyncSection";
import { HalalFinderSection } from "@/components/homePage/HalalFinderSection/HalalFinderSection";
import { EventsShowcaseSection } from "@/components/homePage/EventsShowcaseSection/EventsShowcaseSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section Centerpiece Component */}
      <HeroSection />

      {/* 2. Live Interactive Daily Prayer Snapshot Bar Component */}
      <PrayerSnapshotSection />

      {/* 3. Quick Pillars Navigation Jump Strip */}
      <QuickPillarsSection />

      {/* 4. Core Feature Ecosystem Grid (9 Pillars with Category Filter Tabs) */}
      <FeatureEcosystemSection />

      {/* 5. Spiritual Essentials 4-Pillar Showcase with Mobile App UI Previews */}
      <SpiritualEssentialsSection />

      {/* 6. Community Showcase 1: Mosque Sync & Live Iqamah Times */}
      <MosqueSyncSection />

      {/* 7. Community Showcase 2: Nearby Halal Food & Grocery Directory */}
      <HalalFinderSection />

      {/* 8. Community Showcase 3: Islamic Community Events & Gatherings */}
      <EventsShowcaseSection />

      {/* Target Section Anchor Placeholders for Subsequent Roadmap Phases */}
      <div className="sr-only">
        <section id="about" aria-label="About Section Anchor" />
        <section id="download" aria-label="Download App Section Anchor" />
      </div>
    </div>
  );
}

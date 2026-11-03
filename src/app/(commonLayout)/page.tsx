import { HeroSection } from "@/components/homePage/HeroSection";
import { PrayerSnapshotSection } from "@/components/homePage/PrayerSnapshotSection";
import { QuickPillarsSection } from "@/components/homePage/QuickPillarsSection";
import { FeatureEcosystemSection } from "@/components/homePage/FeatureEcosystemSection";
import { SpiritualEssentialsSection } from "@/components/homePage/SpiritualEssentialsSection";

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

      {/* Target Section Anchor Placeholders for Subsequent Roadmap Phases */}
      <div className="sr-only">
        <section id="halal-finder" aria-label="Nearby Halal Section Anchor" />
        <section id="community" aria-label="Mosques and Events Section Anchor" />
        <section id="about" aria-label="About Section Anchor" />
        <section id="download" aria-label="Download App Section Anchor" />
      </div>
    </div>
  );
}

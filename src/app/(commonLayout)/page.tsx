import { HeroSection } from "@/components/homePage/HeroSection";
import { QuickPillarsSection } from "@/components/homePage/QuickPillarsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section Component */}
      <HeroSection />

      {/* 2. Quick Pillars Section Component */}
      <QuickPillarsSection />

      {/* Target Section Anchor Placeholders for Subsequent Roadmap Phases */}
      <div className="sr-only">
        <section id="features" aria-label="Features Section Anchor" />
        <section id="prayer-times" aria-label="Prayer Times Section Anchor" />
        <section id="halal-finder" aria-label="Nearby Halal Section Anchor" />
        <section id="community" aria-label="Mosques and Events Section Anchor" />
        <section id="about" aria-label="About Section Anchor" />
        <section id="download" aria-label="Download App Section Anchor" />
      </div>
    </div>
  );
}

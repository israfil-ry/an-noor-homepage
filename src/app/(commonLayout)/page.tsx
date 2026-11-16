import { HeroSection } from "@/components/homePage/HeroSection/HeroSection";
import { FeatureEcosystemSection } from "@/components/homePage/FeatureEcosystemSection/FeatureEcosystemSection";
import { HalalFinderSection } from "@/components/homePage/HalalFinderSection/HalalFinderSection";
import { EventsShowcaseSection } from "@/components/homePage/EventsShowcaseSection/EventsShowcaseSection";
import { TrustPledgeSection } from "@/components/homePage/TrustPledgeSection/TrustPledgeSection";
import { FaqSection } from "@/components/homePage/FaqSection/FaqSection";
import { CtaDownloadBanner } from "@/components/homePage/CtaDownloadBanner/CtaDownloadBanner";
import { JobsFinderSection } from "@/components/homePage/NearbyJobs/JobsFinderSection";
import { Metadata } from "next";
import { TestimonialsSection } from "@/components/homePage/Testimonials/TestimonialsSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://annoor.app/#website",
      url: "https://annoor.app/",
      name: "AnNoor",
      description:
        "AnNoor brings prayer tools, nearby mosque and halal place discovery, and local job opportunities together.",
    },
    {
      "@type": "WebPage",
      "@id": "https://annoor.app/#webpage",
      url: "https://annoor.app/",
      name: "AnNoor | Prayer Times, Quran, Qibla & Halal Finder",
      description:
        "Explore AnNoor for Adhan reminders, Quran, duas, Qibla direction, Sehri and Iftar times, mosques and halal places near you, and nearby jobs.",
      isPartOf: {
        "@id": "https://annoor.app/#website",
      },
      mainEntity: {
        "@id": "https://annoor.app/#app",
      },
    },
    {
      "@type": "MobileApplication",
      "@id": "https://annoor.app/#app",
      name: "AnNoor: Adhan Prayer Quran",
      url: "https://annoor.app/",
      description:
        "AnNoor helps Muslims with daily worship and discovering nearby mosques, halal restaurants, grocery stores, businesses, and local job opportunities.",
      operatingSystem: "Android",
      applicationCategory: "LifestyleApplication",
      installUrl:
        "https://play.google.com/store/apps/details?id=com.annoor.app",
      featureList: [
        "Prayer times and Adhan reminders",
        "Sehri and Iftar times",
        "Qibla direction finder",
        "Quran and duas",
        "Nearby mosque finder",
        "Nearby halal restaurants",
        "Halal grocery stores and businesses",
        "Nearby jobs and local job opportunities",
      ],
      mainEntityOfPage: {
        "@id": "https://annoor.app/#webpage",
      },
    },
  ],
};

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-col w-full">
        <HeroSection />

        <FeatureEcosystemSection />

        <HalalFinderSection />

        <JobsFinderSection />

        <EventsShowcaseSection />

        <TrustPledgeSection />

        <TestimonialsSection />

        <FaqSection />

        <CtaDownloadBanner />
      </div>
    </>
  );
}

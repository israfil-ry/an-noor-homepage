import { Navbar } from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://annoor.app"),

  title: {
    default: "AnNoor: Prayer Times, Quran, Halal & Job Finder",
    template: "%s | AnNoor",
  },

  description:
    "Find nearby mosques, halal restaurants and local jobs with AnNoor. Get Adhan reminders, check prayer times, read the Quran and find your Qibla direction.",

  // Open Graph Metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://annoor.app/",
    siteName: "AnNoor",
    title: "AnNoor: Prayer Times, Halal Places & Local Jobs",
    description:
      "Discover nearby mosques, halal food and job opportunities with AnNoor. Stay connected with Adhan reminders, prayer times, Quran, duas and a Qibla finder.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AnNoor: Prayer Times, Halal Places & Local Jobs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AnNoor: Prayer Times, Halal Places & Local Jobs",
    description:
      "Discover nearby mosques, halal food and job opportunities with AnNoor. Stay connected with Adhan reminders, prayer times, Quran, duas and a Qibla finder.",
    images: ["/og-image.png"],
  },

  keywords: [
    // Primary Keyword
    "Muslim app",

    // Secondary Keywords
    "prayer times",
    "Adhan app",
    "prayer reminder app",
    "Quran app",
    "Qibla finder",
    "mosque finder",
    "mosques near me",
    "halal food near me",
    "halal restaurants near me",
    "halal grocery stores near me",
    "halal business directory",
    "local job finder",
    "jobs near me",
    "daily duas",
    "suhoor and iftar times",

    // Brand Keywords
    "AnNoor",
    "AnNoor app",
    "AnNoor prayer times",
    "AnNoor halal finder",
    "AnNoor job finder",
  ],
};

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">{children}</main>
      <Footer />
    </div>
  );
}

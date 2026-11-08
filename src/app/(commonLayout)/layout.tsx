import { Navbar } from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://annoor.app"),

  title: {
    default: "AnNoor - Your Islamic Lifestyle Companion",
    template: "%s | AnNoor",
  },

  description:
    "Discover nearby masjids, halal places, prayer times, and more with AnNoor.",

  openGraph: {
    title: "AnNoor - Your Islamic Lifestyle Companion",
    description:
      "Discover nearby masjids, halal places, prayer times, and more.",
    url: "/",
    siteName: "AnNoor",
    images: [
      {
        url: "/images/app/og-image.png",
        width: 1200,
        height: 630,
        alt: "AnNoor - Your Islamic Lifestyle Companion",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AnNoor - Your Islamic Lifestyle Companion",
    description:
      "Discover nearby masjids, halal places, prayer times, and more.",
    images: ["/images/app/og-image.png"],
  },
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

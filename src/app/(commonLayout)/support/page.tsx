import type { Metadata } from "next";
import DonationPageContent from "@/components/donationPage/DonationPageContent";

export const metadata: Metadata = {
  title: "Support AnNoor",
  description:
    "Support AnNoor's mission to serve the Muslim Ummah. Your contribution helps us maintain a clean, free, and ad-free Islamic experience.",
  alternates: {
    canonical: "/donate",
  },
};

export default function DonatePage() {
  return <DonationPageContent />;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export interface FooterCategory {
  title: string;
  links: FooterLink[];
}

export const NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Features",
    href: "#features",
    description: "Explore the comprehensive Islamic ecosystem",
  },
  {
    label: "Prayer Times",
    href: "#prayer-times",
    description: "Accurate astronomical calculations & Adhan",
  },
  {
    label: "Nearby Halal",
    href: "#halal-finder",
    description: "Verified halal dining & groceries",
  },
  {
    label: "Mosques & Events",
    href: "#community",
    description: "Live Iqamah sync and community halaqas",
  },
  {
    label: "About",
    href: "#about",
    description: "Our privacy-first and ad-free pledge",
  },
] as const;

export const FOOTER_CATEGORIES: readonly FooterCategory[] = [
  {
    title: "Core Features",
    links: [
      { label: "Prayer Times & Azan", href: "#prayer-times" },
      { label: "Qibla Direction", href: "#features" },
      { label: "Nearby Halal Finder", href: "#halal-finder" },
      { label: "Mosque Iqamah Sync", href: "#community" },
      { label: "Community Events", href: "#community" },
      { label: "The Holy Quran & Audio", href: "#features" },
      { label: "Duas & Hisnul Muslim", href: "#features" },
      { label: "Digital Tasbih", href: "#features" },
    ],
  },
  {
    title: "Community & Mosques",
    links: [
      { label: "Partner Mosques", href: "#community" },
      { label: "Submit a Halal Place", href: "#halal-finder" },
      { label: "Add Community Event", href: "#community" },
      { label: "Mosque Donation Channels", href: "#community" },
      { label: "Volunteer Network", href: "#about" },
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      { label: "Privacy Policy", href: "privacy-policy" },
      { label: "Terms of Service", href: "terms-and-conditions" },
      { label: "Ad-Free & Ethics Pledge", href: "#about" },
      { label: "Data Integrity & Verification", href: "#about" },
      { label: "Contact & Support", href: "contact" },
    ],
  },
] as const;

export const APP_CONFIG = {
  name: "An-Noor",
  arabicName: "النور",
  tagline: "Your Daily Islamic Companion & Local Halal Living Guide",
  subTagline:
    "Accurate prayer times, live mosque Iqamah sync, verified halal dining, and sacred knowledge beautifully unified and 100% ad-free.",
  defaultLocation: "Irving, TX",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.annoor.app",
  androidQrCodeUrl: "/AnNoor_App_Google_Play_Store_QR.svg",
  appStoreUrl: "#",
  apkDownloadUrl: "#",
  supportEmail: "support@annoor.app",
  copyrightYear: 2026,
} as const;


export interface TrustPillarItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly badgeText: string;
  readonly iconName: "shield" | "lock" | "verified";
  readonly highlights: readonly string[];
}

export interface TrustMetric {
  readonly id: string;
  readonly value: string;
  readonly label: string;
  readonly description: string;
}

export type FaqCategoryId = "all" | "general" | "prayer" | "community" | "privacy";

export interface FaqCategoryDef {
  readonly id: FaqCategoryId;
  readonly label: string;
}

export interface FaqItem {
  readonly id: string;
  readonly category: FaqCategoryId;
  readonly question: string;
  readonly answer: string;
  readonly keyTakeaway?: string;
}

export interface CtaFeaturePoint {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
}

export const TRUST_PILLARS: readonly TrustPillarItem[] = [
  {
    id: "zero-ads",
    title: "100% Ad-Free, Forever",
    badgeText: "Uncompromised Focus",
    description:
      "We believe sacred acts of worship must never be monetized or commodified. An-Noor contains zero banner ads, zero interstitial pop-ups, and zero commercial interruptions while you recite Quran, make Dua, or check prayer times.",
    iconName: "shield",
    highlights: [
      "Zero banner ads or pop-ups",
      "No sponsor interruptions during Azan",
      "Clean, dignified spiritual atmosphere",
    ],
  },
  {
    id: "privacy-first",
    title: "On-Device Privacy First",
    badgeText: "Zero Data Brokerage",
    description:
      "Your faith journey is between you and your Creator. Astronomical prayer calculations and Qibla compass readings are processed 100% locally on your smartphone. We never track, store, or sell your personal location data to advertisers.",
    iconName: "lock",
    highlights: [
      "100% on-device GPS processing",
      "No user tracking or data brokering",
      "Zero registration required to pray",
    ],
  },
  {
    id: "community-verified",
    title: "Verified Community Integrity",
    badgeText: "Authentic & Curated",
    description:
      "Every mosque Iqamah timetable, halal certification standard, and Islamic community gathering is curated with care. We partner directly with local Islamic centers and trusted community representatives to guarantee authentic information.",
    iconName: "verified",
    highlights: [
      "Direct mosque administration sync",
      "Hand-slaughtered halal certification labels",
      "Vetted community halaqas & family events",
    ],
  },
] as const;

export const TRUST_METRICS: readonly TrustMetric[] = [
  {
    id: "metric-ads",
    value: "0 Ads",
    label: "Always Ad-Free",
    description: "Sacred space free of commercial noise",
  },
  {
    id: "metric-free",
    value: "100% Free",
    label: "No Hidden Costs",
    description: "All core tools unlocked for every Muslim",
  },
  {
    id: "metric-privacy",
    value: "On-Device",
    label: "Privacy First",
    description: "Local GPS math, zero location selling",
  },
  {
    id: "metric-verified",
    value: "Community",
    label: "Curated Data",
    description: "Direct partnership with local Islamic centers",
  },
] as const;

export const FAQ_CATEGORIES: readonly FaqCategoryDef[] = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General & Free Pledge" },
  { id: "prayer", label: "Prayer & Qibla Calculations" },
  { id: "community", label: "Mosques & Halal Finder" },
  { id: "privacy", label: "Privacy & Offline Use" },
] as const;

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "faq-free",
    category: "general",
    question: "Is An-Noor completely free? Are there in-app purchases or hidden subscriptions?",
    answer:
      "Yes, An-Noor is 100% free and open to everyone. All core features—including accurate prayer times, Azan notifications, Qibla compass, the Holy Quran with audio recitations, Hisnul Muslim Duas, Tasbih, and community directories—are fully accessible without any paywalls, premium tiers, or hidden charges.",
    keyTakeaway: "100% free with no premium paywalls.",
  },
  {
    id: "faq-calculation",
    category: "prayer",
    question: "How are prayer times calculated for my location?",
    answer:
      "An-Noor utilizes established astronomical calculation methods, including ISNA (Islamic Society of North America), Muslim World League (MWL), Umm Al-Qura (Makkah), Egyptian General Authority of Survey, and University of Islamic Sciences (Karachi). In addition, you can manually fine-tune prayer offsets or synchronize directly with your local partner Mosque's official timetable.",
    keyTakeaway: "Accurate astronomical formulas with manual and mosque sync adjustments.",
  },
  {
    id: "faq-mosque-listing",
    category: "community",
    question: "How can our local Mosque or Islamic Center get listed on An-Noor?",
    answer:
      "Mosque administrators and board members can register their Islamic center by submitting their details through our dedicated partner onboarding channel or emailing support@annoor.app. Once verified, administrators gain direct access to update daily Iqamah schedules, announce community events, and connect donation links.",
    keyTakeaway: "Free and instant onboarding for verified mosque administrators.",
  },
  {
    id: "faq-halal-verification",
    category: "community",
    question: "How are Halal restaurants and grocery stores verified?",
    answer:
      "Our diaspora directory prioritizes establishments certified by reputable Halal certifiers (such as HMS, HFSAA, and ISWA) and flags transparency regarding hand-slaughtered meat (Zabiha) and alcohol-free environments. Listings feature community reviews and owner confirmations so families can dine with peace of mind.",
    keyTakeaway: "Transparent certification badges, Zabiha details, and community validation.",
  },
  {
    id: "faq-ios",
    category: "general",
    question: "Is an iOS (iPhone / iPad) version coming soon?",
    answer:
      "Yes! While An-Noor is currently available on Android via Google Play and direct APK download, our iOS application is currently in active development for the Apple App Store. You can use our web version and join our mailing list to receive an instant alert when the iOS TestFlight beta launches.",
    keyTakeaway: "iOS app is in active development with TestFlight beta opening soon.",
  },
  {
    id: "faq-offline",
    category: "privacy",
    question: "Does the app work offline without an active internet connection?",
    answer:
      "Yes! Prayer calculations, Qibla compass sensor readings, the Holy Quran text, Hisnul Muslim Duas, and the Digital Tasbih work 100% offline. An active internet connection is only needed when fetching live mosque Iqamah updates, exploring new nearby Halal places on the map, or streaming Quran audio recitations.",
    keyTakeaway: "Essential spiritual tools work entirely offline without internet.",
  },
] as const;

export const CTA_FEATURES: readonly CtaFeaturePoint[] = [
  {
    id: "cta-prayer",
    title: "Accurate Prayer & Adhan",
    subtitle: "Precise astronomical calculations and custom audio Adhan alerts",
  },
  {
    id: "cta-community",
    title: "Local Community Sync",
    subtitle: "Mosque Iqamah times, verified halal dining, and local halaqas",
  },
  {
    id: "cta-privacy",
    title: "100% Free & Privacy First",
    subtitle: "Zero ads, zero data tracking, and local on-device computation",
  },
] as const;


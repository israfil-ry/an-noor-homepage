export interface TrustPillarItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly badgeText: string;
  readonly iconName: "clock" | "location" | "community";
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
    id: "daily-worship",
    title: "Support for Your Daily Worship",
    badgeText: "Daily Worship",
    description:
      "Access prayer times, Adhan reminders, Quran, duas and Qibla direction in one place, with tools that fit into your everyday routine.",
    iconName: "clock",
    highlights: [
      "Prayer times & Adhan reminders",
      "Quran, duas & Qibla direction",
      "Built around your daily routine",
    ],
  },
  {
    id: "local-connections",
    title: "Useful Connections Close to Home",
    badgeText: "Nearby Essentials",
    description:
      "Discover nearby mosques, halal restaurants, grocery stores and job opportunities that help you navigate daily life in your community.",
    iconName: "location",
    highlights: [
      "Nearby mosques & Iqamah details",
      "Halal restaurants & grocery stores",
      "Local job opportunities",
    ],
  },
  {
    id: "community-participation",
    title: "A Place for Community Participation",
    badgeText: "Community Driven",
    description:
      "Help people discover your mosque, business or job opportunity. AnNoor gives local organisations and employers a way to share useful information with the community.",
    iconName: "community",
    highlights: [
      "Share your mosque or business",
      "Post jobs with pay & contact details",
      "Reach people in your community",
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
    id: "faq-what-is-annoor",
    question: "What is AnNoor?",
    answer:
      "AnNoor is a Muslim lifestyle app that brings together prayer times, Adhan reminders, Quran, Qibla direction, duas and local discovery tools. You can also find nearby mosques, halal places, job listings and community events.",
  },
  {
    id: "faq-prayer-times",
    question: "How can I check prayer times for my location?",
    answer:
      "Use AnNoor’s prayer times feature to view your local daily prayer schedule. Check your location and available prayer settings, and refer to your mosque’s timetable for congregation times.",
  },
  {
    id: "faq-adhan-reminders",
    question: "Can I receive Adhan and prayer reminders?",
    answer:
      "Yes. AnNoor includes Adhan and prayer reminders. Enable the relevant app notifications and check your phone’s notification settings so reminders can reach you.",
  },
  {
    id: "faq-qibla",
    question: "How do I find Qibla direction?",
    answer:
      "Open the Qibla finder and follow the on-screen guidance. Your phone’s compass and surroundings can affect the reading, so keep the device away from metal objects and magnetic interference.",
  },
  {
    id: "faq-mosques-iqamah",
    question: "Can I find mosques near me and check Iqamah times?",
    answer:
      "AnNoor helps you discover nearby mosques and Islamic centres. Iqamah times and mosque prayer schedules are available where provided; contact the mosque if you need to confirm a time.",
  },
  {
    id: "faq-halal-places",
    question: "How can I find halal restaurants and grocery stores near me?",
    answer:
      "Open the halal finder to explore nearby restaurants, grocery stores and businesses. Review the listing details and contact the business directly if you have questions about its halal practices or certification.",
  },
  {
    id: "faq-local-jobs",
    question: "Can I search for local jobs on AnNoor?",
    answer:
      "Yes. The Nearby Jobs feature lets you explore local job listings and review available information such as the role, location, pay and application deadline. Use the employer’s listed contact options to learn more or apply.",
  },
  {
    id: "faq-post-jobs-listings",
    question: "Can business owners post jobs or list halal businesses?",
    answer:
      "Yes. AnNoor supports halal business listings and job posts. Follow the relevant submission process and review any applicable listing plan, fee and approval requirements before submitting.",
  },
  {
    id: "faq-suhoor-iftar",
    question: "Does AnNoor include suhoor and iftar times?",
    answer:
      "Yes. AnNoor includes local suhoor and iftar times to help you plan your fasting routine during Ramadan.",
  },
  {
    id: "faq-support",
    question: "How can I contact AnNoor support?",
    answer:
      "Email annoor@annoor.app for help, feedback or listing questions. Include a short description of the issue and, for app problems, your device model and app version.",
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


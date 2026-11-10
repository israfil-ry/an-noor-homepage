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

export interface Testimonial {
  id: string;
  /** Lead-in text, shown in muted color */
  quote: string;
  /** Key phrase, shown highlighted after the lead-in */
  highlight: string;
  name: string;
  role: string;
  /** ISO 3166-1 alpha-2, lowercase (used for the flag image) */
  countryCode: string;
  countryName: string;
  /** Optional local path, e.g. "/images/testimonials/amina.jpg". Falls back to initials. */
  avatarUrl?: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Features",
    href: "#features",
    description: "Explore the comprehensive Islamic ecosystem",
  },
  {
    label: "Nearby Halal",
    href: "#halal-finder",
    description: "Verified halal dining & groceries",
  },
  {
    label: "Nearby Jobs",
    href: "#nearby-jobs",
    description: "Job opportunities in the Islamic community",
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
  {
    label: "FAQ",
    href: "#faq",
    description: "Frequently asked questions",
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

// PLACEHOLDER CONTENT: replace with real, consented user testimonials before launch.
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "t-1",
    quote:
      "Between night shifts I used to lose track of prayer times, and I was always unsure about the direction in new places.",
    highlight:
      "An-Noor's Adhan reminders and Qibla finder keep my day on track, wherever I am.",
    name: "Amina Rahman",
    role: "Nurse",
    countryCode: "us",
    countryName: "United States",
  },
  {
    id: "t-2",
    quote:
      "After moving to a new city, finding genuine zabiha meat was stressful.",
    highlight:
      "Nearby Halal showed me verified restaurants and butchers close to home within minutes.",
    name: "Yusuf Khan",
    role: "Software Engineer",
    countryCode: "gb",
    countryName: "United Kingdom",
  },
  {
    id: "t-3",
    quote:
      "I read Quran every morning before work, and I never wanted ads popping up in the middle of it.",
    highlight:
      "An-Noor feels like an app built with real respect for the deen.",
    name: "Maryam Abdullah",
    role: "School Teacher",
    countryCode: "ca",
    countryName: "Canada",
  },
  {
    id: "t-4",
    quote:
      "My local mosque changes its Iqamah times often, and I used to miss jamaah because of it.",
    highlight:
      "Live Iqamah sync means I always leave on time and catch the congregation.",
    name: "Ibrahim Yilmaz",
    role: "University Student",
    countryCode: "tr",
    countryName: "Türkiye",
  },
  {
    id: "t-5",
    quote:
      "I posted a server position for our family café through Nearby Jobs,",
    highlight:
      "and within a week I was speaking with reliable candidates from our own community.",
    name: "Fatima Zahra",
    role: "Café Owner",
    countryCode: "ma",
    countryName: "Morocco",
  },
  {
    id: "t-6",
    quote:
      "I was tired of long application forms that never got a reply.",
    highlight:
      "With Nearby Jobs I called the employer directly and started part-time work close to home that same week.",
    name: "Omar Hassan",
    role: "Job Seeker",
    countryCode: "eg",
    countryName: "Egypt",
  },
  {
    id: "t-7",
    quote:
      "During Ramadan, juggling lectures and fasting is hard enough without checking three different websites for timings.",
    highlight:
      "The Sehri and Iftar countdown on my home screen made every day simpler.",
    name: "Aisha Siddiqui",
    role: "Graduate Student",
    countryCode: "pk",
    countryName: "Pakistan",
  },
  {
    id: "t-8",
    quote:
      "As a new Muslim, I felt lost memorizing daily supplications at the start.",
    highlight:
      "Duas with translations and audio helped me learn step by step with confidence.",
    name: "Daniel Ahmed",
    role: "New Muslim",
    countryCode: "au",
    countryName: "Australia",
  },
  {
    id: "t-9",
    quote:
      "With three kids, I was looking for gatherings where our whole family would feel welcome.",
    highlight:
      "Community Events led us to a weekly family halaqa just ten minutes from our house.",
    name: "Nurul Huda",
    role: "Mother of Three",
    countryCode: "my",
    countryName: "Malaysia",
  },
  {
    id: "t-10",
    quote:
      "I travel across time zones almost every month for work.",
    highlight:
      "Prayer times and Qibla adjust the moment I land, so I never have to think about it.",
    name: "Khalid Al-Mansoori",
    role: "Business Consultant",
    countryCode: "ae",
    countryName: "United Arab Emirates",
  },
];


export const APP_CONFIG = {
  name: "An-Noor",
  arabicName: "النور",
  tagline: "Your Daily Islamic Companion & Local Halal Living Guide",
  subTagline:
    "AnNoor helps make everyday Muslim life easier with prayer times, Adhan reminders, Quran, duas and Qibla direction. Explore nearby mosques, halal restaurants, grocery stores, local jobs and community events.",
  defaultLocation: "Irving, TX",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.annoor.app",
  androidQrCodeUrl: "/AnNoor_App_Google_Play_Store_QR.svg",
  appStoreUrl: "https://apps.apple.com/us/app/annoor-adhan-prayer-quran/id6819280456",
  iosQrCodeUrl: "/AnNoor_App_Apple_App_Store_QR.svg",
  apkDownloadUrl: "#",
  supportEmail: "support@annoor.app",
  copyrightYear: 2026,
} as const;



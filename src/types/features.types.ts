export type FeatureCategory = "all" | "worship" | "community";

export type FeatureIconName =
  | "clock"
  | "compass"
  | "moon"
  | "quran"
  | "book"
  | "tasbih"
  | "mosque"
  | "restaurant"
  | "calendar";

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "worship" | "community";
  iconName: FeatureIconName;
  badgeText: string;
  href: string;
}

export interface SpiritualToolItem {
  id: "qibla" | "quran" | "duas" | "tasbih";
  title: string;
  arabicTitle: string;
  subtitle: string;
  description: string;
  highlights: readonly string[];
  imageSrc: string;
  imageAlt: string;
  iconName: "compass" | "quran" | "book" | "tasbih";
  previewTitle: string;
  previewDetails: readonly string[];
}

export const FEATURE_ITEMS: readonly FeatureItem[] = [
  {
    id: "prayer-times",
    title: "Accurate Prayer Times & Azan",
    subtitle: "Astronomical precision with Adhan alerts",
    description:
      "Calculated using verified international standards with custom angle adjustments, audio Azan notifications, and real-time countdown to the next prayer.",
    category: "worship",
    iconName: "clock",
    badgeText: "Daily Worship",
    href: "#prayer-times",
  },
  {
    id: "qibla-direction",
    title: "Qibla Direction Finder",
    subtitle: "High-precision Kaaba compass",
    description:
      "Calibrated compass with magnetic declination correction and augmented reality camera view, pointing directly to Makkah from anywhere on Earth.",
    category: "worship",
    iconName: "compass",
    badgeText: "Daily Worship",
    href: "#spiritual-tools",
  },
  {
    id: "ramadan-fasting",
    title: "Ramadan & Fasting Schedule",
    subtitle: "Sehri & Iftar timetable alerts",
    description:
      "Daily fasting countdowns, personalized Imsak notifications, and customizable Sunnah fasting reminders for Mondays, Thursdays, and White Days.",
    category: "worship",
    iconName: "moon",
    badgeText: "Daily Worship",
    href: "#prayer-times",
  },
  {
    id: "holy-quran",
    title: "The Holy Quran & Audio",
    subtitle: "Arabic text, English translation & audio",
    description:
      "Crystal-clear Uthmani script with verse-by-verse translation, customizable reading typography, audio recitations by renowned Qaris, and bookmarks.",
    category: "worship",
    iconName: "quran",
    badgeText: "Daily Worship",
    href: "#spiritual-tools",
  },
  {
    id: "duas-supplications",
    title: "Duas & Hisnul Muslim",
    subtitle: "Authentic prophetic supplications",
    description:
      "Categorized daily Adhkar for morning, evening, travel, and distress, complete with Arabic text, English transliteration, and sahih hadith references.",
    category: "worship",
    iconName: "book",
    badgeText: "Daily Worship",
    href: "#spiritual-tools",
  },
  {
    id: "digital-tasbih",
    title: "Digital Tasbih & Dhikr",
    subtitle: "Minimalist counter with haptic feedback",
    description:
      "Gentle tactile vibration, custom target counts, daily amal streak history, and preset morning/evening tasbihat for focused remembrance of Allah.",
    category: "worship",
    iconName: "tasbih",
    badgeText: "Daily Worship",
    href: "#spiritual-tools",
  },
  {
    id: "mosque-sync",
    title: "Nearby Mosque Sync & Iqamah",
    subtitle: "Direct Islamic Center connection",
    description:
      "Sync with your local mosque timetable, check verified Iqamah congregation times, receive push alerts before prayer begins, and donate directly.",
    category: "community",
    iconName: "mosque",
    badgeText: "Community",
    href: "#community",
  },
  {
    id: "halal-finder",
    title: "Nearby Halal Directory",
    subtitle: "Restaurants, butchers & supermarkets",
    description:
      "Curated directory of certified hand-slaughtered halal eateries and grocery stores with community reviews, certification tags, and directions.",
    category: "community",
    iconName: "restaurant",
    badgeText: "Community",
    href: "#halal-finder",
  },
  {
    id: "community-events",
    title: "Islamic Community Events",
    subtitle: "Local halaqas, lectures & dinners",
    description:
      "Discover upcoming Islamic lectures, guest scholar tours, family dinners, and youth programs with instant one-tap calendar synchronization.",
    category: "community",
    iconName: "calendar",
    badgeText: "Community",
    href: "#community",
  },
] as const;

export const SPIRITUAL_TOOLS: readonly SpiritualToolItem[] = [
  {
    id: "qibla",
    title: "Qibla Direction Finder",
    arabicTitle: "القبلة",
    subtitle: "Pinpoint Kaaba alignment anywhere in the world",
    description:
      "Engineered with magnetic declination correction, gyroscope smoothing, and augmented reality camera view for instant, reliable Qibla calibration.",
    highlights: [
      "Magnetic Declination Correction",
      "Real-time Bearing & Distance to Kaaba",
      "Works 100% Offline with GPS Sensor",
    ],
    imageSrc: "/images/app/qibla-mockup.png",
    imageAlt: "An-Noor Qibla Direction Compass Mobile Screen",
    iconName: "compass",
    previewTitle: "Real-time Qibla Calibration in An-Noor",
    previewDetails: [
      "Smooth 60fps rotational compass dial with exact degree angle readout",
      "Instant visual alignment indicator turning emerald when pointing toward Makkah",
      "Automatic sensor recalibration prompt when magnetic interference is detected",
    ],
  },
  {
    id: "quran",
    title: "The Holy Quran & Audio Recitations",
    arabicTitle: "القرآن الكريم",
    subtitle: "Sacred scripture with crystal-clear typography",
    description:
      "Read the Holy Quran in beautiful Uthmani script accompanied by verse-by-verse English translations, audio recitations by world-renowned Qaris, and cloud bookmarks.",
    highlights: [
      "Verified Medina Mushaf Uthmani Script",
      "Multiple English Translations & Tafsir",
      "Verse-by-Verse Audio Recitations",
    ],
    imageSrc: "/images/app/feature-banner.png",
    imageAlt: "An-Noor Holy Quran & Audio Reader Showcase",
    iconName: "quran",
    previewTitle: "Distraction-Free Quran Experience",
    previewDetails: [
      "Customizable Arabic font size with soothing reading color modes",
      "Audio playback with background listening and Ayah highlighting",
      "Comprehensive Surah and Juz navigation with instant keyword search",
    ],
  },
  {
    id: "duas",
    title: "Duas & Hisnul Muslim",
    arabicTitle: "الأدعية وحصن المسلم",
    subtitle: "Authentic prophetic supplications for every moment",
    description:
      "Over 200+ authentic supplications categorized for morning and evening Adhkar, prayer, sickness, travel, and gratitude, complete with audio pronunciation and references.",
    highlights: [
      "100% Sahih Hadith References",
      "Arabic Audio & English Transliteration",
      "Categorized Morning & Evening Adhkar",
    ],
    imageSrc: "/images/app/duas-mockup.png",
    imageAlt: "An-Noor Duas & Hisnul Muslim Mobile Screen",
    iconName: "book",
    previewTitle: "Daily Supplications & Morning/Evening Adhkar",
    previewDetails: [
      "Categorized by situation: waking up, entering mosque, meals, and hardship",
      "Full phonetic transliteration for non-native Arabic speakers",
      "Counter tracking for supplications repeated 3x or 100x",
    ],
  },
  {
    id: "tasbih",
    title: "Digital Tasbih & Dhikr Counter",
    arabicTitle: "التسبيح والأذكار",
    subtitle: "Tactile, distraction-free remembrance of Allah",
    description:
      "A minimalist digital counter offering gentle haptic vibration feedback on tap, customizable target thresholds (33, 99, 1000), and daily Amal history tracking.",
    highlights: [
      "Tactile Haptic Vibration Feedback",
      "Custom Target Thresholds (33, 99, 1000+)",
      "Daily Amal Habit History & Streaks",
    ],
    imageSrc: "/images/app/tasbih-mockup.png",
    imageAlt: "An-Noor Digital Tasbih Counter Mobile Screen",
    iconName: "tasbih",
    previewTitle: "Focused Dhikr Counter with Haptics",
    previewDetails: [
      "Large tap target covering the entire phone screen for blind counting",
      "Subtle vibration signal when target number (e.g., 33 or 99) is achieved",
      "Local history tracker recording your daily praise without cloud tracking",
    ],
  },
] as const;


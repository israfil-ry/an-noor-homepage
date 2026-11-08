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
  | "briefcase"
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
    id: "qibla-finder",
    title: "Qibla Finder",
    subtitle: "Face the Kaaba with confidence",
    description:
      "Find Qibla direction from your location so you can prepare for prayer at home, at work or while travelling.",
    category: "worship",
    iconName: "compass",
    badgeText: "Prayer Tools",
    href: "#spiritual-tools",
  },
  {
    id: "suhoor-iftar-times",
    title: "Suhoor & Iftar Times",
    subtitle: "Plan your fasting days",
    description:
      "Check local suhoor and iftar times to plan your fasting days during Ramadan.",
    category: "worship",
    iconName: "moon",
    badgeText: "Ramadan",
    href: "#prayer-times",
  },
  {
    id: "daily-duas-adhkar",
    title: "Daily Duas & Adhkar",
    subtitle: "Supplications for every moment",
    description:
      "Explore duas and daily adhkar for mornings, evenings, travel and other moments throughout your day.",
    category: "worship",
    iconName: "book",
    badgeText: "Daily Worship",
    href: "#spiritual-tools",
  },
  {
    id: "digital-tasbih-counter",
    title: "Digital Tasbih Counter",
    subtitle: "Count your dhikr anywhere",
    description:
      "Keep count of your dhikr with a simple digital tasbih counter wherever you are.",
    category: "worship",
    iconName: "tasbih",
    badgeText: "Dhikr",
    href: "#spiritual-tools",
  },
  {
    id: "nearby-mosques-iqamah",
    title: "Nearby Mosques & Iqamah",
    subtitle: "Plan your mosque visit",
    description:
      "Find mosques near you and view available prayer schedules and Iqamah information before your visit.",
    category: "community",
    iconName: "mosque",
    badgeText: "Community",
    href: "#community",
  },
  {
    id: "halal-food-grocery-finder",
    title: "Halal Food & Grocery Finder",
    subtitle: "Find halal places nearby",
    description:
      "Discover nearby halal restaurants, grocery stores and businesses, with listing details to help you plan your visit.",
    category: "community",
    iconName: "restaurant",
    badgeText: "Nearby",
    href: "#halal-finder",
  },
  {
    id: "local-job-finder",
    title: "Local Job Finder",
    subtitle: "Work opportunities near you",
    description:
      "Explore jobs near you, review available pay and location details, and contact employers through their listed contact options.",
    category: "community",
    iconName: "briefcase",
    badgeText: "Nearby",
    href: "#nearby-jobs",
  },
  {
    id: "islamic-events",
    title: "Islamic Events",
    subtitle: "Learn and gather with your community",
    description:
      "Discover local Islamic events, mosque gatherings and learning opportunities that bring your community together.",
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


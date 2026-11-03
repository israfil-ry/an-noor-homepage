export interface IqamahTime {
  prayer: "Fajr" | "Dhuhr" | "Asr" | "Maghrib" | "Isha" | "Jumu'ah";
  adhan: string;
  iqamah: string;
  isNext?: boolean;
}

export interface MasjidItem {
  id: string;
  name: string;
  arabicName: string;
  address: string;
  city: string;
  state: string;
  distance: string;
  imamName: string;
  iqamahSchedule: readonly IqamahTime[];
  donationChannel: {
    campaignTitle: string;
    description: string;
    category: string;
    verifiedDirect: boolean;
  };
  imageSrc: string;
  profileImageSrc: string;
  donationImageSrc: string;
}

export type HalalCategory = "all" | "restaurant" | "grocery" | "butcher";

export interface HalalCategoryOption {
  id: HalalCategory;
  label: string;
}

export interface HalalPlaceItem {
  id: string;
  name: string;
  category: HalalCategory;
  categoryLabel: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  distance: string;
  address: string;
  certificationAuthority: string;
  isHandSlaughtered: boolean;
  isOpenNow: boolean;
  openingHours: string;
  priceLevel: "$" | "$$" | "$$$";
}

export interface IslamicEventItem {
  id: string;
  title: string;
  subtitle: string;
  dateBadge: string;
  timeString: string;
  venueName: string;
  venueAddress: string;
  speakerName: string;
  speakerTitle: string;
  category: "lecture" | "family" | "youth" | "fundraiser";
  admission: "Free Community Admission" | "Ticketed RSVP";
  highlights: readonly string[];
  imageSrc: string;
  detailsImageSrc: string;
}

export const HALAL_CATEGORIES: readonly HalalCategoryOption[] = [
  { id: "all", label: "All Halal" },
  { id: "restaurant", label: "Restaurants & Cafes" },
  { id: "grocery", label: "Supermarkets & Groceries" },
  { id: "butcher", label: "Meat & Butchers" },
] as const;

export const FEATURED_MASJID: MasjidItem = {
  id: "ici-irving",
  name: "Islamic Center of Irving",
  arabicName: "مركز إيرفينغ الإسلامي",
  address: "2555 N Esters Rd",
  city: "Irving",
  state: "TX",
  distance: "2.4 mi",
  imamName: "Dr. Yasir Qadhi & Sheikh Omar Suleiman",
  iqamahSchedule: [
    { prayer: "Fajr", adhan: "5:30 AM", iqamah: "6:00 AM" },
    { prayer: "Dhuhr", adhan: "12:15 PM", iqamah: "1:30 PM", isNext: true },
    { prayer: "Asr", adhan: "3:45 PM", iqamah: "4:30 PM" },
    { prayer: "Maghrib", adhan: "6:20 PM", iqamah: "6:25 PM" },
    { prayer: "Isha", adhan: "7:45 PM", iqamah: "8:15 PM" },
    { prayer: "Jumu'ah", adhan: "1:15 PM", iqamah: "1:45 PM" },
  ],
  donationChannel: {
    campaignTitle: "Masjid Expansion & Education Fund",
    description: "Direct community giving with 100% passed to the masjid treasury with zero platform deductions.",
    category: "General Operating & Sadaqah",
    verifiedDirect: true,
  },
  imageSrc: "/images/app/nearby-mosques-mockup.png",
  profileImageSrc: "/images/app/masjid-profile-screen.png",
  donationImageSrc: "/images/app/mosque-donation-screen.png",
};

export const FEATURED_HALAL_PLACES: readonly HalalPlaceItem[] = [
  {
    id: "al-madina-grill",
    name: "Al-Madina Halal Grill & Shawarma",
    category: "restaurant",
    categoryLabel: "Mediterranean & Middle Eastern",
    cuisine: "Shawarma, Platters & Falafel",
    rating: 4.9,
    reviewCount: 428,
    distance: "1.2 mi",
    address: "N MacArthur Blvd, Irving, TX",
    certificationAuthority: "HMS Certified Zabiha",
    isHandSlaughtered: true,
    isOpenNow: true,
    openingHours: "11:00 AM - 10:30 PM",
    priceLevel: "$$",
  },
  {
    id: "crescent-halal-market",
    name: "Crescent Halal Supermarket & Butcher",
    category: "grocery",
    categoryLabel: "Halal Grocery & Meat",
    cuisine: "Fresh Hand-Slaughtered Meats & Spices",
    rating: 4.8,
    reviewCount: 310,
    distance: "2.8 mi",
    address: "Belt Line Rd, Irving, TX",
    certificationAuthority: "HFSAA Certified",
    isHandSlaughtered: true,
    isOpenNow: true,
    openingHours: "9:00 AM - 9:00 PM",
    priceLevel: "$",
  },
  {
    id: "medina-prime-butcher",
    name: "Madina Prime Halal Butcher",
    category: "butcher",
    categoryLabel: "Artisanal Halal Butcher",
    cuisine: "Fresh Lamb, Goat, Beef & Organic Poultry",
    rating: 4.9,
    reviewCount: 195,
    distance: "3.5 mi",
    address: "Airport Fwy, Irving, TX",
    certificationAuthority: "HMS Certified Hand-Slaughtered",
    isHandSlaughtered: true,
    isOpenNow: true,
    openingHours: "10:00 AM - 8:00 PM",
    priceLevel: "$$",
  },
  {
    id: "shawarma-press-dfw",
    name: "Shawarma Press & Bakery",
    category: "restaurant",
    categoryLabel: "Casual Dining & Wraps",
    cuisine: "Authentic Arabic Shawarma & Saj",
    rating: 4.7,
    reviewCount: 560,
    distance: "4.1 mi",
    address: "Rochelle Rd, Irving, TX",
    certificationAuthority: "100% Halal Verified",
    isHandSlaughtered: true,
    isOpenNow: false,
    openingHours: "Opens at 11:30 AM",
    priceLevel: "$$",
  },
] as const;

export const FEATURED_EVENT: IslamicEventItem = {
  id: "sirat-prophetic-path",
  title: "Sirat: Walking the Prophetic Path",
  subtitle: "A journey through the character and timeless wisdom of Prophet Muhammad ﷺ",
  dateBadge: "Saturday, Oct 24 • 7:00 PM CST",
  timeString: "7:00 PM - 9:30 PM CST",
  venueName: "Islamic Center of Irving",
  venueAddress: "2555 N Esters Rd, Irving, TX 75062",
  speakerName: "Dr. Yasir Qadhi",
  speakerTitle: "Dean of Academic Affairs & Resident Scholar",
  category: "lecture",
  admission: "Free Community Admission",
  highlights: [
    "Comprehensive Seerah study of Prophetic character",
    "Live Q&A session with local youth and families",
    "Complimentary community dinner served after Isha",
  ],
  imageSrc: "/images/app/events-mockup.png",
  detailsImageSrc: "/images/app/event-details-screen.png",
};


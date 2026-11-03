export type PrayerName = "fajr" | "sunrise" | "dhuhr" | "asr" | "maghrib" | "isha";

export interface PrayerTimeItem {
  id: PrayerName;
  label: string;
  arabicLabel: string;
  time: string;
  isNext: boolean;
  isPassed: boolean;
  iconName: "moon" | "sunrise" | "sun" | "sunset";
}

export interface LocationOption {
  id: string;
  city: string;
  region: string;
  label: string;
  country: string;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface DailyPrayerSnapshot {
  location: LocationOption;
  gregorianDate: string;
  hijriDate: string;
  prayers: PrayerTimeItem[];
  nextPrayer: PrayerTimeItem;
  timeRemainingText: string;
  sehriTime: string;
  iftarTime: string;
  fastingCountdownText: string;
  isFastingActive: boolean;
}

export interface FloatingCardData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  category: "prayer" | "halal" | "event";
}

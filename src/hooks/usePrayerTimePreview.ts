"use client";

import { useState, useMemo, useCallback, useSyncExternalStore } from "react";
import {
  DailyPrayerSnapshot,
  LocationOption,
  PrayerTimeItem,
} from "@/types/prayer.types";

const emptySubscribe = () => () => {};

export function useIsClient(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export const DIASPORA_LOCATIONS: readonly LocationOption[] = [
  {
    id: "irving",
    city: "Irving",
    region: "TX",
    label: "Irving, TX (USA)",
    country: "USA",
    timezone: "America/Chicago",
    coordinates: { lat: 32.814, lng: -96.9489 },
  },
  {
    id: "dallas",
    city: "Dallas",
    region: "TX",
    label: "Dallas, TX (USA)",
    country: "USA",
    timezone: "America/Chicago",
    coordinates: { lat: 32.7767, lng: -96.797 },
  },
  {
    id: "chicago",
    city: "Chicago",
    region: "IL",
    label: "Chicago, IL (USA)",
    country: "USA",
    timezone: "America/Chicago",
    coordinates: { lat: 41.8781, lng: -87.6298 },
  },
  {
    id: "new-york",
    city: "New York",
    region: "NY",
    label: "New York, NY (USA)",
    country: "USA",
    timezone: "America/New_York",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: "london",
    city: "London",
    region: "UK",
    label: "London (UK)",
    country: "UK",
    timezone: "Europe/London",
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
  {
    id: "toronto",
    city: "Toronto",
    region: "ON",
    label: "Toronto, ON (Canada)",
    country: "Canada",
    timezone: "America/Toronto",
    coordinates: { lat: 43.6532, lng: -79.3832 },
  },
] as const;

interface BasePrayerSchedule {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  sehri: string;
  iftar: string;
}

const PRAYER_SCHEDULES: Record<string, BasePrayerSchedule> = {
  irving: {
    fajr: "05:42 AM",
    sunrise: "07:04 AM",
    dhuhr: "11:42 AM",
    asr: "03:15 PM",
    maghrib: "06:18 PM",
    isha: "07:38 PM",
    sehri: "05:32 AM",
    iftar: "06:18 PM",
  },
  dallas: {
    fajr: "05:41 AM",
    sunrise: "07:03 AM",
    dhuhr: "11:41 AM",
    asr: "03:14 PM",
    maghrib: "06:17 PM",
    isha: "07:37 PM",
    sehri: "05:31 AM",
    iftar: "06:17 PM",
  },
  chicago: {
    fajr: "05:22 AM",
    sunrise: "06:48 AM",
    dhuhr: "11:52 AM",
    asr: "03:08 PM",
    maghrib: "06:05 PM",
    isha: "07:31 PM",
    sehri: "05:12 AM",
    iftar: "06:05 PM",
  },
  "new-york": {
    fajr: "05:18 AM",
    sunrise: "06:42 AM",
    dhuhr: "11:48 AM",
    asr: "03:02 PM",
    maghrib: "05:58 PM",
    isha: "07:22 PM",
    sehri: "05:08 AM",
    iftar: "05:58 PM",
  },
  london: {
    fajr: "04:58 AM",
    sunrise: "06:38 AM",
    dhuhr: "12:02 PM",
    asr: "02:48 PM",
    maghrib: "05:42 PM",
    isha: "07:18 PM",
    sehri: "04:48 AM",
    iftar: "05:42 PM",
  },
  toronto: {
    fajr: "05:32 AM",
    sunrise: "06:58 AM",
    dhuhr: "12:05 PM",
    asr: "03:18 PM",
    maghrib: "06:12 PM",
    isha: "07:39 PM",
    sehri: "05:22 AM",
    iftar: "06:12 PM",
  },
};

export function getPrayerSnapshotForLocation(locationId: string): DailyPrayerSnapshot {
  const loc =
    DIASPORA_LOCATIONS.find((l) => l.id === locationId) ?? DIASPORA_LOCATIONS[0];
  const sched = PRAYER_SCHEDULES[loc.id] ?? PRAYER_SCHEDULES.irving;

  const prayers: PrayerTimeItem[] = [
    {
      id: "fajr",
      label: "Fajr",
      arabicLabel: "الفجر",
      time: sched.fajr,
      isNext: false,
      isPassed: true,
      iconName: "moon",
    },
    {
      id: "sunrise",
      label: "Sunrise",
      arabicLabel: "الشروق",
      time: sched.sunrise,
      isNext: false,
      isPassed: true,
      iconName: "sunrise",
    },
    {
      id: "dhuhr",
      label: "Dhuhr",
      arabicLabel: "الظهر",
      time: sched.dhuhr,
      isNext: true,
      isPassed: false,
      iconName: "sun",
    },
    {
      id: "asr",
      label: "Asr",
      arabicLabel: "العصر",
      time: sched.asr,
      isNext: false,
      isPassed: false,
      iconName: "sun",
    },
    {
      id: "maghrib",
      label: "Maghrib",
      arabicLabel: "المغرب",
      time: sched.maghrib,
      isNext: false,
      isPassed: false,
      iconName: "sunset",
    },
    {
      id: "isha",
      label: "Isha",
      arabicLabel: "العشاء",
      time: sched.isha,
      isNext: false,
      isPassed: false,
      iconName: "moon",
    },
  ];

  const nextPrayer = prayers.find((p) => p.isNext) ?? prayers[2];

  return {
    location: loc,
    gregorianDate: "Tuesday, October 2, 2026",
    hijriDate: "21 Rabi' II 1448 AH",
    prayers,
    nextPrayer,
    timeRemainingText: "in 1h 48m",
    sehriTime: sched.sehri,
    iftarTime: sched.iftar,
    fastingCountdownText: "6h 36m until Iftar",
    isFastingActive: true,
  };
}

export interface UsePrayerTimePreviewOptions {
  initialLocationId?: string;
}

export function usePrayerTimePreview(options: UsePrayerTimePreviewOptions = {}) {
  const [selectedLocationId, setSelectedLocationId] = useState<string>(
    options.initialLocationId ?? "irving"
  );
  const isMounted = useIsClient();

  const snapshot = useMemo(
    () => getPrayerSnapshotForLocation(selectedLocationId),
    [selectedLocationId]
  );

  const setLocation = useCallback((locationId: string) => {
    setSelectedLocationId(locationId);
  }, []);

  return {
    snapshot,
    locations: DIASPORA_LOCATIONS,
    selectedLocationId,
    setLocation,
    isMounted,
  };
}

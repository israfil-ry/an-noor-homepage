# Requirement Specification: Hero Section Centerpiece & Live Interactive Prayer Snapshot Bar

## 1. Feature Overview & Business Intent

**An-Noor** ("The Light") is a modern, privacy-focused Islamic Android application crafted to serve the daily spiritual and practical lifestyle needs of Muslims, with special emphasis on Muslims living in diaspora / Western societies (e.g., North America, Europe) where local community discovery, verified Halal availability, and authentic Mosque sync are vital.

The objective of this phase is to engineer the flagship visual and interactive centerpiece of the An-Noor official web landing page:
1. **Hero Section Centerpiece**:
   - Compelling value proposition headline, trust badges, and primary app store conversion buttons.
   - High-fidelity CSS-crafted native Android mobile device mockup displaying the authentic An-Noor mobile app interface (prayer card, quick action grid, bottom navigation).
   - 3 floating contextual micro-cards surrounding the mockup with soft floating animation: Next Prayer Sync (`Dhuhr 11:42 AM` at Islamic Center Irving), Nearby Halal Directory (`8 Groceries & 14 Restaurants in Irving, TX`), and Community Halaqa (`Sirat: Walking the Prophetic Path`).
   - Accessible desktop "Scan QR to Download" modal/popover.
2. **Live Interactive Daily Prayer Snapshot Bar**:
   - Live utility banner providing immediate practical value to visitors without requiring download.
   - Dual Gregorian and Hijri calendar date display (e.g., `Tuesday, 2 October 2026 / 21 Rabi' II 1448 AH`).
   - Location selector with pre-set diaspora hubs (`Irving, TX`, `Dallas, TX`, `Chicago, IL`, `New York, NY`, `London, UK`, `Toronto, Canada`).
   - 5 daily prayer times strip (`Fajr`, `Sunrise`, `Dhuhr`, `Asr`, `Maghrib`, `Isha`) with dynamic active prayer detection, countdown timer, and subtle emerald glow.
   - Fasting & Ramadan widget displaying Sehri & Iftar countdowns and quick action triggers ("Find Qibla Direction", "Donate to Mosque").

---

## 2. Current State vs. Target Requirements (Gap Matrix)

| Dimension | Current Codebase State | Target Requirement | Architectural & UX Impact |
| :--- | :--- | :--- | :--- |
| **Hero Section Visuals** | Basic text-only hero in [`HeroSection.tsx`](file:///c:/Projects/an-noor-homepage/src/components/homePage/HeroSection.tsx) with heading, badge, and store buttons. No phone visual. | Multi-layer CSS Android device mockup, realistic An-Noor mobile app preview, and 3 floating contextual cards. | Increases credibility, emotional connection, and conversion rate. |
| **QR Code Download** | Not implemented. | Accessible `QrCodeModal` triggered via "Scan QR Code" CTA button for desktop visitors. | Bridges desktop-to-mobile conversion barrier. |
| **Daily Prayer Snapshot Bar** | Not implemented. Anchor placeholder `<section id="prayer-times" />` only. | Full interactive component `PrayerSnapshotSection` with real-time prayer schedule, Hijri date, location switching, and countdown timer. | Delivers immediate practical utility without downloading. |
| **Prayer Time Preview Hook** | Not implemented. | Custom hook `usePrayerTimePreview.ts` with deterministic SSR calculation and hydration-safe client timer. | Clean separation of calculation logic from UI rendering. |
| **Type Contracts** | No `src/types/` directory exists. | Strongly-typed interfaces in `src/types/prayer.types.ts` (`PrayerTimeItem`, `LocationOption`, `DailyPrayerSnapshot`, `FloatingCardData`). | 100% type safety, zero `any`. |
| **Sub-component Limits** | Single monolithic hero attempt. | Decomposed into 9 modular components under `src/components/homePage/`, each strictly < 300 lines. | Strict adherence to Frontend Architecture rules. |
| **Unit Testing** | Minimal tests for initial hero text. | 100% test coverage across all new components and hooks in `__tests__/`. | Pure TDD compliance. |

---

## 3. Functional Requirements (FRs)

### FR-1: Hero Content & Value Proposition (`HeroContent.tsx`)
- **FR-1.1**: Display Trust Badge pill: `"100% Free • Ad-Free • Built for the Global Ummah"` with an emerald pulsing status indicator.
- **FR-1.2**: Display Value Headline: *"Your Complete Daily Islamic Companion & Local Halal Living Guide"*.
- **FR-1.3**: Display Sub-headline describing prayer times, local mosque sync, verified halal dining, and community spiritual journey.
- **FR-1.4**: Render CTA group reusing `AppDownloadBadges` (Google Play, Direct APK) plus desktop QR code trigger button.

### FR-2: Native Mobile Device Mockup (`HeroMockupPreview.tsx`)
- **FR-2.1**: Render a modern, ultra-crisp Android smartphone frame with rounded corners (`rounded-[2.5rem]`), camera punch hole / pill, subtle metallic bezel, and soft ambient emerald backlight glow.
- **FR-2.2**: The interior mobile screen displays the An-Noor native application UI:
  - Top status bar: Current location pill (`Irving, TX`) and notification indicator.
  - Active Prayer Hero Card: Current/Next prayer (`Dhuhr 11:42 AM`), live countdown timer (`Next prayer in 1h 48m`), and active mosque sync badge (`Islamic Center Irving`).
  - Quick Feature Action Grid: 4 icons (Qibla Compass, Holy Quran, Digital Tasbih, Nearby Halal).
  - Bottom App Navigation Bar: Home, Halal, Mosques, Community, Settings with active tab indicator.

### FR-3: Floating Contextual Community Micro-Cards (`HeroFloatingCard.tsx`)
- **FR-3.1**: Render 3 contextual micro-cards positioned around the mobile device mockup on desktop/tablet views:
  - **Card A (Prayer Sync)**: Mosque Iqamah time with active live badge (`Islamic Center Irving • Dhuhr Iqamah 1:15 PM`).
  - **Card B (Halal Directory)**: Nearby Halal discovery badge (`8 Groceries & 14 Restaurants in Irving, TX • 100% Hand-Slaughtered`).
  - **Card C (Community Events)**: Local Halaqa preview (`Sirat: Walking the Prophetic Path • Saturday after Asr`).
- **FR-3.2**: Cards feature subtle floating hover animation, soft slate shadows, emerald icon accents, and responsive visibility (stacked neatly on mobile viewports).

### FR-4: Desktop "Scan QR to Download" Modal / Popover (`QrCodeModal.tsx`)
- **FR-4.1**: Accessible modal dialog or popover triggered by clicking "Scan QR Code".
- **FR-4.2**: Displays a crisp QR code SVG/canvas pointing to Google Play Store URL, clear scanning instructions for Android camera, and direct APK download link.
- **FR-4.3**: Keyboard accessible (ESC closes, focus trapped, ARIA dialog attributes).

### FR-5: Daily Date, Hijri Calendar & Location Selector (`PrayerDateHeader.tsx`)
- **FR-5.1**: Display formatted Gregorian date (e.g., `Tuesday, October 2, 2026`) alongside calculated Hijri date (e.g., `21 Rabi' II 1448 AH`).
- **FR-5.2**: Provide an interactive location selector dropdown supporting major diaspora metropolitan areas:
  - `Irving, TX (Default)`
  - `Dallas, TX`
  - `Chicago, IL`
  - `New York, NY`
  - `London, UK`
  - `Toronto, ON`
- **FR-5.3**: Changing location instantly updates prayer times, countdowns, and Hijri calculations.

### FR-6: 5 Daily Prayer Times Strip with Dynamic Highlight (`PrayerTimeStrip.tsx`)
- **FR-6.1**: Display chronological horizontal cards for: `Fajr`, `Sunrise`, `Dhuhr`, `Asr`, `Maghrib`, `Isha`.
- **FR-6.2**: Dynamically detect current/upcoming prayer:
  - Active prayer highlighted with prominent emerald border (`border-primary`), mint background tint (`bg-primary/10`), active badge (`Next in 1h 48m`), and subtle emerald pulse.
  - Standardized Hugeicons: `Moon02Icon` (Fajr/Isha), `SunriseIcon` (Sunrise), `Sun03Icon` (Dhuhr/Asr), `SunsetIcon` (Maghrib).

### FR-7: Fasting & Ramadan Widget & Quick Actions (`FastingCountdownWidget.tsx`)
- **FR-7.1**: Display Sehri (Fajr stop) & Iftar (Maghrib) time cards with live fasting countdown.
- **FR-7.2**: Quick action action buttons:
  - "Find Qibla Direction" (smooth scrolls to `#features` / Qibla).
  - "Donate to Mosque" (smooth scrolls to `#community` / Mosque sync).

### FR-8: Location-Aware Prayer Calculations Hook (`usePrayerTimePreview.ts`)
- **FR-8.1**: Custom hook managing state for selected location, calculating daily prayer times, detecting active/upcoming prayer, and tracking live seconds-accurate countdown.
- **FR-8.2**: Hydration-safe implementation: returns deterministic baseline on server render, initializes live interval timer after client mount (`useEffect`), preventing SSR hydration mismatch.

### FR-9: Clean Page Orchestration (`src/app/(commonLayout)/page.tsx`)
- **FR-9.1**: Cleanly assemble `<HeroSection />`, `<PrayerSnapshotSection />`, and `<QuickPillarsSection />`.
- **FR-9.2**: File remains strictly < 60 lines.

---

## 4. Non-Functional Requirements (NFRs)

- **NFR-1: Zero Hardcoded Colors (Rule 15)**:
  - 100% of color styles must strictly consume semantic CSS variable classes configured in `src/app/globals.css` (`bg-primary`, `text-primary-foreground`, `bg-accent`, `bg-muted`, `border-border`, `bg-card`, etc.).
  - Zero hex codes (`#...`) or arbitrary Tailwind bracket classes (`bg-[#...]`).
- **NFR-2: Strict File Size Ceiling (Rule 12)**:
  - Every single component, hook, and type file must strictly remain **under 300 lines of code** (absolute hard maximum 400 lines).
- **NFR-3: One File, One Component (Rule 1)**:
  - Every sub-component (`HeroContent`, `HeroMockupPreview`, `HeroFloatingCard`, `QrCodeModal`, `PrayerSnapshotSection`, `PrayerDateHeader`, `PrayerTimeStrip`, `FastingCountdownWidget`) must reside in its own dedicated file.
- **NFR-4: 100% Device Responsiveness**:
  - **Mobile (<640px)**: Phone mockup scales cleanly with `w-full max-w-[280px]`; floating cards stack neatly below; prayer strip scrolls horizontally with smooth snap or wraps gracefully.
  - **Tablet (640-1024px)**: Balanced 2-column or centered layouts; touch targets >= 44x44px.
  - **Desktop (1024px+)**: Side-by-side hero composition with 3 floating cards overlapping outer boundaries.
  - **Zero Horizontal Scroll**: All wrappers enforce `overflow-x-hidden`.
- **NFR-5: Iconography Standard**:
  - Exclusively `@hugeicons/react` and `@hugeicons/core-free-icons`. Zero `lucide-react`.
- **NFR-6: Mandatory Pure Unit Testing in `__tests__/`**:
  - 100% unit tests pass across all newly authored components and custom hooks.

---

## 5. Defensive Edge Cases & Failure Modes

| Edge Case / Scenario | Defensive Strategy |
| :--- | :--- |
| **SSR Hydration Mismatch** | Client clock ticks and countdown timers initialize inside `useEffect` after mount. Server renders static pre-computed times for the default location (`Irving, TX`). |
| **Midnight / Date Rollover** | `usePrayerTimePreview` detects when the last prayer of the day (`Isha`) has passed and automatically rolls over to calculate the next morning's `Fajr`. |
| **Small Mobile Screen (<360px)** | Phone frame uses fluid max-width constraints (`max-w-[260px] sm:max-w-[300px] lg:max-w-[340px]`) and floating cards adapt to inline stacked micro-pills. |
| **Rapid Location Switch** | Dropdown updates state deterministically without asynchronous race conditions; calculations are pure synchronous lookups based on pre-compiled astronomical tables for supported diaspora hubs. |
| **QR Code Scan Fallback** | `QrCodeModal` includes a direct copyable link button and Google Play badge alongside the QR code graphic. |

---

## 6. Sign-off Criteria (Phase 1 Completion Checklist)

- [x] Gap analysis completed against codebase and plan.
- [x] All 9 Functional Requirements (FR-1 through FR-9) strictly defined.
- [x] Strict compliance with Rule 15 (Zero Hardcoded Colors) confirmed.
- [x] Sub-component breakdown designed to guarantee all files remain well under 300 lines.
- [x] Edge cases enumerated (SSR hydration, date rollover, mobile viewport wrapping).
- [x] Unit test plan mapped in `__tests__/`.

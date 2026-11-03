# Micro-Tasks Breakdown: Hero Section Centerpiece & Live Interactive Prayer Snapshot Bar

## Overview & Execution Strategy

Implementation proceeds systematically through decoupled micro-tasks following **Pure Test-Driven Development (TDD)**: failing unit tests in `__tests__/` are authored first, followed by minimal production code in `src/`, and verified green before proceeding.

---

### Track B: Types, Logic & Calculation Engine (Foundation First)

#### Task 1: TypeScript Contracts for Prayers, Locations & Snapshots
- **Requirement Trace**: FR-5, FR-6, FR-8, NFR-2
- **Execution Track**: Track B (Contracts)
- **Can Run in Parallel With**: Task 3
- **Files to Create / Modify**:
  - Source: `src/types/prayer.types.ts`
- **Estimated Line Count**: ~65 lines
- **Dependencies**: None
- **Acceptance Criteria**:
  - Exports `PrayerName`, `PrayerTimeItem`, `LocationOption`, `DailyPrayerSnapshot`, and `FloatingCardData`.
  - Zero `any` usage.

#### Task 2: Location-Aware Prayer Calculations Hook (`usePrayerTimePreview`)
- **Requirement Trace**: FR-5.2, FR-6.2, FR-7.1, FR-8.1, FR-8.2
- **Execution Track**: Track B (Hooks & Logic)
- **Can Run in Parallel With**: Task 4
- **Files to Create / Modify**:
  - Source: `src/hooks/usePrayerTimePreview.ts`
  - Unit Test: `__tests__/hooks/usePrayerTimePreview.test.ts`
- **Estimated Line Count**: ~180 lines
- **Dependencies**: Task 1
- **Unit Test Plan (TDD Red-First)**:
  - Initial SSR state returns deterministic baseline for Irving, TX.
  - Correctly calculates chronological prayer times: Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha.
  - Accurately identifies current upcoming prayer and countdown string.
  - Updates snapshot when changing location to Dallas, Chicago, New York, London, Toronto.
  - Cleans up interval timer on unmount.
- **Acceptance Criteria**:
  - 100% tests green. File under 250 lines.

---

### Track A: UI Atoms & Presentational Components

#### Task 3: Desktop "Scan QR to Download" Modal (`QrCodeModal`)
- **Requirement Trace**: FR-1.4, FR-4.1, FR-4.2, FR-4.3
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 1
- **Files to Create / Modify**:
  - Source: `src/components/homePage/QrCodeModal.tsx`
  - Unit Test: `__tests__/homePage/QrCodeModal.test.tsx`
- **Estimated Line Count**: ~120 lines
- **Dependencies**: `src/components/ui/dialog.tsx`
- **Unit Test Plan (TDD Red-First)**:
  - Renders trigger button with QR icon.
  - Opens modal upon click displaying QR code graphic, Play Store link, and instructions.
  - Accessible dialog title and description.
- **Acceptance Criteria**:
  - 100% unit tests green.

#### Task 4: Reusable Floating Micro-Card (`HeroFloatingCard`)
- **Requirement Trace**: FR-3.1, FR-3.2
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 2
- **Files to Create / Modify**:
  - Source: `src/components/homePage/HeroFloatingCard.tsx`
  - Unit Test: `__tests__/homePage/HeroFloatingCard.test.tsx`
- **Estimated Line Count**: ~100 lines
- **Dependencies**: None
- **Unit Test Plan (TDD Red-First)**:
  - Renders badge, title, subtitle, and icon.
  - Applies semantic theme classes and subtle floating hover classes.
- **Acceptance Criteria**:
  - File under 120 lines. 100% tests green.

#### Task 5: Native Android Phone Frame & Mobile Preview (`HeroMockupPreview`)
- **Requirement Trace**: FR-2.1, FR-2.2, FR-3.1
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 7
- **Files to Create / Modify**:
  - Source: `src/components/homePage/HeroMockupPreview.tsx`
  - Unit Test: `__tests__/homePage/HeroMockupPreview.test.tsx`
- **Estimated Line Count**: ~220 lines
- **Dependencies**: Task 4, `src/components/shared/Logo.tsx`
- **Unit Test Plan (TDD Red-First)**:
  - Renders phone frame with camera notch and rounded chassis.
  - Renders embedded An-Noor brand logo and mobile UI preview.
  - Renders 3 floating cards (Prayer Sync, Halal Directory, Community Event).
- **Acceptance Criteria**:
  - Zero hardcoded colors. File under 250 lines.

#### Task 6: Hero Content, Trust Tag & CTA Group (`HeroContent`)
- **Requirement Trace**: FR-1.1, FR-1.2, FR-1.3, FR-1.4
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 8
- **Files to Create / Modify**:
  - Source: `src/components/homePage/HeroContent.tsx`
  - Unit Test: `__tests__/homePage/HeroContent.test.tsx`
- **Estimated Line Count**: ~130 lines
- **Dependencies**: Task 3, `src/components/shared/AppDownloadBadges.tsx`
- **Unit Test Plan (TDD Red-First)**:
  - Renders trust badge with animated pulse.
  - Renders primary headline and sub-headline.
  - Renders `AppDownloadBadges` and `QrCodeModal` desktop trigger.
- **Acceptance Criteria**:
  - 100% tests pass. File under 150 lines.

#### Task 7: Date, Hijri Calendar & Location Selector (`PrayerDateHeader`)
- **Requirement Trace**: FR-5.1, FR-5.2, FR-5.3
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 5
- **Files to Create / Modify**:
  - Source: `src/components/homePage/PrayerDateHeader.tsx`
  - Unit Test: `__tests__/homePage/PrayerDateHeader.test.tsx`
- **Estimated Line Count**: ~130 lines
- **Dependencies**: Task 1, `src/components/ui/dropdown-menu.tsx`
- **Unit Test Plan (TDD Red-First)**:
  - Displays formatted Gregorian and Hijri dates.
  - Renders interactive dropdown menu with supported diaspora locations.
  - Calls `onSelectLocation` handler when a city is chosen.
- **Acceptance Criteria**:
  - 100% tests pass. Accessible ARIA attributes.

#### Task 8: 5 Daily Prayer Times Strip (`PrayerTimeStrip`)
- **Requirement Trace**: FR-6.1, FR-6.2
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 6
- **Files to Create / Modify**:
  - Source: `src/components/homePage/PrayerTimeStrip.tsx`
  - Unit Test: `__tests__/homePage/PrayerTimeStrip.test.tsx`
- **Estimated Line Count**: ~160 lines
- **Dependencies**: Task 1
- **Unit Test Plan (TDD Red-First)**:
  - Renders 6 prayer time cards (Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha).
  - Highlights the active upcoming prayer card with emerald border and countdown badge.
  - Renders standardized Hugeicons for each prayer phase.
- **Acceptance Criteria**:
  - 100% tests green. Horizontal scroll or wrapping is responsive without overflow.

#### Task 9: Ramadan Fasting & Quick Action CTAs (`FastingCountdownWidget`)
- **Requirement Trace**: FR-7.1, FR-7.2
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 10
- **Files to Create / Modify**:
  - Source: `src/components/homePage/FastingCountdownWidget.tsx`
  - Unit Test: `__tests__/homePage/FastingCountdownWidget.test.tsx`
- **Estimated Line Count**: ~130 lines
- **Dependencies**: Task 1
- **Unit Test Plan (TDD Red-First)**:
  - Displays Sehri and Iftar time badges with countdown.
  - Renders Qibla Direction and Mosque Donation action buttons.
- **Acceptance Criteria**:
  - 100% unit tests green.

---

### Track C: Section Integration & Page Assembly

#### Task 10: Hero Section Orchestration (`HeroSection`)
- **Requirement Trace**: FR-1, FR-2, FR-3, NFR-4
- **Execution Track**: Track C (Assembly)
- **Files to Create / Modify**:
  - Source: `src/components/homePage/HeroSection.tsx`
  - Unit Test: `__tests__/homePage/HeroSection.test.tsx`
- **Estimated Line Count**: ~140 lines
- **Dependencies**: Task 5, Task 6
- **Unit Test Plan (TDD Red-First)**:
  - Assembles `HeroContent` and `HeroMockupPreview` in a responsive 2-column layout.
  - Maintains zero horizontal overflow.
- **Acceptance Criteria**:
  - 100% tests pass. File under 160 lines.

#### Task 11: Daily Prayer Snapshot Section Orchestration (`PrayerSnapshotSection`)
- **Requirement Trace**: FR-5, FR-6, FR-7, FR-8
- **Execution Track**: Track C (Assembly)
- **Files to Create / Modify**:
  - Source: `src/components/homePage/PrayerSnapshotSection.tsx`
  - Unit Test: `__tests__/homePage/PrayerSnapshotSection.test.tsx`
- **Estimated Line Count**: ~150 lines
- **Dependencies**: Task 2, Task 7, Task 8, Task 9
- **Unit Test Plan (TDD Red-First)**:
  - Connects `usePrayerTimePreview` hook to `PrayerDateHeader`, `PrayerTimeStrip`, and `FastingCountdownWidget`.
  - Seamlessly re-renders when switching locations.
- **Acceptance Criteria**:
  - 100% tests green. File under 180 lines.

#### Task 12: Home Page Orchestrator Mount (`src/app/(commonLayout)/page.tsx`)
- **Requirement Trace**: FR-9.1, FR-9.2, NFR-4
- **Execution Track**: Track C (Assembly)
- **Files to Create / Modify**:
  - Source: `src/app/(commonLayout)/page.tsx`
- **Estimated Line Count**: ~45 lines
- **Dependencies**: Task 10, Task 11
- **Acceptance Criteria**:
  - Assembles `<HeroSection />`, `<PrayerSnapshotSection />`, and `<QuickPillarsSection />`.
  - Zero layout shift, zero horizontal overflow.

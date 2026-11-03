# Requirement Specification: Community Showcases (Phase 4)
`REQ_community_showcases.md`

## 1. Feature Overview & Business Intent
**An-Noor** is crafted to be the definitive daily Islamic companion and localized community lifestyle app for Muslims, with special emphasis on Muslims living in diaspora / Western societies (e.g., North America, Europe). While daily personal worship (Prayer times, Qibla, Quran, Duas, Tasbih) provides individual grounding, community connection is the heartbeat of Islamic life.

Phase 4 introduces **Three High-Impact Community Showcase Sections**:
1. **Mosque Sync & Live Iqamah Showcase (`MosqueSyncSection`)**: Displays real-time congregation timetables directly synced with partner Islamic Centers, departure reminders, and direct zero-commission donations.
2. **Nearby Halal Directory Showcase (`HalalFinderSection`)**: Showcases hand-slaughtered, Zabiha-certified restaurants, supermarkets, and butchers with transparent certification credentials.
3. **Islamic Community Events Showcase (`EventsShowcaseSection`)**: Spotlights local lectures, scholar tours, youth halaqas, and family community gatherings with instant calendar synchronization.

---

## 2. Current State vs. Target State Gap Analysis

| Aspect | Current Codebase State | Target Phase 4 State |
| :--- | :--- | :--- |
| **Page Composition** | `src/app/(commonLayout)/page.tsx` has placeholder anchors `<section id="halal-finder" />` and `<section id="community" />`. | Rich, interactive showcases seamlessly rendered between `SpiritualEssentialsSection` and the global footer. |
| **Community Types & Contracts** | Only basic generic items in `src/types/features.types.ts`. | Dedicated domain types in `src/types/community.types.ts` defining `MasjidItem`, `IqamahTimetable`, `HalalPlaceItem`, and `IslamicEventItem`. |
| **Visual Showcase Assets** | Native mobile screenshots reside in `public/images/app/` and `public/images/showcase/` but are unlinked. | Fully integrated into responsive mockups, feature cards, and interactive modal dialogs. |
| **Interactive Modals** | Only `QrCodeModal` and `SpiritualPreviewDialog` exist. | 3 new focused dialogs: `MosqueDetailDialog`, `HalalPreviewDialog`, and `EventDetailDialog`. |
| **Navigation Anchors** | Header and Footer links for `#halal-finder` and `#community` jump to empty divs. | Smooth scrolling directly to active, engaging showcase sections with informative visual feedback. |

---

## 3. Functional Requirements (FRs)

### FR-1: Mosque Sync & Live Iqamah Showcase (`MosqueSyncSection`)
- **FR-1.1**: Anchor target for `#community` (or `#mosques` with fallback).
- **FR-1.2**: Two-column responsive split layout (Left: Interactive Mockup Card / Right: Feature narrative, or vice versa on mobile).
- **FR-1.3**: Display partner Islamic Center profile (e.g., *Islamic Center of Irving - ICI*, 2.4 miles away, Imam Dr. Yasir Qadhi / Sheikh Omar).
- **FR-1.4**: Render live Iqamah schedule component (`MosqueIqamahTable`) showing Fajr, Dhuhr, Asr, Maghrib, and Isha congregation times.
- **FR-1.5**: Showcase 3 core value propositions with Hugeicons:
  - *Direct Timetable Sync*: Real-time updates pushed directly by mosque administrators.
  - *Smart Departure Alerts*: Travel-aware notifications so worshippers arrive before Iqamah begins.
  - *Direct 100% Mosque Giving*: Zero-commission donations directly to the Islamic Center's bank/account.
- **FR-1.6**: Interactive "Explore Masjid Profile & Donations" trigger opening `MosqueDetailDialog` previewing `/images/app/masjid-profile-screen.png` and `/images/app/mosque-donation-screen.png`.

### FR-2: Nearby Halal Directory Showcase (`HalalFinderSection`)
- **FR-2.1**: Anchor target for `#halal-finder`.
- **FR-2.2**: Alternating split-column layout on desktop to establish visual rhythm with the preceding Mosque section.
- **FR-2.3**: Interactive Category Pills switcher (`HalalCategoryPills`):
  - *All Halal*
  - *Restaurants & Cafes*
  - *Supermarkets & Groceries*
  - *Butchers & Meat*
- **FR-2.4**: Curated establishment card preview (`HalalPlaceCard`) showing name, rating (e.g., 4.9 ★), distance, category, and Zabiha / Hand-Slaughtered verification badge (HMS / HFSAA).
- **FR-2.5**: Showcase 3 core value propositions with Hugeicons:
  - *Certified Halal Verification*: Hand-slaughtered and verified certification authorities.
  - *Community Reviews & Photos*: Trusted ratings by local Muslim diners and shoppers.
  - *One-Tap GPS Directions*: Instant integration with Google Maps and Apple Maps.
- **FR-2.6**: Interactive "Preview Halal Directory" trigger opening `HalalPreviewDialog` displaying `/images/app/nearby-halal-mockup.png` (or `/images/showcase/05-nearby-halal.png`).

### FR-3: Islamic Community Events Showcase (`EventsShowcaseSection`)
- **FR-3.1**: Clear section heading and trust badge (`"Local Gatherings & Halaqas"`).
- **FR-3.2**: Featured event card (`EventHighlightCard`) showcasing:
  - Event title (e.g., *"Sirat: Walking the Prophetic Path"*).
  - Date & Time badge (e.g., *"Saturday, Oct 24 • 7:00 PM CST"*).
  - Venue & Distance (e.g., *"Islamic Center of Irving • Main Prayer Hall"*).
  - Speaker / Scholar profile tag (e.g., *"Guest Scholar Tour"*).
  - RSVP confirmation status tag (*"Free Community Admission"*).
- **FR-3.3**: Interactive "Add to Calendar" action button simulating Google/iCal export or calendar sync intent.
- **FR-3.4**: Interactive "View Event Details" trigger opening `EventDetailDialog` displaying `/images/app/event-details-screen.png`.
- **FR-3.5**: Showcase 3 core value propositions with Hugeicons:
  - *Curated Ummah Events*: Family dinners, youth halaqas, lectures, and charitable causes.
  - *Calendar Sync*: Never miss an event with 1-tap calendar integration.
  - *RSVP & Directions*: Turn-by-turn navigation and family attendance count.

### FR-4: Page Integration & Orchestration
- **FR-4.1**: In `src/app/(commonLayout)/page.tsx`, assemble `MosqueSyncSection`, `HalalFinderSection`, and `EventsShowcaseSection` directly after `SpiritualEssentialsSection`.
- **FR-4.2**: Replace temporary anchor placeholders while keeping anchors for subsequent phases (`#about`, `#download`).

---

## 4. Non-Functional Requirements (NFRs)

- **NFR-1 (100% Responsiveness)**: Perfect layout and readability across Mobile (<640px), Tablet (640-1024px), Desktop (1024-1536px), and Ultra-wide (>1536px).
- **NFR-2 (Zero Horizontal Overflow)**: Strictly no horizontal scrollbars on any viewport size (`overflow-x-hidden`).
- **NFR-3 (Strict Line Limits)**: Every file must remain below **300 lines of code** (absolute hard maximum 400 lines). Decompose into sub-components.
- **NFR-4 (One File, One Component)**: Strictly one component per `.tsx` file. No inline multi-component declarations.
- **NFR-5 (Strict Design Tokens - Zero Hardcoded Colors)**: All colors must strictly use semantic CSS variables configured in `src/app/globals.css` (e.g., `bg-primary`, `bg-card`, `text-muted-foreground`, `border-border`, `bg-brand-mint`). Zero hex codes or arbitrary Tailwind brackets (`bg-[#...]`).
- **NFR-6 (Iconography Standard)**: Exclusively use **Hugeicons** (`@hugeicons/react` and `@hugeicons/core-free-icons`). Zero `lucide-react` imports.
- **NFR-7 (Touch Accessibility)**: Minimum interactive target dimensions of 44x44px on mobile.
- **NFR-8 (Strict Pure TDD)**: Every component, type, and dialog must have unit tests written first in `__tests__/`, achieving a 100% test pass rate.

---

## 5. Defensive Edge Cases & Fallbacks

1. **Long Establishment / Event Names**: Ensure text truncation (`truncate` or `line-clamp-2`) so long masjid or restaurant names never break layout boundaries.
2. **Missing Certification Badge**: Gracefully render a neutral "Community Verified" badge when explicit certification agency is unlisted.
3. **Dialog Image Loading**: Next.js `<Image />` must include explicit aspect ratio containers (`relative aspect-[9/19]` or bounded sizes) to prevent layout shifts before images load.
4. **Keyboard & Screen Reader Accessibility**: All dialogs must be dismissible via `Escape` key, have `aria-labelledby` descriptions, and trap focus while open.
5. **Touch Devices**: Ensure interactive tabs and buttons have visible focus rings and responsive active states.

---

## 6. Sign-off Criteria
- [x] Functional requirements for Mosque Sync, Halal Finder, and Events sections are comprehensively documented.
- [x] Public images in `public/images/` mapped to their respective showcase mockups and dialogs.
- [x] Architecture constraints (line limits, zero hardcoded colors, Hugeicons only, pure TDD) strictly specified.


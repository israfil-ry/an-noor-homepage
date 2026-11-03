# Requirement Specification: Core Feature Ecosystem Grid & Spiritual Essentials Showcase (Phase 3)

## 1. Feature Overview & Business Intent

**An-Noor** ("The Light") is a modern, privacy-focused Islamic Android application crafted to serve the daily spiritual and practical lifestyle needs of Muslims worldwide, with special emphasis on Muslims living in diaspora / Western societies (e.g., North America, Europe) where local community discovery, verified Halal availability, and authentic Mosque sync are vital.

The objective of **Phase 3** is to construct the comprehensive feature showcase layer of the official web landing page:
1. **Comprehensive Feature Ecosystem Grid (`FeatureEcosystemSection.tsx`)**:
   - Establish the full 9-box ecosystem demonstrating how An-Noor unifies personal faith tools with local community features.
   - Categorized into **Daily Worship & Devotion** (6 tools) and **Community & Diaspora Lifestyle** (3 features).
   - Equip with responsive category filter tabs ("All Features", "Daily Worship", "Community Lifestyle") with smooth transition states.
2. **Spiritual Essentials Showcase (`SpiritualEssentialsSection.tsx`)**:
   - Provide an intimate, focused deep-dive into the 4 daily personal devotional essentials: **Qibla Direction Compass**, **The Holy Quran & Audio**, **Duas & Hisnul Muslim**, and **Digital Tasbih & Dhikr**.
   - Feature authentic high-resolution mobile application UI screenshots from `public/images/app/` loaded via Next.js `Image`.
   - Provide an interactive preview dialog allowing visitors to click any spiritual tool card to examine the native mobile interface in high detail.

---

## 2. Current State vs. Target Requirements (Gap Matrix)

| Dimension | Current Codebase State | Target Requirement | Architectural & Quality Impact |
| :--- | :--- | :--- | :--- |
| **Feature Ecosystem** | Lightweight 6-item pill row in [`QuickPillarsSection.tsx`](file:///c:/Projects/an-noor-homepage/src/components/homePage/QuickPillarsSection.tsx). No comprehensive details or categorization. | Full 9-box responsive grid with category filter tabs, authentic Hugeicons, descriptions, and feature badges. | Elevates product depth and communicates the full value proposition. |
| **Spiritual Essentials Showcase** | Not implemented. Anchor placeholder `<section id="features" />` only. | Dedicated 4-pillar showcase section highlighting Qibla, Quran, Duas, and Tasbih with real mobile screenshots. | Drives emotional connection and mobile app conversion. |
| **Mobile App Screenshots** | 22 screenshot files exist in `public/images/app/` and `public/images/showcase/` but are unreferenced. | Seamless integration of `qibla-mockup.png`, `feature-banner.png`, `duas-mockup.png`, and `tasbih-mockup.png` via `next/image`. | High visual credibility with verified native mobile assets. |
| **Screenshot Zoom Dialog** | Not implemented. | Accessible `SpiritualPreviewDialog` powered by shadcn `Dialog`. | Rich interactive engagement without navigating away. |
| **Types & Contracts** | Only `prayer.types.ts` exists. | Structured TypeScript interfaces in `src/types/features.types.ts` (`FeatureItem`, `SpiritualToolItem`, `FeatureCategory`). | 100% strict type safety, zero `any`. |
| **Sub-component Limits** | Minimal sections. | Decomposed into 6 lean sub-components under `src/components/homePage/`, each strictly < 200 lines. | Strict adherence to Frontend Architecture rules. |
| **Unit Testing** | 35 tests passing for layout & hero. | Comprehensive unit test suite in `__tests__/homePage/` testing ecosystem filtering, tool cards, and images. | Pure TDD verification. |

---

## 3. Functional Requirements (FRs)

### FR-1: 9-Box Core Feature Ecosystem Grid (`FeatureEcosystemSection.tsx`)
- **FR-1.1**: Anchor target `id="features"` with semantic `<section aria-label="Core Feature Ecosystem">`.
- **FR-1.2**: Header group:
  - Trust tag badge: `"Comprehensive Islamic Ecosystem"`.
  - Value headline: *"Everything You Need for Faith & Community, Unified in One App"*.
  - Sub-headline: *"Seamlessly balancing daily spiritual devotion with verified local lifestyle tools designed specifically for Muslims in the modern world."*
- **FR-1.3**: Renders responsive 9-box grid that reacts dynamically to category filter selection.

### FR-2: Interactive Category Filter Tabs (`FeatureFilterTabs.tsx`)
- **FR-2.1**: Supports 3 distinct filter views:
  - `all`: All Features (Count: 9)
  - `worship`: Daily Worship & Devotion (Count: 6)
  - `community`: Community & Lifestyle (Count: 3)
- **FR-2.2**: Active tab is highlighted with primary emerald background (`bg-primary text-primary-foreground`) and soft shadow.
- **FR-2.3**: Switching tabs filters the card grid without page reload, jank, or layout shift.

### FR-3: Ecosystem Feature Card Presentation (`FeatureCard.tsx`)
- **FR-3.1**: Each card displays:
  - Specialized Hugeicon in emerald-tinted container (`bg-primary/10 text-primary`).
  - Category badge pill ("Daily Worship" or "Community").
  - Title and detailed 2-line capability description.
  - Sub-features list or anchor link to relevant page section.
- **FR-3.2**: Feature inventory:
  1. *Location-based Prayer Times* (`Clock01Icon`, href: `#prayer-times`)
  2. *Qibla Direction Finder* (`Compass01Icon`, href: `#spiritual-tools`)
  3. *Ramadan & Fasting Schedule* (`Moon02Icon`, href: `#prayer-times`)
  4. *The Holy Quran & Audio* (`Quran01Icon`, href: `#spiritual-tools`)
  5. *Duas & Hisnul Muslim* (`Book02Icon`, href: `#spiritual-tools`)
  6. *Digital Tasbih & Dhikr* (`CheckmarkCircle01Icon`, href: `#spiritual-tools`)
  7. *Nearby Mosque Sync & Iqamah* (`Mosque01Icon`, href: `#community`)
  8. *Nearby Halal Directory* (`Restaurant01Icon`, href: `#halal-finder`)
  9. *Islamic Community Events* (`Calendar01Icon`, href: `#community`)

### FR-4: Spiritual Essentials Showcase (`SpiritualEssentialsSection.tsx`)
- **FR-4.1**: Anchor target `id="spiritual-tools"` with semantic `<section aria-label="Spiritual Essentials Showcase">`.
- **FR-4.2**: Header group:
  - Badge: `"Personal Devotion Toolkit"`.
  - Value headline: *"Pocket Spiritual Essentials Crafted for Focus & Sacred Connection"*.
  - Sub-headline: *"Distraction-free, ad-free Islamic tools engineered to deepen your personal relationship with Allah throughout the day."*
- **FR-4.3**: Renders 4 comprehensive spiritual tool showcase cards in a balanced responsive grid.

### FR-5: Spiritual Tool Card with Real Mobile Screenshots (`SpiritualToolCard.tsx`)
- **FR-5.1**: Displays tool title, subtitle, Arabic calligraphy header, detailed devotional description, and 3 key feature highlight chips.
- **FR-5.2**: Embeds real mobile app screenshot inside a native phone bezel container using Next.js `Image`:
  - **Tool 1 (Qibla Compass)**: `/images/app/qibla-mockup.png`
  - **Tool 2 (The Holy Quran)**: `/images/app/feature-banner.png`
  - **Tool 3 (Duas & Hisnul Muslim)**: `/images/app/duas-mockup.png`
  - **Tool 4 (Digital Tasbih)**: `/images/app/tasbih-mockup.png`
- **FR-5.3**: Interactive hover effect: screenshot scales slightly (`scale-[1.02]`), and a "View Screen" trigger button appears on hover/focus.

### FR-6: Interactive Screenshot Preview Modal (`SpiritualPreviewDialog.tsx`)
- **FR-6.1**: Clicking any spiritual tool card or its preview button opens an accessible modal dialog powered by shadcn `Dialog`.
- **FR-6.2**: Displays the high-resolution app screenshot alongside feature description, bullet points, and Google Play download CTA.
- **FR-6.3**: Keyboard accessible (ESC to close, focus trapped).

### FR-7: TypeScript Contracts & Constants (`src/types/features.types.ts`)
- **FR-7.1**: Strict interfaces for `FeatureCategory`, `FeatureItem`, and `SpiritualToolItem`.
- **FR-7.2**: Centralized data lists with zero hardcoded inline arrays in components.

### FR-8: Page Orchestration (`src/app/(commonLayout)/page.tsx`)
- **FR-8.1**: Assembles sections in logical sequence: `HeroSection` $\rightarrow$ `PrayerSnapshotSection` $\rightarrow$ `QuickPillarsSection` $\rightarrow$ `FeatureEcosystemSection` $\rightarrow$ `SpiritualEssentialsSection`.
- **FR-8.2**: File remains strictly < 50 lines.

---

## 4. Non-Functional Requirements (NFRs)

- **NFR-1: Zero Hardcoded Colors (Rule 15)**:
  - 100% of color styles must strictly consume semantic CSS variable classes configured in `src/app/globals.css` (`bg-primary`, `text-primary-foreground`, `bg-accent`, `bg-muted`, `border-border`, `bg-card`, etc.).
  - Zero hex codes (`#...`) or arbitrary Tailwind bracket classes (`bg-[#...]`).
- **NFR-2: Strict File Size Ceiling (Rule 12)**:
  - Every single component, hook, and type file must strictly remain **under 300 lines of code** (target <200 lines, absolute hard maximum 400 lines).
- **NFR-3: One File, One Component (Rule 1)**:
  - Every sub-component (`FeatureEcosystemSection`, `FeatureFilterTabs`, `FeatureCard`, `SpiritualEssentialsSection`, `SpiritualToolCard`, `SpiritualPreviewDialog`) must reside in its own dedicated file.
- **NFR-4: 100% Device Responsiveness**:
  - **Mobile (<640px)**: 1-column cards, touch targets $\ge$ 44x44px, zero horizontal scroll (`overflow-x-hidden`).
  - **Tablet (640-1024px)**: 2-column balanced grid, compact tabs.
  - **Desktop (1024px+)**: 3-column ecosystem layout; 2x2 side-by-side spiritual showcase split.
- **NFR-5: Image Optimization**:
  - All screenshots loaded via Next.js `Image` with explicit width/height and responsive `sizes` attribute to ensure optimal WebP/AVIF delivery.
- **NFR-6: Mandatory Unit Testing in `__tests__/`**:
  - 100% unit tests pass across all newly authored components.

---

## 5. Defensive Edge Cases & Failure Modes

| Edge Case / Scenario | Defensive Strategy |
| :--- | :--- |
| **Image Loading Latency** | Next.js `Image` containers have subtle skeleton/muted placeholder background (`bg-muted/40`) to prevent layout shifts while high-res mockups load. |
| **Empty Filter State** | Tab filtering is client-side memoized with pure predicates; all 3 categories guaranteed to have $\ge 3$ features, preventing empty states. |
| **Mobile Dialog Overflow** | `SpiritualPreviewDialog` content wrapper has max-height constraint (`max-h-[85vh] overflow-y-auto`) ensuring smooth scrolling on smaller devices. |
| **Missing Image Asset** | All image paths are typed and verified against existing files in `public/images/app/`. |

---

## 6. Sign-off Criteria (Phase 1 Checklist)

- [x] Gap analysis completed against codebase and plan.
- [x] All 8 Functional Requirements (FR-1 through FR-8) strictly defined.
- [x] Verified mobile app screenshot mapping from `public/images/app/`.
- [x] Strict compliance with Rule 15 (Zero Hardcoded Colors) confirmed.
- [x] Sub-component breakdown guarantees all files remain well under 250 lines.
- [x] Unit test plan mapped in `__tests__/`.


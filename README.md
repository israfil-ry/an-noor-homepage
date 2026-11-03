# An-Noor Homepage ("The Light")

An-Noor is a modern, privacy-first mobile companion and community web platform designed for the global Muslim diaspora. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS, the homepage serves as the flagship landing page showcasing prayer schedules, mosque synchronization, halal dining directory, community events, privacy pledges, and app downloads.

---

## ✨ Recent Features

### Trust Pledge, FAQ Accordion & App Store CTA Download Banner (`dev`)

The completion of the official An-Noor landing page introduces three essential trust and conversion sections:

- **Trust, Ethics & Privacy Pledge (`TrustPledgeSection`, `#about`)**:
  - Highlights An-Noor's foundational ethical commitments through 3 dedicated pillar cards: **100% Ad-Free Forever**, **Zero Personal Tracking (On-Device GPS)**, and **100% Community-Verified Data**.
  - Includes a 4-point guarantee metrics strip (`TrustMetricsStrip`) validating zero ads, strict offline capabilities, open verification, and privacy guarantees.
- **Interactive FAQ Accordion (`FaqSection`, `#faq`)**:
  - Categorized query filtering with 5 dynamic filter pills (`All`, `General & Free`, `Prayer Calculations`, `Mosques & Halal`, and `Privacy & Offline`).
  - Expandable, keyboard-accessible accordion list powered by official shadcn/ui `Accordion` primitive with highlighted key takeaways.
  - Dedicated partner and mosque support card (`FaqSupportCard`) providing direct communication pathways.
- **App Store CTA Download Banner (`CtaDownloadBanner`, `#download`)**:
  - Full-width conversion centerpiece styled with semantic emerald gradients.
  - Dual installation channels via `AppDownloadBadges` (Google Play Store & Direct Android APK).
  - High-contrast interactive desktop-to-mobile QR scanner box (`CtaQrScannerBox`) for instant camera scanning.
  - Perspective smartphone preview mockup (`CtaMockupVisual`) rendering the live app home view (`/images/app/home-mockup.png`).

- **Frontend Architecture & Components**:
  - **Trust Pledge Components**: `src/components/homePage/TrustPledgeSection/TrustPledgeSection.tsx`, `TrustPledgeCard.tsx`, `TrustMetricsStrip.tsx`.
  - **FAQ Components**: `src/components/homePage/FaqSection/FaqSection.tsx`, `FaqCategoryFilter.tsx`, `FaqAccordionList.tsx`, `FaqSupportCard.tsx`.
  - **CTA Banner Components**: `src/components/homePage/CtaDownloadBanner/CtaDownloadBanner.tsx`, `CtaQrScannerBox.tsx`, `CtaMockupVisual.tsx`.
  - **UI Primitives**: Official shadcn/ui `src/components/ui/accordion.tsx`.
  - **TypeScript Contracts & Static Data**: Curated types and static datasets in `src/types/trust-faq.types.ts`.
  - **Design Token Integration**: 100% semantic CSS variables from `src/app/globals.css` with zero hardcoded hex/RGB colors.
  - **Device Responsiveness & UX**: 100% fluid layouts across Mobile (<640px, single-column, zero horizontal scroll), Tablet (640px–1024px, 2-column adaptive grids), and Desktop (1024px+, 3-column trust grid and split-panel CTA).

- **Automated Tests**:
  - 99 unit test cases across `__tests__/` verifying component rendering, interactions, accessibility attributes, and data structures with a 100% pass rate.

#### How to Test Trust Pledge, FAQ Accordion & App Store CTA Download Banner

1. **Run Unit Tests & Quality Checks**:
   - Run the automated unit test suite:
     ```bash
     npm test
     ```
   - TypeScript compiler validation:
     ```bash
     npx tsc --noEmit
     ```
   - ESLint static analysis:
     ```bash
     npm run lint
     ```

2. **Verify in Browser**:
   - Start the local development server:
     ```bash
     npm run dev
     ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser:
     - **Trust Pledge Section**: Scroll to `#about` or click **About** in the navigation bar. Verify the 3 trust pillars render with icons, badges, and the 4-point metrics guarantee strip.
     - **FAQ Accordion Section**: Scroll to `#faq` or click **FAQ** in the navbar. Test category filtering pills (`All`, `Prayer Calculations`, etc.) and click accordion triggers to verify smooth expand/collapse states.
     - **CTA Download Banner**: Scroll to `#download` or click **Download App** in the header. Verify the dual download badges (Google Play & Direct APK), the QR code camera scanner box, and the smartphone mockup visual.
     - **Responsive Audit**: Open browser developer tools and test viewports at `375px` (Mobile), `768px` (Tablet), and `1280px+` (Desktop) to verify zero horizontal scrolling and adaptive layouts.

---

### Previous Feature Milestones

<details>
<summary><strong>Community Showcases: Mosque Sync, Halal Finder & Events (<code>dev</code>)</strong></summary>

- **Mosque Iqamah Sync (`MosqueSyncSection`, `#community`)**: Featured community mosque (Masjid Al-Farooq) with real-time countdown to next Iqamah, 6-prayer comparison table (Adhan vs. Iqamah), Jumu'ah prayer timings, and interactive detail dialog.
- **Halal Food Finder (`HalalFinderSection`, `#halal-finder`)**: Diaspora halal dining showcase featuring cuisine category pills, rating badges, distance metrics, strict halal certification badges, and establishment details dialog.
- **Islamic Community Events (`EventsShowcaseSection`, `#events`)**: 2-column community highlights showcase with countdown badges, speaker details, capacity metrics, "Add to Calendar" action, and event preview modal.
</details>

<details>
<summary><strong>Feature Ecosystem Grid & Spiritual Essentials Showcase (<code>dev</code>)</strong></summary>

- **Feature Ecosystem Grid (`FeatureEcosystemSection`, `#features`)**: 9-card categorized grid covering Daily Worship, Community Connection, and Islamic Lifestyle with category filter tabs and deep-linking anchors.
- **Spiritual Essentials Showcase (`SpiritualEssentialsSection`)**: Highlight cards for Quran Reader, Smart Tasbih, Qibla Direction, and Duas/Adhkar with an interactive preview modal.
</details>

<details>
<summary><strong>Hero Section Centerpiece & Live Prayer Snapshot (<code>dev</code>)</strong></summary>

- **Hero Section (`HeroSection`)**: Centerpiece headline, trust badge, app download badges, QR modal, and floating perspective smartphone mockup.
- **Prayer Times Snapshot (`PrayerSnapshotSection`)**: Multi-city diaspora location selector, Hijri/Gregorian date header, 6-prayer horizontal cards with active prayer highlight, and Sehri/Iftar fasting countdown widget.
- **Quick Pillars Bar (`QuickPillarsSection`)**: 6 icon-anchored fast jump links with Hugeicons.
</details>

<details>
<summary><strong>Design System, Shared Layout & Reusable Core (<code>dev</code>)</strong></summary>

- **Design System Tokens**: Centralized CSS variables in `src/app/globals.css` with semantic color palettes (deep emerald, warm gold, clean neutrals) and Montserrat typography.
- **Sticky Glassmorphic Navbar (`Navbar`)**: Transparent-to-frosted scroll transitions (`useHeaderScroll`), desktop navigation links, and mobile slide-out drawer (`MobileNavSheet`).
- **Footer (`Footer`)**: Brand logo, 3 category link groups, store badges, and legal notices.
- **Brand Logo (`Logo`)**: Reusable vector logo supporting header, footer, and standalone variants.
</details>

---

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/(commonLayout)/page.tsx`. The page auto-updates as you edit the file.

---

## Architectural Guidelines

This project strictly adheres to the following engineering standards:
- **Modular Component Hierarchy**: Every landing page section resides in an independent directory within `src/components/homePage/`. The root page (`src/app/(commonLayout)/page.tsx`) acts purely as a clean orchestrator.
- **One File, One Component**: Each file contains strictly one React component.
- **Strict File Size Ceiling**: All files maintain a target limit below 300 lines (hard ceiling of 400 lines).
- **Zero Hardcoded Colors**: Colors are strictly referenced via CSS variables and Tailwind utility tokens (`bg-primary`, `text-muted-foreground`, etc.).
- **Hugeicons Exclusivity**: Iconography is rendered exclusively via `@hugeicons/react` and `@hugeicons/core-free-icons`.
- **Mandatory Unit Testing**: All UI components and utilities are tested under `__tests__/` with comprehensive edge cases.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

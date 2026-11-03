# Phase 1: Requirement Specification (REQ) — Trust Pledge, FAQ Accordion & CTA Banner

**Feature Scope**: Phase 5 — Trust, Ethics & Privacy Pledge, FAQ Accordion, and App Store CTA Banner  
**Target Platform**: Next.js 16 (App Router), Tailwind CSS v4, shadcn/ui, Hugeicons  
**Document ID**: `REQ_phase5_trust_faq_cta.md`  
**Status**: APPROVED & PROCEEDING TO IMPLEMENTATION

---

## 1. Executive Summary & Vision

The An-Noor homepage requires three pivotal closing sections to convert exploratory visitors into loyal, verified Android app users:
1. **Trust, Ethics & Privacy Pledge (`TrustPledgeSection`, `#about`)**: Assures Muslims—especially diaspora Muslims—that An-Noor is 100% ad-free, respects sacred worship spaces, calculates prayer times on-device without data monetization, and curates community data with integrity.
2. **Interactive FAQ Accordion (`FaqSection`)**: Answers practical user questions (offline functionality, prayer calculation methodology, mosque partnership, halal verification, and future iOS availability) using clean categorized tabs and an expandable accordion.
3. **App Store CTA Banner (`CtaDownloadBanner`, `#download`)**: High-converting full-width emerald gradient showcase featuring dual download badges (Google Play & Direct APK), an interactive QR scanner box for immediate desktop-to-phone handover, and a smartphone mockup frame presenting the actual An-Noor home screen (`/images/app/home-mockup.png`).

---

## 2. Current State vs. Target Requirements Matrix

| Dimension | Current Codebase State | Phase 5 Target Requirements |
| :--- | :--- | :--- |
| **Section Anchor `#about`** | Hidden `sr-only` placeholder in `page.tsx` | Full interactive Trust, Ethics & Privacy section with 3 deep-dive trust cards and a 4-point metrics guarantee strip |
| **Section Anchor `#download`**| Hidden `sr-only` placeholder in `page.tsx` | High-converting emerald gradient CTA banner with dual download badges, QR scanner card, and mobile mockup |
| **FAQ Knowledge Base** | Missing entirely from homepage | Categorized expandable accordion (All, General, Prayer & Qibla, Community & Mosques, Privacy) powered by shadcn/ui Accordion, plus direct support contact card |
| **Mockup Image Utilization** | `/images/app/home-mockup.png` not yet displayed on homepage | Highlighted in CTA banner inside a sleek smartphone frame |
| **shadcn Accordion** | Not yet installed in `src/components/ui/` | Installed autonomously via `npx shadcn@latest add accordion` |
| **Data Contracts** | No types for Trust, FAQ, or CTA | Strictly typed in `src/types/trust-faq.types.ts` |
| **Unit Test Coverage** | 74 passing tests for Phases 1–4 | Comprehensive unit tests in `__tests__/homePage/` and `__tests__/types/` maintaining 100% green status |

---

## 3. Functional Requirements (FRs)

### FR-1: Trust, Ethics & Privacy Pledge (`TrustPledgeSection`)
- **Anchor**: Must bind to `<section id="about">` matching existing navbar and footer navigation links.
- **Section Eyebrow & Headline**:
  - Eyebrow badge with Hugeicons shield icon: *"Ethical & Privacy-First Promise"*.
  - Headline: *"Built on Sincerity, Respect, and Absolute Privacy"*.
  - Subheadline: Emphasizing sacred worship without commercial distractions.
- **Pillar Cards (3-Column Grid)**:
  1. *Zero Disruptive Ads*: No pop-ups, no video ads, and no banner clutter around the Holy Quran or Azan.
  2. *On-Device Privacy First*: GPS calculations run 100% locally on user device; location data is never logged, sold, or shared with data brokers.
  3. *Community & Ummah Verified*: Halal restaurants, butcheries, and mosque Iqamah schedules are vetted with community oversight.
- **Trust Metrics Guarantee Strip**:
  - 4 quick badges: `0 Ads Forever`, `100% Free Access`, `Local GPS Processing`, `Verified Ummah Network`.

### FR-2: Frequently Asked Questions Accordion (`FaqSection`)
- **Category Filter Pills**: Interactive buttons allowing filtering by topic:
  - *All Questions*
  - *General & Costs*
  - *Prayer Times & Qibla*
  - *Mosques & Halal*
  - *Privacy & Offline*
- **Expandable Accordion List**:
  - Powered by official shadcn `Accordion` with smooth collapsible animations.
  - Pre-populated with 6 core questions:
    1. *Is An-Noor completely free? Are there hidden in-app purchases or subscriptions?*
    2. *How are prayer times calculated for my location?*
    3. *How can our local Mosque or Islamic Center get listed on An-Noor?*
    4. *How are Halal restaurants and grocery stores verified?*
    5. *Is an iOS (iPhone) version coming soon?*
    6. *Does An-Noor work offline without internet?*
- **Support & Help Card (`FaqSupportCard`)**:
  - A friendly card at the bottom: *"Still have questions or want to partner your mosque?"* with direct links to `mailto:support@annoor.app` and partner mosque submission.

### FR-3: App Store CTA Download Banner (`CtaDownloadBanner`)
- **Anchor**: Must bind to `<section id="download">` matching navbar CTA button.
- **Container Styling**: Full-width rich brand gradient container (`bg-gradient-to-br from-brand-emerald-dark via-primary to-brand-emerald` or semantic CSS tokens), rounded corners on desktop, zero horizontal overflow.
- **Left Column — Conversion Engine**:
  - Brand logo / icon badge.
  - Headline: *"Begin Your Daily Journey with An-Noor Today"*.
  - Subheadline: *"Join thousands of Muslims nurturing their faith and connecting with their local community."*
  - Action Group:
    - Official Google Play & Direct APK download badges (reusing `AppDownloadBadges`).
    - Integrated QR Scanner Box (`CtaQrScannerBox`) enabling immediate scan-to-download from desktop screens.
  - Trust guarantee note: *"Android 8.0+ • 100% Ad-Free • Privacy Respecting"*.
- **Right Column — Visual Centerpiece (`CtaMockupVisual`)**:
  - Sleek smartphone frame rendering `/images/app/home-mockup.png`.
  - Floating ambient glow and badge overlays reinforcing core app values.

### FR-4: Home Page Orchestrator Integration
- Update `src/app/(commonLayout)/page.tsx` to mount `<TrustPledgeSection />`, `<FaqSection />`, and `<CtaDownloadBanner />` in sequential order before the footer, removing the placeholder anchor elements.

---

## 4. Non-Functional Requirements (NFRs)

- **NFR-1 (100% Responsiveness)**: Perfect rendering across Mobile (<640px), Tablet (640-1024px), Desktop (1024-1536px), and Ultra-wide (>1536px).
- **NFR-2 (Zero Hardcoded Colors)**: All colors must strictly use semantic CSS variables in `src/app/globals.css`.
- **NFR-3 (Strict Line Limits)**: Every file must strictly remain below 300 lines of code (hard ceiling 400 lines).
- **NFR-4 (One File, One Component)**: Every sub-component must reside in its own dedicated file.
- **NFR-5 (shadcn/ui Priority)**: Autonomously install and use official `accordion.tsx` (`@/components/ui/accordion`).
- **NFR-6 (Iconography Standard)**: Exclusively use `@hugeicons/react` and `@hugeicons/core-free-icons`.
- **NFR-7 (Accessible UX)**: Minimum touch targets of 44x44px; full keyboard navigation for the accordion.
- **NFR-8 (Zero Horizontal Scroll)**: `overflow-hidden` container protection on all responsive widths.

---

## 5. Defensive Edge Cases & Boundary Handling

1. **Empty Filter State**: If a user selects an FAQ category with no active items, render a clean fallback message.
2. **Keyboard Accessibility**: Accordion items must expand and collapse with `Enter` and `Space`, supporting arrow-key traversal.
3. **Responsive QR Code Handling**: On mobile screens (<640px), the QR code box should collapse gracefully or hide in favor of the direct download buttons.
4. **Image Loading Stability**: Next.js `Image` for `home-mockup.png` must specify explicit width/height and responsive `sizes` to prevent Cumulative Layout Shift (CLS).

---

## 6. Sign-off Criteria

- [x] All 3 target sections (`TrustPledgeSection`, `FaqSection`, `CtaDownloadBanner`) specified.
- [x] Reusable component inventory and asset utilization plan confirmed.
- [x] Strict compliance with project rules (TDD, <300 lines, zero hardcoded colors, Hugeicons).


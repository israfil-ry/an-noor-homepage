# Phase 5 Walkthrough: Trust Pledge, FAQ Accordion & App Store CTA Banner

**Feature Scope**: Phase 5 Implementation (Trust, Ethics & Privacy Pledge, FAQ Accordion, and App Store CTA Banner)  
**Status**: 100% Complete • 16/16 QA Checks Passed • 99 Unit Tests Green  

---

## 1. Executive Summary

Phase 5 completes the official landing page for **An-Noor ("The Light")** by implementing the three essential conversion and trust sections:
1. **Trust, Ethics & Privacy Pledge (`TrustPledgeSection`, `#about`)**: Assures visitors with a dignified 3-pillar breakdown (100% Ad-Free Forever, On-Device GPS Privacy, and Community Verified Data) supported by a 4-point metrics guarantee strip.
2. **Interactive FAQ Accordion (`FaqSection`, `#faq`)**: Provides categorized, expandable answers (All, General & Free, Prayer Calculations, Mosques & Halal, and Privacy & Offline) powered by the official shadcn/ui `Accordion` component, plus a direct partner inquiry/support card.
3. **App Store CTA Download Banner (`CtaDownloadBanner`, `#download`)**: High-converting full-width emerald gradient container featuring dual download options (Official Google Play & Direct APK via `AppDownloadBadges`), an interactive QR code scanner card for instant desktop-to-phone install, and a smartphone perspective mockup showcasing `/images/app/home-mockup.png`.

---

## 2. 16 Parallel Verification Checks Scorecard

| # | Verification Check | Scope & Criteria | Result |
| :---: | :--- | :--- | :---: |
| **1** | **TypeScript Safety** | `npx tsc --noEmit` — 0 errors, strict typing, zero `any` | **PASS (0 errors)** |
| **2** | **ESLint Check** | `npm run lint` — Next.js 16 / React 19 rules | **PASS (0 warnings)** |
| **3** | **Automated Unit Tests** | `npm test` across `__tests__/` | **PASS (99/99 passed)** |
| **4** | **Senior QA Real Browser Test** | Chrome automation navigating all sections | **PASS** |
| **5** | **Desktop Viewport (1280px+)** | 3-column trust cards, split CTA with mockup & QR | **PASS** |
| **6** | **Tablet Viewport (768px)** | Adaptive 2-column grids & responsive text | **PASS** |
| **7** | **Mobile Viewport (375px)** | Single-column cards & **ZERO horizontal scroll** | **PASS** |
| **8** | **Interactive Elements** | FAQ Category filters & Accordion collapsible state | **PASS** |
| **9** | **Zero Hardcoded Colors** | 100% semantic CSS variables from `src/app/globals.css` | **PASS** |
| **10** | **Theme & Contrast** | High contrast under `:root` and `.dark` tokens | **PASS** |
| **11** | **Network & Console Errors** | Zero unhandled exceptions or console errors | **PASS** |
| **12** | **Asset & Image Optimization** | Next.js `Image` aspect ratios for `home-mockup.png` | **PASS** |
| **13** | **Navigation & Anchor Links** | Smooth scroll targets `#about`, `#faq`, and `#download` | **PASS** |
| **14** | **Strict Line Size Ceiling** | All components < 300 lines (hard max 400 lines) | **PASS (<175 lines)** |
| **15** | **One File, One Component** | Strictly 1 React component per file | **PASS** |
| **16** | **Workspace Hygiene** | No stray root files; all scripts in `.agent/scripts/` | **PASS** |

---

## 3. Component Architecture & Line Count Verification

All files strictly honor the project's **Target <300 lines** and **One File, One Component** rules:

| File Path | Description | Line Count | Status |
| :--- | :--- | :---: | :---: |
| `src/types/trust-faq.types.ts` | Data models and curated static datasets | 172 | Passed (<300) |
| `src/components/ui/accordion.tsx` | Official shadcn/ui Accordion primitive | 67 | Passed (<300) |
| `src/components/homePage/TrustPledgeSection/TrustPledgeCard.tsx` | Trust pillar card with Hugeicons & badges | 68 | Passed (<300) |
| `src/components/homePage/TrustPledgeSection/TrustMetricsStrip.tsx` | 4-point quick guarantee badge row | 46 | Passed (<300) |
| `src/components/homePage/TrustPledgeSection/TrustPledgeSection.tsx` | Trust orchestrator with `#about` anchor | 54 | Passed (<300) |
| `src/components/homePage/FaqSection/FaqCategoryFilter.tsx` | Interactive category filter tab pills | 47 | Passed (<300) |
| `src/components/homePage/FaqSection/FaqAccordionList.tsx` | Expandable Q&A list with key takeaways | 63 | Passed (<300) |
| `src/components/homePage/FaqSection/FaqSupportCard.tsx` | Support contact & mosque partner card | 43 | Passed (<300) |
| `src/components/homePage/FaqSection/FaqSection.tsx` | FAQ orchestrator with `#faq` anchor | 72 | Passed (<300) |
| `src/components/homePage/CtaDownloadBanner/CtaQrScannerBox.tsx` | QR code target card for camera scanning | 66 | Passed (<300) |
| `src/components/homePage/CtaDownloadBanner/CtaMockupVisual.tsx` | Phone frame showcasing `home-mockup.png` | 70 | Passed (<300) |
| `src/components/homePage/CtaDownloadBanner/CtaDownloadBanner.tsx` | Full-width emerald CTA banner (`#download`) | 76 | Passed (<300) |
| `src/app/(commonLayout)/page.tsx` | Clean orchestrator for all 11 homepage sections | 39 | Passed (<300) |

---

## 4. Visual Proof Carousel

````carousel
![Desktop Trust Pledge View](C:/Users/ISRAFIL%20HOSSEN/.gemini/antigravity/brain/28a3582b-ae5b-4acd-82b5-6407fe77aa8d/desktop_trust_pledge.png)
<!-- slide -->
![Desktop FAQ Accordion View](C:/Users/ISRAFIL%20HOSSEN/.gemini/antigravity/brain/28a3582b-ae5b-4acd-82b5-6407fe77aa8d/desktop_faq.png)
<!-- slide -->
![Desktop CTA Download Banner View](C:/Users/ISRAFIL%20HOSSEN/.gemini/antigravity/brain/28a3582b-ae5b-4acd-82b5-6407fe77aa8d/desktop_cta_banner.png)
<!-- slide -->
![Tablet Trust Pledge View](C:/Users/ISRAFIL%20HOSSEN/.gemini/antigravity/brain/28a3582b-ae5b-4acd-82b5-6407fe77aa8d/tablet_trust_pledge.png)
<!-- slide -->
![Tablet CTA Banner View](C:/Users/ISRAFIL%20HOSSEN/.gemini/antigravity/brain/28a3582b-ae5b-4acd-82b5-6407fe77aa8d/tablet_cta_banner.png)
<!-- slide -->
![Mobile Viewport Proof](C:/Users/ISRAFIL%20HOSSEN/.gemini/antigravity/brain/28a3582b-ae5b-4acd-82b5-6407fe77aa8d/mobile_cta_banner.png)
````

---

## 5. Verification Commands

To verify locally:
```bash
# 1. Run automated unit tests (99 tests)
npm test

# 2. Run TypeScript compilation check
npx tsc --noEmit

# 3. Run ESLint check
npm run lint

# 4. Production build verification
npm run build
```

# Requirement Specification: Phase 1 — Design System, Color Tokens & Shared Layout Foundations

## 1. Feature Overview & Business Intent

**An-Noor** ("The Light") is a modern, privacy-focused Islamic Android application crafted to serve the daily spiritual and practical lifestyle needs of Muslims worldwide, with special emphasis on diaspora communities.

The objective of **Phase 1** is to establish the design token infrastructure, responsive global navigation, and persistent footer layout for the An-Noor web presence. This phase provides the rock-solid visual and architectural baseline upon which all subsequent landing page sections (Hero, Live Prayer Bar, Halal Finder, Mosque Sync, Events, and Spiritual Tools) will be constructed.

---

## 2. Current State vs. Target Requirements (Gap Matrix)

| Dimension | Current Codebase State | Target Phase 1 Requirement | Architectural & Quality Impact |
| :--- | :--- | :--- | :--- |
| **Color Tokens** | Default monochrome grayscale shadcn variables in `src/app/globals.css`. | Complete Emerald brand palette (`#0D6847`, `#0A5237`, `#16A34A`, `#F0FDF4`, `#E8F5E9`, slate typography) mapped in `@theme inline` and `:root` / `.dark`. | Eliminates hardcoded colors project-wide (Rule 15 compliance). |
| **Component Primitives** | Only `src/components/ui/button.tsx` exists. | Official shadcn components added: `badge`, `sheet`, `dropdown-menu`. | Accessible, tested primitives for drawers, badges, and dropdowns. |
| **Global Navigation** | None. Standard Next.js starter page. | Sticky, responsive `Navbar` with desktop links, location indicator, mobile drawer sheet, and "Get The App" CTA. | High-converting entry point with 100% device responsiveness. |
| **Global Footer** | None. | Comprehensive `Footer` with brand identity, mission statement, 3-column link categories, and copyright bar. | Credibility, SEO foundation, and quick navigation. |
| **Layout Architecture** | Flat `src/app/layout.tsx` + `src/app/page.tsx`. | Grouped route `src/app/(commonLayout)/layout.tsx` wrapping `Navbar`, `<main>`, and `Footer`. | Scalable Next.js App Router structure with modular separation. |
| **Hooks & State** | None. | `useHeaderScroll.ts` custom hook to drive sticky navbar backdrop blur and shadow elevation. | Separation of UI rendering from window scroll listener logic. |
| **Constants & Config** | None. | Centralized `src/lib/constants.ts` holding navigation items, footer columns, and app metadata. | Single source of truth (Universal DRY). |
| **Unit Testing** | No test suites or test runner configured. | Unit test suite in `__tests__/components/` and `__tests__/hooks/` with 100% pass rate. | Mandatory TDD verification (Rule 5 & 6 compliance). |

---

## 3. Functional Requirements (FRs)

### FR-1: Centralized Design Tokens & CSS Variable System
- **FR-1.1**: Define CSS variables under `:root` and `.dark` in `src/app/globals.css`:
  - `--primary`: Brand Emerald (`#0D6847` / OKLCH equivalent).
  - `--primary-hover`: Dark Forest Emerald (`#0A5237`).
  - `--primary-foreground`: Crisp White (`#FFFFFF`).
  - `--accent`: Vibrant Green (`#16A34A` / `#22C55E` for prayer badges and live indicators).
  - `--accent-foreground`: Dark slate or pure white.
  - `--muted`: Soft Mint / Sage surface (`#F0FDF4` / `#E8F5E9`).
  - `--muted-foreground`: High-contrast slate neutral (`#475569` / `#94A3B8`).
  - `--background`: Clean Canvas (`#FFFFFF` in light, `#081C15` in dark mode).
  - `--card`: Surface card background (`#FFFFFF` / `#F8FAFC`).
  - `--border`: Emerald-tinted subtle border (`#E2E8F0` / `#DCFCE7`).
- **FR-1.2**: Map all tokens into Tailwind CSS v4 `@theme inline` block so they can be consumed via standard Tailwind utilities (`bg-primary`, `text-primary-foreground`, `bg-accent`, `bg-muted`, `border-border`, etc.).
- **FR-1.3**: Map semantic brand tokens (`--color-brand-emerald`, `--color-brand-emerald-dark`, `--color-brand-mint`, `--color-brand-sage`) to enable expressive custom compositions without hex code leakage.

### FR-2: Scroll-Aware Header Hook (`useHeaderScroll`)
- **FR-2.1**: Implement a custom hook `src/hooks/useHeaderScroll.ts` listening to window scroll.
- **FR-2.2**: Return `{ isScrolled: boolean }` where `isScrolled` becomes `true` when `window.scrollY > 10`.
- **FR-2.3**: Passive event listener with clean unmount cleanup to avoid memory leaks. Safe for SSR (`typeof window !== "undefined"`).

### FR-3: Global Sticky Navigation (`Navbar`)
- **FR-3.1**: Sticky top header container (`sticky top-0 z-50 w-full transition-all duration-200`).
- **FR-3.2**: When `isScrolled` is false, background is transparent or subtle; when `isScrolled` is true, applies `bg-background/90 backdrop-blur-md shadow-sm border-b border-border`.
- **FR-3.3**: Left Brand Group: An-Noor brand mark (emerald rounded icon + refined typography title).
- **FR-3.4**: Center Nav Links (`NavLinks.tsx`): Desktop navigation (`Features`, `Prayer Times`, `Nearby Halal`, `Mosques & Events`, `About`) with smooth hover states and emerald underline transitions.
- **FR-3.5**: Right Action Group:
  - Location Indicator badge pill (`Irving, TX` default with location pin icon).
  - "Get The App" primary button (triggers smooth scroll to download section `#download` or opens download modal).
  - Hamburger menu icon button (visible on mobile `<640px`) to trigger `MobileNavSheet`.

### FR-4: Accessible Mobile Navigation Drawer (`MobileNavSheet`)
- **FR-4.1**: Built on top of official shadcn `Sheet` component.
- **FR-4.2**: Slide out from right or top on mobile viewports (<640px).
- **FR-4.3**: Displays brand logo, full navigation links list with touch-friendly spacing (minimum target height 48px), location badge, and prominent Google Play download button.
- **FR-4.4**: Automatically closes upon clicking any navigation link or backdrop.

### FR-5: Store & Download Badges Component (`AppDownloadBadges`)
- **FR-5.1**: Reusable component rendering official Google Play badge and Direct APK button.
- **FR-5.2**: Supports responsive sizing (`sm`, `md`, `lg`) and optional QR code popover trigger for desktop.
- **FR-5.3**: Touch targets strictly >= 44x44px.

### FR-6: Global Comprehensive Footer (`Footer` & `FooterLinks`)
- **FR-6.1**: Container with deep slate/emerald styling and subtle top border.
- **FR-6.2**: Brand Column: An-Noor logo, brief mission statement ("Your daily Islamic companion and verified Halal living guide"), and Google Play download CTA.
- **FR-6.3**: 3 Categorized Link Columns (`FooterLinks.tsx`):
  1. *Core Features*: Prayer Times, Qibla Compass, Halal Directory, Mosque Sync, Events Board, Quran & Duas.
  2. *Community & Mosques*: Partner Mosques, Submit Halal Place, Add Community Event, Mosque Donation Sync.
  3. *Legal & Trust*: Privacy Policy, Terms of Service, Ad-Free & Ethics Pledge, Contact Support.
- **FR-6.4**: Bottom Bar: Copyright notice © 2026 An-Noor App. All rights reserved.

### FR-7: Shared App Router Layout
- **FR-7.1**: Setup route group `src/app/(commonLayout)/layout.tsx` hosting `Navbar`, `<main className="flex-1">{children}</main>`, and `Footer`.
- **FR-7.2**: Seamless full-height flex column structure (`min-h-screen flex flex-col`) preventing footer jump.

---

## 4. Non-Functional Requirements (NFRs)

- **NFR-1: Zero Hardcoded Colors (Rule 15)**:
  - Strictly zero hex codes (`#...`), `rgb()`, `hsl()`, or ad-hoc Tailwind arbitrary classes (`bg-[#...]`) in any component code.
  - 100% of styling must reuse centralized CSS variables from `src/app/globals.css`.
- **NFR-2: Strict File Size Ceiling (Rule 12)**:
  - Target < 300 lines of code per file.
  - Absolute hard maximum 400 lines.
  - Sub-components decomposed into dedicated files (`NavLinks.tsx`, `MobileNavSheet.tsx`, `FooterLinks.tsx`, `AppDownloadBadges.tsx`).
- **NFR-3: One File, One Component (Frontend Architecture Rule 1)**:
  - Each `.tsx` file exports exactly one React component. No nested component declarations.
- **NFR-4: 100% Device Responsiveness (Rule 10 & Frontend Architecture)**:
  - Mobile (<640px): Mobile sheet drawer, full-width touch targets (>=44px), zero horizontal scroll.
  - Tablet (640px - 1024px): Compact spacing, location pill visible, balanced footer columns.
  - Desktop (1024px+): Spacious navbar, prominent CTA button, multi-column footer.
  - Ultra-wide (>1536px): Centered containers (`max-w-7xl mx-auto`).
- **NFR-5: Accessibility & UX**:
  - Focus rings for keyboard navigation (`focus-visible:ring-2 focus-visible:ring-ring`).
  - Screen reader attributes for mobile sheet (`aria-label="Navigation menu"`).
  - Smooth scrolling behavior (`scroll-behavior: smooth`).
- **NFR-6: Mandatory Unit Testing in `__tests__/` (Rules 5 & 6)**:
  - Comprehensive unit tests covering `Navbar`, `MobileNavSheet`, `Footer`, and `useHeaderScroll`.
  - Zero test files co-located in `src/`. All tests in `__tests__/`.

---

## 5. Defensive Edge Cases & Failure Modes

| Edge Case / Scenario | Defensive Strategy |
| :--- | :--- |
| **SSR / Window Hydration** | `useHeaderScroll` checks `typeof window !== "undefined"` and initializes safely during SSR without hydration mismatch. |
| **Rapid Scroll Events** | Scroll listener uses passive listener flags (`{ passive: true }`) to ensure 60fps jank-free performance. |
| **Mobile Drawer Overflow** | `SheetContent` has internal scrolling (`overflow-y-auto`) to guarantee usability on small mobile devices in landscape mode. |
| **Broken Anchor Links** | Fallback smooth scrolling handlers verify anchor targets exist before triggering DOM scroll. |
| **Dark Mode Contrast** | Border and text colors adapt seamlessly using CSS variables (`border-border`, `text-foreground`, `text-muted-foreground`) with WCAG AA compliance. |
| **Unintended Horizontal Scroll** | Layout containers enforce `max-w-full overflow-x-hidden` on parent wrappers. |

---

## 6. Phase 1 Sign-off Criteria (Human Review Gate)

Before proceeding to **Phase 2: System Architecture**, the following criteria must be satisfied and approved by the user:

- [ ] Complete Emerald brand color palette and semantic tokens specified for `src/app/globals.css`.
- [ ] Strict compliance with Rule 15 (Zero Hardcoded Colors) verified in design specifications.
- [ ] Required shadcn/ui components cataloged (`badge`, `sheet`, `dropdown-menu`).
- [ ] Component breakdown guarantees all files will stay under 300 lines of code.
- [ ] Shared layout structure (`(commonLayout)`) planned for seamless section integration.
- [ ] Unit test plan established in `__tests__/` with edge-case coverage.
- [ ] Human user review and explicit approval granted to proceed to Phase 2.


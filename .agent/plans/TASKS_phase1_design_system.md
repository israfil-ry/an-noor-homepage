# Micro-Tasks Breakdown: Phase 1 — Design System, Color Tokens & Shared Layout Foundations

## Overview & Execution Strategy

Implementation proceeds systematically through decoupled tasks grouped into execution tracks. Every single task follows pure **Test-Driven Development (TDD)**: failing unit tests in `__tests__/` are authored first, followed by implementation, and verified green before moving to the next task.

---

### Track A: Design Tokens & UI Primitives

#### Task 1: Centralized Emerald Color Tokens & Theme Configuration
- **Requirement Trace**: FR-1.1, FR-1.2, FR-1.3, NFR-1
- **Execution Track**: Track A (Tokens & Theme)
- **Can Run in Parallel With**: Task 4
- **Files to Create / Modify**:
  - Source: `src/app/globals.css`
- **Estimated Line Count**: ~140 lines
- **Dependencies**: None
- **Acceptance Criteria**:
  - All brand emerald variables (`--primary`, `--primary-hover`, `--accent`, `--muted`, `--background`, `--card`, `--border`, `--brand-emerald`, `--brand-mint`, etc.) are declared in `:root` and `.dark`.
  - All variables are exposed via `@theme inline` in Tailwind CSS v4.
  - Zero hardcoded colors in CSS or components.

#### Task 2: Official shadcn/ui Component Primitives
- **Requirement Trace**: FR-3.5, FR-4.1, NFR-3
- **Execution Track**: Track A (UI Primitives)
- **Can Run in Parallel With**: Task 1
- **Files to Create / Modify**:
  - `src/components/ui/badge.tsx`
  - `src/components/ui/sheet.tsx`
  - `src/components/ui/dropdown-menu.tsx`
- **Estimated Line Count**: Handled via official shadcn CLI
- **Dependencies**: None
- **Acceptance Criteria**:
  - Installed via `npx shadcn@latest add badge sheet dropdown-menu --yes`.
  - Primitives compile cleanly with zero TypeScript errors.

#### Task 3: AppDownloadBadges Component
- **Requirement Trace**: FR-5.1, FR-5.2, FR-5.3, NFR-4
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 5
- **Files to Create / Modify**:
  - Source: `src/components/shared/AppDownloadBadges.tsx`
  - Unit Test: `__tests__/components/AppDownloadBadges.test.tsx`
- **Estimated Line Count**: ~120 lines
- **Dependencies**: Task 1, Task 2
- **Unit Test Plan (TDD Red-First)**:
  - Renders Google Play button with official badge styling.
  - Ensures touch target height >= 44px.
  - Renders direct APK download option when requested.
- **Acceptance Criteria**:
  - Unit tests pass with 100% green status.
  - Responsive layout adapts between compact pill and full store badge.

---

### Track B: Hooks, Utilities & Navigation Atoms

#### Task 4: Navigation Constants & App Metadata
- **Requirement Trace**: FR-3.4, FR-6.3, NFR-2
- **Execution Track**: Track B (Constants & Config)
- **Can Run in Parallel With**: Task 1
- **Files to Create / Modify**:
  - Source: `src/lib/constants.ts`
- **Estimated Line Count**: ~90 lines
- **Dependencies**: None
- **Acceptance Criteria**:
  - Strongly typed arrays for `NAV_ITEMS`, `FOOTER_CATEGORIES`, and `APP_CONFIG`.
  - Exported links match section anchor IDs (`#features`, `#prayer-times`, `#halal-finder`, `#community`, `#about`).

#### Task 5: Scroll-Aware Header Hook (`useHeaderScroll`)
- **Requirement Trace**: FR-2.1, FR-2.2, FR-2.3, NFR-5
- **Execution Track**: Track B (Hooks & Logic)
- **Can Run in Parallel With**: Task 3
- **Files to Create / Modify**:
  - Source: `src/hooks/useHeaderScroll.ts`
  - Unit Test: `__tests__/hooks/useHeaderScroll.test.ts`
- **Estimated Line Count**: ~45 lines
- **Dependencies**: None
- **Unit Test Plan (TDD Red-First)**:
  - Initial state `isScrolled: false` when `window.scrollY === 0`.
  - Transitions to `isScrolled: true` when `window.scrollY > 10`.
  - Reverts to `false` when scrolled back to top.
  - Listener is cleaned up on unmount.
- **Acceptance Criteria**:
  - 100% test pass rate.
  - Passive listener flag used for 60fps performance.

#### Task 6: Desktop Nav Links & Mobile Nav Sheet
- **Requirement Trace**: FR-3.4, FR-4.1, FR-4.2, FR-4.3, FR-4.4
- **Execution Track**: Track B (Navigation Atoms)
- **Can Run in Parallel With**: Task 7
- **Files to Create / Modify**:
  - Source: `src/components/shared/Navbar/NavLinks.tsx`
  - Source: `src/components/shared/Navbar/MobileNavSheet.tsx`
  - Unit Test: `__tests__/components/MobileNavSheet.test.tsx`
- **Estimated Line Count**: `NavLinks.tsx` ~80 lines, `MobileNavSheet.tsx` ~130 lines
- **Dependencies**: Task 2, Task 4
- **Unit Test Plan (TDD Red-First)**:
  - Renders all navigation items from `constants.ts`.
  - Drawer opens when triggered and displays Google Play CTA button.
  - Closes on link navigation or sheet close button click.
- **Acceptance Criteria**:
  - Touch targets >= 44px. Zero horizontal scroll.

---

### Track C: Section Integration, Layout Assembly & Page Mount

#### Task 7: Sticky Global Navbar Component
- **Requirement Trace**: FR-3.1, FR-3.2, FR-3.3, FR-3.5
- **Execution Track**: Track C (Assembly)
- **Can Run in Parallel With**: Task 8
- **Files to Create / Modify**:
  - Source: `src/components/shared/Navbar/Navbar.tsx`
  - Unit Test: `__tests__/components/Navbar.test.tsx`
- **Estimated Line Count**: ~160 lines
- **Dependencies**: Task 1, Task 3, Task 5, Task 6
- **Unit Test Plan (TDD Red-First)**:
  - Renders brand logo mark and title.
  - Renders `NavLinks` on desktop (`hidden md:flex`).
  - Renders hamburger menu button on mobile (`flex md:hidden`).
  - Applies backdrop blur and border when `isScrolled === true`.
- **Acceptance Criteria**:
  - 100% unit tests green.
  - File under 250 lines.

#### Task 8: Global Footer Component & Categorized Links
- **Requirement Trace**: FR-6.1, FR-6.2, FR-6.3, FR-6.4
- **Execution Track**: Track C (Assembly)
- **Can Run in Parallel With**: Task 7
- **Files to Create / Modify**:
  - Source: `src/components/shared/Footer/Footer.tsx`
  - Source: `src/components/shared/Footer/FooterLinks.tsx`
  - Unit Test: `__tests__/components/Footer.test.tsx`
- **Estimated Line Count**: `Footer.tsx` ~140 lines, `FooterLinks.tsx` ~100 lines
- **Dependencies**: Task 1, Task 3, Task 4
- **Unit Test Plan (TDD Red-First)**:
  - Renders brand logo and mission description.
  - Renders 3 categorized link columns (`Core Features`, `Community & Mosques`, `Legal & Trust`).
  - Renders copyright notice with current year 2026.
- **Acceptance Criteria**:
  - Fully responsive grid (single column on mobile, 4 columns on desktop).
  - 100% unit tests pass.

#### Task 9: Shared Layout Route Group & Home Page Mount
- **Requirement Trace**: FR-7.1, FR-7.2, NFR-4
- **Execution Track**: Track C (Integration)
- **Can Run in Parallel With**: None
- **Files to Create / Modify**:
  - Source: `src/app/(commonLayout)/layout.tsx`
  - Source: `src/app/(commonLayout)/page.tsx`
  - Source: `src/app/page.tsx` (re-exports or delegates to common layout)
- **Estimated Line Count**: `layout.tsx` ~50 lines, `page.tsx` ~90 lines
- **Dependencies**: Task 7, Task 8
- **Acceptance Criteria**:
  - Navigating to `/` displays sticky `Navbar`, structured main content area with section anchors, and `Footer`.
  - Zero layout shift (CLS 0) and zero horizontal scroll.


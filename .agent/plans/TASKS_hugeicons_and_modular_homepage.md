# Micro-Tasks: Next.js Link Integration, Modular HomePage Sections & Hugeicons Migration

## Execution Strategy

All tasks follow pure **Test-Driven Development (TDD)**: failing unit tests in `__tests__/` are written first, code implemented cleanly under 150 lines per file, and verified 100% green before proceeding.

---

### Task 1: Install `@hugeicons/react` and `@hugeicons/core-free-icons`
- **Scope**: Package installation using `npm.cmd install @hugeicons/react @hugeicons/core-free-icons`.
- **Acceptance Criteria**: Both packages added to `package.json` dependencies and verified via `npm list`.

### Task 2: Implement `HeroSection` Component (`src/components/homePage/HeroSection.tsx`)
- **Execution Track**: Track A (HomePage Modular Sections)
- **Files**:
  - Source: `src/components/homePage/HeroSection.tsx`
  - Test: `__tests__/homePage/HeroSection.test.tsx`
- **TDD Red Phase**: Write test asserting component export, trust badge rendering, headline, and zero hardcoded colors.
- **TDD Green Phase**: Implement `HeroSection.tsx` with `Badge`, `APP_CONFIG`, and `AppDownloadBadges`.

### Task 3: Implement `QuickPillarsSection` Component (`src/components/homePage/QuickPillarsSection.tsx`)
- **Execution Track**: Track A (HomePage Modular Sections)
- **Files**:
  - Source: `src/components/homePage/QuickPillarsSection.tsx`
  - Test: `__tests__/homePage/QuickPillarsSection.test.tsx`
- **TDD Red Phase**: Write test asserting 6 pillar links with Next.js `Link`, Hugeicons (`Mosque01Icon`, `Quran01Icon`, etc.).
- **TDD Green Phase**: Implement `QuickPillarsSection.tsx` using `Link` and `HugeiconsIcon`.

### Task 4: Refactor Home Page Orchestrator (`src/app/(commonLayout)/page.tsx`)
- **Execution Track**: Track A (HomePage Assembly)
- **Files**: `src/app/(commonLayout)/page.tsx`
- **Acceptance Criteria**: Page imports and renders `<HeroSection />` and `<QuickPillarsSection />` with zero monolithic section markup (<50 lines).

### Task 5: Refactor Header Components to Next.js `Link` & Hugeicons
- **Execution Track**: Track B (Shared Components)
- **Files**:
  - `src/components/shared/Navbar/Navbar.tsx`
  - `src/components/shared/Navbar/NavLinks.tsx`
  - `src/components/shared/Navbar/MobileNavSheet.tsx`
- **TDD Assertions**: Verify `Navbar.test.tsx`, `NavLinks.test.tsx`, and `MobileNavSheet.test.tsx` pass with `Link` and Hugeicons.

### Task 6: Refactor Footer Components to Next.js `Link` & Hugeicons
- **Execution Track**: Track B (Shared Components)
- **Files**:
  - `src/components/shared/Footer/Footer.tsx`
  - `src/components/shared/Footer/FooterLinks.tsx`
- **TDD Assertions**: Verify `Footer.test.tsx` passes with `Link`, `ShieldCheckIcon`, and `HeartIcon`.

### Task 7: Refactor `AppDownloadBadges` to Next.js `Link` & Hugeicons
- **Execution Track**: Track B (Shared Components)
- **Files**: `src/components/shared/AppDownloadBadges.tsx`
- **TDD Assertions**: Verify `AppDownloadBadges.test.ts` passes with `Link` and `Download01Icon`.

### Task 8: Full Verification & Senior QA Browser Audit
- **Execution Track**: Track C (QA & Review)
- **Acceptance Criteria**: All unit tests passing, `npm run build` succeeds, Chrome browser screenshots captured for Mobile/Tablet/Desktop viewports, zero horizontal scroll.


# Task Breakdown: Modular Section Folder Refactoring (An-Noor Homepage)

## 1. Overview & Traceability
This task list executes the refactoring defined in [`ARCH_modular_section_folder_refactoring.md`](file:///c:/Projects/an-noor-homepage/.agent/plans/ARCH_modular_section_folder_refactoring.md) to encapsulate all landing page sections into dedicated PascalCase folders under `src/components/homePage/`.

---

## 2. Micro-Task Specifications

### Task 1: Encapsulate Hero Section
- **Requirement Trace**: FR-1, FR-2, NFR-1, NFR-2
- **Files to Move / Relocate**:
  - `src/components/homePage/HeroSection.tsx` ➔ `src/components/homePage/HeroSection/HeroSection.tsx`
  - `src/components/homePage/HeroContent.tsx` ➔ `src/components/homePage/HeroSection/HeroContent.tsx`
  - `src/components/homePage/HeroFloatingCard.tsx` ➔ `src/components/homePage/HeroSection/HeroFloatingCard.tsx`
  - `src/components/homePage/HeroMockupPreview.tsx` ➔ `src/components/homePage/HeroSection/HeroMockupPreview.tsx`
  - `src/components/homePage/QrCodeModal.tsx` ➔ `src/components/homePage/HeroSection/QrCodeModal.tsx`
- **Internal Relative Imports**: Preserve `./HeroContent`, `./HeroMockupPreview`, `./QrCodeModal`, `./HeroFloatingCard`.
- **Acceptance Criteria**:
  - Directory `src/components/homePage/HeroSection/` created with 5 components.
  - No broken imports or missing files.

---

### Task 2: Encapsulate Prayer Snapshot Section
- **Requirement Trace**: FR-1, FR-2, NFR-1, NFR-2
- **Files to Move / Relocate**:
  - `src/components/homePage/PrayerSnapshotSection.tsx` ➔ `src/components/homePage/PrayerSnapshotSection/PrayerSnapshotSection.tsx`
  - `src/components/homePage/PrayerDateHeader.tsx` ➔ `src/components/homePage/PrayerSnapshotSection/PrayerDateHeader.tsx`
  - `src/components/homePage/PrayerTimeStrip.tsx` ➔ `src/components/homePage/PrayerSnapshotSection/PrayerTimeStrip.tsx`
  - `src/components/homePage/FastingCountdownWidget.tsx` ➔ `src/components/homePage/PrayerSnapshotSection/FastingCountdownWidget.tsx`
- **Internal Relative Imports**: Preserve `./PrayerDateHeader`, `./PrayerTimeStrip`, `./FastingCountdownWidget`.
- **Acceptance Criteria**:
  - Directory `src/components/homePage/PrayerSnapshotSection/` created with 4 components.
  - Sibling imports resolve without error.

---

### Task 3: Encapsulate Quick Pillars Section
- **Requirement Trace**: FR-1, NFR-1, NFR-2
- **Files to Move / Relocate**:
  - `src/components/homePage/QuickPillarsSection.tsx` ➔ `src/components/homePage/QuickPillarsSection/QuickPillarsSection.tsx`
- **Acceptance Criteria**:
  - Directory `src/components/homePage/QuickPillarsSection/` created with `QuickPillarsSection.tsx`.

---

### Task 4: Encapsulate Feature Ecosystem Section
- **Requirement Trace**: FR-1, FR-2, NFR-1, NFR-2
- **Files to Move / Relocate**:
  - `src/components/homePage/FeatureEcosystemSection.tsx` ➔ `src/components/homePage/FeatureEcosystemSection/FeatureEcosystemSection.tsx`
  - `src/components/homePage/FeatureFilterTabs.tsx` ➔ `src/components/homePage/FeatureEcosystemSection/FeatureFilterTabs.tsx`
  - `src/components/homePage/FeatureCard.tsx` ➔ `src/components/homePage/FeatureEcosystemSection/FeatureCard.tsx`
- **Internal Relative Imports**: Preserve `./FeatureFilterTabs`, `./FeatureCard`.
- **Acceptance Criteria**:
  - Directory `src/components/homePage/FeatureEcosystemSection/` created with 3 components.

---

### Task 5: Encapsulate Spiritual Essentials Section
- **Requirement Trace**: FR-1, FR-2, NFR-1, NFR-2
- **Files to Move / Relocate**:
  - `src/components/homePage/SpiritualEssentialsSection.tsx` ➔ `src/components/homePage/SpiritualEssentialsSection/SpiritualEssentialsSection.tsx`
  - `src/components/homePage/SpiritualToolCard.tsx` ➔ `src/components/homePage/SpiritualEssentialsSection/SpiritualToolCard.tsx`
  - `src/components/homePage/SpiritualPreviewDialog.tsx` ➔ `src/components/homePage/SpiritualEssentialsSection/SpiritualPreviewDialog.tsx`
- **Internal Relative Imports**: Preserve `./SpiritualToolCard`, `./SpiritualPreviewDialog`.
- **Acceptance Criteria**:
  - Directory `src/components/homePage/SpiritualEssentialsSection/` created with 3 components.

---

### Task 6: Realignment of Root Page Orchestrator
- **Requirement Trace**: FR-3
- **File to Modify**: `src/app/(commonLayout)/page.tsx`
- **Target Changes**: Update import statements to point directly to each section folder's parent component:
  ```tsx
  import { HeroSection } from "@/components/homePage/HeroSection/HeroSection";
  import { PrayerSnapshotSection } from "@/components/homePage/PrayerSnapshotSection/PrayerSnapshotSection";
  import { QuickPillarsSection } from "@/components/homePage/QuickPillarsSection/QuickPillarsSection";
  import { FeatureEcosystemSection } from "@/components/homePage/FeatureEcosystemSection/FeatureEcosystemSection";
  import { SpiritualEssentialsSection } from "@/components/homePage/SpiritualEssentialsSection/SpiritualEssentialsSection";
  ```
- **Acceptance Criteria**: Clean compilation, zero broken imports in `page.tsx`.

---

### Task 7: Realignment of Unit Test Suite
- **Requirement Trace**: FR-4
- **Files to Modify**: All 16 unit test files in `__tests__/homePage/`:
  - `HeroSection.test.tsx`, `HeroContent.test.tsx`, `HeroFloatingCard.test.tsx`, `HeroMockupPreview.test.tsx`, `QrCodeModal.test.tsx`
  - `PrayerSnapshotSection.test.tsx`, `PrayerDateHeader.test.tsx`, `PrayerTimeStrip.test.tsx`, `FastingCountdownWidget.test.tsx`
  - `QuickPillarsSection.test.tsx`
  - `FeatureEcosystemSection.test.tsx`, `FeatureFilterTabs.test.tsx`, `FeatureCard.test.tsx`
  - `SpiritualEssentialsSection.test.tsx`, `SpiritualToolCard.test.tsx`, `SpiritualPreviewDialog.test.tsx`
- **Acceptance Criteria**: Import paths updated to point to the new section subdirectories.

---

### Task 8: Verification Gate & Regression Check
- **Commands**:
  - `npm.cmd test` (100% pass rate, 49/49 green)
  - `npx.cmd tsc --noEmit` (0 errors)
  - `npm.cmd run lint` (0 errors, 0 warnings)
  - `npm.cmd run build` (Next.js Turbopack production build succeeds)
- **Acceptance Criteria**: All verification commands exit with code 0.


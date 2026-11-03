# Requirements Specification: Modular Section Folder Refactoring (An-Noor Homepage)

## 1. Feature Overview & Business Intent
- **Feature Name**: Modular Section Directory Hierarchy for An-Noor Homepage
- **Objective**: Reorganize the landing page components from a flat directory (`src/components/homePage/`) into dedicated, modular section folders. Each section directory will encapsulate its parent section orchestrator along with all of its private nested sub-components.
- **Architectural Reference**: Mirrors the established modular patterns in `src/components/shared/Navbar/` and `src/components/shared/Footer/`.
- **Target Audience**: Core engineering team and future open-source contributors requiring clean component encapsulation, maintainability, and quick code discovery.

---

## 2. Current State vs. Target Architecture Matrix

| Section Module | Current Flat Location | Target Modular Directory | Components Encapsulated |
| :--- | :--- | :--- | :--- |
| **Hero Section** | `src/components/homePage/` | `src/components/homePage/HeroSection/` | `HeroSection.tsx` (Parent), `HeroContent.tsx`, `HeroFloatingCard.tsx`, `HeroMockupPreview.tsx`, `QrCodeModal.tsx` |
| **Prayer Snapshot** | `src/components/homePage/` | `src/components/homePage/PrayerSnapshotSection/` | `PrayerSnapshotSection.tsx` (Parent), `PrayerDateHeader.tsx`, `PrayerTimeStrip.tsx`, `FastingCountdownWidget.tsx` |
| **Quick Pillars** | `src/components/homePage/` | `src/components/homePage/QuickPillarsSection/` | `QuickPillarsSection.tsx` (Parent) |
| **Feature Ecosystem** | `src/components/homePage/` | `src/components/homePage/FeatureEcosystemSection/` | `FeatureEcosystemSection.tsx` (Parent), `FeatureFilterTabs.tsx`, `FeatureCard.tsx` |
| **Spiritual Essentials** | `src/components/homePage/` | `src/components/homePage/SpiritualEssentialsSection/` | `SpiritualEssentialsSection.tsx` (Parent), `SpiritualToolCard.tsx`, `SpiritualPreviewDialog.tsx` |

---

## 3. Functional Requirements (FRs)

1. **FR-1: Section Directory Encapsulation**:
   - Create 5 discrete PascalCase section folders under `src/components/homePage/`.
   - Move all 16 component files into their respective section folders.
2. **FR-2: Clean Internal Relative Imports**:
   - Ensure child component imports within the same section folder resolve via direct relative imports (e.g. `./HeroContent`, `./PrayerTimeStrip`, `./FeatureCard`).
3. **FR-3: Root Orchestrator Alignment**:
   - Update `src/app/(commonLayout)/page.tsx` to import section components directly from their dedicated folders:
     - `@/components/homePage/HeroSection/HeroSection`
     - `@/components/homePage/PrayerSnapshotSection/PrayerSnapshotSection`
     - `@/components/homePage/QuickPillarsSection/QuickPillarsSection`
     - `@/components/homePage/FeatureEcosystemSection/FeatureEcosystemSection`
     - `@/components/homePage/SpiritualEssentialsSection/SpiritualEssentialsSection`
4. **FR-4: Unit Test Suite Realignment**:
   - Update all 16 unit test files in `__tests__/homePage/` to point to the new component import paths.
   - Maintain a 100% test pass rate across all 49 existing test cases.

---

## 4. Non-Functional Requirements (NFRs)

1. **NFR-1: Strict "One File, One Component"**:
   - Each file must continue to declare exactly one component.
2. **NFR-2: Strict File Size Ceiling**:
   - Every file must remain under 300 lines (hard maximum 400 lines).
3. **NFR-3: Zero Hardcoded Colors**:
   - Preserve all semantic CSS variables from `src/app/globals.css`.
4. **NFR-4: Zero Behavioral Regressions**:
   - The visual appearance, responsive layout, and client-side interactions must remain 100% identical.

---

## 5. Sign-off Criteria
- [x] All 5 section folders specified with their exact member components.
- [x] Root orchestrator and test suite import update strategy defined.
- [x] Zero breaking changes or behavioral regressions planned.


# Micro-Tasks Breakdown: Core Feature Ecosystem Grid & Spiritual Essentials Showcase (Phase 3)

## Overview & Execution Strategy

Implementation follows **Pure Test-Driven Development (TDD)**: failing unit tests in `__tests__/` are authored first, followed by minimal production code in `src/`, and verified green before moving to the next task.

---

### Track B: Types & Data Models (Foundation)

#### Task 1: TypeScript Contracts & Curated Feature Data Arrays
- **Requirement Trace**: FR-3.2, FR-5.1, FR-7.1, FR-7.2
- **Execution Track**: Track B (Contracts & Data)
- **Can Run in Parallel With**: Task 2
- **Files to Create / Modify**:
  - Source: `src/types/features.types.ts`
  - Unit Test: `__tests__/types/features.types.test.ts`
- **Estimated Line Count**: ~140 lines
- **Dependencies**: None
- **Unit Test Plan (TDD Red-First)**:
  - Exports `FEATURE_ITEMS` containing exactly 9 items (6 worship, 3 community).
  - Exports `SPIRITUAL_TOOLS` containing 4 tools (Qibla, Quran, Duas, Tasbih).
  - Every spiritual tool has a valid `imageSrc` referencing `public/images/app/`.
- **Acceptance Criteria**:
  - 100% tests green. Zero `any`.

---

### Track A: UI Atoms & Presentational Components

#### Task 2: Interactive Category Filter Tabs (`FeatureFilterTabs`)
- **Requirement Trace**: FR-2.1, FR-2.2, FR-2.3
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 1
- **Files to Create / Modify**:
  - Source: `src/components/homePage/FeatureFilterTabs.tsx`
  - Unit Test: `__tests__/homePage/FeatureFilterTabs.test.tsx`
- **Estimated Line Count**: ~90 lines
- **Dependencies**: `src/components/ui/button.tsx`, `src/components/ui/badge.tsx`
- **Unit Test Plan (TDD Red-First)**:
  - Renders 3 filter tabs: "All", "Daily Worship", "Community".
  - Shows correct item count badges.
  - Active tab receives primary emerald highlight.
- **Acceptance Criteria**:
  - 100% unit tests pass.

#### Task 3: Ecosystem Feature Card (`FeatureCard`)
- **Requirement Trace**: FR-3.1, FR-3.2
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 4
- **Files to Create / Modify**:
  - Source: `src/components/homePage/FeatureCard.tsx`
  - Unit Test: `__tests__/homePage/FeatureCard.test.tsx`
- **Estimated Line Count**: ~110 lines
- **Dependencies**: Task 1, `src/components/ui/badge.tsx`
- **Unit Test Plan (TDD Red-First)**:
  - Renders specialized Hugeicon, category badge, title, and description.
  - Renders internal anchor jump link using Next.js `Link`.
  - Zero hardcoded colors.
- **Acceptance Criteria**:
  - 100% tests green. File under 130 lines.

#### Task 4: Accessible Screenshot Preview Modal (`SpiritualPreviewDialog`)
- **Requirement Trace**: FR-6.1, FR-6.2, FR-6.3
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 3
- **Files to Create / Modify**:
  - Source: `src/components/homePage/SpiritualPreviewDialog.tsx`
  - Unit Test: `__tests__/homePage/SpiritualPreviewDialog.test.tsx`
- **Estimated Line Count**: ~120 lines
- **Dependencies**: `src/components/ui/dialog.tsx`, `src/components/shared/AppDownloadBadges.tsx`
- **Unit Test Plan (TDD Red-First)**:
  - Trigger button renders with "Preview Mobile Screen" text and icon.
  - Dialog renders screenshot with Next.js `Image` and feature details.
- **Acceptance Criteria**:
  - 100% unit tests pass.

#### Task 5: 4-Pillar Devotional Card (`SpiritualToolCard`)
- **Requirement Trace**: FR-5.1, FR-5.2, FR-5.3
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 6
- **Files to Create / Modify**:
  - Source: `src/components/homePage/SpiritualToolCard.tsx`
  - Unit Test: `__tests__/homePage/SpiritualToolCard.test.tsx`
- **Estimated Line Count**: ~160 lines
- **Dependencies**: Task 1, Task 4
- **Unit Test Plan (TDD Red-First)**:
  - Renders tool title, Arabic calligraphy, subtitle, and 3 highlight chips.
  - Embeds Next.js `Image` inside phone chassis frame.
  - Renders preview modal trigger.
- **Acceptance Criteria**:
  - 100% unit tests pass. File under 180 lines.

---

### Track C: Section Integration & Page Assembly

#### Task 6: Comprehensive Feature Ecosystem Section (`FeatureEcosystemSection`)
- **Requirement Trace**: FR-1.1, FR-1.2, FR-1.3, FR-2.3
- **Execution Track**: Track C (Assembly)
- **Files to Create / Modify**:
  - Source: `src/components/homePage/FeatureEcosystemSection.tsx`
  - Unit Test: `__tests__/homePage/FeatureEcosystemSection.test.tsx`
- **Estimated Line Count**: ~130 lines
- **Dependencies**: Task 2, Task 3
- **Unit Test Plan (TDD Red-First)**:
  - Renders section header with anchor `id="features"`.
  - Connects category filter state to 9-box card grid.
  - Renders 9 cards on "all", 6 on "worship", 3 on "community".
- **Acceptance Criteria**:
  - 100% tests green. File under 150 lines.

#### Task 7: Spiritual Essentials Section Orchestrator (`SpiritualEssentialsSection`)
- **Requirement Trace**: FR-4.1, FR-4.2, FR-4.3
- **Execution Track**: Track C (Assembly)
- **Files to Create / Modify**:
  - Source: `src/components/homePage/SpiritualEssentialsSection.tsx`
  - Unit Test: `__tests__/homePage/SpiritualEssentialsSection.test.tsx`
- **Estimated Line Count**: ~140 lines
- **Dependencies**: Task 5
- **Unit Test Plan (TDD Red-First)**:
  - Renders section header with anchor `id="spiritual-tools"`.
  - Renders 4 spiritual tool showcase cards (Qibla, Quran, Duas, Tasbih).
- **Acceptance Criteria**:
  - 100% unit tests pass.

#### Task 8: Home Page Orchestrator Mount (`src/app/(commonLayout)/page.tsx`)
- **Requirement Trace**: FR-8.1, FR-8.2, NFR-4
- **Execution Track**: Track C (Assembly)
- **Files to Create / Modify**:
  - Source: `src/app/(commonLayout)/page.tsx`
- **Estimated Line Count**: ~35 lines
- **Dependencies**: Task 6, Task 7
- **Acceptance Criteria**:
  - Assembles Hero $\rightarrow$ Prayer Snapshot $\rightarrow$ Quick Pillars $\rightarrow$ Feature Ecosystem $\rightarrow$ Spiritual Essentials.
  - Zero layout shift, zero horizontal overflow.


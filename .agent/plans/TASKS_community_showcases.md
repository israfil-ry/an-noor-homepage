# Task List: Community Showcases (Phase 4)
`TASKS_community_showcases.md`

## 1. Execution Overview & Parallel Tracks

Implementation is partitioned into three parallel execution tracks with zero file conflicts:
- **Track B (Types & Contracts)**: Foundation types and curated Dallas/Fort Worth mock data.
- **Track A (UI Presentation Atoms & Dialogs)**: Independent presentation cards, tables, pills, and dialog modals.
- **Track C (Section Orchestration & Page Assembly)**: Section orchestrators integrating Track A & B, and final assembly into `src/app/(commonLayout)/page.tsx`.

---

## 2. Micro-Task Breakdown

### Task 1: Community TypeScript Contracts & Mock Data
- **Requirement Trace**: FR-1.3, FR-2.4, FR-3.2
- **Execution Track**: Track B (Types & Contracts)
- **Can Run in Parallel With**: None (Foundation task)
- **Files to Create / Modify**:
  - Source: `src/types/community.types.ts`
  - Unit Test: `__tests__/types/community.types.test.ts`
- **Estimated Line Count**: ~190 lines (< 300 line budget)
- **Dependencies**: None
- **Unit Test Plan (TDD Red-First)**:
  - Verify exported interfaces compile and export `FEATURED_MASJID`, `FEATURED_HALAL_PLACES`, and `FEATURED_EVENT`.
  - Validate image path resolutions in `public/images/`.
- **Acceptance Criteria**: All mock data strictly typed with zero `any`, deterministic values matching DFW diaspora references.

---

### Task 2: Mosque Live Iqamah Table Component
- **Requirement Trace**: FR-1.4, NFR-3, NFR-5
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 5, Task 9
- **Files to Create / Modify**:
  - Source: `src/components/homePage/MosqueSyncSection/MosqueIqamahTable.tsx`
  - Unit Test: `__tests__/homePage/MosqueIqamahTable.test.tsx`
- **Estimated Line Count**: ~120 lines (< 300 line budget)
- **Dependencies**: Task 1
- **Unit Test Plan (TDD Red-First)**:
  - Render all 6 prayer rows (Fajr, Dhuhr, Asr, Maghrib, Isha, Jumu'ah).
  - Verify active/next prayer badge highlighting.
  - Verify semantic colors (`bg-primary/10`, `text-primary`).
- **Acceptance Criteria**: Clean tabular display, mobile responsive, semantic design tokens.

---

### Task 3: Mosque Detail & Donation Dialog
- **Requirement Trace**: FR-1.6, NFR-4, NFR-6
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 2, Task 7, Task 10
- **Files to Create / Modify**:
  - Source: `src/components/homePage/MosqueSyncSection/MosqueDetailDialog.tsx`
  - Unit Test: `__tests__/homePage/MosqueDetailDialog.test.tsx`
- **Estimated Line Count**: ~160 lines (< 300 line budget)
- **Dependencies**: Task 1
- **Unit Test Plan (TDD Red-First)**:
  - Test trigger button renders with Hugeicons.
  - Verify dialog content markup opens with masjid profile and donation screenshots.
  - Verify keyboard accessibility and escape key handling.
- **Acceptance Criteria**: Accessible modal rendering `masjid-profile-screen.png` and `mosque-donation-screen.png`.

---

### Task 4: Mosque Sync Section Orchestrator
- **Requirement Trace**: FR-1.1, FR-1.2, FR-1.5
- **Execution Track**: Track C (Section Integration)
- **Can Run in Parallel With**: Task 8, Task 11 (after Tasks 2 & 3 complete)
- **Files to Create / Modify**:
  - Source: `src/components/homePage/MosqueSyncSection/MosqueSyncSection.tsx`
  - Unit Test: `__tests__/homePage/MosqueSyncSection.test.tsx`
- **Estimated Line Count**: ~190 lines (< 300 line budget)
- **Dependencies**: Task 2, Task 3
- **Unit Test Plan (TDD Red-First)**:
  - Section has `id="community"` anchor attribute.
  - Renders 2-column split with narrative, 3 Hugeicons value badges, and `MosqueIqamahTable`.
- **Acceptance Criteria**: Fully responsive 2-column layout adhering to zero hardcoded colors.

---

### Task 5: Halal Category Filter Pills
- **Requirement Trace**: FR-2.3, NFR-5, NFR-7
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 2, Task 9
- **Files to Create / Modify**:
  - Source: `src/components/homePage/HalalFinderSection/HalalCategoryPills.tsx`
  - Unit Test: `__tests__/homePage/HalalCategoryPills.test.tsx`
- **Estimated Line Count**: ~110 lines (< 300 line budget)
- **Dependencies**: Task 1
- **Unit Test Plan (TDD Red-First)**:
  - Renders category pills (All, Restaurants, Groceries, Butchers).
  - Fires `onSelectCategory` callback on click.
  - Applies active styling (`bg-primary text-primary-foreground`).
- **Acceptance Criteria**: Touch targets >= 44px, keyboard accessible.

---

### Task 6: Halal Place Preview Card
- **Requirement Trace**: FR-2.4, NFR-4, NFR-5
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 3, Task 10
- **Files to Create / Modify**:
  - Source: `src/components/homePage/HalalFinderSection/HalalPlaceCard.tsx`
  - Unit Test: `__tests__/homePage/HalalPlaceCard.test.tsx`
- **Estimated Line Count**: ~130 lines (< 300 line budget)
- **Dependencies**: Task 1
- **Unit Test Plan (TDD Red-First)**:
  - Renders name, cuisine, distance, price level, and rating.
  - Displays Zabiha / Hand-Slaughtered verified badge.
- **Acceptance Criteria**: Crisp card elevation, Hugeicons ratings, proper text truncation.

---

### Task 7: Halal Directory Preview Dialog
- **Requirement Trace**: FR-2.6, NFR-4
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 3, Task 10
- **Files to Create / Modify**:
  - Source: `src/components/homePage/HalalFinderSection/HalalPreviewDialog.tsx`
  - Unit Test: `__tests__/homePage/HalalPreviewDialog.test.tsx`
- **Estimated Line Count**: ~150 lines (< 300 line budget)
- **Dependencies**: Task 1
- **Unit Test Plan (TDD Red-First)**:
  - Renders preview trigger button with store icon.
  - Opens modal displaying `nearby-halal-mockup.png` and directory features.
- **Acceptance Criteria**: Standard shadcn Dialog with zero hardcoded styling.

---

### Task 8: Halal Finder Section Orchestrator
- **Requirement Trace**: FR-2.1, FR-2.2, FR-2.5
- **Execution Track**: Track C (Section Integration)
- **Can Run in Parallel With**: Task 4, Task 11 (after Tasks 5, 6, 7 complete)
- **Files to Create / Modify**:
  - Source: `src/components/homePage/HalalFinderSection/HalalFinderSection.tsx`
  - Unit Test: `__tests__/homePage/HalalFinderSection.test.tsx`
- **Estimated Line Count**: ~210 lines (< 300 line budget)
- **Dependencies**: Task 5, Task 6, Task 7
- **Unit Test Plan (TDD Red-First)**:
  - Section has `id="halal-finder"` anchor attribute.
  - Alternating layout on desktop (narrative left, cards/phone right).
  - Category switching filters displayed place cards.
- **Acceptance Criteria**: Responsive alternating layout, zero horizontal overflow.

---

### Task 9: Event Highlight Card with Calendar Action
- **Requirement Trace**: FR-3.2, FR-3.3, NFR-5
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 2, Task 5
- **Files to Create / Modify**:
  - Source: `src/components/homePage/EventsShowcaseSection/EventHighlightCard.tsx`
  - Unit Test: `__tests__/homePage/EventHighlightCard.test.tsx`
- **Estimated Line Count**: ~150 lines (< 300 line budget)
- **Dependencies**: Task 1
- **Unit Test Plan (TDD Red-First)**:
  - Displays event title, date pill, venue, and speaker info.
  - "Add to Calendar" button triggers calendar prompt or feedback.
- **Acceptance Criteria**: Accessible button targets, semantic badges.

---

### Task 10: Event Detail & RSVP Dialog
- **Requirement Trace**: FR-3.4, NFR-4
- **Execution Track**: Track A (UI Atoms)
- **Can Run in Parallel With**: Task 3, Task 7
- **Files to Create / Modify**:
  - Source: `src/components/homePage/EventsShowcaseSection/EventDetailDialog.tsx`
  - Unit Test: `__tests__/homePage/EventDetailDialog.test.tsx`
- **Estimated Line Count**: ~150 lines (< 300 line budget)
- **Dependencies**: Task 1
- **Unit Test Plan (TDD Red-First)**:
  - Renders trigger button and opens dialog displaying `event-details-screen.png`.
  - Confirms RSVP status and speaker highlights.
- **Acceptance Criteria**: Responsive modal image display with proper aspect ratio.

---

### Task 11: Events Showcase Section Orchestrator
- **Requirement Trace**: FR-3.1, FR-3.5
- **Execution Track**: Track C (Section Integration)
- **Can Run in Parallel With**: Task 4, Task 8 (after Tasks 9 & 10 complete)
- **Files to Create / Modify**:
  - Source: `src/components/homePage/EventsShowcaseSection/EventsShowcaseSection.tsx`
  - Unit Test: `__tests__/homePage/EventsShowcaseSection.test.tsx`
- **Estimated Line Count**: ~180 lines (< 300 line budget)
- **Dependencies**: Task 9, Task 10
- **Unit Test Plan (TDD Red-First)**:
  - Section has `id="events"` (and supports `#community` anchor continuity).
  - Renders 2-column split with event narrative and `EventHighlightCard`.
- **Acceptance Criteria**: Fully responsive layout matching Islamic community theme.

---

### Task 12: Home Page Orchestration Assembly & Anchor Verification
- **Requirement Trace**: FR-4.1, FR-4.2
- **Execution Track**: Track C (Page Assembly)
- **Can Run in Parallel With**: None (Final integration task)
- **Files to Create / Modify**:
  - Source: `src/app/(commonLayout)/page.tsx`
  - Integration Test: `__tests__/homePage/HomePageAssembly.test.tsx`
- **Estimated Line Count**: ~45 lines (< 300 line budget)
- **Dependencies**: Tasks 4, 8, 11
- **Unit Test Plan (TDD Red-First)**:
  - Verify `HomePage` renders all 3 community showcases.
  - Anchors `#community` and `#halal-finder` are present and valid.
- **Acceptance Criteria**: Clean orchestrator page under 60 lines with 100% passing tests.


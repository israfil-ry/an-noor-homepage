# Requirement Specification: Next.js Link Integration, Modular HomePage Sections & Hugeicons Migration

## 1. Feature Overview & Business Intent

This refactoring aligns the An-Noor homepage codebase with the updated Frontend Architecture guidelines:
1. **Next.js `Link` Standard**: Replace all raw HTML `<a>` tags with `next/link` for optimal prefetching, client-side route transitions, and hash anchor navigation.
2. **Modular Home Page Architecture**: Decompose the home page into independent, self-contained section components inside `src/components/homePage/` (`HeroSection.tsx` and `QuickPillarsSection.tsx`), with `src/app/(commonLayout)/page.tsx` serving strictly as a lean orchestrator.
3. **Iconography Standard — Hugeicons**: Transition from `lucide-react` to `@hugeicons/react` and `@hugeicons/core-free-icons`, introducing authentic Islamic visual elements (`Mosque01Icon`, `Quran01Icon`).

---

## 2. Current State vs. Target Requirements (Gap Matrix)

| Dimension | Current State | Target Requirement | Architectural & UX Benefit |
| :--- | :--- | :--- | :--- |
| **Navigation Elements** | Raw HTML `<a>` tags used in `Navbar`, `NavLinks`, `MobileNavSheet`, `Footer`, `FooterLinks`, and `AppDownloadBadges`. | Next.js `<Link>` component used exclusively for all internal navigation, store links, and anchor jumps. | Smooth client-side navigation, link prefetching, zero full-page reloads. |
| **Home Page Structure** | Inline monolithic section markup inside `src/app/(commonLayout)/page.tsx`. | Dedicated folder `src/components/homePage/` hosting independent section components (`HeroSection.tsx`, `QuickPillarsSection.tsx`). | Universal DRY, strict file limits (<150 lines per section), scalable section orchestration. |
| **Icon Library** | `lucide-react` icons (`Download`, `Menu`, `MapPin`, `Clock`, `Compass`, `Utensils`, `Building2`, `BookOpen`, `ShieldCheck`, `Heart`). | `@hugeicons/react` with `@hugeicons/core-free-icons` (`Download01Icon`, `Menu01Icon`, `Location01Icon`, `Clock01Icon`, `Compass01Icon`, `Restaurant01Icon`, `Mosque01Icon`, `Quran01Icon`, `ShieldCheckIcon`, `HeartIcon`). | Premium aesthetic designed by Halal Lab with authentic Islamic architectural icons. |
| **Dependencies** | `lucide-react` in `package.json`. | `@hugeicons/react` and `@hugeicons/core-free-icons` installed. | Standardized icon rendering across all current and future sections. |

---

## 3. Functional Requirements (FRs)

### FR-1: Package Integration
- Install `@hugeicons/react` and `@hugeicons/core-free-icons` via `npm install @hugeicons/react @hugeicons/core-free-icons`.
- Verify tree-shaking and TypeScript definitions.

### FR-2: Home Page Section Modularization (`src/components/homePage/`)
- **FR-2.1: `src/components/homePage/HeroSection.tsx`**:
  - Encapsulates the Trust Badge pill ("100% Free • Ad-Free • Built for the Global Ummah").
  - Value headline with An-Noor brand styling.
  - Sub-headline and `AppDownloadBadges` CTA group.
  - File size strictly < 150 lines.
- **FR-2.2: `src/components/homePage/QuickPillarsSection.tsx`**:
  - Encapsulates the 6-pillar grid (Prayer Times, Qibla Direction, Nearby Halal, Mosque Sync, Holy Quran, Privacy First).
  - Uses `HugeiconsIcon` with `Clock01Icon`, `Compass01Icon`, `Restaurant01Icon`, `Mosque01Icon`, `Quran01Icon`, `ShieldCheckIcon`.
  - All pillar cards wrapped in Next.js `<Link href={pillar.href}>`.
  - File size strictly < 120 lines.
- **FR-2.3: `src/app/(commonLayout)/page.tsx`**:
  - Replaced by a clean orchestrator importing and assembling `<HeroSection />` and `<QuickPillarsSection />`.
  - File size strictly < 60 lines.

### FR-3: Navigation & Footer Refactoring to Next.js `Link` & Hugeicons
- **FR-3.1: `src/components/shared/Navbar/Navbar.tsx`**:
  - Use `Link` for brand logo and download button.
  - Replace `MapPin` with `<HugeiconsIcon icon={Location01Icon} size={14} className="text-primary" />`.
  - Replace `Download` with `<HugeiconsIcon icon={Download01Icon} size={14} />`.
- **FR-3.2: `src/components/shared/Navbar/NavLinks.tsx`**:
  - Render desktop navigation anchor items using `<Link href={item.href}>`.
- **FR-3.3: `src/components/shared/Navbar/MobileNavSheet.tsx`**:
  - Replace `Menu` with `<HugeiconsIcon icon={Menu01Icon} size={20} />`.
  - Replace `MapPin` with `<HugeiconsIcon icon={Location01Icon} size={12} className="text-primary" />`.
  - Replace `Smartphone` with `<HugeiconsIcon icon={SmartPhone01Icon} size={16} />`.
  - All navigation links and CTA buttons use `Link`.
- **FR-3.4: `src/components/shared/Footer/Footer.tsx` & `FooterLinks.tsx`**:
  - Brand logo and category links use `Link`.
  - Replace `ShieldCheck` with `<HugeiconsIcon icon={ShieldCheckIcon} size={16} className="text-primary" />`.
  - Replace `Heart` with `<HugeiconsIcon icon={HeartIcon} size={14} className="text-primary fill-primary" />`.
- **FR-3.5: `src/components/shared/AppDownloadBadges.tsx`**:
  - Replace `Download` with `<HugeiconsIcon icon={Download01Icon} size={16} className="text-primary" />`.
  - All store buttons use `Link`.

---

## 4. Non-Functional Requirements (NFRs)

- **NFR-1: Zero Hardcoded Colors (Rule 15)**: Strictly semantic classes (`bg-primary`, `text-primary-foreground`, `border-border`, etc.). Zero arbitrary hex `#...` codes.
- **NFR-2: Strict File Size Ceiling (Rule 12)**: Every file remains under 150 lines (well below the 300 lines limit).
- **NFR-3: One File, One Component (Rule 1)**: Each `.tsx` file exports strictly one React component.
- **NFR-4: 100% Device Responsiveness**: Mobile (<640px), Tablet (640-1024px), Desktop (1024px+) with zero horizontal scroll.
- **NFR-5: Accessibility**: Accessible ARIA labels on all icon-only buttons and interactive drawer targets.
- **NFR-6: Unit Testing**: 100% test pass rate across `__tests__/`.

---

## 5. Sign-off Checklist
- [x] Gap analysis completed.
- [x] Hugeicons icon mapping verified.
- [x] Home page modularization directory `src/components/homePage/` planned.
- [x] Transitioning autonomously to Phase 2 (Architecture).


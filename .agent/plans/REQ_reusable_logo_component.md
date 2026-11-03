# Requirement Specification: Reusable Universal Brand Logo Component (`Logo.tsx`)

## 1. Feature Overview & Business Intent

The purpose of this specification is to unify brand identity rendering across the An-Noor homepage by designing and deploying a reusable, standardized `Logo` component (`src/components/shared/Logo.tsx`). 

By abstracting logo image paths, sizing variations, Next.js `<Image>` optimizations, and optional home link routing into a single modular atom, we strictly enforce the Universal DRY principle and simplify future visual adjustments.

---

## 2. Current State vs. Target Requirements (Gap Matrix)

| Dimension | Current State | Target Requirement | Architectural & UX Benefit |
| :--- | :--- | :--- | :--- |
| **Component Abstraction** | Inline `<Link><Image ... /></Link>` declarations scattered across `Navbar.tsx`, `MobileNavSheet.tsx`, and `Footer.tsx`. | Single reusable `Logo.tsx` component imported and consumed across all navigation and layout surfaces. | Universal DRY; centralized asset and link management. |
| **Sizing Inconsistency** | Ad-hoc explicit dimensions (`108×36`, `96×32`, `120×40`) repeated in JSX. | Structured sizing variants (`navbar`, `mobile`, `footer`, `compact`) with defined aspect ratios. | Guaranteed aspect ratio preservation and zero layout shift (CLS 0). |
| **Link Flexibility** | Hardcoded `<Link href="/">` wrapping in some components while missing options for non-interactive contexts. | Configurable `asLink?: boolean` prop (default `true`) allowing seamless rendering in interactive and non-interactive contexts (like dialog titles). | WCAG accessibility compliance (avoiding nested interactive links inside dialog headings). |

---

## 3. Functional Requirements (FRs)

### FR-1: Reusable Component Creation (`src/components/shared/Logo.tsx`)
- **FR-1.1**: Create `src/components/shared/Logo.tsx` accepting:
  - `variant?: "navbar" | "mobile" | "footer" | "compact"` (default `"navbar"`).
  - `asLink?: boolean` (default `true`).
  - `priority?: boolean` (default `false`).
  - `className?: string`.
- **FR-1.2**: When `asLink` is `true`, wrap the image in Next.js `<Link href="/" aria-label="An-Noor Homepage" className="...">`.
- **FR-1.3**: When `asLink` is `false`, render `<Image>` directly with appropriate semantic styling.

### FR-2: Sizing Variants Specification
- **`variant="navbar"`**: `width={108} height={36}`, `className="h-9 w-auto object-contain"`.
- **`variant="mobile"`**: `width={96} height={32}`, `className="h-8 w-auto object-contain"`.
- **`variant="footer"`**: `width={120} height={40}`, `className="h-10 w-auto object-contain"`.
- **`variant="compact"`**: `width={84} height={28}`, `className="h-7 w-auto object-contain"`.

### FR-3: Layout Integration
- **`Navbar.tsx`**: Replace existing inline link/image block with `<Logo variant="navbar" priority />`.
- **`MobileNavSheet.tsx`**: Replace existing inline image block in `SheetTitle` with `<Logo variant="mobile" asLink={false} />`.
- **`Footer.tsx`**: Replace existing inline link/image block with `<Logo variant="footer" />`.

---

## 4. Non-Functional Requirements (NFRs)

- **NFR-1: Universal DRY & Single Source of Truth**: All brand logo renders must flow exclusively through `Logo.tsx`.
- **NFR-2: Strict File Size Ceiling**: `Logo.tsx` should remain under 70 lines (strict limit <300 lines).
- **NFR-3: One File, One Component**: `Logo.tsx` exports strictly the `Logo` component.
- **NFR-4: Accessibility**: High-contrast alt text (`"AnNoor Logo"`) and accessible focus ring on interactive links.

---

## 5. Phase 1 Sign-off Checklist
- [x] Gap analysis complete.
- [x] Prop contract specified.
- [x] Autonomous transition to Phase 2 (Architecture).


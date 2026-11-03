# Requirement Specification: Montserrat Typography, Official Brand Logo & Favicon Integration

## 1. Feature Overview & Business Intent

The objective of this specification is to establish the authentic visual branding and global typography standard for the official An-Noor homepage:
1. **Typography Standard**: Configure **Montserrat** as the universal font family across the entire website via `next/font/google`, replacing the starter `Geist` font.
2. **Brand Logo Integration**: Place the official An-Noor logo (`media_1793693988519_018dd297.png`) into the `public/images/` directory and replace the temporary Arabic text mark (`ن`) in `Navbar`, `MobileNavSheet`, and `Footer` with `<Image>` from `next/image`.
3. **Favicon Asset Generation**: Derive a crisp square favicon from the green mosque emblem (40×40) and deploy it to `src/app/favicon.ico` and `public/favicon.ico` for browser tabs and mobile bookmarks.

---

## 2. Current State vs. Target Requirements (Gap Matrix)

| Dimension | Current State | Target Requirement | Architectural & Branding Benefit |
| :--- | :--- | :--- | :--- |
| **Typography** | `Geist` and `Geist_Mono` configured in `src/app/layout.tsx`. | `Montserrat` from `next/font/google` applied across the entire site with weights 300 to 800 and `display: "swap"`. | Elegant, geometric sans-serif aesthetic tailored for modern digital applications. |
| **Header Logo** | Temporary text box with Arabic letter `ن` in `Navbar.tsx` and `MobileNavSheet.tsx`. | High-fidelity official AnNoor horizontal logo rendered with Next.js `Image`. | Authentic brand identity recognition and zero layout shift (CLS 0). |
| **Footer Logo** | Temporary text box with Arabic letter `ن` in `Footer.tsx`. | High-fidelity official AnNoor logo rendered with Next.js `Image`. | Visual consistency between header and footer. |
| **Browser Favicon** | Default starter Next.js favicon. | Custom An-Noor mosque emblem icon deployed to `src/app/favicon.ico` and `public/favicon.ico`. | Instant recognition in browser tabs and home screen bookmarks. |

---

## 3. Functional Requirements (FRs)

### FR-1: Montserrat Typography Configuration
- **FR-1.1**: Import `Montserrat` from `next/font/google` in `src/app/layout.tsx` with `subsets: ["latin"]`, weights `["300", "400", "500", "600", "700", "800"]`, and `display: "swap"`.
- **FR-1.2**: Declare CSS variable `--font-montserrat` on `<html>` and map `--font-sans: var(--font-montserrat), sans-serif` in `src/app/globals.css`.

### FR-2: Static Logo Assets
- **FR-2.1**: Copy user-uploaded asset (`media_1793693988519_018dd297.png`) to `public/images/logo.png` and `public/logo.png`.
- **FR-2.2**: Crop the 40×40 square mosque badge to create `public/icon.png` and `public/favicon.ico`, also replacing `src/app/favicon.ico`.

### FR-3: Layout Components Brand Update
- **FR-3.1: `src/components/shared/Navbar/Navbar.tsx`**:
  - Replace placeholder icon with `<Image src="/images/logo.png" alt="AnNoor Logo" width={108} height={36} priority className="h-9 w-auto object-contain" />`.
- **FR-3.2: `src/components/shared/Navbar/MobileNavSheet.tsx`**:
  - Replace placeholder icon in `SheetTitle` with `<Image src="/images/logo.png" alt="AnNoor Logo" width={96} height={32} className="h-8 w-auto object-contain" />`.
- **FR-3.3: `src/components/shared/Footer/Footer.tsx`**:
  - Replace placeholder icon with `<Image src="/images/logo.png" alt="AnNoor Logo" width={120} height={40} className="h-10 w-auto object-contain" />`.

### FR-4: Metadata Configuration (`src/app/layout.tsx`)
- Set official page title: `"An-Noor — Your Daily Islamic Companion & Local Halal Living Guide"`.
- Set descriptive metadata and link `/favicon.ico` in icons definition.

---

## 4. Non-Functional Requirements (NFRs)

- **NFR-1: Zero Cumulative Layout Shift (CLS 0)**: Proper aspect ratio `width={108} height={36}` and `priority` flag on above-the-fold header logo.
- **NFR-2: Strict File Size Ceiling**: All files stay under 120 lines (strict limit <300 lines).
- **NFR-3: Zero Hardcoded Colors**: Retain 100% semantic CSS variables.
- **NFR-4: Device Responsiveness**: Logo scales gracefully across mobile (<640px) and desktop (1024px+).

---

## 5. Phase 1 Sign-off Checklist
- [x] Gap analysis complete.
- [x] Asset extraction plan formulated.
- [x] Proceeding to Phase 2 (Architecture).


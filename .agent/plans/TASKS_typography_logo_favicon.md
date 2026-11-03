# Micro-Tasks: Montserrat Typography, Official Brand Logo & Favicon Integration

## Execution Strategy

All tasks follow pure **Test-Driven Development (TDD)**: failing unit tests in `__tests__/` are updated first, code implemented cleanly under 120 lines per file, and verified 100% green before proceeding.

---

### Task 1: Deploy Brand Logo & Favicon Assets
- **Scope**:
  - Copy user-uploaded asset to `public/images/logo.png` and `public/logo.png`.
  - Extract the 40×40 square mosque emblem to `public/icon.png`, `public/favicon.ico`, and `src/app/favicon.ico`.
- **Files Created**: `public/images/logo.png`, `public/logo.png`, `public/icon.png`, `public/favicon.ico`, `src/app/favicon.ico`.
- **Acceptance Criteria**: All asset files exist and can be loaded via HTTP / static routes.

### Task 2: Configure Montserrat Typography
- **Scope**:
  - Import `Montserrat` in `src/app/layout.tsx`.
  - Update `<html>` className with `${montserrat.variable}`.
  - Map `--font-sans: var(--font-montserrat), sans-serif;` in `src/app/globals.css`.
  - Update `<head>` metadata with official title and favicon link.
- **Files**: `src/app/layout.tsx`, `src/app/globals.css`.
- **Acceptance Criteria**: App renders with `font-sans` resolving to Montserrat. Zero font-loading layout shift.

### Task 3: Update `Navbar` Component with Official Brand Logo
- **Scope**:
  - Replace temporary Arabic text placeholder (`ن`) with `<Image src="/images/logo.png" alt="AnNoor Logo" width={108} height={36} priority className="h-9 w-auto object-contain" />`.
- **Files**: `src/components/shared/Navbar/Navbar.tsx`.
- **Test**: `__tests__/components/Navbar.test.tsx`.
- **Acceptance Criteria**: Test verifies `img` with `src="/images/logo.png"` and `alt="AnNoor Logo"`.

### Task 4: Update `MobileNavSheet` Component with Official Brand Logo
- **Scope**:
  - Replace temporary Arabic text placeholder with `<Image src="/images/logo.png" alt="AnNoor Logo" width={96} height={32} className="h-8 w-auto object-contain" />`.
- **Files**: `src/components/shared/Navbar/MobileNavSheet.tsx`.
- **Test**: `__tests__/components/MobileNavSheet.test.tsx`.
- **Acceptance Criteria**: Test verifies official logo image in mobile drawer title.

### Task 5: Update `Footer` Component with Official Brand Logo
- **Scope**:
  - Replace temporary Arabic text placeholder with `<Image src="/images/logo.png" alt="AnNoor Logo" width={120} height={40} className="h-10 w-auto object-contain" />`.
- **Files**: `src/components/shared/Footer/Footer.tsx`.
- **Test**: `__tests__/components/Footer.test.tsx`.
- **Acceptance Criteria**: Test verifies official logo image in footer brand column.

### Task 6: Full Verification & Senior QA Browser Audit
- **Scope**:
  - Run all unit tests with 100% pass rate.
  - Run TypeScript compilation (`npx tsc --noEmit`).
  - Run linter (`npm run lint`).
  - Run production build (`npm run build`).
  - Capture Chrome browser screenshots for Mobile, Tablet, and Desktop viewports.


# Micro-Tasks: Reusable Universal Brand Logo Component (`Logo.tsx`)

## Execution Strategy

All tasks follow pure **Test-Driven Development (TDD)**: failing unit tests in `__tests__/` are authored first, implementation completed under 70 lines, and verified 100% green before proceeding.

---

### Task 1: Author Failing Unit Tests for `Logo` Component
- **Files**: `__tests__/components/Logo.test.tsx`
- **TDD Red Phase**:
  - Test export of `Logo`.
  - Test default rendering as `<Link href="/">` with image `src="/images/logo.png"`.
  - Test `asLink={false}` rendering image directly without `<Link>`.
  - Test variant sizing attributes (`navbar`, `mobile`, `footer`, `compact`).
  - Test `priority` prop forwarding.
  - Test zero hardcoded colors.

### Task 2: Implement Universal `Logo` Component (`src/components/shared/Logo.tsx`)
- **Files**: `src/components/shared/Logo.tsx`
- **TDD Green Phase**:
  - Implement component with `LogoVariant`, `LogoProps`, and `VARIANT_CONFIG`.
  - Handle `asLink` condition cleanly.
  - Maintain file size under 70 lines.

### Task 3: Refactor `Navbar` to Consume `Logo`
- **Files**: `src/components/shared/Navbar/Navbar.tsx`
- **Acceptance Criteria**: Consumes `<Logo variant="navbar" priority />`.

### Task 4: Refactor `MobileNavSheet` to Consume `Logo`
- **Files**: `src/components/shared/Navbar/MobileNavSheet.tsx`
- **Acceptance Criteria**: Consumes `<Logo variant="mobile" asLink={false} />` inside `SheetTitle`.

### Task 5: Refactor `Footer` to Consume `Logo`
- **Files**: `src/components/shared/Footer/Footer.tsx`
- **Acceptance Criteria**: Consumes `<Logo variant="footer" />`.

### Task 6: Full Verification Suite
- **Acceptance Criteria**: 13/13 tests green in `__tests__/`, `npx tsc --noEmit` clean, `npm run lint` clean, `npm run build` succeeds.

### Task 7: Senior QA Real Browser Viewport Audits
- **Acceptance Criteria**: Chrome screenshots captured for Desktop, Tablet, and Mobile viewports verifying visual consistency.


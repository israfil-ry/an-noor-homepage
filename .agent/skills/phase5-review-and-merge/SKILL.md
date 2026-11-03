---
name: phase5-review-and-merge
description: >-
  Use this skill for Phase 5 (Review & Merge). Executes 16 parallel verification checks 
  for An-Noor Homepage including Senior QA real browser testing (Puppeteer with Chrome), 
  responsive viewport audits (Mobile/Tablet/Desktop), zero hardcoded color verification, 
  automated self-healing feedback loop back to Phase 4, and prepares the approved walkthrough artifact.
---

# Phase 5: Review & Merge (QA, 16 Checks & Self-Healing Verification)

## Role & Persona
You are the **Senior QA Automation Engineer & Release Gatekeeper for An-Noor Homepage**.
Your objective is to put the implementation through ruthless adversarial checks, verify 100% responsiveness without visual glitches, autonomously heal any detected issues via a feedback loop to Phase 4, and compile the final visual proof.

## Guiding Principle
> **"Never merge on faith. Verify with automated unit tests, real browser audits, visual proof, and an automated self-healing loop."**

---

## Instructions & Execution Steps

### Step 1: Execute the 16 Parallel Verification Checks
Run each of the following 16 checks systematically:

1. **[Check 1] TypeScript Safety Check**: Run `npx tsc --noEmit` (zero type errors, no `any`).
2. **[Check 2] Linter Check**: Run `npm run lint` (zero critical lint errors).
3. **[Check 3] Automated Unit Test Suite**: Run `npm test` (100% pass rate across tests in `__tests__/`).
4. **[Check 4] Senior QA Real Browser Test**: Execute automated script using Puppeteer with Chrome navigating the live application, interacting with navigation items, modals, drawers, and accordions like a real user.
5. **[Check 5] Desktop Viewport Audit (1280px+)**: Verify spacious grid, header, hero layout, and showcases.
6. **[Check 6] Tablet Viewport Audit (768px)**: Verify responsive multi-column collapse and layout integrity.
7. **[Check 7] Mobile Viewport Audit (375px)**: Verify touch targets (44px min), drawer navigation, and **ZERO overall page-level horizontal scroll**.
8. **[Check 8] Interactive Elements & Modals / Sheets Test**: Verify mobile navigation drawer, dropdowns, and download popovers open and close smoothly with accessible focus.
9. **[Check 9] Zero Hardcoded Colors Audit**: Verify that all colors strictly use CSS variables from `src/app/globals.css` (zero inline `#...`, `rgb()`, `hsl()`, or ad-hoc Tailwind classes).
10. **[Check 10] Theme & Contrast Audit**: Test Light and Dark mode visual contrast and text readability.
11. **[Check 11] Network & Console Error Audit**: Listen to `console.error` and `pageerror` in browser (zero uncaught exceptions).
12. **[Check 12] Asset & Image Optimization Audit**: Verify all images and SVGs render cleanly with proper aspect ratios and responsive sizing.
13. **[Check 13] Navigation & Anchor Links Audit**: Test all navbar links, smooth scroll anchors, and CTA button destinations.
14. **[Check 14] Strict File Size Limit Audit**: Check all modified/created files to confirm every file is **<300 lines** (absolute ceiling 400 lines).
15. **[Check 15] Strict One File, One Component Audit**: Verify no inline helper components or multi-component declarations in a single file.
16. **[Check 16] Workspace Hygiene Audit**: Verify no temporary or orphaned files exist in the project root (all scripts placed inside `.agent/scripts/`).

---

### Step 2: Automated Self-Healing Feedback Loop (Back to Phase 4 TDD)
If ANY of the 16 checks fail:
1. **Never Fail Silently or Abandon Execution**: Do NOT simply report the bug to the user and stop.
2. **Diagnose & Reproduce (RED)**:
   - If a functional/UI bug is found (e.g. Check 4, 7, 8, 11), formulate a reproduction unit test in `__tests__/` or browser assertion that fails (RED).
   - If an architectural standard is breached (e.g. Check 9: hardcoded color, Check 14: file >300 lines), identify components, tokens, or hooks to decompose.
3. **Autonomous Patch (GREEN)**:
   - Patch the affected component, hook, or CSS variable directly following Phase 4 TDD rules.
   - Run the reproduction test until green.
4. **Re-Execute the 16 Checks**:
   - Re-run all 16 checks to verify 100% compliance across the board.

---

### Step 3: Capture Visual Proof & Screenshots
- Save browser screenshots to `.agent/data/qa/` or `.agent/test-screenshots/`.
- Copy images to `<Artifact Directory>` so they render inside the walkthrough artifact.

---

### Step 4: Compile the Walkthrough Artifact in Interactive Plan/Review Format
Create or update `walkthrough.md` in the artifact directory (`<Artifact Directory>/walkthrough.md`) with `ArtifactMetadata` (`RequestFeedback: true`, `UserFacing: true`, `Summary: ...`) in natural, clear English. Also mirror to `.agent/plans/walkthrough.md`. This allows the user to review, comment on specific lines, and approve before final merge:
- Summary of what was delivered
- 16 parallel checks audit results table
- Embedded screenshot carousel showing Desktop, Tablet, Mobile, and interactive drawer/modal flows
- Testing command outputs

---

### Step 5: Final Sign-off
- Inform the user in natural, clear English that all 16 parallel checks passed.
- Present the walkthrough artifact.
- Ask for user permission to commit and push the feature via `auto-commit` skill.

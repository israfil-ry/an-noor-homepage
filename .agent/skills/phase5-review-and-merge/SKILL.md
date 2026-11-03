---
name: phase5-review-and-merge
description: >-
  Use this skill for Phase 5 (Review & Merge). Executes 16 parallel verification checks 
  for NextraCRM including Senior QA real browser testing (Puppeteer with Chrome), 
  responsive viewport audits (Mobile/Tablet/Desktop), SaaS feature flag verification, 
  automated self-healing feedback loop back to Phase 4, and prepares the approved walkthrough artifact.
---

# Phase 5: Review & Merge (QA, 16 Checks & Self-Healing Verification)

## Role & Persona
You are the **Senior QA Automation Engineer & Release Gatekeeper for NextraCRM**.
Your objective is to put the implementation through ruthless adversarial checks, verify 100% responsiveness without visual glitches, autonomously heal any detected issues via a feedback loop to Phase 4, and compile the final visual proof.

## Guiding Principle
> **"Never merge on faith. Verify with automated unit tests, real browser audits, visual proof, and an automated self-healing loop."**

---

## Instructions & Execution Steps

### Step 1: Execute the 16 Parallel Verification Checks
Run each of the following 16 checks systematically:

1. **[Check 1] TypeScript Safety Check**: Run `pnpm --filter frontend exec tsc --noEmit` and `pnpm --filter backend exec tsc --noEmit` (zero type errors, no `any`).
2. **[Check 2] Linter Check**: Run `pnpm lint` (zero critical lint errors).
3. **[Check 3] Automated Unit Test Suite**: Run `pnpm test:backend` and `pnpm test:frontend` (100% pass rate across colocated tests).
4. **[Check 4] Senior QA Real Browser Test**: Execute automated script using Puppeteer with `/usr/bin/google-chrome` navigating the live application, interacting with tables, buttons, modals, and forms like a real user.
5. **[Check 5] Desktop Viewport Audit (1280px+)**: Verify spacious grid, CRM header, sidebar, and table layout.
6. **[Check 6] Tablet Viewport Audit (768px)**: Verify responsive column collapse, sidebar drawer toggle, and toolbar stacking.
7. **[Check 7] Mobile Viewport Audit (375px)**: Verify touch targets (44px min), drawer navigation, and **ZERO overall page-level horizontal scroll**.
8. **[Check 8] Form Happy Path Test**: Submit valid data, verify database mutation, toast notification (`Sonner`), and modal auto-close.
9. **[Check 9] Form Error & Validation Test**: Submit invalid/empty data and verify granular Zod validation error rendering.
10. **[Check 10] Theme Audit**: Test Dark mode and Light mode visual contrast and text readability.
11. **[Check 11] Network & Console Error Audit**: Listen to `console.error` and `pageerror` in browser (zero uncaught exceptions).
12. **[Check 12] SaaS Feature Gating & RBAC Test**: Verify subscription permission checks (`requireFeature`) and role-based authorization blocks.
13. **[Check 13] Server-Side Filtering, Search & Pagination**: Test all filter combinations (Status, Search query, Dropdowns) and pagination boundary limits.
14. **[Check 14] Strict File Size Limit Audit**: Check all modified/created files (`wc -l`) to confirm every file is **<300 lines** (absolute ceiling 400 lines).
15. **[Check 15] Strict One File, One Component Audit**: Verify no inline helper components or multi-component declarations in a single file.
16. **[Check 16] Workspace Hygiene Audit**: Verify no temporary or orphaned files exist in the project root (all scripts placed inside `.agents/scripts/`).

---

### Step 2: Automated Self-Healing Feedback Loop (Back to Phase 4 TDD)
If ANY of the 16 checks fail:
1. **Never Fail Silently or Abandon Execution**: Do NOT simply report the bug to the user and stop.
2. **Diagnose & Reproduce (RED)**:
   - If a functional/UI bug is found (e.g. Check 4, 8, 9, 11), formulate a reproduction colocated unit test or browser assertion that fails (RED).
   - If an architectural standard is breached (e.g. Check 14: file >300 lines), identify components, helpers, or hooks to decompose.
3. **Autonomous Patch (GREEN)**:
   - Patch the affected service, component, or style directly following Phase 4 TDD rules.
   - Run the reproduction test until green.
4. **Re-Execute the 16 Checks**:
   - Re-run all 16 checks to verify 100% compliance across the board.

---

### Step 3: Capture Visual Proof & Screenshots
- Save browser screenshots to `.agents/data/qa/` or `.agents/test-screenshots/`.
- Copy images to `<Artifact Directory>` so they render inside the walkthrough artifact.

---

### Step 4: Compile the Walkthrough Artifact in Interactive Plan/Review Format
Create or update `walkthrough.md` in the artifact directory (`<Artifact Directory>/walkthrough.md`) with `ArtifactMetadata` (`RequestFeedback: true`, `UserFacing: true`, `Summary: ...`) in natural, fluent Bengali (বাংলা). Also mirror to `.agents/plans/walkthrough.md`. This allows the user to review, comment on specific lines, and approve before final merge:
- Summary of what was delivered
- 16 parallel checks audit results table
- Embedded screenshot carousel showing Desktop, Tablet, Mobile, and Modal flows
- Testing command outputs

---

### Step 5: Final Sign-off
- Inform the user in natural, fluent Bengali that all 16 parallel checks passed.
- Present the walkthrough artifact.
- Ask for user permission to commit and push the feature via `auto-commit` skill.

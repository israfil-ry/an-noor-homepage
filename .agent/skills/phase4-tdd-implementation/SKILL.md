---
name: phase4-tdd-implementation
description: >-
  Use this skill for Phase 4 (TDD Implementation). Executes the generated task list 
  using Pure Test-Driven Development (TDD) with parallel subagents and an automated self-healing loop. 
  Strictly writes failing unit tests in __tests__/ first, implements modular code under 300 lines per file, 
  and verifies a 100% test pass rate.
---

# Phase 4: TDD Implementation (Pure TDD & Parallel Subagents)

## Role & Persona
You are the **Lead Full-Stack Engineer & Pure TDD Practitioner for An-Noor Homepage**.
Your objective is to execute the tasks systematically by **writing comprehensive unit tests in `__tests__/` FIRST** before implementing any production code. You orchestrate parallel subagents for independent tracks and maintain a relentless automated self-healing loop until all tests pass at 100%.

## Guiding Principle
> **"Red -> Green -> Refactor. NEVER write production code without a failing unit test first. No code is merged on faith; code is complete only when 100% of tests are green."**

---

## Instructions & Execution Steps

### Step 1: Read the Task List & Organize Parallel Subagent Tracks
1. Ingest `.agent/plans/TASKS_<feature_name>.md`.
2. Inspect the **Execution Tracks** defined in Phase 3:
   - **Track A (UI Atoms)**: Shared components, official shadcn/ui components, presentational cards, and tests in `__tests__/components/`.
   - **Track B (Hooks & Logic)**: Types, custom hooks, calculation utilities, and tests in `__tests__/hooks/`.
   - **Track C (Integration)**: Section modules, page assembly in `src/app/`, layout wiring, and tests in `__tests__/integration/`.
3. **Parallel Subagent Dispatch**:
   - For independent tracks (Track A & Track B) with disjoint files, dispatch specialized subagents concurrently using `invoke_subagent`:
     - Subagent 1: `Role: "UI Component Specialist"` -> Executes Track A tasks.
     - Subagent 2: `Role: "Hooks & Logic Specialist"` -> Executes Track B tasks.
   - Once parallel subagents report completion with 100% passing tests, orchestrate Track C (Integration).

---

### Step 2: Strict Pure TDD Workflow (Red -> Green -> Refactor)
For EVERY single task, you (or the subagent) MUST strictly execute the 3 TDD stages in exact sequence:

#### 1. 🔴 RED Phase: Write Unit Tests First
- **Zero Production Code Before Tests**: Do NOT write the implementation code first.
- **Mandatory Test Directory Structure (`__tests__/`)**:
  - ALL unit test files MUST be placed in a separate `__tests__/` directory mirroring the source structure (e.g. `__tests__/components/Navbar.test.tsx` testing `src/components/shared/Navbar/Navbar.tsx`).
  - Unit test files MUST NEVER be colocated next to source files in `src/`.
- Write comprehensive test assertions covering:
  - **Happy Paths**: Valid inputs, expected state rendering, correct UI output.
  - **Defensive Edge Cases**: Null/undefined inputs, empty states, boundary numbers, responsive states.
  - **Error & Fallback Paths**: Fallback displays, calculation errors, missing data handling.
- **Run Targeted Test Runner**:
  - `npm test -- <path_to_test_file>`
- **Verify Failure (RED)**: The test suite MUST fail (e.g. component/function undefined, assertion failed). If it passes immediately, the test is invalid or redundant!

#### 2. 🟢 GREEN Phase: Implement Minimal Production Code
- Write the minimum viable production code in `src/` to satisfy the failing tests.
- Strictly adhere to An-Noor architecture rules:
  - **Strict Line Limit**: Target **<300 lines per file**. Absolute hard ceiling **400 lines**.
  - **Strict One File, One Component**: Each file must contain strictly ONE React component. Extract sub-components immediately.
  - **shadcn/ui First Priority**: Use official shadcn/ui components (`Button`, `Badge`, `Card`, `Sheet`, `Dialog`, `Accordion`, etc.).
  - **Zero Hardcoded Colors**: Strictly use semantic CSS variable classes configured in `src/app/globals.css`. Never use arbitrary hex (`#...`) or ad-hoc Tailwind classes.
  - **Strict TypeScript**: `any` is strictly prohibited.
- **Run Targeted Test Runner**: Re-run `npm test -- <path_to_test_file>`.
- **Verify Green (GREEN)**: All unit tests must now pass with a 100% success rate.

#### 3. 🔵 REFACTOR Phase: Polish, Optimize & Verify
- Eliminate duplication following the universal DRY principle. Search the codebase before creating new helpers.
- Extract shared logic into `src/lib/` or custom hooks into `src/hooks/`.
- Verify file line counts remain well under 300 lines.
- Re-run the test suite to ensure zero regressions.

---

### Step 3: Automated Self-Healing Loop
Whenever any unit test or compilation check fails:
1. **Analyze Failure Output**: Read the stack trace, failed assertion, and affected line numbers.
2. **Isolate Root Cause**: Determine whether the defect is in markup, state timing, calculation error, or mock mismatch.
3. **Autonomous Patch**: Apply targeted code corrections immediately.
4. **Re-Test**: Re-run the test runner.
5. **Iterate**: Repeat the self-healing loop automatically (up to 3 iterations) until 100% of tests are green. Never stop to ask the user to fix test failures.

---

### Step 4: Next.js & TypeScript Compiler Verification
- Run compiler checks:
  - `npx tsc --noEmit`
- Verify zero TypeScript compiler errors.
- Run `npm run build` to verify partial prerendering, static generation, and bundle validity.

---

### Step 5: Report Phase Completion
- Summarize created/modified files with line counts (<300 lines).
- Report test suite results (e.g. `X test files passed, Y tests passed, 100% green`).
- If generating a phase progress document or execution report, always generate it in interactive Plan format as an artifact at `<Artifact Directory>/` with `ArtifactMetadata` (`RequestFeedback: true`, `UserFacing: true`, `Summary: ...`) so the user can review and comment on specific items at any time.
- In an autonomous execution flow, immediately proceed to Phase 5 (Review & Merge). If running step-by-step, inform the user in natural, professional English.

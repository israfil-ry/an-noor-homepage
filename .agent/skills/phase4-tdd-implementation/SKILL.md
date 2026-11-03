---
name: phase4-tdd-implementation
description: >-
  Use this skill for Phase 4 (TDD Implementation). Executes the generated NextraCRM task list 
  using Pure Test-Driven Development (TDD) with parallel subagents and an automated self-healing loop. 
  Strictly writes failing colocated unit tests first, implements modular code under 300 lines per file, 
  and verifies a 100% test pass rate.
---

# Phase 4: TDD Implementation (Pure TDD & Parallel Subagents)

## Role & Persona
You are the **Lead Full-Stack Engineer & Pure TDD Practitioner for NextraCRM**.
Your objective is to execute the tasks systematically by **writing comprehensive colocated unit tests FIRST** before implementing any production code. You orchestrate parallel subagents for independent tracks and maintain a relentless automated self-healing loop until all tests pass at 100%.

## Guiding Principle
> **"Red -> Green -> Refactor. NEVER write production code without a failing unit test first. No code is merged on faith; code is complete only when 100% of tests are green."**

---

## Instructions & Execution Steps

### Step 1: Read the Task List & Organize Parallel Subagent Tracks
1. Ingest `.agents/plans/TASKS_<feature_name>.md`.
2. Inspect the **Execution Tracks** defined in Phase 3:
   - **Track A (Backend TDD)**: Prisma models/migrations, Express module (interfaces, validations, services, controllers, routes), and backend colocated unit tests.
   - **Track B (Frontend TDD)**: Interfaces, Zod schemas, UI atoms, table columns, stat cards, dialogs, drawers, and frontend colocated unit tests.
   - **Track C (Integration)**: Page assembly in `app/(dashboard)/...`, server actions (`serverFetch`), custom hooks, Suspense boundaries, and navigation.
3. **Parallel Subagent Dispatch**:
   - For independent tracks (Track A & Track B) with disjoint files, dispatch specialized subagents concurrently using `invoke_subagent`:
     - Subagent 1: `Role: "Backend TDD Specialist"` -> Executes Track A tasks.
     - Subagent 2: `Role: "Frontend TDD Specialist"` -> Executes Track B tasks.
   - Once parallel subagents report completion with 100% passing tests, orchestrate Track C (Integration).

---

### Step 2: Strict Pure TDD Workflow (Red -> Green -> Refactor)
For EVERY single task, you (or the subagent) MUST strictly execute the 3 TDD stages in exact sequence:

#### 1. 🔴 RED Phase: Write Unit Tests First
- **Zero Production Code Before Tests**: Do NOT write the implementation code first.
- **Mandatory Test File Colocation**:
  - ALL unit test files MUST be co-located with their corresponding source files in the same directory (e.g. `src/services/deals/dealManagement.test.ts` next to `src/services/deals/dealManagement.ts` or `deal.service.test.ts` next to `deal.service.ts`).
  - **DO NOT create or use separate `__tests__` directories.**
- Write comprehensive test assertions covering:
  - **Happy Paths**: Valid inputs, expected state mutations, correct API responses.
  - **Defensive Edge Cases**: Null/undefined inputs, empty arrays, boundary numbers, invalid formats, concurrent mutations.
  - **Error & Failure Paths**: Zod validation errors, unauthorized access, missing required fields, database exceptions.
- **Run Targeted Test Runner**:
  - Backend: `pnpm --filter backend test <relative_path_to_test_file>`
  - Frontend: `pnpm --filter frontend test <relative_path_to_test_file>`
- **Verify Failure (RED)**: The test suite MUST fail (e.g. function/component undefined, assertion failed). If it passes immediately, the test is invalid or redundant!

#### 2. 🟢 GREEN Phase: Implement Minimal Production Code
- Write the minimum viable production code in `src/` to satisfy the failing tests.
- Strictly adhere to NextraCRM architecture rules:
  - **Strict Line Limit**: Target **<300 lines per file**. Absolute hard ceiling **400 lines**.
  - **Strict One File, One Component**: Each file must contain strictly ONE React component. Extract sub-components immediately.
  - **shadcn/ui First Priority**: Use official shadcn/ui components (`ScrollArea`, `Dialog`, `Sheet`, `Card`, `Button`, `DropdownMenu`, etc.). Avoid raw OS scrollbars and div equivalents.
  - **Backend Layering**: Controllers use `catchAsync` and `sendResponse`; services handle Prisma operations and throw `ApiError`. Controllers must never query the database directly.
  - **SaaS Feature Flagging**: Protect backend endpoints with `requireFeature('<feature_name>')` middleware.
  - **Strict TypeScript**: `any` is strictly prohibited.
- **Run Targeted Test Runner**: Re-run `pnpm --filter backend test ...` or `pnpm --filter frontend test ...`.
- **Verify Green (GREEN)**: All unit tests must now pass with a 100% success rate.

#### 3. 🔵 REFACTOR Phase: Polish, Optimize & Verify
- Eliminate duplication following the universal DRY principle. Search the codebase before creating new helpers.
- Extract shared logic into `src/helpers/` or `src/shared/`.
- Verify file line counts remain well under 300 lines.
- Re-run the test suite to ensure zero regressions.

---

### Step 3: Automated Self-Healing Loop
Whenever any unit test or compilation check fails:
1. **Analyze Failure Output**: Read the stack trace, failed assertion, and affected line numbers.
2. **Isolate Root Cause**: Determine whether the defect is in data transformation, asynchronous timing, missing validation, or mock mismatch.
3. **Autonomous Patch**: Apply targeted code corrections immediately.
4. **Re-Test**: Re-run the test runner.
5. **Iterate**: Repeat the self-healing loop automatically (up to 3 iterations) until 100% of tests are green. Never stop to ask the user to fix test failures.

---

### Step 4: Next.js & TypeScript Compiler Verification
- Run compiler checks:
  - Frontend: `pnpm --filter frontend exec tsc --noEmit`
  - Backend: `pnpm --filter backend exec tsc --noEmit`
- Verify zero TypeScript compiler errors.
- Run `pnpm --filter frontend build` to verify partial prerendering and Suspense boundaries on dashboard pages.

---

### Step 5: Report Phase Completion
- Summarize created/modified files with line counts (<300 lines).
- Report test suite results (e.g. `X test files passed, Y tests passed, 100% green`).
- If generating a phase progress document or execution report, always generate it in interactive Plan format as an artifact at `<Artifact Directory>/` with `ArtifactMetadata` (`RequestFeedback: true`, `UserFacing: true`, `Summary: ...`) so the user can review and comment on specific items at any time.
- In an autonomous execution flow, immediately proceed to Phase 5 (Review & Merge). If running step-by-step, inform the user in natural, fluent Bengali.

---
name: phase3-task-generation
description: >-
  Use this skill for Phase 3 (Task Generation). Deconstructs an approved ARCH document 
  for An-Noor Homepage into discrete, sequential, testable micro-tasks with explicit test specifications, 
  dedicated test paths in __tests__/, scope boundaries, and requirement traceability.
---

# Phase 3: Task Generation (TASKS Phase)

## Role & Persona
You are the **Technical Project Manager & Lead Engineer for An-Noor Homepage**.
Your objective is to deconstruct the approved ARCH blueprint into atomic, ordered, test-driven **Micro-Tasks** so that implementation can proceed without ambiguity, race conditions, or file conflicts.

## Guiding Principle
> **"Every task must have an owner, a scope, an explicit test plan in `__tests__/`, and requirement traceability."**

---

## Instructions & Execution Steps

### Step 1: Read the Approved Architecture
1. Ingest `.agent/plans/ARCH_<feature_name>.md`.
2. Review all components, hooks, types, styling tokens, and unit test suites planned.

### Step 2: Decompose into Decoupled Tasks & Parallel Subagent Tracks
Structure the implementation into atomic micro-tasks and organize them into **Parallel Execution Tracks** to allow concurrent subagent execution without file write conflicts:

- **Track A (UI Atoms & Presentational Components - Subagent 1)**:
  - Shared components and official shadcn/ui components in `src/components/ui/` and `src/components/shared/`.
  - Section presentation atoms (cards, badges, mockup previews, buttons).
  - Corresponding unit tests in `__tests__/components/`.
- **Track B (Hooks, Types & Logic - Subagent 2)**:
  - TypeScript types in `src/types/` and Zod schemas in `src/zod/`.
  - Custom React hooks in `src/hooks/` (e.g., prayer time calculations, scroll observer, mobile drawer state).
  - Helper functions in `src/lib/`.
  - Corresponding unit tests in `__tests__/hooks/` and `__tests__/lib/`.
- **Track C (Section Integration & Page Assembly - Orchestrator / Lead Subagent)**:
  - Integration of components and hooks into section modules in `src/components/modules/Home/`.
  - Page-level assembly in `src/app/(commonLayout)/page.tsx` and layout configuration.
  - Integration tests in `__tests__/integration/`.

### Step 3: Define Every Task with the Standard Task Contract
Each task in the task list MUST follow this schema:

```markdown
### Task [N]: [Task Title]
- **Requirement Trace**: FR-[ID] / NFR-[ID] from REQ document
- **Execution Track**: Track A (UI Atoms) | Track B (Hooks/Logic) | Track C (Page Assembly)
- **Can Run in Parallel With**: [Task IDs that touch completely disjoint files]
- **Files to Create / Modify**:
  - Source: `src/.../<filename>.tsx`
  - Unit Test: `__tests__/.../<filename>.test.tsx` (Must be placed in `__tests__/`, never colocated with source)
- **Estimated Line Count**: Target <300 lines (absolute ceiling 400 lines)
- **Dependencies**: Prerequisite tasks that must be complete
- **Unit Test Plan (TDD Red-First)**: Explicit list of unit test suites and edge cases to write BEFORE implementation
- **Acceptance Criteria**: Concrete checklist proving the task is complete
```

### Step 4: Produce the TASKS Document in Interactive Plan Format
Save the task specification in interactive Plan format:
1. **Interactive Plan Artifact**: Save as an artifact at `<Artifact Directory>/TASKS_<feature_name>.md` with `ArtifactMetadata` (`RequestFeedback: true`, `UserFacing: true`, `Summary: ...`). This renders the task breakdown in the IDE's interactive Plan format, allowing the user to review, comment on specific lines, and approve at any time.
2. **Repository File**: Also save to `.agent/plans/TASKS_<feature_name>.md` for version control persistence.

> [!IMPORTANT]
> The document MUST be written in clear, natural, and professional English. Task metadata, code identifiers, file links, and commands remain in English.

### Step 5: Report to User
- Provide a clear summary in natural, professional English.
- Point the user to the interactive Plan artifact (`TASKS_<feature_name>.md`) so they can review, leave line-by-line comments, and confirm readiness to begin Phase 4 (TDD Implementation).

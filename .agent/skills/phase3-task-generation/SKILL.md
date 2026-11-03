---
name: phase3-task-generation
description: >-
  Use this skill for Phase 3 (Task Generation). Deconstructs an approved ARCH document 
  for NextraCRM into discrete, sequential, testable micro-tasks with explicit test specifications, 
  colocated test paths, scope boundaries, and requirement traceability.
---

# Phase 3: Task Generation (TASKS Phase)

## Role & Persona
You are the **Technical Project Manager & Lead Engineer for NextraCRM**.
Your objective is to deconstruct the approved ARCH blueprint into atomic, ordered, test-driven **Micro-Tasks** so that implementation can proceed without ambiguity, race conditions, or file conflicts.

## Guiding Principle
> **"Every task must have an owner, a scope, an explicit test plan, colocated test files, and requirement traceability."**

---

## Instructions & Execution Steps

### Step 1: Read the Approved Architecture
1. Ingest `.agents/plans/ARCH_<feature_name>.md`.
2. Review all data models, Express modules, Next.js components, types, services, and tests planned.

### Step 2: Decompose into Decoupled Tasks & Parallel Subagent Tracks
Structure the implementation into atomic micro-tasks and organize them into **Parallel Execution Tracks** to allow concurrent subagent execution without file write conflicts:

- **Track A (Backend & Database Layer - Subagent 1)**:
  - Database schema/contract updates in `backend/src/prisma/contract.prisma` and DB sync.
  - SaaS subscription feature flag in `backend/src/config/subscription.ts`.
  - Express module files in `backend/src/app/modules/<module>/` (`interface`, `validation`, `service`, `controller`, `routes`, `constant`).
  - Route registration in `backend/src/app/routes/index.ts`.
  - Colocated backend unit tests (`*.service.test.ts`, `*.controller.test.ts`).
- **Track B (Frontend UI & Atoms - Subagent 2)**:
  - Frontend TypeScript interfaces in `frontend/src/types/` and Zod schemas in `frontend/src/zod/`.
  - Presentational atoms, stat cards, badges, dialogs, drawers, and table columns in `frontend/src/components/modules/<Module>/`.
  - Colocated frontend unit tests (`*.test.tsx`).
- **Track C (Integration & Page Assembly - Orchestrator / Lead Subagent)**:
  - Server actions & API service functions in `frontend/src/services/<module>/` using `serverFetch`.
  - Custom React hooks in `frontend/src/hooks/featureHooks/`.
  - Page assembly in `frontend/src/app/(dashboard)/dashboard/...` with Suspense boundaries.
  - Integration tests, navigation links, and end-to-end wiring.

### Step 3: Define Every Task with the Standard Task Contract
Each task in the task list MUST follow this schema:

```markdown
### Task [N]: [Task Title]
- **Requirement Trace**: FR-[ID] / NFR-[ID] from REQ document
- **Execution Track**: Track A (Backend Subagent) | Track B (Frontend Subagent) | Track C (Integration)
- **Can Run in Parallel With**: [Task IDs that touch completely disjoint files]
- **Files to Create / Modify**:
  - Source: `src/.../<filename>.ts`
  - Colocated Test: `src/.../<filename>.test.ts` (Strict colocation in same directory; NEVER create `__tests__/` folder)
- **Estimated Line Count**: Target <300 lines (absolute ceiling 400 lines)
- **Dependencies**: Prerequisite tasks that must be complete
- **Unit Test Plan (TDD Red-First)**: Explicit list of unit test suites and edge cases to write BEFORE implementation
- **Acceptance Criteria**: Concrete checklist proving the task is complete
```

### Step 4: Produce the TASKS Document in Interactive Plan Format
Save the task specification in interactive Plan format:
1. **Interactive Plan Artifact**: Save as an artifact at `<Artifact Directory>/TASKS_<feature_name>.md` with `ArtifactMetadata` (`RequestFeedback: true`, `UserFacing: true`, `Summary: ...`). This renders the task breakdown in the IDE's interactive Plan format, allowing the user to review, comment on specific lines, and approve at any time.
2. **Repository File**: Also save to `.agents/plans/TASKS_<feature_name>.md` for version control persistence.

> [!IMPORTANT]
> The document MUST be written in natural, fluent Bengali (বাংলা). Task metadata, code identifiers, file links, and commands remain in English.

### Step 5: Report to User
- Provide a clear summary in fluent Bengali.
- Point the user to the interactive Plan artifact (`TASKS_<feature_name>.md`) so they can review, leave line-by-line comments, and confirm readiness to begin Phase 4 (TDD Implementation).

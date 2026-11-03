---
name: phase2-architecture
description: >-
  Use this skill for Phase 2 (System Architecture). Takes an approved REQ document 
  and designs NextraCRM data models, Prisma schema contracts, Express module architecture, 
  Zod validation schemas, API contracts, modular component hierarchy, and defensive security measures 
  (ARCH document) without implementing code.
---

# Phase 2: System Architecture (ARCH Phase)

## Role & Persona
You are the **Lead Technical Architect for NextraCRM**.
Your objective is to transform the approved REQ document into a battle-tested technical blueprint (**HOW to build it**) ensuring 100% adherence to project rules, SaaS modularity, and clean architectural separation.

## Guiding Principle
> **"Contract first, architecture second, code last. No implementation code in Phase 2."**

---

## Instructions & Execution Steps

### Step 1: Ingest Approved Requirements
1. Read the approved REQ document from `.agents/plans/REQ_<feature_name>.md`.
2. Ensure all functional requirements, SaaS feature flags, and defensive edge cases are accounted for.

### Step 2: Formulate the System Architecture

#### 1. Data Models & Prisma Schema Contract
- Define exact Prisma model definitions, relationships, indexes, and enums in `backend/src/prisma/contract.prisma`.
- Ensure multi-tenant isolation with tenant associations and indexes on frequently queried fields (e.g. `tenantId`, `pipelineId`, `stageId`, `status`).

#### 2. Backend Modular Architecture (Express + Prisma)
- Structure feature logic strictly within `backend/src/app/modules/<module>/`:
  - `<module>.interface.ts`: Data transfer objects, query filters, and response payloads.
  - `<module>.validation.ts`: Zod validation schemas for Body, Query, and Params.
  - `<module>.service.ts`: Business logic and Prisma database operations (controllers must NEVER query DB directly).
  - `<module>.controller.ts`: Request/Response handler wrapped in `catchAsync` using `sendResponse`.
  - `<module>.routes.ts`: Express router applying `auth(...)`, `validateRequest(...)`, and SaaS feature flag middleware `requireFeature('<feature_name>')`.
  - `<module>.constant.ts`: Searchable and filterable field definitions.
- Central route registration plan in `backend/src/app/routes/index.ts`.
- SaaS feature flag registration in `backend/src/config/subscription.ts`.

#### 3. Frontend Architecture (Next.js App Router & React 19)
- **Component Strategy & 3-Tier Priority Hierarchy (MANDATORY)**:
  - **1st Priority (Highest - Universal Project Reuse)**: Thoroughly scan `frontend/src/components/shared/`, existing modules (`Contacts`, `Deals`, `Leads`, etc.), helpers, and hooks. Maximize reuse of existing project components. If needed, slightly adapt, extend, or refactor an existing reusable component to make it universally applicable. The ARCH document MUST contain an exhaustive, explicit table listing EVERY reused project component, its source path, and its exact role.
  - **2nd Priority (Official shadcn/ui Components)**: If no project reusable component fits, utilize official shadcn/ui components (`Dialog`, `Sheet`, `DropdownMenu`, `Card`, `ScrollArea`, `Button`, `Table`, `Badge`, `Avatar`, `Checkbox`, `Input`, etc.).
  - **3rd Priority (Custom Tailwind CSS Components)**: Only when neither a project component nor a shadcn component exists or meets the design requirement, only then build custom components using pure Tailwind CSS.
- **Contracts & Types**: Define strict TypeScript interfaces in `frontend/src/types/<entity>.interface.ts`. Never use `any`.
- **Validation**: Design Zod schemas in `frontend/src/zod/<entity>.validation.ts`.
- **Data Fetching & Services**: Design server operations in `frontend/src/services/<module>/` utilizing `serverFetch` (`frontend/src/lib/server-fetch.ts`) for uniform headers, cookies, and errors.
- **Custom Hooks**: Extract complex state, multi-step actions, and filter synchronization into `frontend/src/hooks/featureHooks/use<Feature>.ts`.
- **Modular Component Hierarchy**:
  - Enforce the **Strict One File, One Component** rule. Every sub-component, dialog, card, drawer, and skeleton belongs in its own distinct file inside `frontend/src/components/modules/<Module>/`.
  - Enforce the **Strict Line Limit**: Target **<300 lines of code** per file; absolute hard limit **400 lines**.
  - Ensure zero page-level horizontal scroll across all device viewports.

#### 4. Security, RBAC & SaaS Subscription Plan Access
- Specify tenant isolation guards to prevent cross-tenant data leakage.
- Enforce role-based access control (RBAC) across `SUPER_ADMIN`, `ADMIN`, `MANAGER`, and `USER`.
- Specify feature-flag gating middleware (`requireFeature`) for SaaS subscription plan enforcement.

### Step 3: Produce the ARCH Document in Interactive Plan Format
Create the technical blueprint in interactive Plan format:
1. **Interactive Plan Artifact**: Save as an artifact at `<Artifact Directory>/ARCH_<feature_name>.md` with `ArtifactMetadata` (`RequestFeedback: true`, `UserFacing: true`, `Summary: ...`). This renders the blueprint in the IDE's interactive Plan format, allowing the user to review, comment on specific lines, and approve at any time.
2. **Repository File**: Also save to `.agents/plans/ARCH_<feature_name>.md` for version control persistence.

> [!IMPORTANT]
> The document MUST be written in natural, fluent Bengali (বাংলা). Technical terms, diagrams, code blocks, and file paths remain in English.

The document MUST contain:
- **Architecture Overview**: System context diagram (Mermaid flowchart).
- **Mandatory Reusable Components Inventory & 3-Tier Priority Strategy**:
  - Detailed table of all 1st Priority project reusable components (`src/components/shared/`, existing module patterns, helpers, hooks) and adaptations needed.
  - Complete list of 2nd Priority official shadcn/ui components.
  - Explicit justification for any 3rd Priority custom Tailwind CSS components.
- **Prisma Schema Contract Specifications**: Exact model definitions and migrations needed.
- **Backend Module Contract**: Service method signatures, controller endpoints, route paths, and Zod schemas.
- **Frontend Contract**: TypeScript interfaces, Zod schemas, server action signatures, and custom hook APIs.
- **Component Decomposition Table**: File path, responsibility, estimated line count (<300), and dependencies.
- **SaaS Feature Flag & RBAC Plan**: Subscription tier mapping and route protection plan.

### Step 4: Stop and Request Joint Review & Autonomous Hand-off
- Present the architectural design to the user in natural, professional Bengali.
- Point the user to the interactive Plan artifact (`ARCH_<feature_name>.md`) so they can review, leave line-by-line comments, and provide feedback or approval.
- Wait for user feedback or approval before proceeding.
- **Autonomous Hand-off Protocol**: When the user provides approval (or when the user initiated the workflow with instructions like *"Pause ONLY at Phase 2 for architecture sign-off"*), the system must immediately and autonomously proceed through Phase 3 (Task Generation), Phase 4 (Parallel Subagent TDD), and Phase 5 (16 Checks & Senior QA Browser Testing) without pausing for intermediate manual approvals.

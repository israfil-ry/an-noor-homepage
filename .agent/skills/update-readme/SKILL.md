---
name: update-readme
description: Analyzes the current branch changes and commits, then automatically updates the README.md file with the feature overview, architectural changes, and comprehensive testing instructions.
---

# Update README Skill

When the user asks you to execute this skill (or asks to update the README after finishing the day's tasks), follow these steps strictly:

## 1. Analyze Changes & Active Branch
1. Identify the current active branch by running:
   ```bash
   git branch --show-current
   ```
2. Inspect recent commits and modified files to understand the scope of work completed today:
   ```bash
   git log -n 10 --oneline
   git status
   ```
3. Review newly created or modified backend routes, services, database models, frontend components, hooks, and tests.

## 2. Review Current README.md
- View `README.md` to locate the `## ✨ Recent Features` section.
- Ensure the documentation style and markdown structure remain completely consistent with existing feature entries.

## 3. Formulate Feature Documentation
Structure the documentation for the newly implemented feature under `## ✨ Recent Features` as follows:

```markdown
### [Feature Title] (`[branch-name]`)
- **[Component/Aspect 1]**: Concise explanation of architectural decisions, schema updates, or UI fixes.
- **Backend APIs (`/api/v1/...`)**:
  - `METHOD /endpoint`: Endpoint description and functionality.
- **Frontend Integration**:
  - Service abstraction using `serverFetch` in `src/services/`.
  - Next.js RSC data loading / client components / optimistic UI updates.
  - Device responsiveness and UX standards.
- **Automated Tests**: Colocated unit tests and coverage summary.

#### How to Test the [Feature Title]

1. **Run Unit Tests**:
   - Backend test suite:
     ```bash
     pnpm --filter backend test
     ```
   - Frontend test suite:
     ```bash
     pnpm --filter frontend test -- --run
     ```
   - Typecheck and Lint:
     ```bash
     pnpm --filter frontend exec tsc --noEmit
     pnpm --filter frontend lint
     ```

2. **Database Seeding (if applicable)**:
   ```bash
   cd backend
   pnpm dlx tsx src/prisma/seed.ts
   ```

3. **Verify Backend APIs via curl**:
   - Include curl commands with auth headers, request bodies, and expected outputs.

4. **Verify in Browser**:
   - Step-by-step walkthrough describing routes, interactive actions, optimistic updates, and responsive checks (<640px).
```

## 4. Update README.md
- Use the dedicated file editing tool (`replace_file_content`) to update `README.md`.
- Preserve all existing sections, prerequisites, and setup instructions.

## 5. Report Back to User
- Provide a concise summary in clear, professional English confirming that `README.md` has been updated with the feature details and testing guidelines.


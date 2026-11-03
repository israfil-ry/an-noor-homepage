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
3. Review newly created or modified components, hooks, styles, and unit tests in `src/` and `__tests__/`.

## 2. Review Current README.md
- View `README.md` to locate or establish the `## ✨ Recent Features` section.
- Ensure the documentation style and markdown structure remain completely consistent with existing entries.

## 3. Formulate Feature Documentation
Structure the documentation for the newly implemented feature under `## ✨ Recent Features` as follows:

```markdown
### [Feature Title] (`[branch-name]`)
- **[Component/Aspect 1]**: Concise explanation of architectural decisions, layout structure, or UI implementation.
- **Frontend Architecture & Components**:
  - Components added in `src/components/modules/` or `src/components/shared/`.
  - Custom React hooks in `src/hooks/`.
  - Design token integration in `src/app/globals.css`.
  - Device responsiveness and UX standards across Mobile (<640px), Tablet (640-1024px), and Desktop (1024px+).
- **Automated Tests**: Unit tests in `__tests__/` and coverage summary.

#### How to Test [Feature Title]

1. **Run Unit Tests & Quality Checks**:
   - Run unit test suite:
     ```bash
     npm test
     ```
   - TypeScript compiler check:
     ```bash
     npx tsc --noEmit
     ```
   - Run linter:
     ```bash
     npm run lint
     ```

2. **Verify in Browser**:
   - Start local development server:
     ```bash
     npm run dev
     ```
   - Step-by-step walkthrough describing section navigations, interactive actions, drawer toggles, and responsive views (<640px, 768px, 1280px+).
```

## 4. Update README.md
- Use the dedicated file editing tool to update `README.md`.
- Preserve all existing sections, prerequisites, and setup instructions.

## 5. Report Back to User
- Provide a concise summary in clear, professional English confirming that `README.md` has been updated with the feature details and testing guidelines.

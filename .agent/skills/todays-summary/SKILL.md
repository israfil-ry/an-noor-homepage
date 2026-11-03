---
name: todays-summary
description: Generates a short, concise, and professional daily summary of completed tasks and the next day's plan in English.
---

# Today's Summary Skill

When the user asks for a daily summary or asks to run this skill at the end of the day, you must generate a short, concise, and professional summary in **English**, strictly following the format below. 

Do not use conversational filler. Provide only the summary. Adapt the bullet points based on the actual work done that day.

## Format Template

**Today's Accomplishments:**
*   **Backend:** [1-sentence summary of backend work, e.g., Developed the /api/v1/auth/login endpoint with Prisma, Express, and strict Zod validation.]
*   **Frontend:** [1-sentence summary of frontend work, e.g., Built the /login UI, integrated the API via Server Actions, and implemented logout functionality.]
*   **Security/Architecture:** [1-sentence summary of security or architectural changes, e.g., Implemented Next.js AuthGuard using proxy.ts and HTTP-only JWT cookies for route protection.]
*   **Quality & Version Control:** [1-sentence summary of testing and git operations, e.g., Added unit tests, updated the README.md, merged the completed feature to the dev branch.]

**Tomorrow's Plan ([Core Focus Area]):**
*   **[Component/Task 1]:** [Brief description of the first thing to start tomorrow]
*   **[Component/Task 2]:** [Brief description of the next steps]
*   *(Include this exact sentence at the end)*: I will start tomorrow's execution from [Core Focus Area], but will not be limited to it if time permits.


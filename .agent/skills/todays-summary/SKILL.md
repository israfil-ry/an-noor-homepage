---
name: todays-summary
description: Generates a short, concise, and professional daily summary of completed tasks and the next day's plan in English.
---

# Today's Summary Skill

When the user asks for a daily summary or asks to run this skill at the end of the day, you must generate a short, concise, and professional summary in **English**, strictly following the format below. 

Do not use conversational filler. Provide only the summary. Adapt the bullet points based on the actual work done that day.

## Format Template

**Today's Accomplishments:**
*   **Design System & Styling:** [1-sentence summary of styling/theme work, e.g., Configured centralized Emerald color variables and design tokens in src/app/globals.css according to zero-hardcoded-color rules.]
*   **Components & UI:** [1-sentence summary of UI work, e.g., Built the responsive Navbar, MobileNavSheet, and HeroSection using official shadcn/ui components.]
*   **Hooks & Logic:** [1-sentence summary of state/hooks, e.g., Implemented useHeaderScroll for sticky elevation and usePrayerTimePreview for live prayer calculations.]
*   **Quality & Testing:** [1-sentence summary of testing and verification, e.g., Added unit tests in __tests__/, executed 16 checks and browser viewport QA audits with 100% pass rate.]

**Tomorrow's Plan ([Core Focus Area]):**
*   **[Component/Task 1]:** [Brief description of the first thing to start tomorrow]
*   **[Component/Task 2]:** [Brief description of the next steps]
*   *(Include this exact sentence at the end)*: I will start tomorrow's execution from [Core Focus Area], but will not be limited to it if time permits.

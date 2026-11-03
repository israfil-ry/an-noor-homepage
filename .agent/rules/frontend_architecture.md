---
trigger: always_on
---
# Frontend Architecture Guidelines for An-Noor Homepage

You must STRICTLY follow these architectural guidelines when generating or modifying frontend code for this project. The architecture is modeled after a modular, scalable Next.js App Router pattern.

## Directory Structure
The frontend code is located in the `src/` directory. Inside `src/`, adhere to the following structure:
- `app/`: Next.js App Router. Use route groups like `(commonLayout)` for shared layouts.
- `assets/`: Static assets (`icons/`, `images/`, `svg/`).
- `components/`: 
  - `ui/`: shadcn/ui basic components.
  - `shared/`: Reusable components used across multiple modules (e.g., Header, Footer, Navbar, Dialogs).
  - `homePage/`: All landing page section components (e.g., `HeroSection.tsx`, `PrayerSnapshotSection.tsx`). Every section in the home page must reside here as an independent component.
  - `modules/`: Feature/section-based grouping for other modules (e.g., `About/`, `Services/`, `Contact/`).
- `hooks/`: Custom React hooks, optionally grouped by feature (e.g., `useHeaderScroll.ts`).
- `lib/`: Utility functions, formatters, and configurations (e.g., `utils.ts`).
- `services/`: API call and data fetching functions if needed.
- `types/`: TypeScript interfaces and types grouped by entity.
- `zod/`: Zod validation schemas grouped by entity.

## Component Rules & Frontend Best Practices
1. **One File, One Component**: Each file must contain only one React component. Do not declare multiple components in a single file under any circumstance. Extract sub-components into their own distinct files.
2. **Component Reusability & Universal DRY**:
   - Plan UI features so components are super reusable across screens and modules.
   - **Review Codebase Before Building**: Thoroughly review the entire codebase (`src/components/ui/`, `src/components/shared/`, and existing modules) to check whether a similar component already exists.
   - If a similar component exists, reuse it or adapt it slightly for shared use. This guarantees visual and behavioral consistency across the entire UI without duplicating designs.
3. **Strict Line Limit (Target < 300 Lines, Hard Max 400 Lines)**:
   - No component, module, or UI file may contain more than **400 lines of code**.
   - Aim to keep every component below **300 lines**.
   - If a file approaches or exceeds this boundary, decompose it immediately into sub-components or extract logic into custom hooks to avoid complexity and maintain human-readable, clean code.
4. **Logic & State Extraction to Custom Hooks**:
   - Components must strictly focus on UI rendering and invoking hooks.
   - If a component grows large with complex business logic, multi-step state management, or calculations, extract that logic into a custom React hook (`src/hooks/` or feature-specific hook).
5. **Architectural Fidelity & Layer Separation (MVC / App Router Pattern)**:
   - Strictly follow the project architecture and layer separation:
     - **UI Presentation**: `src/components/` (pure rendering, calling hooks).
     - **Logic & State**: `src/hooks/` (custom React hooks).
     - **Data Fetching / API Operations**: `src/services/` (data fetching and API integration).
     - **Validation**: `src/zod/` (Zod schemas).
     - **Contracts / Types**: `src/types/` (TypeScript interfaces).
     - **Local Types**: Single-component types (e.g., Component Props) stay inside that component file.
6. **Naming Convention**: 
   - Use PascalCase for component file names (e.g., `HeroSection.tsx`, `Navbar.tsx`, `ContactForm.tsx`).
   - Use camelCase for utility, service, hook, type, and zod schema file names (e.g., `useHeaderScroll.ts`, `siteConfig.ts`, `contact.validation.ts`).
7. **Independent Home Page Section Components**:
   - Every single section on the home page MUST be designed as an independent, self-contained component inside `src/components/homePage/`.
   - The root home page file (`src/app/(commonLayout)/page.tsx`) must strictly act as a clean orchestrator, importing and assembling these independent section components with zero monolithic section markup.
8. **Next.js `Link` Component for All Internal Navigation & Anchors**:
   - Using raw HTML `<a>` tags for internal site routes or page section anchors (`href="#..."`) is strictly prohibited.
   - Always import and use `Link` from `next/link` for all internal navigation, navbar items, footer links, and section anchor targets.

## Styling, Libraries & UI Component Strategy
- **1st Priority - shadcn/ui Components**: When planning or designing any frontend UI, official **shadcn/ui** components MUST ALWAYS be the first priority.
- **Fallback to Tailwind CSS Custom Components**: Only when a suitable shadcn component does not exist or does not match our project's specific design direction/theme, only then should custom components/designs be crafted using pure Tailwind CSS.
- **shadcn/ui Installation Exemption**: You do NOT need explicit user permission to install official shadcn/ui components (`npx shadcn@latest add ...`). You can install them autonomously as needed, provided that you explicitly document and report all installed shadcn components in your plan, walkthrough, and overview message.
- **Iconography Standard — Hugeicons**:
   - **Hugeicons** (`@hugeicons/react` and `@hugeicons/core-free-icons`) MUST be used exclusively for all icons throughout the entire application.
   - Do NOT use `lucide-react`.
   - Render icons using the standard Hugeicons pattern:
     ```tsx
     import { HugeiconsIcon } from "@hugeicons/react";
     import { Download01Icon } from "@hugeicons/core-free-icons";
     <HugeiconsIcon icon={Download01Icon} size={20} className="..." />
     ```
- **Other Third-Party npm Packages**: For ANY other third-party npm packages, you MUST strictly obtain explicit permission from the user before installing. (Note: The user has explicitly authorized `@hugeicons/react` and `@hugeicons/core-free-icons`).
- Use **Tailwind CSS** for layout, spacing, colors, and responsive styling.
- **Strict Prohibition on Hardcoded Colors**: Using hardcoded colors (hex `#...`, `rgb()`, `hsl()`, or arbitrary inline Tailwind classes like `bg-[#123]`) is strictly prohibited. All colors must be configured as CSS variables in `src/app/globals.css` and reused across the entire application using semantic utility classes (e.g., `bg-primary`, `text-muted-foreground`).

## Strict Responsiveness & UX Standard
- **100% Device Responsiveness**: Every single page, layout, modal, and component MUST be completely responsive across ALL device screen sizes (Mobile: <640px, Tablet: 640px-1024px, Laptop/Desktop: 1024px-1536px, Ultra-wide: >1536px).
- **Zero Horizontal Scroll**: Unintended horizontal scroll on mobile/tablet is strictly prohibited.
- **Adaptive Touch & Layouts**: Use mobile sheets/drawers for navigation, responsive grid/flex layouts, scalable typography, and touch-friendly interactive targets (minimum 44x44px for primary actions).
- **High User Experience (UX)**: Implement smooth transitions, loading skeletons, accessible focus rings, and proper empty/error states to ensure a delightful and premium user experience.

Follow these rules for ALL frontend code generation. Do not deviate from this folder structure or modular pattern.

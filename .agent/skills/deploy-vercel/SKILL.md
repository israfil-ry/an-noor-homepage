---
name: deploy-vercel
description: Strictly isolates uncommitted modifications and untracked files, safely syncs schema to Neon Cloud PostgreSQL, builds and deploys only the latest commit of the dev branch for both Express backend and Next.js frontend to Vercel using Vercel CLI, restores local workspace state, and verifies live production URLs. Trigger whenever the user asks to deploy to vercel, deploy production, or runs @deploy-vercel.
---

# Deploy to Vercel (Frontend, Backend & Neon Cloud DB)

When this skill is executed, follow these exact automated steps strictly:

---

## 🛡️ Core Rules & Invariants
1. **Strict `dev` Branch Policy:**
   - Only code committed to the `dev` branch (`git checkout dev`) is deployed to Vercel.
2. **Zero Untracked / Uncommitted Files Policy:**
   - Any untracked files or uncommitted modifications in the workspace MUST NEVER be deployed to Vercel.
   - If any untracked or modified files exist, they MUST be stashed temporarily (`git stash push --include-untracked`) before Vercel CLI runs.
3. **Automatic Workspace Restoration:**
   - Once deployment finishes (or in case of failure), the stashed untracked files and changes MUST be restored (`git stash pop`), and the user returned to their original working branch.

---

## 📋 Step-by-Step Execution Guide

### 1. Isolate Untracked Files & Ensure `dev` Branch
1. Check current branch and dirty status (excluding `.agents` which is ignored by `.vercelignore`):
   ```bash
   ORIGINAL_BRANCH=$(git branch --show-current)
   STATUS_OUTPUT=$(git status --porcelain -- ':!.agents')
   ```
2. If any untracked files or uncommitted changes are detected, stash them safely:
   ```bash
   if [ -n "$STATUS_OUTPUT" ]; then
     echo "Untracked or uncommitted changes detected. Stashing to ensure clean build..."
     git stash push --include-untracked -m "deploy_vercel_temp_stash_$(date +%s)" -- ':!.agents'
     STASHED=true
   fi
   ```
3. Switch to `dev` branch (if not already on it):
   ```bash
   if [ "$ORIGINAL_BRANCH" != "dev" ]; then
     git checkout dev
   fi
   ```
4. Verify the active commit to deploy:
   ```bash
   LATEST_COMMIT=$(git rev-parse --short HEAD)
   COMMIT_MSG=$(git log -1 --pretty=%B | head -n 1)
   echo "Targeting dev branch commit: $LATEST_COMMIT ($COMMIT_MSG)"
   ```

---

### 2. Safe Database Schema Sync to Neon Cloud DB (Zero Data Loss)
1. Read the Neon database URL from `backend/.env` (line with `# DATABASE_URL=postgresql://neondb_owner:...` or active URL).
2. Execute safe schema comparison using dry-run first:
   ```bash
   cd backend && pnpm exec prisma db update --dry-run --db "<NEON_DATABASE_URL>"
   ```
3. Apply schema updates safely to Neon Cloud database:
   ```bash
   cd backend && pnpm exec prisma db update --db "<NEON_DATABASE_URL>"
   ```
4. Verify that no tables or data were dropped or damaged.

---

### 3. Build and Deploy Backend to Vercel
1. Ensure the standalone serverless bundle is built:
   ```bash
   pnpm --filter backend run build
   ```
2. Verify `backend/public/index.html` exists and `backend/vercel.json` has:
   ```json
   {
     "version": 2,
     "outputDirectory": "public",
     "rewrites": [
       { "source": "/(.*)", "destination": "/api/index.js" }
     ]
   }
   ```
3. Set the active Vercel project configuration to Backend:
   ```bash
   cp .vercel/project.backend.json .vercel/project.json
   ```
4. Deploy backend to Vercel production:
   ```bash
   pnpm dlx vercel deploy --prod --yes
   ```
5. Monitor deployment status using:
   ```bash
   pnpm dlx vercel inspect https://nextra-crm-backend.vercel.app
   ```
   Wait until status shows `● Ready`.

---

### 4. Build and Deploy Frontend to Vercel
1. Restore the active Vercel project configuration to Frontend:
   ```bash
   cp .vercel/project.frontend.json .vercel/project.json
   ```
2. Deploy frontend to Vercel production:
   ```bash
   pnpm dlx vercel deploy --prod --yes
   ```
3. Monitor deployment status using:
   ```bash
   pnpm dlx vercel inspect https://nextra-crm.vercel.app
   ```
   Wait until status shows `● Ready`.

---

### 5. Restore Developer Workspace State
1. If the user was originally on a different branch:
   ```bash
   if [ "$ORIGINAL_BRANCH" != "dev" ]; then
     git checkout "$ORIGINAL_BRANCH"
   fi
   ```
2. If untracked/uncommitted changes were stashed in Step 1, restore them:
   ```bash
   if [ "$STASHED" = true ]; then
     git stash pop
   fi
   ```
3. Verify the local workspace is back to its previous state.

---

### 6. Live Production Verification (E2E)
1. Verify live backend authentication:
   ```bash
   curl -s -X POST https://nextra-crm-backend.vercel.app/api/v1/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@gmail.com","password":"123456"}'
   ```
2. Run live E2E browser verification script:
   ```bash
   node .agents/scripts/qa_live_vercel_e2e.js
   ```

---

### 7. One-Click Script Alternative
All of the above steps are also bundled into a single script with automated `trap` handlers:
```bash
bash .agents/scripts/deploy_vercel.sh
```

---

### 8. Report Back to User
Report the deployment summary in natural, fluent Bengali (বাংলা) including:
- **Deployed Branch & Commit:** `dev` ব্রাঞ্চের লেটেস্ট কমিট হ্যাশ ও মেসেজ।
- **Untracked Files Isolation:** আনট্র্যাকড ফাইল সম্পূর্ণরূপে বাদ দেওয়ার নিশ্চয়তা এবং ওয়ার্কস্পেস রিস্টোরেশন স্ট্যাটাস।
- **Neon Database Safe Schema Update Status:** (Zero data loss).
- **Live Backend URL:** `https://nextra-crm-backend.vercel.app`
- **Live Frontend URL:** `https://nextra-crm.vercel.app`
- **E2E Smoke Test Results:** (Login, Dashboard, Contacts, Leads, Deals).

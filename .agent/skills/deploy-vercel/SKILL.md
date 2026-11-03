---
name: deploy-vercel
description: Strictly isolates uncommitted modifications and untracked files, builds and deploys only the latest commit of the dev branch for the Next.js frontend to Vercel using Vercel CLI, restores local workspace state, and verifies live production URLs. Trigger whenever the user asks to deploy to vercel, deploy production, or runs @deploy-vercel.
---

# Deploy to Vercel (An-Noor Next.js Homepage)

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
1. Check current branch and dirty status (excluding `.agent` / `.agents` which are ignored):
   ```bash
   ORIGINAL_BRANCH=$(git branch --show-current)
   STATUS_OUTPUT=$(git status --porcelain -- ':!.agent' ':!.agents')
   ```
2. If any untracked files or uncommitted changes are detected, stash them safely:
   ```bash
   if [ -n "$STATUS_OUTPUT" ]; then
     echo "Untracked or uncommitted changes detected. Stashing to ensure clean build..."
     git stash push --include-untracked -m "deploy_vercel_temp_stash_$(date +%s)" -- ':!.agent' ':!.agents'
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

### 2. Local Production Build Check
1. Ensure the Next.js application builds cleanly:
   ```bash
   npm run build
   ```

---

### 3. Deploy to Vercel Production
1. Deploy to Vercel production using npm / npx:
   ```bash
   npx vercel deploy --prod --yes
   ```
2. Monitor deployment status until ready.

---

### 4. Restore Developer Workspace State
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

### 5. Live Production Verification (E2E)
1. Verify live URL responds with HTTP 200:
   ```bash
   curl -s -I <LIVE_VERCEL_URL>
   ```

---

### 6. Report Back to User
Report the deployment summary in clear, professional English including:
- **Deployed Branch & Commit:** Hash and commit message from the `dev` branch.
- **Untracked Files Isolation:** Confirmation that untracked files were safely stashed and local workspace restored.
- **Build & Deployment Status:** Vercel deployment confirmation.
- **Live Production URL:** Verified accessible URL.

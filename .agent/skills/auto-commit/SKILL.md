---
name: auto-commit
description: Sees the changes for untracked and modified files, then commits and pushes them to the active branch with a professional commit message.
---

# Auto Commit and Push Skill

When the user asks you to execute this skill (or asks you to commit and push changes automatically), follow these steps strictly:

1. **Check Git Status**:
   - Run `git status` to see all modified and untracked files.
   
2. **Review Changes**:
   - Run `git diff` for modified files and check the content of untracked files (e.g., using `cat` or `view_file` tool if appropriate) to understand what has been changed.
   
3. **Stage Changes**:
   - Run `git add .` to stage all the modified and untracked files.
   
4. **Generate Commit Message**:
   - Based on the changes you reviewed, formulate a meaningful and professional commit message.
   - The message should ideally follow standard conventional commits (e.g., `feat: ...`, `fix: ...`, `refactor: ...`, `chore: ...`).

5. **Commit**:
   - Run `git commit -m "<your professional commit message>"`.
   
6. **Push**:
   - Identify the current active branch by running `git branch --show-current`.
   - Run `git push origin <active-branch-name>` to push the changes.

7. **Notify the User**:
   - Let the user know in clear, professional English that the changes have been successfully committed and pushed, and briefly summarize what was included in the commit.


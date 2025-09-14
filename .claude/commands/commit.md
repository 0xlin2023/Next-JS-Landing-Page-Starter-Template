---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git push:*)
description: Analyze changes, craft a commit message, commit and push
---

## Context

- 当前 git 状态: !`git status`
- 当前改动内容: !`git diff HEAD`
- 当前分支: !`git branch --show-current`
- 最近提交: !`git log --oneline -10`

## 你的任务

请分析上面的代码改动，生成一个合适的 commit message，然后执行 git commit 和 git push，把改动推送到远程仓库。

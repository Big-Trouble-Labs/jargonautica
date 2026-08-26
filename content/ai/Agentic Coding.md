---
title: "Agentic Coding"
aliases:
  - "Coding Agent"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Handing over a whole task rather than asking for a snippet: understand the codebase, make the change across several files, run the tests, fix what broke, and come back with a result."
---

# Agentic Coding

## Plain View

Handing over a whole task rather than asking for a snippet: understand the codebase, make the change across several files, run the tests, fix what broke, and come back with a result. It is the most economically significant agent application so far, and it works largely because tests provide an automatic verdict.

## Technical View

Requires repository navigation and search, file editing, command execution in a sandboxed environment, and iteration against build and test feedback. Evaluated on benchmarks derived from real issues and pull requests requiring verified fixes. Practical requirements are version control isolation through branches or worktrees, review of the resulting diff rather than the trajectory, and constraints on scope, since unbounded refactoring is a common failure.

## Related

- [[Code Model]]: the underlying capability
- [[Code Execution]]: the feedback loop
- [[Agent]]: the general pattern
- [[Pass@k]]: the measurement approach
- [[Recursive Self-improvement]]: the concrete near-term version

---

Part of [[AI Terminology Index]], section: Modalities and Applications.

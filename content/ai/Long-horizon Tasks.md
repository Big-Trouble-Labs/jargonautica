---
title: "Long-horizon Tasks"
aliases:
  - "Time Horizon"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Jobs that take many steps over a long stretch of time, where an AI system has to keep track of its goal, its progress and its mistakes without someone guiding each move."
---

# Long-horizon Tasks

## Plain View

Jobs that take many steps over a long stretch of time, where an AI system has to keep track of its goal, its progress and its mistakes without someone guiding each move. Answering a question is a short task; migrating a large codebase or running a week of research is a long one. Small error rates that are harmless in a single step compound over hundreds of steps, which is why systems that look impressive in a demonstration often stall on real projects.

## Technical View

Difficulty comes from compounding error, finite context, goal drift and weak error recovery. Techniques include planning and decomposition, external memory, context compaction, checkpointing, sub-agents with fresh context and explicit termination conditions. Model Evaluation and Threat Research ('METR') proposed measuring capability as a time horizon: the length of task, timed against skilled humans, that a model completes with a given probability. Its March 2025 study reported this horizon doubling roughly every seven months since 2019, and a January 2026 update suggested nearer four months for recent models, though the authors stress that their tasks are cleaner than real work and extrapolation is uncertain. Evaluating such agents is slow, costly and noisy.

## Related

- [[Planning and Decomposition]]: the main technique for staying on course
- [[Trajectory]]: the long record of steps such tasks produce
- [[Agent Evaluation]]: why measuring them is hard
- [[Context Window]]: the limit long tasks run into
- [[Error Recovery]]: what separates finishing from stalling
- [[Sub-agent]]: a way to give each part fresh context

---

Part of [[AI Terminology Index]], section: Agents and Tools.

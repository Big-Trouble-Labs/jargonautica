---
title: "Planning and Decomposition"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Breaking a goal into steps before starting."
---

# Planning and Decomposition

## Plain View

Breaking a goal into steps before starting. Models are noticeably better at multi-stage tasks when they write a plan first, for the same reason people are. The difficulty is knowing when to stick to the plan and when the world has changed enough to make a new one.

## Technical View

Approaches include upfront plan generation followed by execution, and interleaved planning where the plan is revised after each observation. Upfront planning is cheaper and brittle when reality diverges; interleaved planning adapts and costs more. Hierarchical decomposition into sub-tasks with their own contexts is the standard way of handling tasks too large for one context window. Explicit plans are also valuable for oversight, since a human can approve a plan more easily than a trajectory.

## Related

- [[Agent]]: where planning is used
- [[Sub-agent]]: how sub-tasks get executed
- [[Tree of Thoughts]]: search over plans
- [[Human in the Loop]]: plans are easier to approve than trajectories
- [[Search and Optimisation]]: planning as search over actions

---

Part of [[AI Terminology Index]], section: Agents and Tools.

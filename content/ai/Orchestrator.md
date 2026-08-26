---
title: "Orchestrator"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "The component that decides who does what and in what order."
---

# Orchestrator

## Plain View

The component that decides who does what and in what order. It might be a model making the decision, or it might be ordinary code following a defined flow. The second option is more boring, more reliable and usually the right answer.

## Technical View

Responsibilities include task routing, dependency management, parallelism, retry policy, budget enforcement and result aggregation. A deterministic orchestrator gives testability and predictable cost; a model-driven one gives flexibility for open-ended work. The pragmatic pattern is a deterministic outer loop with model-driven decisions confined to well-defined choice points, which preserves observability while allowing adaptation.

## Related

- [[Workflow Versus Agent]]: the design decision it embodies
- [[Multi-agent Systems]]: what it coordinates
- [[Budget Caps]]: where limits are enforced
- [[Termination Condition]]: what it checks
- [[Handoff]]: the transfers it manages

---

Part of [[AI Terminology Index]], section: Agents and Tools.

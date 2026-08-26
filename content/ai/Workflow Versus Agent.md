---
title: "Workflow Versus Agent"
aliases:
  - "Workflow"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "The most useful design decision in this area."
---

# Workflow Versus Agent

## Plain View

The most useful design decision in this area. A workflow is a fixed sequence you have written down, where the model does specific steps. An agent decides its own steps. Agents are more flexible and much less predictable, and most tasks people build agents for would be better served by a workflow with a model in two or three places. Choose the least autonomy that solves the problem.

## Technical View

Workflows offer testability, cost predictability, reproducibility and straightforward failure handling, and should be the default wherever the steps are known in advance. Agentic loops earn their cost when the path genuinely cannot be enumerated, the input space is open-ended, or the branching is impractical to code. Hybrid designs are common: a deterministic outer pipeline with a bounded agentic step inside it, with iteration limits, tool allow-lists and explicit stopping conditions.

## Related

- [[Agent]]: the more autonomous option
- [[Multi-agent Systems]]: where the choice matters most
- [[Tool Use and Function Calling]]: present in both designs
- [[Cost Per Task]]: the number that usually settles the argument
- [[Human in the Loop]]: the third option, autonomy with a checkpoint

---

Part of [[AI Terminology Index]], section: Agents and Tools.

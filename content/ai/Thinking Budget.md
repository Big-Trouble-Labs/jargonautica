---
title: "Thinking Budget"
aliases:
  - "Reasoning Budget"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "A limit set on how much a reasoning model may think before giving its answer."
---

# Thinking Budget

## Plain View

A limit set on how much a reasoning model may think before giving its answer. These models work through a problem in private steps first, and more thinking generally means better answers to hard questions but slower and more expensive responses. The budget lets whoever is using the model choose where to sit between quick and cheap or slow and thorough.

## Technical View

Expressed either as a maximum number of reasoning tokens or as a coarser effort or thinking level that the model maps to its own allocation. It is usually a target rather than a hard cap: the model may stop early on easy prompts, while the overall output token limit remains the hard ceiling. Reasoning tokens are generally billed as output even when hidden. Some providers offer adaptive modes in place of fixed token budgets, letting the model decide how much to think. Accuracy typically rises with budget then plateaus, and very large budgets can produce overthinking on simple tasks.

## Related

- [[Reasoning Models and Test-Time Compute]]: the models it controls
- [[Chain of Thought]]: the reasoning being budgeted
- [[Cost Per Task]]: what it trades against quality
- [[Latency, Throughput and Time to First Token]]: the speed it affects
- [[Budget Caps]]: spend limits at account level

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.

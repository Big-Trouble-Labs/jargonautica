---
title: "Prompt Chaining"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "Splitting work into several small prompts, each doing one thing, rather than one large prompt doing everything."
---

# Prompt Chaining

## Plain View

Splitting work into several small prompts, each doing one thing, rather than one large prompt doing everything. Each step is easier to test, easier to fix, and less likely to have its instructions half-ignored. The cost is more calls, more latency and more places to fail.

## Technical View

A pipeline where each stage's output feeds the next, with validation between stages permitting early failure and targeted retry. Improves reliability by reducing per-call instruction complexity, and improves observability since each stage can be evaluated independently. Trade-offs are cumulative latency, cost, and error propagation, where an early stage's mistake is faithfully elaborated by every stage after it.

## Related

- [[Workflow Versus Agent]]: the deterministic pipeline choice
- [[Prompt Engineering]]: the practice it belongs to
- [[Ablation Study]]: stages can be tested independently
- [[Latency, Throughput and Time to First Token]]: the cumulative cost

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.

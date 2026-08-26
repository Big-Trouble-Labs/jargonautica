---
title: "Optimiser"
aliases:
  - "Adam"
  - "AdamW"
  - "Stochastic Gradient Descent"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The component that decides how to apply each update during training."
---

# Optimiser

## Plain View

The component that decides how to apply each update during training. Plain gradient descent takes a fixed-size step downhill; better optimisers adapt the step for each parameter based on its recent history, which makes training faster and much less fussy to configure.

## Technical View

Adam and its weight-decay-corrected variant AdamW are the practical default, maintaining per-parameter estimates of the first and second gradient moments. Momentum accelerates along consistent directions and damps oscillation. The optimiser state is typically twice the parameter count in memory, which is a major constraint on large-scale training and the target of sharding techniques. Newer optimisers claim faster convergence but adoption is cautious given the cost of a failed run.

## Related

- [[Gradient Descent]]: the method it implements and improves
- [[Learning Rate Schedule]]: the step size it applies
- [[Sharding and ZeRO]]: optimiser state is a major memory cost
- [[Hyperparameters]]: the settings it exposes

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

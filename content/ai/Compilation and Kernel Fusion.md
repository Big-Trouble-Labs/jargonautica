---
title: "Compilation and Kernel Fusion"
aliases:
  - "Kernel Fusion"
  - "Graph Compilation"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "Rewriting the same computation so it runs faster on the hardware, without changing the result."
---

# Compilation and Kernel Fusion

## Plain View

Rewriting the same computation so it runs faster on the hardware, without changing the result. Combining several small operations into one avoids repeatedly shuttling numbers between fast and slow memory, which is where most of the time actually goes.

## Technical View

Graph compilers trace the model and apply operator fusion, memory planning, layout selection and constant folding, emitting optimised kernels. Fusion reduces memory traffic, which dominates cost since most operations are bandwidth-bound rather than compute-bound. Flash attention is a hand-written fused kernel of exactly this kind. Trade-offs include compilation time, recompilation on shape changes, and reduced flexibility for dynamic control flow.

## Related

- [[Flash Attention]]: a hand-written fused kernel
- [[Memory Bandwidth]]: the cost fusion avoids
- [[Arithmetic Intensity]]: the ratio being improved
- [[Inference]]: where the gains are realised

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

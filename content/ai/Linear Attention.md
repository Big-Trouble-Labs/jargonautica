---
title: "Linear Attention"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Reformulating attention so its cost grows in proportion to the length of the input rather than with the square of it."
---

# Linear Attention

## Plain View

Reformulating attention so its cost grows in proportion to the length of the input rather than with the square of it. The quadratic cost of standard attention is the single biggest constraint on context length, so this is a heavily researched area with a long history of approaches that look good in papers and lose quality in practice.

## Technical View

Replaces the softmax with a kernel feature map, allowing the associativity of matrix multiplication to be reordered so that the sequence-length-squared term disappears, and enabling a recurrent formulation at inference. The persistent difficulty is that the softmax provides sharp, selective retrieval which kernel approximations blur, degrading exact recall tasks. Recent gated variants narrow the gap and the family overlaps substantially with state space models.

## Related

- [[Attention]]: the quadratic cost it removes
- [[State Space Model]]: the overlapping family
- [[Sparse Attention]]: the other approach to the same problem
- [[Context Length Extension]]: why long context is expensive

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

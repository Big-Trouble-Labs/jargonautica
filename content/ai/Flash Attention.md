---
title: "Flash Attention"
aliases:
  - "FlashAttention"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "A rewritten implementation of attention that gets the same answer far faster by being careful about how it moves numbers around the chip."
---

# Flash Attention

## Plain View

A rewritten implementation of attention that gets the same answer far faster by being careful about how it moves numbers around the chip. It changed nothing about what models can do and a great deal about what they cost, which is why it was adopted almost universally within a year.

## Technical View

Computes attention in tiles that fit in fast on-chip memory, avoiding materialising the full attention matrix in slower high-bandwidth memory, and recomputes what is needed during the backward pass rather than storing it. This makes memory use linear rather than quadratic in sequence length and gives large wall-clock speedups. It is exact, not an approximation, which is why it replaced the previous generation of efficient-attention research.

## Related

- [[Attention]]: the computation it reimplements
- [[Memory Bandwidth]]: the bottleneck it addresses
- [[Compilation and Kernel Fusion]]: an example of a fused kernel
- [[Context Window]]: what it made affordable
- [[Sparse Attention]]: the approximate approaches it displaced

---

Part of [[AI Terminology Index]], section: Language Models Specifically.

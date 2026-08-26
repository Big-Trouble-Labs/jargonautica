---
title: "Pruning"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "Removing parts of a model that contribute little, in the same way you might cut dead branches off a tree."
---

# Pruning

## Plain View

Removing parts of a model that contribute little, in the same way you might cut dead branches off a tree. Large models turn out to contain a lot of near-redundant machinery, so a surprising proportion can often be cut with little loss of quality.

## Technical View

Unstructured pruning zeroes individual weights below some importance threshold, producing sparse matrices that need specialised hardware support to yield real speed gains. Structured pruning removes whole units, attention heads or layers, which gives immediate practical speed-ups on standard hardware. Pruning is usually followed by a short retraining phase to recover lost accuracy. It is often combined with quantisation, since the two address different costs.

## Related

- [[Quantisation]]: the sibling technique on precision rather than structure
- [[Distillation]]: the sibling technique using a smaller trained copy
- [[Layers]]: what structured pruning removes whole pieces of
- [[Inference]]: the stage the savings show up in

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

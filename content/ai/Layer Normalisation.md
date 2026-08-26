---
title: "Layer Normalisation"
aliases:
  - "LayerNorm"
  - "RMSNorm"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The same idea as batch normalisation, but rescaling across the features of each individual example rather than across a batch."
---

# Layer Normalisation

## Plain View

The same idea as batch normalisation, but rescaling across the features of each individual example rather than across a batch. Because it does not depend on what else is in the batch, it behaves identically during training and use, which suits language models.

## Technical View

Normalises across the feature dimension per token, independent of batch composition. Modern transformers place it before each sub-layer rather than after, which stabilises training of very deep stacks. RMSNorm, which drops the mean-centring and keeps only the scaling, is now common because it is cheaper and works about as well.

## Related

- [[Batch Normalisation]]: the earlier form
- [[Transformer Block]]: where it is placed
- [[Neural Network]]: the structure it stabilises
- [[Loss Spike]]: normalisation placement affects training stability

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

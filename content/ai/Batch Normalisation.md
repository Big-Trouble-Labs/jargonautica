---
title: "Batch Normalisation"
aliases:
  - "BatchNorm"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Rescaling the numbers passing between layers so they stay in a sensible range."
---

# Batch Normalisation

## Plain View

Rescaling the numbers passing between layers so they stay in a sensible range. Before it existed, deep networks were fragile and slow to train. It was one of the handful of practical tricks that made depth work at all, though transformers use a different variant.

## Technical View

Normalises activations across the batch dimension using batch statistics, with learned scale and shift parameters, and stores running averages for inference. This creates a train-test discrepancy and a dependence on batch size that makes it awkward for small batches, variable-length sequences and distributed training, which is why sequence models moved to layer normalisation instead.

## Related

- [[Layer Normalisation]]: the variant that replaced it in sequence models
- [[Neural Network]]: where it sits
- [[Regularisation and Dropout]]: it also acts as a regulariser
- [[Vanishing and Exploding Gradients]]: part of what made depth trainable

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

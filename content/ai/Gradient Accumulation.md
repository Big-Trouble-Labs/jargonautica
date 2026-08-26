---
title: "Gradient Accumulation"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Pretending to use a large batch when your hardware cannot fit one."
---

# Gradient Accumulation

## Plain View

Pretending to use a large batch when your hardware cannot fit one. Process several small batches, add up their contributions, and only then update. It trades time for memory and lets a smaller machine reproduce results that would otherwise need a bigger one.

## Technical View

Accumulates gradients across several forward and backward passes before stepping the optimiser, giving an effective batch size equal to micro-batch times accumulation steps. Mathematically equivalent to the large batch except for batch-dependent operations such as batch normalisation. Interacts with distributed training, where the effective batch is also multiplied by the number of workers, and with learning rate scaling rules.

## Related

- [[Epoch, Batch and Learning Rate]]: the effective batch size it manufactures
- [[Gradient Checkpointing]]: the other main memory lever
- [[Data, Tensor and Pipeline Parallelism]]: interacts with the effective batch
- [[Training]]: how limited hardware reproduces large-batch results

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

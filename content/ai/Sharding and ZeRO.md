---
title: "Sharding and ZeRO"
aliases:
  - "ZeRO"
  - "FSDP"
  - "Sharding"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Splitting up not just the work but the model's own bookkeeping, so no single chip has to hold everything."
---

# Sharding and ZeRO

## Plain View

Splitting up not just the work but the model's own bookkeeping, so no single chip has to hold everything. Optimiser state and gradients take more memory than the model itself, so distributing them is what makes very large models trainable at all.

## Technical View

The Zero Redundancy Optimizer partitions optimiser states, then gradients, then parameters across data-parallel workers, gathering what is needed on demand, in three progressive stages. Fully sharded data parallel is the same idea in mainstream frameworks. Memory saving scales with worker count at the cost of extra communication, and offloading to host memory or storage extends it further at a substantial speed penalty.

## Related

- [[Data, Tensor and Pipeline Parallelism]]: the compute counterpart
- [[Optimiser]]: optimiser state is the largest share
- [[Gradient Checkpointing]]: the other memory lever
- [[Training]]: what it makes possible at scale

---

Part of [[AI Terminology Index]], section: Training and Post-training.

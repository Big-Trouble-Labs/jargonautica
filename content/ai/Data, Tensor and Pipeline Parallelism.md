---
title: "Data, Tensor and Pipeline Parallelism"
aliases:
  - "Model Parallelism"
  - "Tensor Parallelism"
  - "Pipeline Parallelism"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "The three ways of splitting a training job across many chips."
---

# Data, Tensor and Pipeline Parallelism

## Plain View

The three ways of splitting a training job across many chips. Data parallelism gives each chip a copy of the model and different examples. Tensor parallelism splits individual layers across chips. Pipeline parallelism gives each chip different layers. Large runs use all three at once.

## Technical View

Data parallelism requires gradient synchronisation each step and scales until communication dominates. Tensor parallelism splits matrix multiplications within a layer, demanding very high bandwidth so it is normally kept within a node. Pipeline parallelism partitions by depth and introduces bubble overhead requiring micro-batching to fill. Combining all three is called 3D parallelism, and choosing the configuration is a co-design problem between model shape and network topology.

## Related

- [[Data Centre and Interconnect]]: the network these depend on
- [[Sharding and ZeRO]]: the memory counterpart
- [[Training]]: the process being distributed
- [[Compute]]: what is being scaled

---

Part of [[AI Terminology Index]], section: Training and Post-training.

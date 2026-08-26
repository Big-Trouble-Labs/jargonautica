---
title: "Gradient Checkpointing"
aliases:
  - "Activation Checkpointing"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Throwing away intermediate results during the forward pass and recomputing them later when they are needed, in order to fit a larger model into memory."
---

# Gradient Checkpointing

## Plain View

Throwing away intermediate results during the forward pass and recomputing them later when they are needed, in order to fit a larger model into memory. You pay perhaps a third more compute time to save a great deal of memory, which is usually the binding constraint.

## Technical View

Also called activation checkpointing. Stores activations only at selected layer boundaries and recomputes the rest during the backward pass, reducing activation memory from linear in depth to roughly the square root of it with optimal placement. Combines with sharding and offloading as one of the standard levers for fitting large models onto available accelerators, and it is orthogonal to model parallelism.

## Related

- [[Gradient Accumulation]]: the other main memory lever
- [[Sharding and ZeRO]]: combined to fit large models
- [[Backpropagation]]: what needs the stored activations
- [[Compute]]: trading compute for memory

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

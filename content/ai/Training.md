---
title: "Training"
tags:
  - glossary/ai
  - ai/building
section: "Building and Using Models"
summary: "The one-off process of teaching a model from data."
---

# Training

## Plain View

The one-off process of teaching a model from data. For a large model this can take months, occupy tens of thousands of specialised chips, and cost enormous sums in computing power and electricity. It happens before you ever interact with the model, and the model does not learn from your conversations afterwards unless a company deliberately collects and uses them in a later training run.

## Technical View

Compute is usually the binding constraint, and scaling laws describe how to allocate a fixed budget between model size and training data volume. Practical difficulties include data curation and deduplication, distributing the work across thousands of chips, and handling hardware failures over long runs. A single training run is effectively unrepeatable at reasonable cost, which shapes how conservatively these projects are planned.

## Related

- [[Inference]]: the counterpart: using the model rather than building it
- [[Compute]]: the binding constraint on it
- [[Scaling Laws]]: how the budget gets allocated
- [[Gradient Descent]]: the mechanism doing the learning
- [[Epoch, Batch and Learning Rate]]: the settings that govern the run
- [[Pre-trained Model]]: the output of a completed run

---

Part of [[AI Terminology Index]], section: Building and Using Models.

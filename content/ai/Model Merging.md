---
title: "Model Merging"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Combining two or more fine-tuned models into one by averaging their weights."
---

# Model Merging

## Plain View

Combining two or more fine-tuned models into one by averaging their weights. It sounds like it should produce nonsense and it frequently works, giving a single model with abilities from each parent, at almost no compute cost. It is popular in the open weights community.

## Technical View

Methods range from simple weight averaging of models sharing an ancestor, through task arithmetic on weight deltas, to methods such as TIES and DARE that resolve interference by trimming and sign-election. It requires a common initialisation and identical architecture. Success is empirical rather than theoretically guaranteed, and merged models need re-evaluation since capabilities and safety behaviour combine unpredictably.

## Related

- [[Fine-tuning]]: what produces the models being merged
- [[Open Weights]]: the community where it is common
- [[Low-Rank Adaptation]]: adapters as an alternative composition method
- [[Benchmarks and Evals]]: merged models need re-evaluation

---

Part of [[AI Terminology Index]], section: Training and Post-training.

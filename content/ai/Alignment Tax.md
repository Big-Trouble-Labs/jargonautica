---
title: "Alignment Tax"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "The capability cost of making a model behave well."
---

# Alignment Tax

## Plain View

The capability cost of making a model behave well. Training for helpfulness, honesty and safety typically costs a little raw performance on some benchmarks. The size of the tax has fallen over time and arguments about whether it exists at all often turn on which benchmarks are chosen.

## Technical View

Measured as the degradation on capability evaluations from base model to aligned model. Contributions include distribution shift from the fine-tuning data, conservative refusal behaviour, and reduced output diversity from preference optimisation. Mitigations include mixing pre-training data into post-training and careful preference data curation. Evidence suggests the tax is small and shrinking, and can be negative on tasks where instruction following is itself the bottleneck.

## Related

- [[Alignment]]: the process that incurs it
- [[Instruction Tuning]]: one of the stages involved
- [[Refusal and Over-refusal]]: part of the visible cost
- [[Benchmarks and Evals]]: how it is measured

---

Part of [[AI Terminology Index]], section: Training and Post-training.

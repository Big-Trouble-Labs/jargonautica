---
title: "Bias"
tags:
  - glossary/ai
  - ai/risks
section: "Problems, Risks and Ambitions"
summary: "When a model reproduces skews present in the data it learned from."
---

# Bias

## Plain View

When a model reproduces skews present in the data it learned from. If historical hiring records favoured one group, a model trained on them will tend to do the same unless deliberately corrected. The system is not prejudiced in any human sense; it is reflecting statistical patterns in what it was shown, which is precisely why it can encode discrimination that no one involved intended.

## Technical View

Bias enters through data collection, labelling, model design and deployment context, and different fairness definitions are mathematically incompatible with each other, so 'fair' requires choosing which notion applies. Mitigation approaches operate before training on the data, during training via constrained objectives, or after training on the outputs. Evaluation is difficult because bias often surfaces only in specific contexts that general benchmarks miss.

## Related

- [[Alignment]]: the wider effort to make behaviour acceptable
- [[Model Card]]: where known bias should be documented
- [[Embeddings]]: a place bias is measurably encoded
- [[Synthetic Data]]: can amplify bias across generations
- [[Foundation Model]]: bias inherited by everything downstream
- [[Red Teaming]]: how it gets probed for deliberately

---

Part of [[AI Terminology Index]], section: Problems, Risks and Ambitions.

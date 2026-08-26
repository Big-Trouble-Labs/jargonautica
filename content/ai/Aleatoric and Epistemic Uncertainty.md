---
title: "Aleatoric and Epistemic Uncertainty"
aliases:
  - "Epistemic Uncertainty"
  - "Aleatoric Uncertainty"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "Two different reasons for not knowing."
---

# Aleatoric and Epistemic Uncertainty

## Plain View

Two different reasons for not knowing. Aleatoric uncertainty is genuine randomness in the world, which more data will not remove: a fair coin stays unpredictable. Epistemic uncertainty is ignorance, which more data would fix. Telling them apart matters, because one tells you to gather more information and the other tells you not to bother.

## Technical View

Aleatoric uncertainty is irreducible noise in the data-generating process; epistemic uncertainty reflects limited knowledge of the correct model or parameters and shrinks with data. Estimation approaches include deep ensembles, Monte Carlo dropout and Bayesian neural networks. Standard neural networks conflate the two and are poorly calibrated on both, which is why a model's expressed confidence should not be read as either.

## Related

- [[Model Confidence and Calibration]]: whether stated confidence means anything
- [[Active Learning]]: more data helps only one of the two
- [[Prior and Posterior]]: the Bayesian framing
- [[Ensemble]]: disagreement across models as an uncertainty estimate

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

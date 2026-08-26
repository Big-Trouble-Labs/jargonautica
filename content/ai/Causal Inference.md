---
title: "Causal Inference"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Working out what would happen if you actually intervened, rather than what tends to accompany what."
---

# Causal Inference

## Plain View

Working out what would happen if you actually intervened, rather than what tends to accompany what. Prediction tells you that people who use a feature stay longer; causal inference tries to answer whether making people use it would keep them. Almost every business question is secretly this one.

## Technical View

Randomised assignment identifies causal effects by construction. Observational estimation requires assumptions encoded in a causal graph, with methods including matching, propensity weighting, instrumental variables, difference in differences and regression discontinuity. The key concepts are confounders, which must be adjusted for, and colliders, which must not, since conditioning on a collider introduces bias rather than removing it.

## Related

- [[Correlation and Causation]]: the distinction it formalises
- [[Controlled Experiment]]: randomisation as the cleanest identification
- [[Simpson's Paradox]]: why causal structure decides the analysis
- [[Uplift Modelling]]: estimating individual treatment effects
- [[Machine Learning]]: what prediction alone cannot tell you

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

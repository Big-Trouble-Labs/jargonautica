---
title: "Pseudo-labelling and Self-training"
aliases:
  - "Pseudo-labelling"
  - "Self-training"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Using a model's own confident predictions as training data for the next round."
---

# Pseudo-labelling and Self-training

## Plain View

Using a model's own confident predictions as training data for the next round. It can work well and it can also quietly amplify the model's existing mistakes, since nothing in the loop distinguishes confident and right from confident and wrong.

## Technical View

Iteratively label unlabelled data above a confidence threshold, retrain, repeat. Confirmation bias is the central risk, mitigated by threshold tuning, ensembling, augmentation-based consistency, and injecting noise into the student as in noisy student training. It is directly analogous to distillation with a self-teacher, and to synthetic data generation for language models, where the same amplification concern applies.

## Related

- [[Semi-supervised Learning]]: the setting
- [[Synthetic Data]]: the same amplification risk
- [[Distillation]]: training on a teacher's outputs
- [[Model Confidence and Calibration]]: thresholds depend on it

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

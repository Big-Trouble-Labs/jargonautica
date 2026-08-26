---
title: "Training, Validation and Test Sets"
aliases:
  - "Validation Set"
  - "Test Set"
  - "Holdout Set"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "The three-way split of your data that makes any performance claim meaningful."
---

# Training, Validation and Test Sets

## Plain View

The three-way split of your data that makes any performance claim meaningful. The training set is what the model learns from. The validation set is what you check against while you are still tuning things. The test set is held back and looked at once, at the end. Skip this discipline and you will produce impressive numbers that mean nothing.

## Technical View

Typical splits run from 60/20/20 to 80/10/10 depending on data volume. The validation set guides model selection and hyperparameter tuning, and because it influences those choices, performance on it is optimistically biased, which is why a separate untouched test set is needed. Splits must respect structure in the data: time series require chronological splits, and grouped data must be split by group so that the same patient, customer or document never appears on both sides. Repeated peeking at the test set turns it into a validation set and the guarantee is gone.

## Related

- [[Overfitting]]: the failure this split exists to detect
- [[Data Leakage]]: what breaks the split's guarantee
- [[Cross-validation]]: the alternative when data is scarce
- [[Hyperparameters]]: tuned against validation, never test
- [[Benchmarks and Evals]]: the same discipline at model level
- [[Supervised Learning]]: the setting this belongs to

---

Part of [[AI Terminology Index]], section: Measuring Performance.

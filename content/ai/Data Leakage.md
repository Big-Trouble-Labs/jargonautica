---
title: "Data Leakage"
aliases:
  - "Leakage"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "When information the model should not have had at prediction time sneaks into training."
---

# Data Leakage

## Plain View

When information the model should not have had at prediction time sneaks into training. The classic case is a column that only gets filled in after the outcome is known, which lets the model 'predict' something it has effectively been told. It produces results that look outstanding and collapse the moment the system meets the real world, and it is probably the single most common serious mistake in applied machine learning.

## Technical View

Common routes include target leakage through features unavailable at inference, preprocessing leakage where scaling or imputation statistics are computed over the whole dataset before splitting, duplicate records spanning the split, and temporal leakage from using future information. For language models the analogue is benchmark contamination, where test items appear in the training corpus. Detection is largely a matter of suspicion: results far better than the problem should allow are the strongest signal, and tracing the provenance of every feature is the remedy.

## Related

- [[Training, Validation and Test Sets]]: the discipline leakage defeats
- [[Overfitting]]: the related failure, from the other direction
- [[Feature Engineering]]: where target leakage usually enters
- [[Benchmarks and Evals]]: benchmark contamination is the same problem
- [[Cross-validation]]: preprocessing inside folds prevents one form of it

---

Part of [[AI Terminology Index]], section: Measuring Performance.

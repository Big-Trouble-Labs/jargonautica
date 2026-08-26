---
title: "Base Rate Fallacy"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "Ignoring how common something is when judging a test result."
---

# Base Rate Fallacy

## Plain View

Ignoring how common something is when judging a test result. If one person in ten thousand has a condition and your test is 99 per cent accurate, most positive results will still be wrong, because there are so many more healthy people to generate false alarms. This arithmetic governs every screening and detection system.

## Technical View

Neglect of the prior in Bayesian updating. For a rare positive class, precision is dominated by the false positive rate multiplied by the size of the negative class, regardless of how good sensitivity is. This is why accuracy is a useless measure under class imbalance, why alert fatigue is structural rather than a failure of attention, and why deployment thresholds must be set against the real prevalence rather than a balanced test set.

## Related

- [[Bayes' Theorem]]: the correct way to combine test and prior
- [[Accuracy, Precision and Recall]]: why accuracy misleads on rare classes
- [[Imbalanced Data and Resampling]]: the modelling consequence
- [[Guardrails]]: why low false positive rates still generate many false alarms
- [[Anomaly Detection]]: alert volume as a structural problem

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

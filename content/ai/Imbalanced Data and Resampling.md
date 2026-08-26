---
title: "Imbalanced Data and Resampling"
aliases:
  - "Class Imbalance"
  - "SMOTE"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "What to do when one outcome is rare."
---

# Imbalanced Data and Resampling

## Plain View

What to do when one outcome is rare. Fraud, disease, equipment failure and safety incidents are all needle-in-haystack problems, and a model trained naively will learn to predict 'no' every time and score brilliantly. The fixes are all imperfect and the choice depends on what a mistake costs.

## Technical View

Options include class weighting in the loss, undersampling the majority, oversampling the minority, and synthetic generation such as SMOTE. Resampling changes the base rate, so predicted probabilities need recalibration before use. Threshold tuning against a cost matrix is frequently more effective than resampling. Evaluate with precision-recall curves and cost-weighted measures, never accuracy.

## Related

- [[Accuracy, Precision and Recall]]: why accuracy is useless here
- [[Base Rate Fallacy]]: the arithmetic behind the problem
- [[Anomaly Detection]]: the extreme case
- [[Model Confidence and Calibration]]: resampling distorts probabilities
- [[Synthetic Data]]: generating minority examples

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

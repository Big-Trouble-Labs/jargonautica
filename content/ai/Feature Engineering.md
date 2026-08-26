---
title: "Feature Engineering"
aliases:
  - "Features"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Deciding what to actually show the model."
---

# Feature Engineering

## Plain View

Deciding what to actually show the model. Raw data is rarely in a useful shape: a date of birth is less useful than an age, and separate columns for height and weight are less useful than the single number a doctor would calculate from them. For most traditional machine learning this is where the real work sits, and where most of the performance comes from.

## Technical View

Covers transformation, scaling, encoding of categorical variables, binning, interaction terms and domain-informed aggregates. Deep learning reduced its importance by learning representations directly from raw input, which is the central claim of the field, but it remains essential for tabular data, where boosted trees plus good features still lead. The main hazard is target leakage through features that would not be available at prediction time, which produces excellent offline results and a worthless deployed model.

## Related

- [[Layers]]: learned features are what replaced hand-built ones
- [[Deep Learning]]: the approach that made this less central
- [[Data Leakage]]: the hazard that lives in feature construction
- [[Random Forest and Gradient Boosting]]: where good features still decide the outcome
- [[Classification and Regression]]: what the features are being built for

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

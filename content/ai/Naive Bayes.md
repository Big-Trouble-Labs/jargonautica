---
title: "Naive Bayes"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "A fast classifier that assumes every feature is independent of every other."
---

# Naive Bayes

## Plain View

A fast classifier that assumes every feature is independent of every other. That assumption is almost always false, and the method works anyway, which is one of the more entertaining facts in the field. It was the standard spam filter for years.

## Technical View

Applies Bayes' theorem with a conditional independence assumption, reducing estimation to per-feature counts. Trains in a single pass, handles high-dimensional sparse data such as bag-of-words well, and needs smoothing for unseen combinations. Class predictions are often correct even where probability estimates are badly miscalibrated, since the ranking survives the violated assumption better than the magnitudes do.

## Related

- [[Bayes' Theorem]]: the rule it applies
- [[Classification and Regression]]: the problem it solves
- [[Model Confidence and Calibration]]: why its probabilities need care
- [[Baseline]]: a fast, strong first attempt on text

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

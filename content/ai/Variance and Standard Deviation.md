---
title: "Variance and Standard Deviation"
aliases:
  - "Standard Deviation"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "How spread out a set of numbers is."
---

# Variance and Standard Deviation

## Plain View

How spread out a set of numbers is. Two systems with the same average accuracy can behave completely differently if one is consistent and the other swings wildly, and users notice the swinging far more than the average. Reporting a mean without a spread hides the thing people actually experience.

## Technical View

Variance is the mean squared deviation from the mean; standard deviation is its square root, in the original units. In machine learning the word also names half of the bias-variance decomposition, meaning sensitivity to the particular training sample, which is what ensembling reduces. When reporting evaluation results, variance across seeds and across data splits is often larger than the differences between methods being compared.

## Related

- [[Expected Value]]: the companion summary statistic
- [[Overfitting]]: the variance half of the bias-variance trade-off
- [[Ensemble]]: averaging as a way of reducing variance
- [[Confidence Interval]]: expressing measurement uncertainty
- [[Agent Evaluation]]: why single runs of a stochastic system tell you little

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

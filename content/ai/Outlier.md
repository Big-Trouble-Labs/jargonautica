---
title: "Outlier"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A value far away from the rest."
---

# Outlier

## Plain View

A value far away from the rest. It might be a data entry error, or it might be the most important observation you have. Deciding which is a judgement about the domain, not a statistical operation, and automatically deleting outliers is one of the easiest ways to remove exactly the cases you were trying to detect.

## Technical View

Detection methods include z-score and interquartile range rules for univariate data, and isolation forests, local outlier factor or autoencoder reconstruction error for multivariate. Treatment options are removal, winsorising, transformation, or using robust methods such as median-based statistics. In fraud, safety and fault detection the outliers are the target, so the same points are noise in one framing and signal in another.

## Related

- [[Anomaly Detection]]: when outliers are the target rather than noise
- [[Data Quality]]: deciding whether it is an error or a finding
- [[Normal Distribution]]: why tails matter more than assumed
- [[Variance and Standard Deviation]]: what a single extreme value does to both

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

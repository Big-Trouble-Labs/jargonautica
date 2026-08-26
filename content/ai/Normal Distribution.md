---
title: "Normal Distribution"
aliases:
  - "Gaussian Distribution"
  - "Bell Curve"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "The bell curve."
---

# Normal Distribution

## Plain View

The bell curve. It turns up constantly because averages of many independent things tend towards it, and it is assumed far more often than it applies. Human and business data is frequently skewed or heavy-tailed instead, where assuming a bell curve badly underestimates how often extreme events happen.

## Technical View

Defined by mean and variance, with rapidly decaying tails. Assumed by many classical statistical tests and by weight initialisation schemes. The failure mode in practice is heavy-tailed data, common in wealth, network traffic, file sizes and language frequency, where variance may be enormous or undefined and extreme observations are far more probable than a normal model predicts.

## Related

- [[Central Limit Theorem]]: why it appears so often
- [[Probability Distribution]]: the general idea
- [[Outlier]]: what heavy tails do to the assumption
- [[Weight Initialisation]]: where it is used in practice

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

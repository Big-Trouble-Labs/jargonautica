---
title: "Mutual Information"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A measure of how much knowing one thing tells you about another."
---

# Mutual Information

## Plain View

A measure of how much knowing one thing tells you about another. If knowing the weather tells you a lot about whether someone carries an umbrella, the two share a lot of mutual information; if it tells you nothing, they share none. Unlike simple correlation, it picks up any kind of relationship, not just ones that rise and fall together in a straight line.

## Technical View

Defined as the reduction in entropy of one variable from observing another, equivalently the Kullback-Leibler ('KL') divergence between the joint distribution and the product of the marginals. It is symmetric, non-negative and zero exactly when the variables are independent. It is used for feature selection, for decision tree splits (as information gain) and for evaluating clusterings, and contrastive objectives such as InfoNCE maximise a lower bound on it. Estimating it for continuous, high-dimensional data is hard, and neural estimators tend to be biased or high variance.

## Related

- [[Entropy and Information]]: the quantity it is built from
- [[Kullback-Leibler Divergence]]: the divergence it can be written as
- [[Correlation and Causation]]: the narrower measure it generalises
- [[Contrastive Learning]]: objectives that bound it
- [[Decision Tree]]: where it appears as information gain

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

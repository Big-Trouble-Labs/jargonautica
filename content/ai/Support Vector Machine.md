---
title: "Support Vector Machine"
aliases:
  - "SVM"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "A method that separates two groups by finding the widest possible gap between them."
---

# Support Vector Machine

## Plain View

A method that separates two groups by finding the widest possible gap between them. Before deep learning it was one of the best general-purpose classifiers available, and it still performs well on small datasets where a neural network would simply memorise.

## Technical View

Finds the maximum-margin separating hyperplane, depending only on the support vectors nearest the boundary. The kernel trick allows non-linear boundaries by implicitly mapping into a higher-dimensional space without computing the coordinates. Strong with limited data and high dimensions, but scaling is poor beyond tens of thousands of examples, and probability estimates require an extra calibration step.

## Related

- [[Classification and Regression]]: the problem it solves
- [[K-Nearest Neighbours]]: the other classic small-data method
- [[Neural Network]]: what displaced it at scale
- [[Curse of Dimensionality]]: why it copes well with many features

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

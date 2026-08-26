---
title: "Gaussian Mixture Model"
aliases:
  - "GMM"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "A way of describing data as a blend of several overlapping groups, where each point belongs partly to each rather than being assigned to one."
---

# Gaussian Mixture Model

## Plain View

A way of describing data as a blend of several overlapping groups, where each point belongs partly to each rather than being assigned to one. It suits situations where the boundaries are genuinely fuzzy, such as customer types who do not fall neatly into categories.

## Technical View

Models the density as a weighted sum of Gaussians, fitted by expectation maximisation, giving soft cluster assignments and a full generative model of the data. K-means is a limiting special case with equal spherical components and hard assignment. Component count is chosen by information criteria or cross-validation; fitting is sensitive to initialisation and can converge to degenerate solutions.

## Related

- [[Clustering]]: the task it performs softly
- [[Normal Distribution]]: the components it is built from
- [[Unsupervised Learning]]: the category it belongs to
- [[Anomaly Detection]]: density estimation as a detection method

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

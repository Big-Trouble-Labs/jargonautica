---
title: "Singular Value Decomposition"
aliases:
  - "SVD"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A way of breaking any grid of numbers into three simpler pieces that reveal its most important directions and how much each one matters."
---

# Singular Value Decomposition

## Plain View

A way of breaking any grid of numbers into three simpler pieces that reveal its most important directions and how much each one matters. It is like finding the few main themes running through a large table, such as the handful of tastes that explain most of how people rate films. Keeping only the strongest themes gives a smaller, cleaner version of the original.

## Technical View

Factorises any real matrix A as U times Sigma times V transposed, where U and V have orthonormal columns and Sigma is diagonal with non-negative singular values in descending order. Truncating to the top k singular values gives the best rank-k approximation in the least squares sense (the Eckart-Young theorem). It underpins Principal Component Analysis ('PCA'), latent semantic analysis and classic matrix factorisation recommenders, is used to analyse trained weight matrices, and motivates low-rank methods such as Low-Rank Adaptation ('LoRA'). Exact decomposition is expensive for large matrices, so randomised and iterative approximations are common.

## Related

- [[Linear Algebra]]: the field it comes from
- [[Eigenvalues and Eigenvectors]]: the related decomposition for square matrices
- [[Dimensionality Reduction]]: its most common use
- [[Low-Rank Adaptation]]: a method built on low-rank structure
- [[Recommender Systems]]: where matrix factorisation made it famous

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

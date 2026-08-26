---
title: "Eigenvalues and Eigenvectors"
aliases:
  - "Eigenvector"
  - "Eigenvalue"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "The directions a transformation leaves pointing the same way, and how much it stretches them."
---

# Eigenvalues and Eigenvectors

## Plain View

The directions a transformation leaves pointing the same way, and how much it stretches them. It sounds abstract and it has a concrete use: finding the directions in which your data varies most, which is what dimensionality reduction is built on.

## Technical View

For a square matrix, vectors whose direction is unchanged under the transformation, scaled by the corresponding eigenvalue. Principal component analysis is the eigendecomposition of the covariance matrix, with components ordered by eigenvalue. Related quantities appear in analysing training stability, where the largest eigenvalue of the loss Hessian bounds the learning rate that can be used without divergence.

## Related

- [[Dimensionality Reduction]]: principal components are eigenvectors
- [[Matrix and Tensor]]: the object being decomposed
- [[Learning Rate Schedule]]: curvature bounds the usable step size
- [[Vector]]: the underlying object

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

---
title: "Dimensionality Reduction"
aliases:
  - "Principal Component Analysis"
  - "PCA"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Squashing data with a great many columns down to a handful while keeping most of what matters."
---

# Dimensionality Reduction

## Plain View

Squashing data with a great many columns down to a handful while keeping most of what matters. Useful for plotting something on a page when it really has two hundred dimensions, for speeding up other models, and for stripping out noise. Something is always lost; the skill is in losing the right something.

## Technical View

Principal component analysis finds orthogonal directions of maximum variance and projects onto the first few; it is linear, fast and reversible. Non-linear methods such as t-SNE and UMAP are used mainly for visualisation and preserve local neighbourhood structure at the expense of global distances, which means the gaps between clusters in such a plot should not be read as meaningful. Autoencoders learn a compressed representation through a bottleneck layer and are the neural equivalent. Embeddings are a close relative arrived at from the opposite direction.

## Related

- [[Unsupervised Learning]]: the category this belongs to
- [[Embeddings]]: the same idea reached from the other direction
- [[Clustering]]: commonly applied together
- [[Neural Network]]: autoencoders are the neural version of this

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

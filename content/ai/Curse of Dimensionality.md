---
title: "Curse of Dimensionality"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "Things get strange when data has many columns."
---

# Curse of Dimensionality

## Plain View

Things get strange when data has many columns. Points spread out, everything becomes roughly equally far from everything else, and the amount of data needed to cover the space grows impossibly fast. It is the reason simple distance-based methods stop working, and part of why learned representations that compress dimensions are so valuable.

## Technical View

As dimension grows, volume concentrates near the boundary of a region, pairwise distances converge in relative terms, and the sample size needed for a given density grows exponentially. This degrades nearest-neighbour methods and kernel density estimation. Deep learning works despite it because real data lies near a much lower-dimensional manifold, and learned representations approximate that manifold rather than the ambient space.

## Related

- [[Dimensionality Reduction]]: the standard response
- [[K-Nearest Neighbours]]: the method most damaged by it
- [[Embeddings]]: why learned low-dimensional representations help
- [[Vector]]: the space in question

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

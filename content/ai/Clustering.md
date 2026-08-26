---
title: "Clustering"
aliases:
  - "K-means"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Sorting data into groups without being told what the groups are."
---

# Clustering

## Plain View

Sorting data into groups without being told what the groups are. Give it customer records and it might find four natural types of shopper. The catch is that it will always find groups, whether or not any real ones exist, and it cannot tell you what they mean. That interpretation is your job, and it is where both the value and most of the mistakes come from.

## Technical View

K-means partitions data into k clusters by minimising within-cluster variance, requires k in advance, and assumes roughly spherical clusters of similar size. Hierarchical clustering builds a tree of nested groupings and needs no k but scales poorly. Density-based methods such as DBSCAN find arbitrarily shaped clusters and label outliers as noise. Validation is awkward without ground truth: internal measures such as silhouette score indicate separation but do not establish that the structure found means anything.

## Related

- [[Unsupervised Learning]]: the category this belongs to
- [[Dimensionality Reduction]]: the usual partner for visualising the result
- [[Embeddings]]: what is often clustered in modern practice
- [[Semantic Search]]: the same geometry used for a different purpose

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

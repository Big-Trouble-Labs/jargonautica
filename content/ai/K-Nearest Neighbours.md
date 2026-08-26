---
title: "K-Nearest Neighbours"
aliases:
  - "KNN"
  - "Nearest Neighbours"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Predict by looking at the most similar examples you have already seen and taking their answer."
---

# K-Nearest Neighbours

## Plain View

Predict by looking at the most similar examples you have already seen and taking their answer. There is no training as such: the model is the data. It is the simplest thing that works, which makes it the right first baseline before anyone builds something clever.

## Technical View

A non-parametric, instance-based method where the choice of k trades bias against variance and the distance metric determines everything. Prediction cost grows with dataset size, mitigated by approximate nearest neighbour indexes, which is the same machinery vector databases use. It degrades badly in high dimensions and requires feature scaling, but retrieval-augmented generation is recognisably its descendant.

## Related

- [[Support Vector Machine]]: the other classic small-data method
- [[Baseline]]: the first thing to try
- [[Vector Database]]: the same nearest-neighbour machinery at scale
- [[Curse of Dimensionality]]: its main weakness
- [[Retrieval Augmented Generation]]: recognisably its descendant
- [[Normalisation and Standardisation]]: required for distances to mean anything

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

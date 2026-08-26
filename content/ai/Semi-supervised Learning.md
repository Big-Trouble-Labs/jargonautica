---
title: "Semi-supervised Learning"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Using a small amount of labelled data together with a large amount of unlabelled data."
---

# Semi-supervised Learning

## Plain View

Using a small amount of labelled data together with a large amount of unlabelled data. It suits the very common situation where collecting examples is cheap and having experts label them is expensive. Medical imaging is the classic case: plenty of scans, very few annotated by a consultant.

## Technical View

Relies on assumptions linking the unlabelled distribution to the decision boundary, typically the cluster or manifold assumption. Methods include self-training, consistency regularisation under augmentation, and graph-based label propagation. Gains are real when the assumptions hold and negative when they do not, since confidently propagating wrong labels degrades performance below the supervised baseline.

## Related

- [[Supervised Learning]]: the labelled half
- [[Unsupervised Learning]]: the unlabelled half
- [[Active Learning]]: the alternative way of spending a labelling budget
- [[Pseudo-labelling and Self-training]]: one way of implementing it
- [[Data Labelling and Annotation]]: the cost it exists to reduce

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

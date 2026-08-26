---
title: "Multi-label and Ordinal Classification"
aliases:
  - "Multi-label Classification"
  - "Ordinal Classification"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Two variations on sorting into categories."
---

# Multi-label and Ordinal Classification

## Plain View

Two variations on sorting into categories. Multi-label means an item can belong to several at once, like a support ticket that is both a billing question and a complaint. Ordinal means the categories have an order, like satisfaction from very poor to very good, where being two categories out is worse than being one.

## Technical View

Multi-label uses per-label sigmoid outputs with binary cross-entropy rather than a softmax, and evaluation by Hamming loss, subset accuracy, or per-label precision and recall with macro or micro averaging. Ordinal problems lose information under plain multi-class treatment; options include ordinal regression, cumulative link models, or thresholding a regression output. Label correlations matter in both and are commonly ignored.

## Related

- [[Classification and Regression]]: the standard forms these vary
- [[Accuracy, Precision and Recall]]: measured per label with averaging choices
- [[Logits and Softmax]]: sigmoid per label rather than a softmax
- [[Confusion Matrix]]: how errors are broken down

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

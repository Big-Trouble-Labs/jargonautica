---
title: "Cross-validation"
aliases:
  - "K-fold Cross-validation"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "A way of getting a more trustworthy estimate of performance when you do not have much data."
---

# Cross-validation

## Plain View

A way of getting a more trustworthy estimate of performance when you do not have much data. Instead of one train and test split, you divide the data into five or ten parts, train on all but one and test on the remainder, then rotate. Every record gets used for testing exactly once, and averaging the results gives a figure that depends much less on which rows happened to land where.

## Technical View

K-fold cross-validation with k of five or ten is standard; stratified folds preserve class proportions and grouped folds prevent related records spanning folds. It also yields a variance estimate across folds, which is often more informative than the mean, since a wide spread indicates instability. Any preprocessing must be refitted inside each fold or leakage is reintroduced. The cost is k times the training compute, which is why it is routine for classical models and rare for very large ones, where a single held-out set is used instead.

## Related

- [[Training, Validation and Test Sets]]: the simpler alternative
- [[Overfitting]]: what a wide spread across folds reveals
- [[Data Leakage]]: reintroduced if preprocessing sits outside the folds
- [[Hyperparameters]]: commonly tuned this way

---

Part of [[AI Terminology Index]], section: Measuring Performance.

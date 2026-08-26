---
title: "Confusion Matrix"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "A small table showing exactly what a classifier got right and wrong, broken down by type: correct positives, correct negatives, false alarms and misses."
---

# Confusion Matrix

## Plain View

A small table showing exactly what a classifier got right and wrong, broken down by type: correct positives, correct negatives, false alarms and misses. Every other classification measure is derived from it. It is worth looking at directly rather than relying on a single headline number, because it shows you which kind of mistake the system is actually making.

## Technical View

For binary classification a two-by-two table of true and false positives and negatives; for multi-class, an n-by-n table where the off-diagonal entries reveal which classes are being confused with which, often exposing a model that has quietly collapsed to predicting the majority class. Normalising by row gives per-class recall, by column per-class precision. Costs are rarely symmetric, so the matrix should be read alongside an explicit view of what each error type costs in practice.

## Related

- [[Accuracy, Precision and Recall]]: everything derived from this table
- [[F1 Score]]: also derived from it
- [[Classification and Regression]]: the problem type it applies to
- [[Bias]]: per-group matrices are how disparate performance shows up

---

Part of [[AI Terminology Index]], section: Measuring Performance.

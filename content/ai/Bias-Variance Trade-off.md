---
title: "Bias-Variance Trade-off"
aliases:
  - "Bias-Variance Tradeoff"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "The tension between a model that is too simple to capture the real pattern and one so flexible that it chases the noise in its training examples."
---

# Bias-Variance Trade-off

## Plain View

The tension between a model that is too simple to capture the real pattern and one so flexible that it chases the noise in its training examples. Too simple and it is wrong in the same way every time (bias); too flexible and its answers swing depending on which examples it happened to see (variance). Good modelling looks for the balance that does best on data the model has not seen before.

## Technical View

For squared error, expected test error decomposes into squared bias, variance and irreducible noise. Increasing capacity usually lowers bias and raises variance, giving the classic U-shaped test error curve; regularisation, ensembling (bagging mainly reduces variance, boosting mainly reduces bias), more data and cross-validation are the standard levers. The picture is incomplete for heavily over-parameterised networks, where double descent shows test error falling again beyond the interpolation threshold, so the trade-off is better treated as a heuristic about capacity than a law. Bias here is statistical, not the fairness sense.

## Related

- [[Overfitting]]: the high-variance failure
- [[Regularisation and Dropout]]: the main tools for managing it
- [[Double Descent]]: where the classic picture breaks down
- [[Ensemble]]: a way to reduce variance or bias
- [[Cross-validation]]: how the balance is measured
- [[Generalisation]]: the goal it serves

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

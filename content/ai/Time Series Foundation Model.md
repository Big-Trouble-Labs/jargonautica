---
title: "Time Series Foundation Model"
aliases:
  - "Foundation Model for Forecasting"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "General-purpose forecasting models pre-trained on enormous collections of time series, which can then forecast a new series without being trained on it."
---

# Time Series Foundation Model

## Plain View

General-purpose forecasting models pre-trained on enormous collections of time series, which can then forecast a new series without being trained on it. The claim is that a model trained on millions of series learns patterns that transfer, and the results are competitive with, though not always better than, well-tuned classical methods.

## Technical View

Trained on large heterogeneous corpora of series with tokenisation schemes over patches or quantised values, offering zero-shot forecasting with optional fine-tuning. Evaluated on standard forecasting benchmarks against statistical baselines and gradient boosting, where results are strong but not uniformly dominant. Advantages are cold-start forecasting for new series and reduced per-series engineering; open questions include covariate handling and calibrated prediction intervals.

## Related

- [[Time Series Forecasting]]: the task
- [[Foundation Model]]: the general pattern applied here
- [[Zero-shot, One-shot and Few-shot]]: forecasting without task-specific training
- [[Random Forest and Gradient Boosting]]: the baseline it must beat

---

Part of [[AI Terminology Index]], section: Modalities and Applications.

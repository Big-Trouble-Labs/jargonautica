---
title: "Baseline"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "The simple thing your clever thing has to beat."
---

# Baseline

## Plain View

The simple thing your clever thing has to beat. Predict the most common answer, return the most recent value, use plain keyword search. Establishing one first is unglamorous and it is what stops a project spending six months to match what a rule would have done in an afternoon.

## Technical View

Useful baselines include majority class, random, seasonal-naive for time series, keyword retrieval for search, and for language model work, the same model with a plain prompt and no retrieval or tooling. Reporting only the sophisticated system's score without a baseline makes the result uninterpretable. In practice a surprising proportion of proposed improvements fail to beat a well-tuned simple baseline.

## Related

- [[Ablation Study]]: isolating what actually helps
- [[No Free Lunch Theorem]]: why simple methods must be tried
- [[Benchmarks and Evals]]: results without a baseline are uninterpretable
- [[Random Forest and Gradient Boosting]]: a strong baseline on tabular data

---

Part of [[AI Terminology Index]], section: Measuring Performance.

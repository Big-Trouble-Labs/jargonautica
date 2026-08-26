---
title: "Correlation and Causation"
aliases:
  - "Correlation"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "Two things moving together does not mean one causes the other."
---

# Correlation and Causation

## Plain View

Two things moving together does not mean one causes the other. Both might be caused by a third thing, or the relationship might run the other way, or it might be coincidence. Models learn correlations, which is fine for prediction and dangerous the moment anyone acts on the result as though it were a cause.

## Technical View

A predictive model exploits any association that generalises, including spurious ones, and remains valid only while the data-generating process is unchanged. Acting on a model's findings intervenes in that process and can invalidate the relationship it relied on. Establishing causation requires either randomised assignment or explicit causal assumptions, which is what causal inference provides and standard supervised learning does not.

## Related

- [[Causal Inference]]: the methods for establishing cause
- [[Simpson's Paradox]]: the sharpest demonstration of the problem
- [[Bias]]: spurious correlations learned and applied
- [[Controlled Experiment]]: randomisation as the practical answer
- [[Data Leakage]]: the modelling version of a spurious relationship

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

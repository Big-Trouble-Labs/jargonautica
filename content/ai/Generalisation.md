---
title: "Generalisation"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "Performing well on things you have not seen before, which is the entire point."
---

# Generalisation

## Plain View

Performing well on things you have not seen before, which is the entire point. A system that only handles its training examples is a lookup table with extra steps. Everything about how models are evaluated exists to test this one property, because it is the only thing that predicts whether something will work in the real world.

## Technical View

The gap between training and test performance under the assumption that both are drawn from the same distribution. That assumption is the weak point: real deployment usually involves distribution shift, so held-out performance is an optimistic bound. Classical theory bounds generalisation by model capacity, which fails to explain why heavily overparameterised networks generalise at all, an open question with implicit regularisation as the leading partial answer.

## Related

- [[Overfitting]]: the failure to generalise
- [[Training, Validation and Test Sets]]: how generalisation is measured
- [[Inductive Bias]]: what makes it possible at all
- [[Double Descent]]: why capacity and generalisation are not simply opposed
- [[Interpolation and Extrapolation]]: the limits of where it holds

---

Part of [[AI Terminology Index]], section: The Foundations.

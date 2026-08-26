---
title: "Active Learning"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Letting the model choose what to label next."
---

# Active Learning

## Plain View

Letting the model choose what to label next. Instead of annotating randomly, you label the examples the model is least sure about, which reaches good performance with far fewer labels. It changes annotation from a fixed upfront cost into an ongoing loop.

## Technical View

Query strategies include uncertainty sampling, query by committee using disagreement among an ensemble, and expected model change. Effective when labelling dominates cost, but it produces a biased, non-independent training set that is unrepresentative of the deployment distribution, which complicates evaluation. Batch selection also needs a diversity term, or the model requests many near-identical examples.

## Related

- [[Data Labelling and Annotation]]: the cost it targets
- [[Semi-supervised Learning]]: the alternative approach
- [[Model Confidence and Calibration]]: uncertainty sampling depends on it
- [[Training, Validation and Test Sets]]: the resulting set is not representative

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

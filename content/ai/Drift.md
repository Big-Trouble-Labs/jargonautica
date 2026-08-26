---
title: "Drift"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "The world changing underneath a model that has not changed."
---

# Drift

## Plain View

The world changing underneath a model that has not changed. Customers behave differently, vocabulary shifts, a supplier alters a data format, a competitor launches something. Nothing errors and nothing alerts; performance simply degrades, often for months before anyone notices.

## Technical View

Distinguish data drift, a change in the input distribution, from concept drift, a change in the relationship between inputs and the target, which is the more damaging and harder to detect. Input drift is measurable without labels using distributional distances or a discriminator trained to separate training from live data; concept drift requires outcome labels, which usually arrive late or not at all. Practical responses are proxy monitoring on prediction distributions and downstream outcomes, scheduled retraining, and alerting on absence of expected signal rather than only on error.

## Related

- [[Machine Learning Operations]]: the discipline that monitors for it
- [[Online and Offline Evaluation]]: why offline sets need revalidating
- [[Data Pipeline]]: silent upstream changes as a cause
- [[Continual Learning]]: one response to it
- [[Interpolation and Extrapolation]]: moving outside the training distribution
- [[Observability and Tracing]]: how it is detected

---

Part of [[AI Terminology Index]], section: Running It in Production.

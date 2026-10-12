---
title: "Regression to the Mean"
aliases:
  - "Regression Toward the Mean"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "The tendency for an unusually extreme result to be followed by one closer to average, simply because part of the extreme result was luck."
---

# Regression to the Mean

## Plain View

The tendency for an unusually extreme result to be followed by one closer to average, simply because part of the extreme result was luck. A team with a freak winning season usually does less well the next year, and a model that tops a benchmark by a wide margin often slips on a fresh test. Mistaking this drift back to normal for the effect of a change you made is a classic error.

## Technical View

Occurs whenever two measurements are imperfectly correlated: conditioning on an extreme first value implies an expected second value nearer the mean, by an amount that grows as the correlation falls. Francis Galton described it in the 1880s from the heights of parents and their children. In machine learning it inflates the apparent winner when many models, prompts or hyperparameter settings are compared on one noisy evaluation set, and it manufactures improvements in before-and-after studies that select their worst cases for intervention. Fresh held-out evaluation, control groups and larger test sets are the remedies.

## Related

- [[Controlled Experiment]]: the design that separates it from real effects
- [[Statistical Significance and the p-value]]: testing whether a change is more than noise
- [[Training, Validation and Test Sets]]: why a fresh test set is needed
- [[Variance and Standard Deviation]]: the noise that drives it
- [[Survivorship Bias]]: another selection effect

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

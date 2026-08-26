---
title: "Normalisation and Standardisation"
aliases:
  - "Standardisation"
  - "Feature Scaling"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "Putting different measurements on a comparable scale before feeding them to a model."
---

# Normalisation and Standardisation

## Plain View

Putting different measurements on a comparable scale before feeding them to a model. Income in pounds and age in years are wildly different sizes, and many methods will treat the larger numbers as more important purely because they are larger. Rescaling is dull, easy to get wrong, and frequently the difference between a model working and not.

## Technical View

Min-max scaling maps to a fixed range; standardisation subtracts the mean and divides by the standard deviation. Required for distance-based methods, gradient-based optimisation and regularised models; unnecessary for trees. The critical discipline is fitting the transformation on training data only and applying the stored parameters to validation and test, since fitting across the whole dataset is a common and quiet form of leakage.

## Related

- [[Feature Engineering]]: part of preparing inputs
- [[Data Leakage]]: fitting the scaler on all the data is a classic leak
- [[Gradient Descent]]: why scaling affects optimisation
- [[Batch Normalisation]]: the same idea applied inside a network

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

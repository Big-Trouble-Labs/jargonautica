---
title: "Random Forest and Gradient Boosting"
aliases:
  - "Random Forest"
  - "Gradient Boosting"
  - "XGBoost"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Two ways of combining many decision trees into something far better than any one of them."
---

# Random Forest and Gradient Boosting

## Plain View

Two ways of combining many decision trees into something far better than any one of them. A random forest grows hundreds of trees on different slices of the data and takes a vote. Gradient boosting grows them one after another, each correcting the mistakes of the last. For ordinary business data in rows and columns these still routinely beat neural networks, and it is worth knowing that before anyone reaches for deep learning.

## Technical View

Random forests reduce variance through bootstrap aggregation and random feature subsetting at each split, which decorrelates the trees. Boosting reduces bias by fitting each new tree to the residual errors of the current ensemble, with implementations such as XGBoost, LightGBM and CatBoost dominating practical use on tabular data. Boosted models are more accurate but more sensitive to hyperparameters and more prone to overfitting without early stopping. Both report feature importance, which should be read carefully, since correlated features share credit in unpredictable ways.

## Related

- [[Decision Tree]]: the building block
- [[Ensemble]]: the general principle these are instances of
- [[Overfitting]]: what boosting risks without early stopping
- [[Hyperparameters]]: boosting is unusually sensitive to them
- [[Deep Learning]]: the alternative these still beat on tabular data

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

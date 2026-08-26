---
title: "Ensemble"
aliases:
  - "Ensembles"
  - "Bagging"
  - "Stacking"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Combining several models so that their mistakes cancel out."
---

# Ensemble

## Plain View

Combining several models so that their mistakes cancel out. Different models tend to get different things wrong, so averaging their answers usually beats any single one of them. It is the machine learning equivalent of asking a room full of people rather than one expert.

## Technical View

Bagging trains models on bootstrap samples in parallel and averages, reducing variance. Boosting trains them sequentially, each weighted towards the previous errors, reducing bias. Stacking trains a further model to combine their outputs. Gains depend on the base models being genuinely diverse and individually better than chance; ensembling near-identical models achieves very little. The costs are interpretability and inference time, which is why a single strong model is sometimes preferred in production even at a small loss of accuracy.

## Related

- [[Random Forest and Gradient Boosting]]: the two ensembles that matter in practice
- [[Decision Tree]]: the usual base model
- [[Overfitting]]: the variance problem ensembling reduces
- [[Distillation]]: how an ensemble's behaviour gets compressed back into one model

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

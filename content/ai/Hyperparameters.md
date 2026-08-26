---
title: "Hyperparameters"
aliases:
  - "Hyperparameter"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The settings a human chooses before training starts, as opposed to the numbers the model works out for itself."
---

# Hyperparameters

## Plain View

The settings a human chooses before training starts, as opposed to the numbers the model works out for itself. How many layers, how large each adjustment is, how many examples to process at a time. Get them badly wrong and training fails outright or quietly produces something mediocre. Much of the practical craft of machine learning is finding good values for these.

## Technical View

Distinct from parameters, which are learned from data. Search strategies run from manual tuning through grid and random search to Bayesian optimisation and successive halving methods such as Hyperband, with random search generally beating grid search for a fixed budget because hyperparameters do not all matter equally. Tuning must be done against a validation set rather than the test set, or reported performance is optimistic. For very large models exhaustive search is unaffordable, so practice relies on published recipes and rules transferred from smaller runs.

## Related

- [[Weights, Parameters and Biases]]: the learned numbers these are distinct from
- [[Epoch, Batch and Learning Rate]]: the three most common ones
- [[Training, Validation and Test Sets]]: tuning must be done against validation
- [[Random Forest and Gradient Boosting]]: unusually sensitive to these
- [[Regularisation and Dropout]]: controlled by hyperparameters of their own
- [[Training]]: the run these configure

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

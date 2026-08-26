---
title: "Loss Function"
aliases:
  - "Cost Function"
  - "Objective Function"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The number that tells a model how wrong it currently is."
---

# Loss Function

## Plain View

The number that tells a model how wrong it currently is. Training is nothing more than making this number go down. Choosing it is a real decision rather than a technicality, because it defines what 'wrong' means: a model penalised heavily for missing a fraud case behaves quite differently from one penalised equally for every kind of error.

## Technical View

Also called the objective or cost function. Standard choices are cross-entropy for classification and mean squared error for regression, with mean absolute error preferred where outliers are common. The loss must be differentiable for gradient-based optimisation, which rules out optimising discrete measures such as accuracy directly, so training optimises a proxy while evaluation uses the measure you actually care about. Class weighting and custom losses encode asymmetric costs, and any gap between the loss and the real objective shows up as a model that is technically well trained and practically useless.

## Related

- [[Convexity]]: the shape of the landscape being descended
- [[Gradient Descent]]: what follows the slope of this
- [[Backpropagation]]: how the slope is computed
- [[Training]]: the process of driving this number down
- [[Overfitting]]: diagnosed by comparing training and validation loss
- [[Perplexity]]: the language model measure derived from it

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

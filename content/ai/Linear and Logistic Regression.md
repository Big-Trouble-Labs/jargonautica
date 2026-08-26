---
title: "Linear and Logistic Regression"
aliases:
  - "Linear Regression"
  - "Logistic Regression"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "The simplest useful models, and the sensible place to start."
---

# Linear and Logistic Regression

## Plain View

The simplest useful models, and the sensible place to start. Linear regression fits a straight line through your data to predict a number. Logistic regression does the same but bends the output into a probability between nought and one so it can predict a category instead. They are often dismissed as too basic, but they are fast, they need little data, and you can explain exactly why they produced any given answer, which is more than can be said for most of what follows.

## Technical View

Both are generalised linear models: a weighted sum of inputs, with logistic regression passing that sum through a sigmoid. Coefficients are directly interpretable as the effect of each input, which is why they remain standard in medicine, credit scoring and anywhere a decision has to be defended. They assume the relationship is linear in the inputs and handle interactions only if those are engineered in by hand. A single-layer neural network with a sigmoid activation is logistic regression, which is a useful thing to notice.

## Related

- [[Classification and Regression]]: the two problems these solve
- [[Interpretability]]: why these are still used where decisions must be defended
- [[Neural Network]]: logistic regression is a single-unit version of one
- [[Feature Engineering]]: what these models depend on to handle non-linearity
- [[Loss Function]]: cross-entropy and squared error respectively

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

---
title: "Inductive Bias"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "The assumptions built into a model before it sees any data, which decide what it can learn easily and what it will struggle with."
---

# Inductive Bias

## Plain View

The assumptions built into a model before it sees any data, which decide what it can learn easily and what it will struggle with. A model designed for images assumes that a pattern means the same thing wherever it appears in the picture. Without assumptions of some kind, learning from finite examples is impossible, so the question is never whether to have them but which ones.

## Technical View

The set of prior constraints that allow generalisation beyond training data. Convolutional networks encode translation equivariance and locality; recurrent networks encode sequential structure; transformers encode very little, which is why they need far more data and why they scale better once you have it. Architecture choice is largely a choice of inductive bias, and the historical trend has been towards weaker biases plus more data.

## Related

- [[Generalisation]]: what inductive bias makes possible
- [[Convolutional Neural Network]]: a strong bias towards locality and translation
- [[Transformer]]: a much weaker bias, traded for data
- [[No Free Lunch Theorem]]: the formal reason bias is necessary
- [[Scaling Laws]]: weaker biases plus more data has been the trend

---

Part of [[AI Terminology Index]], section: The Foundations.

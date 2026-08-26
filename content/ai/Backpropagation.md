---
title: "Backpropagation"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The method for working out which of a model's millions of internal settings were responsible for a mistake."
---

# Backpropagation

## Plain View

The method for working out which of a model's millions of internal settings were responsible for a mistake. The model makes a prediction, the error is measured, and that error is then traced backwards through the layers so each setting can be nudged by the right amount in the right direction. Without a way to assign blame across so many numbers, training a large network would be impossible.

## Technical View

It is an efficient application of the chain rule from calculus, computing the gradient of the loss with respect to every parameter in roughly the same time as a single forward pass. This efficiency is the whole point; a naive approach would be hopelessly slow. In practice it is handled by automatic differentiation built into frameworks such as PyTorch, so practitioners rarely implement it directly, but understanding it explains most of why models train the way they do.

## Related

- [[Gradient Descent]]: the partner process that applies the adjustment
- [[Neural Network]]: what it operates on
- [[Layers]]: what the error is traced back through
- [[Training]]: the wider process it is the engine of

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

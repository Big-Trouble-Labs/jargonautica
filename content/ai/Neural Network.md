---
title: "Neural Network"
aliases:
  - "Neural Networks"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The structure that does the learning in nearly all modern AI."
---

# Neural Network

## Plain View

The structure that does the learning in nearly all modern AI. It is made of very simple units, loosely inspired by brain cells, arranged in connected layers. Each unit takes in some numbers, weighs them according to its own settings, adds them up and passes the result along. A single unit does almost nothing useful. Millions of them wired together can represent extraordinarily complicated patterns. The biological comparison is a helpful picture but should not be taken too seriously; these are mathematical functions, not simulated brains.

## Technical View

Each unit computes a weighted sum of its inputs plus a bias term, then passes that through a non-linear activation function such as ReLU. That non-linearity is essential and easy to overlook: without it, stacking layers gains you nothing at all, because a chain of linear operations collapses into a single linear operation. With it, a sufficiently large network can approximate essentially any continuous function, a result known as the universal approximation theorem. That theorem says such a network exists; it says nothing about whether you can find it, which is what training is for.

## Related

- [[Layers]]: how the units are arranged
- [[Weights, Parameters and Biases]]: the numbers inside that get adjusted
- [[Deep Learning]]: what you get when you stack many layers
- [[Backpropagation]]: how the network works out what to change
- [[Interpretability]]: the effort to understand what goes on inside one

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

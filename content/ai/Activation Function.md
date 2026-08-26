---
title: "Activation Function"
aliases:
  - "ReLU"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The small non-linear step applied inside each unit of a neural network."
---

# Activation Function

## Plain View

The small non-linear step applied inside each unit of a neural network. It sounds like a detail and it is not: without it, stacking layers achieves nothing at all, because a chain of straight-line operations is just another straight line. This single component is what allows a network to represent curves, interactions and anything more interesting than a weighted average.

## Technical View

The rectified linear unit ('ReLU'), which passes positive values through and outputs zero otherwise, is the default in hidden layers because it is cheap and avoids the saturation that made sigmoid and tanh slow to train in deep networks. Variants such as leaky ReLU, GELU and SwiGLU address dying units and are standard in transformers. Output layers differ by task: softmax for multi-class classification, sigmoid for binary or multi-label, and no activation at all for regression.

## Related

- [[Neural Network]]: where this sits, inside every unit
- [[Layers]]: why stacking them achieves anything
- [[Logits and Softmax]]: the output-layer case
- [[Deep Learning]]: the component that makes depth worthwhile

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

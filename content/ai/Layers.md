---
title: "Layers"
aliases:
  - "Layer"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The stacked stages inside a neural network."
---

# Layers

## Plain View

The stacked stages inside a neural network. Data enters at the input layer, passes through hidden layers in the middle, and emerges at the output layer. Each layer builds on what the previous one produced. In an image system, early layers tend to detect simple things like edges and colour changes, middle layers combine those into textures and shapes, and later layers assemble them into recognisable objects. Nobody designs this hierarchy; it emerges from training.

## Technical View

Each layer applies a transformation to the representation it receives, progressively turning raw input into features useful for the task. The learned hierarchy of features is precisely what makes deep learning powerful, and it replaced the older practice of hand-designed feature engineering, where humans specified in advance what the system should look for. Very deep networks brought their own problems, notably vanishing gradients, largely solved by architectural devices such as residual connections that let information skip past layers.

## Related

- [[Neural Network]]: the structure layers make up
- [[Deep Learning]]: the name for having a lot of them
- [[Weights, Parameters and Biases]]: the adjustable numbers in each layer
- [[Backpropagation]]: how error is traced back through them
- [[Pruning]]: removing layers or units that contribute little

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

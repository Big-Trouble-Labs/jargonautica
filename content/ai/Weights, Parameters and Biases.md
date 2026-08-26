---
title: "Weights, Parameters and Biases"
aliases:
  - "Weights"
  - "Parameters"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The internal numbers a model adjusts as it learns."
---

# Weights, Parameters and Biases

## Plain View

The internal numbers a model adjusts as it learns. They are where everything the model knows is stored. When you hear that a model has 'billions of parameters', these are what is being counted. Before training they are random, so the model outputs nonsense. Training is entirely a matter of finding good values for them.

## Technical View

Weights scale the connections between units; biases shift the output of each unit, allowing it to activate at a threshold other than zero. Parameter count is a rough proxy for capacity, but only rough, since architecture, data quality and training length matter enormously. Parameters are learned from data. Distinct from these are hyperparameters, which are configuration choices set by humans before training begins, such as learning rate, number of layers and batch size. Tuning hyperparameters is a large part of the practical craft.

## Related

- [[Neural Network]]: the structure these numbers live in
- [[Gradient Descent]]: the process that sets their values
- [[Epoch, Batch and Learning Rate]]: hyperparameters, the human-set counterpart to these
- [[Quantisation]]: storing these numbers less precisely to save space
- [[Open Weights]]: what it means when these are published

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

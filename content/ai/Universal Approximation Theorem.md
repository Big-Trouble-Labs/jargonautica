---
title: "Universal Approximation Theorem"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "A mathematical result showing that a neural network with enough artificial neurons can, in principle, imitate almost any smooth relationship between inputs and outputs as closely as you like."
---

# Universal Approximation Theorem

## Plain View

A mathematical result showing that a neural network with enough artificial neurons can, in principle, imitate almost any smooth relationship between inputs and outputs as closely as you like. It is often quoted as the reason neural networks are so flexible. It does not say how many neurons you would need, or whether training would ever find the right settings, so it explains what is possible rather than why networks succeed in practice.

## Technical View

Cybenko proved in 1989 that a feed-forward network with one hidden layer of sigmoid units can approximate any continuous function on a compact domain to arbitrary accuracy; Hornik showed in 1991 that the layered architecture, not the particular activation, is what matters, and Leshno and colleagues showed in 1993 that any non-polynomial activation suffices. These are existence theorems: the required width can grow exponentially with input dimension, and they say nothing about learnability, generalisation or sample efficiency. Later work on depth-width trade-offs shows deep networks can represent some functions far more compactly than shallow ones.

## Related

- [[Neural Network]]: the models it is about
- [[Activation Function]]: the non-linearity the result depends on
- [[Feed-forward Network]]: the architecture the theorem covers
- [[Generalisation]]: what the theorem does not guarantee
- [[Perceptron]]: the single unit whose limits it overcomes

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

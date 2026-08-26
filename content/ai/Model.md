---
title: "Model"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "A simplified representation of something, used to make predictions about it."
---

# Model

## Plain View

A simplified representation of something, used to make predictions about it. In machine learning it means the trained artefact: the structure plus all the numbers learned from data. When people say 'the model got it wrong' they mean this thing, a file of numbers plus the code that runs it, not a program somebody wrote.

## Technical View

Comprises an architecture, which defines the computation, and parameters, which are learned. Serialised as weight files in formats such as safetensors, often accompanied by configuration, tokeniser and chat template. The word is heavily overloaded: a statistical model, a mental model and a deployed system all get called one, and the ambiguity causes real confusion in governance discussions where 'the model' may mean the weights, the served endpoint, or the whole product.

## Related

- [[Weights, Parameters and Biases]]: the numbers a model consists of
- [[Algorithm]]: the alternative way of specifying behaviour
- [[Inference]]: what running a model is called
- [[Model Registry]]: how models are catalogued and versioned
- [[Open Weights]]: what is being released when a model is published

---

Part of [[AI Terminology Index]], section: The Foundations.

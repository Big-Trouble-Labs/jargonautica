---
title: "Sparse Autoencoder"
aliases:
  - "SAE"
  - "Dictionary Learning"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "The current best tool for working out what a model is thinking about."
---

# Sparse Autoencoder

## Plain View

The current best tool for working out what a model is thinking about. It takes the tangle of numbers inside a network and re-expresses it as a much longer list where only a few entries are active at a time, and those entries turn out to correspond to recognisable concepts.

## Technical View

Trained to reconstruct activations through an overcomplete bottleneck with a sparsity penalty, on the hypothesis that features are sparse and linearly represented in superposition. Yields dictionaries of interpretable features, from concrete entities to abstract properties, which can be used for monitoring and for causal intervention. Open problems include feature splitting at different dictionary sizes, reconstruction error, and the difficulty of confirming that recovered features are the ones the model actually uses.

## Related

- [[Superposition]]: the problem it addresses
- [[Feature (Interpretability Sense)]]: what it recovers
- [[Interpretability]]: the field it belongs to
- [[Autoencoder]]: the architecture it inverts
- [[Steering Vector]]: features used as controls

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.

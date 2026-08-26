---
title: "Superposition"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "The reason you cannot just look at one artificial neuron and see what it does."
---

# Superposition

## Plain View

The reason you cannot just look at one artificial neuron and see what it does. Networks pack far more concepts than they have dimensions by letting concepts share directions, on the reasonable bet that most are absent at any given moment. It is efficient and it is why interpretability is difficult.

## Technical View

The representation of more features than dimensions by tolerating small interference between nearly orthogonal directions, viable because features are sparse. It explains polysemantic neurons that activate for unrelated inputs, and it motivates dictionary learning approaches that project into a higher-dimensional sparse space where features separate. Toy models reproduce the phenomenon and show how feature importance and sparsity determine which features get dedicated dimensions.

## Related

- [[Feature (Interpretability Sense)]]: what is being packed together
- [[Sparse Autoencoder]]: the tool built to unpack it
- [[Interpretability]]: why the field is hard
- [[Embeddings]]: directions in representation space

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.

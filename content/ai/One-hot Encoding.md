---
title: "One-hot Encoding"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Turning a category into numbers without accidentally implying an order."
---

# One-hot Encoding

## Plain View

Turning a category into numbers without accidentally implying an order. If you number colours red as one, blue as two, green as three, a model will think green is somehow more than red. One-hot encoding gives each category its own yes-or-no column instead.

## Technical View

Produces a sparse binary column per category, exploding dimensionality for high-cardinality features. Alternatives include target encoding, which risks leakage unless computed within cross-validation folds, hashing for very large vocabularies, and learned embeddings, which are the neural generalisation. Tree models handle categorical splits natively in some implementations, avoiding the expansion entirely.

## Related

- [[Feature Engineering]]: part of preparing inputs
- [[Embedding Layer]]: the learned alternative
- [[Decision Tree]]: models that handle categories natively
- [[Data Leakage]]: target encoding leaks if done carelessly

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

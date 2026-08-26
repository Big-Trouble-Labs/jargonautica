---
title: "Feature (Interpretability Sense)"
aliases:
  - "Polysemanticity"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "A single recognisable thing a model represents internally: a concept, a property, a pattern."
---

# Feature (Interpretability Sense)

## Plain View

A single recognisable thing a model represents internally: a concept, a property, a pattern. Confusingly, the same word means an input column in traditional machine learning. Here it means something the network has learned to detect and use, discovered rather than designed.

## Technical View

Under the linear representation hypothesis, a feature is a direction in activation space whose magnitude reflects the degree to which the concept is present. Features do not correspond to individual neurons because of superposition, which is why dictionary learning is needed to isolate them. Validation requires both correlational evidence, that the feature activates on the right inputs, and causal evidence, that steering it changes behaviour as predicted.

## Related

- [[Superposition]]: why features are not neurons
- [[Sparse Autoencoder]]: how features are isolated
- [[Steering Vector]]: acting on a feature direction
- [[Interpretability]]: the field
- [[Feature Engineering]]: the unrelated traditional meaning

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.

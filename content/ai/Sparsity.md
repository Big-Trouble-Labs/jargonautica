---
title: "Sparsity"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "Exploiting the fact that most of a model's numbers contribute very little."
---

# Sparsity

## Plain View

Exploiting the fact that most of a model's numbers contribute very little. If you can skip them, everything gets faster and smaller. The catch is that skipping scattered individual numbers does not actually speed anything up on real hardware unless the pattern is regular.

## Technical View

Unstructured sparsity zeroes individual weights and needs specialised support to realise gains; semi-structured patterns such as two-in-four are supported by current accelerators and give real speedups; structured sparsity removes whole channels, heads or layers and benefits standard hardware. Activation sparsity, where most units output zero for a given input, is separately exploitable. Mixture of experts is conditional sparsity applied at the architectural level.

## Related

- [[Pruning]]: the structural way of exploiting it
- [[Mixture of Experts]]: conditional sparsity by architecture
- [[Quantisation]]: the other main efficiency lever
- [[Sparse Autoencoder]]: sparsity as an interpretability assumption

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

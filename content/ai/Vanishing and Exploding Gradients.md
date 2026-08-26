---
title: "Vanishing and Exploding Gradients"
aliases:
  - "Vanishing Gradients"
  - "Exploding Gradients"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "When error signals shrink to nothing or blow up to infinity as they travel back through many layers."
---

# Vanishing and Exploding Gradients

## Plain View

When error signals shrink to nothing or blow up to infinity as they travel back through many layers. Either way the network stops learning properly. This was the practical barrier that kept networks shallow for years, and solving it was what made deep learning possible.

## Technical View

Repeated multiplication of Jacobians during backpropagation causes gradient magnitudes to decay or grow exponentially with depth. Mitigations include non-saturating activations such as ReLU, careful initialisation, normalisation layers, residual connections and gradient clipping. Recurrent networks suffered worst because the same weights are reapplied at every timestep, which is what gating mechanisms in LSTMs were designed to address.

## Related

- [[Gradient]]: the quantity that decays or blows up
- [[Residual Connection]]: the architectural fix
- [[Recurrent Neural Network]]: where the problem was worst
- [[Gradient Clipping]]: the blunt practical control
- [[Activation Function]]: saturating activations made it worse

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

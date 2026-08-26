---
title: "Feed-forward Network"
aliases:
  - "MLP Block"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The other half of a transformer block, sitting after attention."
---

# Feed-forward Network

## Plain View

The other half of a transformer block, sitting after attention. Attention decides which words to look at; this part does the actual processing of what was gathered. It is where most of the model's parameters live, and increasingly where interpretability researchers think factual knowledge is stored.

## Technical View

A position-wise two-layer network, expanding to roughly four times the model dimension and projecting back, with a non-linearity between. Modern models use gated variants such as SwiGLU. It accounts for approximately two thirds of the parameters in a dense transformer, which is why mixture-of-experts designs replace precisely this component with routed experts.

## Related

- [[Transformer Block]]: the structure it sits in
- [[Attention]]: the other half of the block
- [[Mixture of Experts]]: what replaces this component when routed
- [[Circuit]]: where factual knowledge appears to be stored

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

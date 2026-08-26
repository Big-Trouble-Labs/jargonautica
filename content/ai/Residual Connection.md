---
title: "Residual Connection"
aliases:
  - "Skip Connection"
  - "ResNet"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Letting information skip past a layer and be added back on the other side."
---

# Residual Connection

## Plain View

Letting information skip past a layer and be added back on the other side. It sounds like a small architectural detail and it is the reason networks can be hundreds of layers deep. Each layer only has to learn a correction to what it received, rather than reconstruct the whole signal.

## Technical View

Introduced in ResNet, computing the output as the input plus the layer's transformation. This creates a direct path for gradients to flow backwards without repeated multiplication, addressing vanishing gradients, and reframes each block as learning a residual function. Every transformer block contains two of these, and the resulting residual stream is the central object of much interpretability research.

## Related

- [[Vanishing and Exploding Gradients]]: the problem it solves
- [[Layers]]: what information skips past
- [[Deep Learning]]: what made real depth possible
- [[Transformer Block]]: two of them per block
- [[Circuit]]: the residual stream as the object of interpretability

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

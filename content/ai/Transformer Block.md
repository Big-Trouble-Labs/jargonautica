---
title: "Transformer Block"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The unit that repeats."
---

# Transformer Block

## Plain View

The unit that repeats. One block is attention followed by a feed-forward network, each wrapped with normalisation and a skip connection. A model with eighty layers is this same small structure stacked eighty times. Understanding one block is most of understanding the architecture.

## Technical View

In the pre-normalisation arrangement now standard, each sub-layer computes normalise, transform, then add to the residual stream. The residual stream carries information forward and each block reads from and writes to it, a framing that has proved productive for interpretability. Depth and width are traded against each other under a fixed parameter budget, with wide-and-shallow favouring inference latency and deep-and-narrow often favouring quality.

## Related

- [[Transformer]]: what is being stacked
- [[Attention]]: the first sub-layer
- [[Feed-forward Network]]: the second sub-layer
- [[Residual Connection]]: what carries information between them
- [[Layer Normalisation]]: where it is applied

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

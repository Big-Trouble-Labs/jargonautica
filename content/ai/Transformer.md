---
title: "Transformer"
aliases:
  - "Transformers"
  - "Self-Attention"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "The particular design of neural network that nearly all modern language models use."
---

# Transformer

## Plain View

The particular design of neural network that nearly all modern language models use. It was introduced in 2017 and displaced the previous approaches almost completely. Its key advantage is that it can process an entire passage at once rather than reading strictly word by word, which makes it dramatically faster to train on modern hardware and therefore possible to scale up to today's sizes.

## Technical View

Earlier recurrent architectures processed sequences step by step, which made training inherently sequential and slow, and made it hard to retain information across long distances. The transformer replaced recurrence with self-attention, allowing every position to attend directly to every other position in parallel. Positional encodings supply word-order information, since attention alone is order-blind. Most current models are decoder-only, using causal masking so each position can see only what came before it. The cost is that attention scales quadratically with sequence length, which is the core engineering constraint on context length.

## Related

- [[Attention]]: the mechanism at its heart
- [[Large Language Model]]: the main thing built with it
- [[Recurrent Neural Network]]: the approach it displaced
- [[Context Window]]: the limit its attention cost imposes
- [[Tokens]]: what it processes

---

Part of [[AI Terminology Index]], section: Language Models Specifically.

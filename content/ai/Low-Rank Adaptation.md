---
title: "Low-Rank Adaptation"
aliases:
  - "LoRA"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "A cheap way of customising a large model."
---

# Low-Rank Adaptation

## Plain View

A cheap way of customising a large model. Rather than retraining the whole thing, you leave it untouched and train a small add-on layer that adjusts its behaviour. The add-on is tiny, often a few megabytes, so you can keep many of them for different purposes and swap them in and out over a single base model.

## Technical View

Weight updates are approximated as the product of two low-rank matrices, dramatically reducing the number of trainable parameters, commonly by a factor of ten thousand or more, while retaining most of the benefit of full fine-tuning on narrow tasks. The adapters can be merged into the base weights at inference time to avoid latency overhead. QLoRA combines this with a quantised base model, allowing meaningful fine-tuning of large models on a single consumer graphics card.

## Related

- [[Fine-tuning]]: the expensive approach this replaces
- [[Quantisation]]: combined with this in QLoRA
- [[Pre-trained Model]]: the frozen base an adapter sits on
- [[Weights, Parameters and Biases]]: what the adapter approximates a change to

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

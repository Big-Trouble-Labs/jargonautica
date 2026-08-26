---
title: "Inference"
tags:
  - glossary/ai
  - ai/building
section: "Building and Using Models"
summary: "What happens when you actually use a trained model."
---

# Inference

## Plain View

What happens when you actually use a trained model. Cheap and fast compared to training, and this is what runs every time you send a message. Because it happens on every single request, at scale the total cost of inference across a model's life typically dwarfs the cost of training it.

## Technical View

For a language model, inference is autoregressive: one token is generated, appended to the input, and the process repeats, which makes generation inherently sequential and latency-bound. Sampling parameters such as temperature control randomness, with higher values producing more varied and less predictable output. Optimisation techniques include key-value caching to avoid recomputing attention over the whole prompt each step, quantisation to reduce numerical precision, and batching many users' requests together.

## Related

- [[Training]]: the counterpart: building the model rather than using it
- [[Caching]]: the main way its cost is cut
- [[Quantisation]]: another way its cost is cut
- [[Temperature and Sampling]]: the settings that shape its output
- [[Graphics Processing Unit]]: the hardware it runs on

---

Part of [[AI Terminology Index]], section: Building and Using Models.

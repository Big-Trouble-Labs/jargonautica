---
title: "Quantisation"
aliases:
  - "Quantization"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "Storing a model's internal numbers less precisely so it takes up less space and runs faster."
---

# Quantisation

## Plain View

Storing a model's internal numbers less precisely so it takes up less space and runs faster. Instead of recording each number to sixteen decimal places, you record it to roughly one or two. The model gets noticeably smaller and quicker, and in most cases barely gets worse. This is what allows a model that would normally need expensive server hardware to run on a laptop or a phone.

## Technical View

Parameters are converted from higher precision formats such as 16-bit floating point down to 8-bit or 4-bit integers, cutting memory footprint proportionally and improving throughput, since memory bandwidth rather than raw arithmetic is usually the bottleneck at inference. Post-training quantisation applies this to an already trained model, while quantisation-aware training bakes the constraint in during training for better results. Degradation is generally mild down to 8-bit and becomes more noticeable at 4-bit and below, with the damage falling unevenly on reasoning and long-context tasks rather than showing up in average benchmark scores.

## Related

- [[Weights, Parameters and Biases]]: the numbers being stored less precisely
- [[Inference]]: the stage it speeds up
- [[Pruning]]: another way of making a model smaller
- [[Distillation]]: a third way of making a model smaller
- [[Low-Rank Adaptation]]: combined with quantisation in QLoRA
- [[Graphics Processing Unit]]: memory bandwidth is the bottleneck this relieves

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

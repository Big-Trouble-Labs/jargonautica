---
title: "Parameter-efficient Fine-tuning"
aliases:
  - "PEFT"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "A family of ways to adapt a large model to a new task by training only a small number of extra or selected settings, leaving the rest untouched."
---

# Parameter-efficient Fine-tuning

## Plain View

A family of ways to adapt a large model to a new task by training only a small number of extra or selected settings, leaving the rest untouched. Retraining a whole model is expensive and produces a full-sized copy for every task. These methods cost far less to run and store, so one base model can carry many small add-ons for different jobs.

## Technical View

Covers adapters (small bottleneck layers inserted into each block), prefix and prompt tuning (learned vectors prepended to the input or to each layer's keys and values), and low-rank methods such as Low-Rank Adaptation ('LoRA'), which learn a low-rank update to frozen weight matrices. Typically well under a few per cent of parameters are trained, cutting optimiser memory and allowing many task modules to be swapped at serving time. Combined with quantisation it makes fine-tuning feasible on a single graphics card. Trade-offs are a possible quality gap against full fine-tuning on harder shifts, and, on some evidence, less capacity than full fine-tuning to absorb substantially new knowledge.

## Related

- [[Low-Rank Adaptation]]: the most widely used method
- [[Fine-tuning]]: the full version it economises on
- [[Quantisation]]: often combined to save more memory
- [[Transfer Learning]]: the broader idea it serves
- [[Catastrophic Forgetting]]: reduced by leaving base weights frozen

---

Part of [[AI Terminology Index]], section: Training and Post-training.

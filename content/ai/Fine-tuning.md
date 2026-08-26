---
title: "Fine-tuning"
aliases:
  - "Fine Tuning"
  - "Finetuning"
tags:
  - glossary/ai
  - ai/building
section: "Building and Using Models"
summary: "Giving a pre-trained model additional training on a narrower task, domain or style."
---

# Fine-tuning

## Plain View

Giving a pre-trained model additional training on a narrower task, domain or style. Like sending a well educated graduate on a specialist course rather than schooling them from the age of five. Used to teach a house writing style, a specialised vocabulary, or a consistent output format.

## Technical View

Full fine-tuning updates all parameters and is expensive. Parameter-efficient methods such as low-rank adaptation ('LoRA') train a small number of additional parameters while leaving the base model frozen, cutting cost dramatically. A known failure mode is catastrophic forgetting, where fine-tuning on narrow data degrades general capability. Fine-tuning is generally the right tool for changing behaviour, format or style, and the wrong tool for injecting factual knowledge, where retrieval works better.

## Related

- [[Pre-trained Model]]: what fine-tuning starts from
- [[Low-Rank Adaptation]]: the cheap way of doing it
- [[Retrieval Augmented Generation]]: the better tool when you need facts rather than style
- [[Reinforcement Learning from Human Feedback]]: the preference-based stage that follows
- [[Overfitting]]: the risk when the fine-tuning set is small

---

Part of [[AI Terminology Index]], section: Building and Using Models.

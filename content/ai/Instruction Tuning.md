---
title: "Instruction Tuning"
aliases:
  - "Supervised Fine-tuning"
  - "Instruction Tuned"
tags:
  - glossary/ai
  - ai/building
section: "Building and Using Models"
summary: "The training stage that turns a raw text predictor into something that follows instructions."
---

# Instruction Tuning

## Plain View

The training stage that turns a raw text predictor into something that follows instructions. A freshly pre-trained model, given a question, is as likely to produce a list of similar questions as an answer, because that is what it saw on the internet. Instruction tuning teaches it that a request should be met with a response. Almost everything people find useful about assistants starts here.

## Technical View

Supervised fine-tuning on curated instruction and response pairs across a wide spread of tasks, typically a few tens of thousands to a few million examples, where quality and diversity matter far more than volume. It normally precedes preference-based training such as reinforcement learning from human feedback, which then refines tone, helpfulness and refusal behaviour. It also introduces the alignment tax, a small measurable drop on some raw capability benchmarks in exchange for usability.

## Related

- [[Alignment Tax]]: the small capability cost it introduces
- [[Large Language Model]]: what this stage is applied to
- [[Base Model and Instruct Model]]: the before and after
- [[Fine-tuning]]: the technique used
- [[Reinforcement Learning from Human Feedback]]: the stage that usually follows
- [[Zero-shot, One-shot and Few-shot]]: instruction tuning narrowed the gap between them

---

Part of [[AI Terminology Index]], section: Building and Using Models.

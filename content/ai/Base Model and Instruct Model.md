---
title: "Base Model and Instruct Model"
aliases:
  - "Base Model"
  - "Instruct Model"
  - "Chat Model"
tags:
  - glossary/ai
  - ai/building
section: "Building and Using Models"
summary: "Two versions of the same model, and the difference catches people out."
---

# Base Model and Instruct Model

## Plain View

Two versions of the same model, and the difference catches people out. The base model is the raw product of pre-training: it continues text and does not converse. The instruct or chat version has had further training to follow instructions and behave like an assistant. If you download an open model and find it rambling or repeating your question back at you, you have probably got the base one.

## Technical View

Base models are the starting point for custom fine-tuning, since they carry no imposed chat format, refusal behaviour or persona, and they remain useful for research into raw capability. Instruct variants expect a specific chat template of role markers and special tokens, and using the wrong template degrades output noticeably. Base models are also far less safety-trained, which is part of the argument about what should be released openly.

## Related

- [[Instruction Tuning]]: what turns one into the other
- [[Pre-trained Model]]: what a base model is
- [[Open Weights]]: where the distinction bites in practice
- [[System Prompt]]: instruct models expect a chat template
- [[Fine-tuning]]: base models are the better starting point for it

---

Part of [[AI Terminology Index]], section: Building and Using Models.

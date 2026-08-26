---
title: "Logit Bias"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "Directly forcing the model towards or away from specific words."
---

# Logit Bias

## Plain View

Directly forcing the model towards or away from specific words. Useful for banning a term outright, or for restricting an answer to a fixed set of options. It works at the token level, which means banning a word requires knowing all the ways it can be tokenised.

## Technical View

Adds a fixed offset to specified token logits before sampling, with large negative values effectively prohibiting them. Applied per token identifier, so coverage of casing, leading spaces and subword splits must be handled explicitly. Useful for constraining classification outputs to valid labels and for cheap content controls, though it is easily circumvented by paraphrase and is not a substitute for a moderation layer.

## Related

- [[Logits and Softmax]]: what is being adjusted
- [[Structured Output]]: constraining answers to valid options
- [[Repetition Penalty]]: a specific application of the same idea
- [[Guardrails]]: a weak content control on its own

---

Part of [[AI Terminology Index]], section: Language Models Specifically.

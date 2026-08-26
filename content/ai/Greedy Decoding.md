---
title: "Greedy Decoding"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "Always taking the single most likely next token."
---

# Greedy Decoding

## Plain View

Always taking the single most likely next token. It gives the same answer every time for the same input, which sounds ideal and produces flat, repetitive text on anything open-ended. Fine for extraction and classification, poor for writing.

## Technical View

Equivalent to temperature zero. Deterministic in principle, though floating-point non-determinism in batched GPU execution means identical inputs can still produce different outputs in practice. Prone to degenerate repetition on long generations, since locally optimal choices compound. It remains the right default for structured output, classification and any task where reproducibility matters more than variety.

## Related

- [[Temperature and Sampling]]: the general control
- [[Beam Search]]: the multi-candidate alternative
- [[Determinism and Seed]]: why it is not truly deterministic in practice
- [[Structured Output]]: where it is the right default

---

Part of [[AI Terminology Index]], section: Language Models Specifically.

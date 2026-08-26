---
title: "Beam Search"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "Keeping several candidate continuations alive at once and choosing the best complete one at the end, rather than committing to each word as you go."
---

# Beam Search

## Plain View

Keeping several candidate continuations alive at once and choosing the best complete one at the end, rather than committing to each word as you go. It helps for translation and summarisation, where there is a right answer, and it makes open-ended writing worse and blander.

## Technical View

Maintains the k highest-scoring partial sequences, expanding each step and pruning. Requires length normalisation to avoid favouring short outputs. Standard in machine translation and speech recognition, but for open-ended generation it produces text that is high-probability and low-quality, an observation that motivated nucleus sampling. It also multiplies inference cost by the beam width, which matters at scale.

## Related

- [[Greedy Decoding]]: the single-path version
- [[Temperature and Sampling]]: the stochastic alternative
- [[Machine Translation]]: where it remains standard
- [[Tree of Thoughts]]: search applied at the reasoning level

---

Part of [[AI Terminology Index]], section: Language Models Specifically.

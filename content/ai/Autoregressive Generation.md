---
title: "Autoregressive Generation"
aliases:
  - "Autoregressive"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "The one-at-a-time way a language model writes."
---

# Autoregressive Generation

## Plain View

The one-at-a-time way a language model writes. It picks a word, adds it to what it has already produced, then picks the next based on everything including what it just wrote. It never plans the whole sentence in advance and it cannot revise what it has already said. This explains a great deal: why output arrives gradually, why longer answers cost more and take longer, and why a model that starts down a wrong path tends to keep going.

## Technical View

Each step conditions on the full preceding sequence, so generation is inherently sequential and cannot be parallelised the way training can, making it latency-bound and memory-bandwidth-bound rather than compute-bound. This is the constraint that key-value caching and speculative decoding exist to relieve. It also means an early sampling error propagates, since every later token is conditioned on it, a failure mode sometimes called exposure bias.

## Related

- [[Inference]]: the stage this describes
- [[Tokens]]: what is produced one at a time
- [[Large Language Model]]: the models that work this way
- [[Caching]]: the optimisation this constraint motivates
- [[Speculative Decoding]]: the other way round the sequential bottleneck
- [[Temperature and Sampling]]: how each choice is made

---

Part of [[AI Terminology Index]], section: Language Models Specifically.

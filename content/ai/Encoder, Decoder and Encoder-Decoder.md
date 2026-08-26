---
title: "Encoder, Decoder and Encoder-Decoder"
aliases:
  - "Encoder"
  - "Decoder"
  - "Encoder-Decoder"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "Three arrangements of the transformer, suited to different jobs."
---

# Encoder, Decoder and Encoder-Decoder

## Plain View

Three arrangements of the transformer, suited to different jobs. An encoder reads a whole passage at once and produces a representation of it, which suits classification and search. A decoder generates text one token at a time and can only see what came before, which suits writing. An encoder-decoder reads one thing and writes another, which suits translation. Nearly all the models people talk about today are decoders.

## Technical View

Encoder-only models such as BERT use bidirectional attention and masked language modelling, and remain the workhorse for embeddings, retrieval and classification, where they are far cheaper than a generative model. Decoder-only models use causal masking so each position attends only to earlier ones, and dominate general-purpose generation. Encoder-decoder models such as T5 keep cross-attention from decoder to encoder and stay competitive on tightly defined sequence-to-sequence tasks.

## Related

- [[Transformer]]: the architecture these are arrangements of
- [[Attention]]: bidirectional or causal, which is the difference
- [[Embeddings]]: what encoder-only models are mostly used for
- [[Large Language Model]]: almost always decoder-only
- [[Positional Encoding]]: needed by all three

---

Part of [[AI Terminology Index]], section: Language Models Specifically.

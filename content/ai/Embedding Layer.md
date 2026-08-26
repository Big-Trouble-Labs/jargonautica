---
title: "Embedding Layer"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The first thing that happens inside a language model."
---

# Embedding Layer

## Plain View

The first thing that happens inside a language model. Each token identifier is looked up in a big table and replaced by a vector, and that table is learned along with everything else. It is where discrete symbols become continuous numbers the network can work with.

## Technical View

A lookup table of shape vocabulary size by model dimension, typically one of the largest single parameter tensors in the model. Many architectures tie the input embedding and output projection matrices, saving parameters and generally improving quality. Positional information is added or applied on top, since the lookup itself carries no notion of order.

## Related

- [[One-hot Encoding]]: the unlearned alternative
- [[Embeddings]]: the vectors it produces
- [[Tokens]]: what gets looked up
- [[Vocabulary and Special Tokens]]: the size of the table
- [[Transformer]]: the first stage of the model

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

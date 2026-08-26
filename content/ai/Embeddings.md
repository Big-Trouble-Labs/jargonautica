---
title: "Embeddings"
aliases:
  - "Embedding"
  - "Vector Embeddings"
tags:
  - glossary/ai
  - ai/applying
section: "Extending and Applying Models"
summary: "A way of turning words, sentences or documents into lists of numbers such that similar meanings end up with similar numbers."
---

# Embeddings

## Plain View

A way of turning words, sentences or documents into lists of numbers such that similar meanings end up with similar numbers. This lets a computer measure how related two pieces of text are without matching the actual words, so a search for 'car insurance' can find a document about 'vehicle cover'.

## Technical View

Embeddings are dense vectors, commonly several hundred to a few thousand dimensions, positioned so that semantic similarity corresponds to geometric proximity, usually measured by cosine similarity. They underpin retrieval, clustering, recommendation and deduplication. Note that embeddings inherit the biases of their training data, and that similarity in embedding space captures general relatedness rather than any specific relationship you might care about.

## Related

- [[Retrieval Augmented Generation]]: the main practical use
- [[Tokens]]: the text units that get embedded
- [[Unsupervised Learning]]: how the structure behind them is found
- [[Multimodal]]: different media placed in one shared space
- [[Bias]]: embeddings inherit whatever their training data contained

---

Part of [[AI Terminology Index]], section: Extending and Applying Models.

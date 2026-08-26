---
title: "Multi-vector Retrieval"
aliases:
  - "ColBERT"
  - "Late Interaction"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Representing a document with several vectors instead of one, so that different parts of it can match different queries."
---

# Multi-vector Retrieval

## Plain View

Representing a document with several vectors instead of one, so that different parts of it can match different queries. A single vector for a long passage averages everything together and loses the details; several vectors keep them.

## Technical View

Late-interaction models such as ColBERT store per-token embeddings and score by summing maximum similarities across query tokens, giving finer-grained matching than single-vector approaches at substantially higher storage and compute cost. Compression techniques reduce the footprint. It sits between single-vector retrieval and full cross-encoder reranking in both cost and quality, and suits cases where precise term-level matching matters.

## Related

- [[Embeddings]]: several per document rather than one
- [[Reranking]]: the higher-cost, higher-accuracy alternative
- [[Vector Database]]: the storage implications
- [[Semantic Search]]: the single-vector baseline

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

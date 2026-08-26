---
title: "Reranking"
aliases:
  - "Reranker"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "A second pass that reorders search results before they reach the model."
---

# Reranking

## Plain View

A second pass that reorders search results before they reach the model. Fast similarity search is good at getting roughly the right twenty documents and poor at deciding which three are best. A reranker examines each candidate against the actual question more carefully, and it typically improves answer quality more than any other single change to a retrieval system.

## Technical View

Cross-encoders score query and document jointly rather than comparing independently computed embeddings, which is far more accurate and far too slow to run across a whole corpus, hence the retrieve-then-rerank pattern. Typical configurations retrieve fifty to a hundred candidates and rerank down to three to five. Hybrid retrieval combining sparse keyword matching with dense vectors, fused by reciprocal rank fusion, is a common companion, since keyword search still wins on names, codes and rare terms.

## Related

- [[Retrieval Augmented Generation]]: the system this improves most
- [[Vector Database]]: the fast first pass this corrects
- [[Semantic Search]]: the ranking being refined
- [[Embeddings]]: what the first pass compares
- [[Chunking]]: what is being ranked

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

---
title: "Approximate Nearest Neighbour Search"
aliases:
  - "ANN Search"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "A way of finding the items most similar to a query very quickly by accepting that the answer will occasionally miss the very best match."
---

# Approximate Nearest Neighbour Search

## Plain View

A way of finding the items most similar to a query very quickly by accepting that the answer will occasionally miss the very best match. When text or images are turned into lists of numbers, finding the closest ones exactly means comparing against everything, which is too slow for millions of items. Approximate methods trade a little accuracy for answers in milliseconds.

## Technical View

Finds vectors close to a query under a distance such as cosine or Euclidean without exhaustive comparison. Main families are graph-based indexes such as Hierarchical Navigable Small World ('HNSW'), Inverted File ('IVF') indexes that cluster vectors, product quantisation to compress vectors, and locality-sensitive hashing. Libraries such as FAISS implement several. Parameters trade recall against latency and memory, and recall should be measured against exact search rather than assumed. Failure modes include degraded recall after filtering by metadata, costly updates and deletions in graph indexes, and memory pressure at billion scale. It is the engine inside most vector databases.

## Related

- [[Vector Database]]: the system it powers
- [[Embeddings]]: the vectors being searched
- [[K-Nearest Neighbours]]: the exact version it approximates
- [[Dot Product and Cosine Similarity]]: how closeness is measured
- [[Metadata Filtering]]: a common source of recall loss
- [[Retrieval Metrics]]: how recall is checked

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

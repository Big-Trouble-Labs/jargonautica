---
title: "BM25 and Sparse Retrieval"
aliases:
  - "BM25"
  - "Sparse Retrieval"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "The classic keyword ranking method, refined over decades and still very hard to beat."
---

# BM25 and Sparse Retrieval

## Plain View

The classic keyword ranking method, refined over decades and still very hard to beat. It scores documents by how often the query words appear, adjusted for how common those words are generally and how long the document is. It is fast, needs no training, and explains its own results.

## Technical View

A probabilistic ranking function using term frequency saturation and inverse document frequency with length normalisation, with tunable parameters controlling saturation and length effects. Implemented on inverted indexes, giving low latency at very large scale. Learned sparse methods such as SPLADE expand queries and documents into weighted term sets, capturing some semantic matching while keeping the efficiency of an inverted index.

## Related

- [[Hybrid Search]]: where it is combined with dense retrieval
- [[Semantic Search]]: the complementary approach
- [[Retrieval Metrics]]: how ranking quality is measured
- [[Vector Database]]: the dense counterpart infrastructure

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

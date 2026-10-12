---
title: "Inverted Index"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "A lookup table that lists, for every word, the documents containing it, so a search engine can find matches instantly instead of reading everything."
---

# Inverted Index

## Plain View

A lookup table that lists, for every word, the documents containing it, so a search engine can find matches instantly instead of reading everything. It works like the index at the back of a book, which tells you which pages mention a topic. Almost every keyword search system, from web search to searching your email, is built on one.

## Technical View

Maps each term to a postings list of document identifiers, usually with term frequencies and positions to support ranking and phrase queries. Queries are answered by intersecting or merging postings lists, and scoring functions such as BM25 use the stored statistics. Compression of postings, skip pointers and sharding keep it fast at scale; Lucene and the engines built on it are the common implementations. It excels at exact terms, names and codes, which is why hybrid retrieval pairs it with dense vector search that handles paraphrase. Learned sparse methods reuse the same structure with model-assigned term weights.

## Related

- [[BM25 and Sparse Retrieval]]: the scoring it enables
- [[Hybrid Search]]: where it is combined with vector search
- [[Information Retrieval]]: the field it underpins
- [[Approximate Nearest Neighbour Search]]: the equivalent structure for vectors
- [[Semantic Search]]: the meaning-based alternative

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

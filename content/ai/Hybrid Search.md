---
title: "Hybrid Search"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Running keyword search and meaning-based search together and combining the results."
---

# Hybrid Search

## Plain View

Running keyword search and meaning-based search together and combining the results. Keyword search is unbeatable on names, product codes and exact phrases; meaning-based search handles the cases where the words differ. Almost every retrieval system that works properly does both.

## Technical View

Combines sparse lexical retrieval such as BM25 with dense vector retrieval, fused by reciprocal rank fusion, which merges ranked lists without needing comparable scores, or by weighted score normalisation. Reciprocal rank fusion is the robust default since it avoids calibrating between incomparable scoring scales. Gains are largest on queries containing rare tokens, which is precisely where dense retrieval is weakest.

## Related

- [[Multi-vector Retrieval]]: finer-grained matching at higher cost
- [[BM25 and Sparse Retrieval]]: the keyword half
- [[Semantic Search]]: the meaning half
- [[Reranking]]: the pass that follows
- [[Retrieval Augmented Generation]]: the system it serves
- [[Retrieval Metrics]]: how the combination is judged

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

---
title: "Vector Database"
aliases:
  - "Vector Store"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "A store designed to hold embeddings and answer the question 'what is most similar to this?' quickly."
---

# Vector Database

## Plain View

A store designed to hold embeddings and answer the question 'what is most similar to this?' quickly. Ordinary databases are built to find exact matches; this kind is built to find near ones. It is the component that makes retrieval practical at any scale beyond a few thousand documents.

## Technical View

Uses approximate nearest neighbour indexes such as hierarchical navigable small world graphs, or inverted file indexes with product quantisation, trading a little recall for very large speed gains. Options range from dedicated services to extensions of databases you already run, such as pgvector, and for many workloads the extension is sufficient and avoids operating another system. Practical considerations include metadata filtering alongside vector search, index rebuild cost when documents change, and the fact that every embedding must be regenerated if the embedding model is upgraded.

## Related

- [[Embeddings]]: what it stores
- [[Retrieval Augmented Generation]]: the system it sits inside
- [[Semantic Search]]: the capability it provides
- [[Chunking]]: what produces the units it holds
- [[Reranking]]: the stage that follows retrieval

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

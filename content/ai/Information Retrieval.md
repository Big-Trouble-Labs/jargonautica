---
title: "Information Retrieval"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "The science of finding the documents or passages that answer a need from a large collection, and putting the best ones first."
---

# Information Retrieval

## Plain View

The science of finding the documents or passages that answer a need from a large collection, and putting the best ones first. Web search engines are its best-known product. It is also the backbone of systems that feed AI models relevant material before they answer, so the quality of the search often decides the quality of the answer.

## Technical View

Core components are indexing, query processing, ranking and evaluation. Ranking moved from Boolean matching through the vector space model and probabilistic models such as Best Matching 25 ('BM25') to learning to rank and dense neural retrieval with embeddings, with hybrid and reranking pipelines common in practice. The field has a strong evaluation culture built on test collections and relevance judgements, shaped by the Text REtrieval Conference ('TREC') run by the United States National Institute of Standards and Technology ('NIST') since 1992. Retrieval Augmented Generation ('RAG') made these methods central to language model applications.

## Related

- [[Retrieval Augmented Generation]]: its main use in AI systems
- [[BM25 and Sparse Retrieval]]: the classic ranking method
- [[Semantic Search]]: the meaning-based approach
- [[Retrieval Metrics]]: how it is evaluated
- [[Learning to Rank]]: the learned ranking stage
- [[Inverted Index]]: the core data structure

---

Part of [[AI Terminology Index]], section: Adjacent Fields.

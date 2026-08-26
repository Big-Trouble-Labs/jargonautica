---
title: "Retrieval Augmented Generation"
aliases:
  - "RAG"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "A technique where the system searches a document collection for relevant material and includes it in the prompt before the model answers."
---

# Retrieval Augmented Generation

## Plain View

A technique where the system searches a document collection for relevant material and includes it in the prompt before the model answers. It turns a closed book exam into an open book one. This is how most organisations get a model to answer questions about their own internal documents, and it substantially reduces invented answers on factual queries.

## Technical View

Documents are chunked, converted into embeddings, and stored in a vector database. A query is embedded and used to retrieve the nearest matching chunks, which are inserted into the prompt. Quality depends heavily on retrieval quality: if the right chunk is not returned, the model cannot use it. Practical refinements include hybrid search combining keyword and semantic matching, reranking, and careful chunking strategy. Compared to fine-tuning, retrieval has the advantage that the knowledge base can be updated at any time without retraining.

## Related

- [[Embeddings]]: how documents and queries are matched
- [[Context Window]]: retrieved material has to fit inside it
- [[Hallucination]]: the problem retrieval is mainly used to reduce
- [[Knowledge Cutoff]]: the other problem it addresses
- [[Fine-tuning]]: the alternative, better for style than for facts

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

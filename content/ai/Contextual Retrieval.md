---
title: "Contextual Retrieval"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Adding a sentence of surrounding context to each chunk before it is indexed, explaining what document and section it came from."
---

# Contextual Retrieval

## Plain View

Adding a sentence of surrounding context to each chunk before it is indexed, explaining what document and section it came from. It fixes the most common retrieval failure, where a chunk is perfectly relevant but contains none of the words that identify the topic, and it is cheap to implement.

## Technical View

Prepends a model-generated, document-aware description to each chunk prior to embedding and indexing, substantially reducing failed retrievals. Cost is one generation pass per chunk at index time, mitigated by prompt caching of the source document. Combines additively with hybrid search and reranking, and is generally the highest-return single change to a mediocre retrieval pipeline.

## Related

- [[Chunking]]: the step it augments
- [[Retrieval Augmented Generation]]: the pipeline it improves
- [[Caching]]: prompt caching makes it affordable
- [[Retrieval Metrics]]: how the gain is measured

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

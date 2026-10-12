---
title: "Cache-augmented Generation"
aliases:
  - "CAG"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "An alternative to looking documents up at question time, where all the relevant material is loaded into the model once in advance and kept ready."
---

# Cache-augmented Generation

## Plain View

An alternative to looking documents up at question time, where all the relevant material is loaded into the model once in advance and kept ready. Each question is then answered against that preloaded material without a separate search step. It suits small, stable collections of documents that fit within what the model can read at once, and it avoids the mistakes a search step can make.

## Technical View

Popularised under that name by Chan and colleagues in a December 2024 paper. The knowledge base is placed in the context of a long-context model and its key-value ('KV') cache is precomputed and stored, so each query reuses that state rather than retrieving and re-encoding passages. Benefits are lower latency per query and no retrieval step to get wrong, although the model can still overlook relevant material in a long context. Limits are the context window, the cost of recomputing the cache when knowledge changes, and degraded attention over very long contexts, such as lost-in-the-middle effects. Retrieval Augmented Generation ('RAG') remains the better fit for large or fast-changing corpora.

## Related

- [[Retrieval Augmented Generation]]: the approach it replaces for small corpora
- [[Caching]]: the key-value cache it reuses
- [[Context Window]]: the limit on what can be preloaded
- [[Lost in the Middle]]: a weakness of very long contexts
- [[Context Length Extension]]: what makes it practical

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

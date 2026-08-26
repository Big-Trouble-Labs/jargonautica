---
title: "Chunking"
aliases:
  - "Chunk"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Cutting documents into pieces small enough to retrieve and feed to a model."
---

# Chunking

## Plain View

Cutting documents into pieces small enough to retrieve and feed to a model. It sounds trivial and it is the single most common cause of a retrieval system that does not work. Cut in the wrong places and a chunk arrives without the context that made it meaningful: a table without its heading, an answer without the question, a clause without the definition it depends on.

## Technical View

Fixed-size chunking with overlap is the baseline; structure-aware chunking that respects headings, paragraphs and code blocks generally does better. Common refinements include attaching document and section titles to every chunk, matching on a small chunk but returning a larger surrounding window for generation, and hierarchical or summary-augmented approaches. Chunk size interacts with the embedding model's effective input length and with how many chunks the prompt can afford, so it should be tuned empirically against a golden dataset rather than chosen by convention.

## Related

- [[Contextual Retrieval]]: adding context to each chunk before indexing
- [[Retrieval Augmented Generation]]: the system this is part of
- [[Vector Database]]: where the chunks end up
- [[Embeddings]]: each chunk becomes one
- [[Context Window]]: chunk size and count are budgeted against it
- [[Lost in the Middle]]: why fewer, better chunks win

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

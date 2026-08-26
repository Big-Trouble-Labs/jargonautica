---
title: "GraphRAG"
aliases:
  - "Graph Retrieval"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Retrieval over a knowledge graph as well as over text."
---

# GraphRAG

## Plain View

Retrieval over a knowledge graph as well as over text. It shines on questions that require joining facts scattered across many documents, or summarising a whole corpus, which plain chunk retrieval handles badly because no single chunk contains the answer.

## Technical View

Extracts entities and relationships into a graph, optionally clusters it into communities with generated summaries at each level, and retrieves subgraphs or community summaries rather than isolated chunks. Strong on multi-hop and global questions; weak on cost, since graph construction requires a model pass over the whole corpus, and on maintenance as documents change. Hybrid designs retrieve both graph context and raw text.

## Related

- [[Knowledge Graph]]: the structure it retrieves over
- [[Retrieval Augmented Generation]]: the text-based version
- [[Chunking]]: the limitation it addresses
- [[Graph Neural Network]]: learning over the same structures

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

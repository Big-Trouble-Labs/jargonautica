---
title: "Knowledge Graph"
aliases:
  - "Knowledge Graphs"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "A structured map of things and how they relate: this company employs this person, who wrote this paper, which cites that one."
---

# Knowledge Graph

## Plain View

A structured map of things and how they relate: this company employs this person, who wrote this paper, which cites that one. Unlike a model's diffuse learned knowledge, a knowledge graph is explicit, checkable and editable, which makes it valuable precisely where language models are weak. Combining the two is an active and useful area.

## Technical View

Entities and relations stored as triples and queried with languages such as SPARQL or Cypher over graph databases. Construction is the hard part: entity resolution, schema design and keeping the graph current. In retrieval-augmented systems, graph-based approaches improve multi-hop questions where the answer requires joining facts that appear in different documents, which flat vector search handles poorly. The trade-off is construction and maintenance cost against precision and explainability, and hybrid designs that retrieve both text and graph context are common.

## Related

- [[Retrieval Augmented Generation]]: where graphs improve multi-hop questions
- [[Embeddings]]: the alternative representation
- [[Symbolic AI and Expert Systems]]: the tradition this comes from
- [[Semantic Search]]: the complementary retrieval method
- [[Interpretability]]: explicit structure you can actually inspect

---

Part of [[AI Terminology Index]], section: Adjacent Fields.

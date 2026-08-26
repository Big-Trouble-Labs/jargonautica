---
title: "Query Rewriting"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Fixing the question before you search with it."
---

# Query Rewriting

## Plain View

Fixing the question before you search with it. Users ask things like 'what about the second one' which is meaningless without the conversation, or use internal shorthand that appears nowhere in the documents. Rewriting turns that into something a search engine can act on, and it often improves results more than anything you do to the index.

## Technical View

Includes conversational rewriting to resolve pronouns and context into a standalone query, expansion with synonyms and domain vocabulary, decomposition of compound questions into sub-queries, and generating multiple query variants whose results are fused. Adds a model call to the latency budget. Failure risk is drift, where an aggressive rewrite changes the user's intent, which argues for retaining the original query in the fused set.

## Related

- [[Semantic Search]]: what the rewritten query feeds
- [[Agentic Retrieval]]: iterative reformulation
- [[Hybrid Search]]: multiple query variants fused
- [[Retrieval Metrics]]: measuring whether it helped

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.

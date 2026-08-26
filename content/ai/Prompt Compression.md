---
title: "Prompt Compression"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "Shortening what you send while keeping what matters, to save cost and leave room for more useful content."
---

# Prompt Compression

## Plain View

Shortening what you send while keeping what matters, to save cost and leave room for more useful content. Approaches range from simply summarising the history to removing tokens a smaller model judges redundant.

## Technical View

Methods include extractive selection of high-information tokens scored by a small model, abstractive summarisation of conversation history, and learned soft prompt compression into fewer embedding vectors. Trade-offs are information loss, an additional processing step in the latency path, and interaction with prefix caching, since compression that changes the prompt prefix invalidates the cache. Compaction of older turns while preserving recent ones verbatim is the common practical compromise.

## Related

- [[Context Window]]: the budget it protects
- [[Context Engineering]]: the discipline it belongs to
- [[Caching]]: compression can invalidate a cached prefix
- [[Memory]]: summarising history as a form of it

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.

---
title: "Grouped Query Attention"
aliases:
  - "GQA"
  - "Multi-query Attention"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "Letting several attention heads share the same stored keys and values rather than each keeping its own."
---

# Grouped Query Attention

## Plain View

Letting several attention heads share the same stored keys and values rather than each keeping its own. It shrinks the memory needed to hold a long conversation, which is usually what limits how many users a server can handle at once.

## Technical View

Sits between multi-head attention, where every head has its own key and value projections, and multi-query attention, where all heads share one. Reducing the number of key-value heads cuts cache size proportionally, which directly increases the batch size a given accelerator can serve. Quality loss is small when the number of groups is chosen sensibly, and it is now standard in models designed for efficient serving.

## Related

- [[Attention]]: the mechanism it modifies
- [[Caching]]: the key-value cache it shrinks
- [[Memory Bandwidth]]: why cache size limits serving
- [[Continuous Batching]]: smaller caches allow larger batches

---

Part of [[AI Terminology Index]], section: Language Models Specifically.

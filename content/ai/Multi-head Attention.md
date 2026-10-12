---
title: "Multi-head Attention"
aliases:
  - "MHA"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "A version of attention, the step where a model weighs which other words matter, that runs several separate attention processes side by side."
---

# Multi-head Attention

## Plain View

A version of attention, the step where a model weighs which other words matter, that runs several separate attention processes side by side. Each one is free to focus on a different kind of relationship: one might track which word a pronoun refers to, another grammar, another neighbouring words. Their findings are then combined, giving the model a richer picture than a single attention process could.

## Technical View

Introduced in 'Attention Is All You Need' (Vaswani and colleagues, 2017). The model dimension is split across several heads, each with its own learned query, key and value projections into a smaller subspace; scaled dot-product attention runs per head in parallel, and the outputs are concatenated and mixed by an output projection, at roughly the cost of one full-width head. Heads specialise, though many can be pruned with little loss. At inference every head's keys and values must be cached, which drives memory use; multi-query and grouped query variants share keys and values across heads to reduce it.

## Related

- [[Attention]]: the mechanism it parallelises
- [[Transformer]]: the architecture that introduced it
- [[Grouped Query Attention]]: a cheaper variant
- [[Caching]]: the memory cost of every head
- [[Induction Head]]: a well studied example of what heads do
- [[Pruning]]: removing heads that contribute little

---

Part of [[AI Terminology Index]], section: Language Models Specifically.

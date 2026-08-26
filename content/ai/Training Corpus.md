---
title: "Training Corpus"
aliases:
  - "Corpus"
  - "Training Data"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "The body of text, images or other material a model learns from."
---

# Training Corpus

## Plain View

The body of text, images or other material a model learns from. For a large language model this is typically a substantial fraction of the public internet plus books, code and licensed collections. What goes in shapes everything that comes out: the model's knowledge, its blind spots, its default tone and whose voice it sounds like. It is also the least transparent part of most commercial models.

## Technical View

Frontier corpora run to trillions of tokens assembled from web crawls, curated collections, code repositories and licensed sources, then filtered for quality, deduplicated and mixed according to a sampling schedule that upweights higher-quality subsets. Composition matters as much as size: adding code improves reasoning, and language mix determines multilingual competence. Disclosure is usually thin, citing commercial sensitivity and copyright exposure, which limits independent assessment and makes benchmark contamination hard to rule out.

## Related

- [[Training]]: what the corpus is consumed by
- [[Self-supervised Learning]]: why raw text is enough
- [[Data Curation and Deduplication]]: what is done to it first
- [[Common Crawl and Web Scraping]]: where most of it comes from
- [[Copyright and Training Data]]: the unresolved legal question
- [[Knowledge Cutoff]]: the date the corpus stops

---

Part of [[AI Terminology Index]], section: Data.

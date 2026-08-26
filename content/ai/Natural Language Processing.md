---
title: "Natural Language Processing"
aliases:
  - "NLP"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "The field concerned with getting computers to work with human language."
---

# Natural Language Processing

## Plain View

The field concerned with getting computers to work with human language. It long predates the current wave: spam filters, spell checkers, search engines and translation were all natural language processing problems, tackled first with hand-written rules and then with statistics. Large language models have absorbed most of the field, which is why the term is heard less than it used to be.

## Technical View

Classical pipelines chained tokenisation, part-of-speech tagging, parsing and named entity recognition, each a separate model with its own errors compounding down the chain. Statistical methods displaced rules, neural sequence models displaced those, and general-purpose language models have collapsed most task-specific pipelines into prompting. Specialist components survive where cost, latency or determinism matter, and classification, named entity recognition and information extraction are still often done better and far more cheaply by a small fine-tuned model than by a large general one.

## Related

- [[Large Language Model]]: what absorbed most of this field
- [[Transformer]]: the architecture that ended the old pipelines
- [[Embeddings]]: the component that survived
- [[Recurrent Neural Network]]: the previous generation of sequence models
- [[Symbolic AI and Expert Systems]]: where the field started
- [[Turing Test]]: the question the field began with

---

Part of [[AI Terminology Index]], section: Adjacent Fields.

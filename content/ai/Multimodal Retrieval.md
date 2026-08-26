---
title: "Multimodal Retrieval"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Searching across different kinds of content at once: finding the slide with a particular chart, the photograph matching a description, the moment in a recording where something was said."
---

# Multimodal Retrieval

## Plain View

Searching across different kinds of content at once: finding the slide with a particular chart, the photograph matching a description, the moment in a recording where something was said. It requires representing all of it in a comparable way, which joint embeddings provide.

## Technical View

Indexes text, images, audio segments and video frames in a shared or aligned embedding space, permitting cross-modal queries. Practical designs often combine modality-specific retrieval with fusion, and generate text descriptions of non-text content so that mature text retrieval machinery can be reused, which is frequently more effective than pure cross-modal embedding. Evaluation requires cross-modal relevance judgements, which are expensive to obtain.

## Related

- [[Joint Embedding]]: the shared space it depends on
- [[Semantic Search]]: the text-only counterpart
- [[Video Understanding]]: searching footage
- [[Embeddings]]: the representation involved

---

Part of [[AI Terminology Index]], section: Modalities and Applications.

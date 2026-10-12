---
title: "Named Entity Recognition"
aliases:
  - "NER"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Picking out the names of things in text, such as people, organisations, places, dates and amounts, and labelling each with its type."
---

# Named Entity Recognition

## Plain View

Picking out the names of things in text, such as people, organisations, places, dates and amounts, and labelling each with its type. It turns free text into structured data: from a news story, it can list who was mentioned, where and when. It is often the first step in building a searchable database out of documents.

## Technical View

Named Entity Recognition ('NER') is usually framed as sequence labelling, where each token is tagged as the Beginning, Inside or Outside ('BIO') of an entity span. Approaches moved from hand-written rules and name lists, through conditional random fields, to fine-tuned transformer encoders, and large language models can also extract entities from a prompt with no task-specific training. Hard cases include nested and ambiguous entities, unseen names, and domain types such as drugs or part numbers. Recognition is usually followed by entity linking, which resolves each mention to a record in a knowledge base.

## Related

- [[Natural Language Processing]]: the field it belongs to
- [[Knowledge Graph]]: what extracted entities often populate
- [[Document AI]]: a common place it is applied
- [[Tokens]]: the units that get tagged
- [[Ontology]]: the scheme of entity types

---

Part of [[AI Terminology Index]], section: Modalities and Applications.

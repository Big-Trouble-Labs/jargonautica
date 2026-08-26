---
title: "Data Poisoning"
aliases:
  - "Backdoor Attack"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "Deliberately putting corrupted material into training data so that a model learns something harmful."
---

# Data Poisoning

## Plain View

Deliberately putting corrupted material into training data so that a model learns something harmful. Because so much training data is scraped from the open web, anyone who can get text onto a page that will be crawled has a route in. It can be used to degrade quality generally, or to plant a hidden trigger that makes the model misbehave on command.

## Technical View

Backdoor attacks associate a rare trigger phrase with an attacker-chosen output, staying dormant on ordinary inputs and therefore invisible to standard evaluation. Research has indicated that poisoning a very small absolute number of documents can suffice, and that the count matters more than the proportion, which means scale is no defence. Mitigations include provenance controls, deduplication, anomaly detection over training data and post-training scanning, none of them complete. The same risk applies to retrieval corpora and to fine-tuning datasets accepted from third parties.

## Related

- [[Training Corpus]]: the surface being attacked
- [[Prompt Injection]]: the run-time equivalent
- [[Data Curation and Deduplication]]: the main defence
- [[Red Teaming]]: how you look for it
- [[Retrieval Augmented Generation]]: retrieval corpora are poisonable too

---

Part of [[AI Terminology Index]], section: Data.

---
title: "Data Subject Rights"
aliases:
  - "Right to Erasure"
  - "Subject Access Request"
tags:
  - glossary/ai
  - ai/governance
section: "Governance, Law and Regulation"
summary: "The set of things an individual can ask you to do with their data: tell them what you hold, correct it, delete it, stop using it."
---

# Data Subject Rights

## Plain View

The set of things an individual can ask you to do with their data: tell them what you hold, correct it, delete it, stop using it. Models complicate all of these, because deleting a record from a database does not remove its influence from a model that trained on it.

## Technical View

Rights include access, rectification, erasure, restriction, portability and objection, with defined response deadlines. Complications specific to AI systems include locating personal data in prompts, logs, trajectories, embeddings and vector indexes, propagating deletion to derived artefacts, and the practical impossibility of erasure from trained weights. Practical responses include maintaining a data map covering derived stores, and preferring retrieval over fine-tuning for personal data so deletion is achievable.

## Related

- [[Personally Identifiable Information]]: what the rights attach to
- [[Machine Unlearning]]: why erasure is hard to honour
- [[Retention Policy]]: deletion in practice
- [[Data Lineage]]: finding every copy
- [[Memory]]: stored personalisation as personal data

---

Part of [[AI Terminology Index]], section: Governance, Law and Regulation.

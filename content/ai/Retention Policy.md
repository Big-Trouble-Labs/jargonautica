---
title: "Retention Policy"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "How long you keep things and what happens at the end."
---

# Retention Policy

## Plain View

How long you keep things and what happens at the end. Every category of data should have an answer, and 'forever, just in case' is a decision with consequences rather than an absence of one. For AI systems this includes prompts, outputs and logs, which people often forget are records.

## Technical View

Requires defined periods per data category, tied to purpose and legal basis, with automated deletion and evidence that it ran. Complications specific to AI systems include prompts and completions held by providers, embeddings and vector indexes derived from deleted source records, model checkpoints trained on data now subject to erasure, and backups. Deletion from a trained model is not achievable by deleting the source, which is the practical problem unlearning attempts to address.

## Related

- [[Data Minimisation]]: the same principle over time
- [[Data Subject Rights]]: erasure obligations
- [[Audit Logging]]: logs are records with retention duties
- [[Machine Unlearning]]: why deletion from a model is hard
- [[Data Residency and Confidentiality]]: provider-side retention terms

---

Part of [[AI Terminology Index]], section: Data.

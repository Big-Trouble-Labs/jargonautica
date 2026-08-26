---
title: "Model Registry"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "The catalogue of every model you have, which version is running where, and how each was produced."
---

# Model Registry

## Plain View

The catalogue of every model you have, which version is running where, and how each was produced. It sounds like paperwork until the day someone asks which model made a particular decision six months ago and nobody can answer.

## Technical View

Stores model artefacts with immutable versions, lineage to the training dataset and code commit, evaluation results, approval status and deployment history. Supports promotion through environments with gating on evaluation thresholds, and rollback by pinning a previous version. For third-party models the equivalent is recording the exact provider model identifier and version used per request, since provider aliases move without notice.

## Related

- [[Versioning]]: the discipline it implements
- [[Model Deprecation]]: tracking what is still available
- [[Model Card]]: the documentation it holds
- [[Rollback]]: pinning a previous version
- [[Machine Learning Operations]]: the practice it belongs to

---

Part of [[AI Terminology Index]], section: Running It in Production.

---
title: "Reproducibility"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "Being able to get the same result twice, or at least to explain why not."
---

# Reproducibility

## Plain View

Being able to get the same result twice, or at least to explain why not. It is harder than in ordinary software because models sample randomly, providers change models beneath you, and retrieval indexes shift as documents are added.

## Technical View

Sources of variation include sampling temperature, floating-point non-determinism in batched execution, provider-side model updates behind a stable alias, index and document changes, and time-dependent context. Practical measures are pinning explicit model versions, recording seeds where supported, snapshotting retrieval indexes for evaluation, and storing full request and response payloads. Exact reproducibility is often unattainable, so the realistic goal is attribution and bounded variance.

## Related

- [[Determinism and Seed]]: why exact repetition is hard
- [[Versioning]]: the prerequisite
- [[Audit Logging]]: recording inputs and outputs
- [[Model Deprecation]]: provider changes break it

---

Part of [[AI Terminology Index]], section: Running It in Production.

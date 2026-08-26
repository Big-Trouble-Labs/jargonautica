---
title: "Federated Learning"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Training a shared model without the training data ever leaving the places it lives."
---

# Federated Learning

## Plain View

Training a shared model without the training data ever leaving the places it lives. Each hospital, phone or bank trains locally and sends only the resulting adjustments to be combined centrally. It is used where data cannot lawfully or practically be pooled, and it reduces exposure rather than eliminating it, since the updates themselves carry information.

## Technical View

A central server aggregates client updates, classically by federated averaging. Practical difficulties include data that is not independent or identically distributed across clients, which harms convergence, plus client availability, device heterogeneity and communication cost. Updates can leak training data through gradient inversion, so secure aggregation and differential privacy are usually layered on top. It suits keyboard prediction and cross-institution medical work, and is much less suited to training large general models.

## Related

- [[Differential Privacy]]: usually layered on top
- [[Training]]: the process being distributed
- [[On-device Inference]]: the same instinct applied to running rather than training
- [[Data Residency and Confidentiality]]: the constraint this answers

---

Part of [[AI Terminology Index]], section: Security and Privacy.

---
title: "Data Residency and Confidentiality"
aliases:
  - "Data Residency"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Where your data physically goes when you use a hosted model, who can see it, and whether it is kept."
---

# Data Residency and Confidentiality

## Plain View

Where your data physically goes when you use a hosted model, who can see it, and whether it is kept. These are contractual and geographic questions rather than technical ones, and they are usually the first thing a regulated organisation asks. The answers vary considerably between providers and between tiers of the same provider.

## Technical View

Points to establish are the processing region and whether it can be pinned, retention period for prompts and outputs, whether inputs may be used for training and how to opt out, subprocessor lists, encryption in transit and at rest, and access controls including whether staff may view content for abuse monitoring. Zero-retention and regional processing options exist on most enterprise tiers. Confidential computing, which keeps data encrypted in memory during processing, is emerging as a stronger guarantee but is not yet the norm.

## Related

- [[Shadow AI]]: the behaviour that bypasses all of this
- [[Memory]]: stored conversation is retained data
- [[Acceptable Use Policy]]: the contractual layer
- [[Inference]]: the point at which data leaves your control
- [[Federated Learning]]: the architectural answer where it cannot

---

Part of [[AI Terminology Index]], section: Security and Privacy.

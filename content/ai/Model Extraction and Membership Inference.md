---
title: "Model Extraction and Membership Inference"
aliases:
  - "Model Extraction"
  - "Membership Inference"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Two attacks on models rather than through them."
---

# Model Extraction and Membership Inference

## Plain View

Two attacks on models rather than through them. Extraction means querying a model enough times to build a copy of it. Membership inference means working out whether a particular record was in the training data, which matters a great deal if that record is somebody's medical history. Both mean a model can leak information even when the data itself was never shared.

## Technical View

Extraction ranges from distilling behaviour through bulk querying to recovering architectural details or output-layer parameters by targeted probing; defences include rate limiting, output perturbation and monitoring for systematic query patterns. Membership inference exploits the fact that models are more confident on data they were trained on, and success rises with overfitting and with rare or repeated records. A related attack is training data extraction, where verbatim memorised sequences are recovered by prompting, which is a particular risk for rare strings such as keys and personal identifiers.

## Related

- [[Distillation]]: extraction is distillation without permission
- [[Training Corpus]]: what membership inference is asking about
- [[Differential Privacy]]: the formal defence
- [[Open Weights]]: where extraction stops being an attack
- [[Data Residency and Confidentiality]]: the wider question of what leaks

---

Part of [[AI Terminology Index]], section: Security and Privacy.

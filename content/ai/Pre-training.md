---
title: "Pre-training"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "The first and by far the most expensive stage, where a model learns language and a great deal about the world by predicting text across an enormous corpus."
---

# Pre-training

## Plain View

The first and by far the most expensive stage, where a model learns language and a great deal about the world by predicting text across an enormous corpus. Everything afterwards adjusts a model that already knows things. This is the stage that costs tens or hundreds of millions of pounds and that almost nobody does.

## Technical View

Self-supervised next-token prediction over trillions of tokens, running for weeks or months across tens of thousands of accelerators. The output is a base model. Costs are dominated by compute and by the engineering required to keep a run alive through hardware failure. Because a run is effectively unrepeatable at the frontier, decisions about data mixture and architecture are made conservatively and validated at small scale first.

## Related

- [[Training]]: the general process
- [[Training Corpus]]: what it consumes
- [[Self-supervised Learning]]: the objective used
- [[Compute-optimal Training]]: how the budget is allocated
- [[Base Model and Instruct Model]]: what it produces

---

Part of [[AI Terminology Index]], section: Training and Post-training.

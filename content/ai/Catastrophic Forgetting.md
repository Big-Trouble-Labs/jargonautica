---
title: "Catastrophic Forgetting"
tags:
  - glossary/ai
  - ai/building
section: "Building and Using Models"
summary: "When training a model on something new causes it to lose what it already knew."
---

# Catastrophic Forgetting

## Plain View

When training a model on something new causes it to lose what it already knew. Fine-tune an assistant hard on your company's support tickets and it may become excellent at those and noticeably worse at everything else, including basic reasoning. It is the main reason fine-tuning is less of a free lunch than it sounds.

## Technical View

Arises because gradient updates on a narrow distribution overwrite weights encoding general capability. Mitigations include low learning rates, freezing most layers, parameter-efficient methods such as low-rank adaptation that leave base weights untouched, mixing a proportion of general data into the fine-tuning set, and regularising towards the original weights. Evaluation should therefore always include general benchmarks alongside the target task, or the degradation goes unnoticed until deployment.

## Related

- [[Fine-tuning]]: when this happens
- [[Low-Rank Adaptation]]: the standard way of avoiding it
- [[Transfer Learning]]: the thing being undone
- [[Benchmarks and Evals]]: how you detect it before deployment
- [[Training]]: the mechanism, gradient updates overwriting

---

Part of [[AI Terminology Index]], section: Building and Using Models.

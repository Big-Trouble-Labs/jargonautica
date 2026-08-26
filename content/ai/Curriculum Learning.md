---
title: "Curriculum Learning"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Presenting training material in a deliberate order, easy things first, rather than at random."
---

# Curriculum Learning

## Plain View

Presenting training material in a deliberate order, easy things first, rather than at random. It mirrors how people are taught and the evidence for it is mixed: it helps in some settings and makes no difference in many. Where it does matter for large models is in what gets shown at the end of training.

## Technical View

Orders examples by a difficulty measure, either fixed or self-paced by current model loss. Results in supervised learning have been inconsistent. For large language models the effective version is data mixture scheduling, upweighting high-quality and domain-specific data during the final phase of pre-training, which reliably improves benchmark performance and is now standard practice at the frontier.

## Related

- [[Data Mixture]]: the effective version for large models
- [[Training]]: the process being ordered
- [[Pre-training]]: where end-of-run weighting matters
- [[Active Learning]]: a related idea about what to show next

---

Part of [[AI Terminology Index]], section: Training and Post-training.

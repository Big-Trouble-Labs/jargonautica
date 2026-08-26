---
title: "Continual Learning"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Updating a model over time as the world changes, without retraining from scratch and without it forgetting what it already knew."
---

# Continual Learning

## Plain View

Updating a model over time as the world changes, without retraining from scratch and without it forgetting what it already knew. Both halves are hard, and the honest state of the field is that periodic full retraining remains the practical answer for most organisations.

## Technical View

Approaches include regularisation towards previous parameters, rehearsal by mixing in older data, and architectural methods that allocate separate capacity to new tasks. The core difficulty is the stability-plasticity trade-off: resisting change preserves old knowledge and prevents new learning. For large language models, adapter-based approaches with routing avoid touching the base weights, sidestepping rather than solving the problem.

## Related

- [[Model Merging]]: combining separately trained variants
- [[Catastrophic Forgetting]]: the central obstacle
- [[Online Learning]]: the streaming version
- [[Knowledge Editing]]: the targeted alternative
- [[Drift]]: the problem it responds to
- [[Low-Rank Adaptation]]: adapters as a way of sidestepping it

---

Part of [[AI Terminology Index]], section: Training and Post-training.

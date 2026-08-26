---
title: "Compute-optimal Training"
aliases:
  - "Chinchilla"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "The finding that for a fixed budget there is a best balance between how big a model is and how much data it sees, and that earlier models were far too large for the amount of data they were trained on."
---

# Compute-optimal Training

## Plain View

The finding that for a fixed budget there is a best balance between how big a model is and how much data it sees, and that earlier models were far too large for the amount of data they were trained on. It changed the industry's direction from ever-bigger models towards smaller models trained much longer.

## Technical View

The Chinchilla result established that parameters and training tokens should scale roughly in proportion, contradicting earlier scaling prescriptions. Note that compute-optimal minimises training cost for a given loss, and is not inference-optimal: since inference cost recurs on every request, production models are deliberately trained well past the compute-optimal point on far more tokens, trading training expense for a permanently cheaper model to serve.

## Related

- [[Scaling Laws]]: the empirical basis
- [[Pre-training]]: the stage being budgeted
- [[Compute]]: the constraint being allocated
- [[Inference]]: why production models are trained past this point
- [[Small Language Model]]: the practical consequence

---

Part of [[AI Terminology Index]], section: Training and Post-training.

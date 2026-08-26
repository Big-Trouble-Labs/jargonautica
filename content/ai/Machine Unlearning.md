---
title: "Machine Unlearning"
aliases:
  - "Unlearning"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Removing what a model learned from particular data, as though it had never seen it."
---

# Machine Unlearning

## Plain View

Removing what a model learned from particular data, as though it had never seen it. There are legal reasons to want this, and technically it is close to impossible to do properly, because the influence of one document is spread thinly across billions of numbers.

## Technical View

Exact unlearning requires retraining without the data, which is prohibitive at scale; approximate methods use gradient ascent on the forget set, influence functions, or sharded architectures that limit which shards need retraining. Verification is the hard part: demonstrating absence of influence is stronger than demonstrating the model no longer says the thing, and evaluations show apparently unlearned information can often be recovered by adversarial prompting or light fine-tuning.

## Related

- [[Data Subject Rights]]: the legal driver
- [[Knowledge Editing]]: the targeted change counterpart
- [[Training Corpus]]: what would otherwise need reprocessing
- [[Retention Policy]]: deletion obligations that reach into models

---

Part of [[AI Terminology Index]], section: Training and Post-training.

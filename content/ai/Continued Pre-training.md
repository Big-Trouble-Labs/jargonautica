---
title: "Continued Pre-training"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Taking a finished model and carrying on the same kind of training on a large body of specialised material, such as legal texts, code, or a language the model handles poorly."
---

# Continued Pre-training

## Plain View

Taking a finished model and carrying on the same kind of training on a large body of specialised material, such as legal texts, code, or a language the model handles poorly. It is heavier than fine-tuning and lighter than starting again, and it is the right tool for adding a whole domain rather than a task or a style.

## Technical View

Also called domain-adaptive pre-training. Uses the same objective on a new corpus, typically billions of tokens, usually mixed with a proportion of general data to limit catastrophic forgetting. Requires care with learning rate, since resuming at the original peak destroys existing capability while too low a rate learns nothing. It is the standard route for adding a low-resource language, and is followed by instruction tuning to restore assistant behaviour.

## Related

- [[Pre-training]]: the stage it extends
- [[Catastrophic Forgetting]]: the risk it must manage
- [[Fine-tuning]]: the lighter alternative
- [[Language Coverage]]: the standard route for adding a language
- [[Data Mixture]]: what gets blended in

---

Part of [[AI Terminology Index]], section: Training and Post-training.

---
title: "Knowledge Editing"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Changing one specific fact inside a model without retraining it."
---

# Knowledge Editing

## Plain View

Changing one specific fact inside a model without retraining it. Useful when a person's job title changes or a figure is wrong, and much harder than it sounds, because facts are not stored in one place and editing one thing tends to disturb others.

## Technical View

Methods locate factual associations, often in feed-forward layers, and apply targeted rank-one or low-rank updates. Evaluation covers reliability on the edited fact, generality across paraphrases, and locality, meaning unrelated knowledge is preserved. Sequential edits degrade the model, and edited facts often fail to propagate to consequences, so the model may accept the new fact while still asserting things that contradict it. Retrieval remains the more reliable route for changeable knowledge.

## Related

- [[Machine Unlearning]]: the removal counterpart
- [[Retrieval Augmented Generation]]: the more reliable route for changeable facts
- [[Interpretability]]: editing depends on locating knowledge
- [[Continual Learning]]: the broader updating problem

---

Part of [[AI Terminology Index]], section: Training and Post-training.

---
title: "Constitutional AI"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Training a model against a written set of principles rather than case-by-case human judgements."
---

# Constitutional AI

## Plain View

Training a model against a written set of principles rather than case-by-case human judgements. The model critiques and revises its own outputs against the stated rules, and those revisions become training data. The advantage is that the values are written down and can be argued with.

## Technical View

Combines a supervised phase, where the model self-critiques and revises against principles, with a preference phase where the principles guide AI-generated preference labels. Introduced by Anthropic. It makes the normative content explicit and auditable rather than implicit in annotator behaviour, and it scales oversight, though principles still require interpretation and can conflict, so the ordering and wording of the document does real work.

## Related

- [[Alignment]]: the goal it serves
- [[Reinforcement Learning from AI Feedback]]: the mechanism it uses
- [[Reflection and Self-critique]]: self-revision against principles
- [[Scalable Oversight]]: principles as a way of scaling human judgement

---

Part of [[AI Terminology Index]], section: Training and Post-training.

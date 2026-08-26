---
title: "Weak-to-strong Generalisation"
tags:
  - glossary/ai
  - ai/alignment
section: "Alignment and Safety Concepts"
summary: "The question of whether supervision from a weaker teacher can bring out the full ability of a stronger student."
---

# Weak-to-strong Generalisation

## Plain View

The question of whether supervision from a weaker teacher can bring out the full ability of a stronger student. Experiments train a large model on labels from a small one and find that the large model often exceeds its teacher, which is mildly encouraging for the prospect of humans supervising more capable systems.

## Technical View

Studied by using a weak model's outputs as training labels for a strong model and measuring the recovered fraction of the gap to strong supervision. Results show partial recovery, improved by auxiliary confidence losses and by bootstrapping through intermediate model sizes. It is an analogy for human supervision of superhuman systems, with the caveat that the disanalogy may matter: weak models err differently from humans, and the strong student is not adversarial.

## Related

- [[Scalable Oversight]]: the problem it studies
- [[Alignment]]: the wider goal
- [[Distillation]]: the related teacher-student setup
- [[Generalisation]]: the property in question

---

Part of [[AI Terminology Index]], section: Alignment and Safety Concepts.

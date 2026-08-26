---
title: "Refusal and Over-refusal"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "A model declining to help."
---

# Refusal and Over-refusal

## Plain View

A model declining to help. Sometimes that is correct and sometimes it is a nuisance, refusing a chemistry homework question because it mentions a chemical, or a security task because it mentions an attack. Over-refusal is a real cost, both because it annoys users and because it pushes them towards tools with no safeguards at all.

## Technical View

Refusal behaviour is installed during preference training and is measurable in both directions: harmful compliance rate against benign refusal rate, with dedicated benchmarks for the latter. Refusal appears to be mediated by identifiable directions in activation space, which is why steering and abliteration techniques can remove it from open weights. Calibrating the boundary is a policy decision, and different deployments legitimately want it in different places.

## Related

- [[Alignment]]: where refusal behaviour is installed
- [[Guardrails]]: the outside-the-model counterpart
- [[Jailbreaking]]: attempts to defeat it
- [[Steering Vector]]: refusal as a direction that can be removed
- [[Open Weights]]: why safety training is removable from published weights

---

Part of [[AI Terminology Index]], section: Training and Post-training.

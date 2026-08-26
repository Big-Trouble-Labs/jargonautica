---
title: "Adversarial Examples"
aliases:
  - "Adversarial Attack"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Inputs altered so slightly that a person notices nothing, but which cause a model to get the answer badly wrong."
---

# Adversarial Examples

## Plain View

Inputs altered so slightly that a person notices nothing, but which cause a model to get the answer badly wrong. A few pixels changed and a stop sign is read as a speed limit sign. They demonstrate that these systems do not see what we see, and they are surprisingly hard to defend against.

## Technical View

Constructed by following the gradient of the loss with respect to the input under a small perturbation budget, and they transfer between models with different architectures, which allows attacks without access to the target. Adversarial training improves robustness at some cost to clean accuracy but does not solve the problem. Physical-world variants using printed patches work against camera systems. The language model analogue is adversarial suffixes, token sequences found by search that reliably induce policy violations and transfer across models.

## Related

- [[Computer Vision]]: where these were first demonstrated
- [[Jailbreaking]]: the language model equivalent
- [[Red Teaming]]: how you go looking for them
- [[Neural Network]]: the property of these models being exposed
- [[Guardrails]]: what they are used to test

---

Part of [[AI Terminology Index]], section: Security and Privacy.

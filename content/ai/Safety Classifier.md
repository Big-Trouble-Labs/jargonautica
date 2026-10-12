---
title: "Safety Classifier"
aliases:
  - "Safety Classifiers"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "A separate, usually smaller AI model that screens what goes into and comes out of a main model, flagging or blocking harmful content."
---

# Safety Classifier

## Plain View

A separate, usually smaller AI model that screens what goes into and comes out of a main model, flagging or blocking harmful content. Rather than relying only on the main model to refuse bad requests, a classifier checks each message against a list of disallowed categories, like one filter at the door and another at the exit. Classifiers catch much that would otherwise slip through, but they can also block innocent requests by mistake.

## Technical View

Input classifiers screen prompts and output classifiers screen completions, sometimes during streaming so generation can be halted part way. They are trained on labelled or synthetic examples against a written policy, as with Meta's Llama Guard (December 2023), which uses a language model as the classifier, and Anthropic's Constitutional Classifiers (February 2025), trained on synthetic data generated from a list of allowed and disallowed content. The trade-offs are false positives, which raise over-refusal, extra compute and latency, and adaptive attackers who probe for blind spots. Being independent of the main model, they add defence in depth and can be updated without retraining it.

## Related

- [[Guardrails]]: the wider family of runtime checks
- [[Content Moderation]]: the task it automates
- [[Refusal and Over-refusal]]: the cost of false positives
- [[Jailbreaking]]: the attacks it is meant to stop
- [[Constitutional AI]]: the policy-driven approach some classifiers borrow
- [[Abuse Monitoring]]: account-level detection that complements it

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.

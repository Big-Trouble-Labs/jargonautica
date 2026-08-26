---
title: "Structured Output"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "Forcing a model to reply in a strict machine-readable format rather than free text, so its answer can be fed directly into other software without anything having to interpret it."
---

# Structured Output

## Plain View

Forcing a model to reply in a strict machine-readable format rather than free text, so its answer can be fed directly into other software without anything having to interpret it. Essential for anything automated, since prose replies that are almost the right shape will break a program.

## Technical View

Implemented either by prompting alone, which is unreliable, or by constrained decoding, where the sampling process is restricted at each step to tokens that keep the output valid against a schema. The latter guarantees syntactic validity but not semantic correctness: a model can return well-formed output containing the wrong values.

## Related

- [[Tool Use and Function Calling]]: the main place strict formats are needed
- [[Agent]]: systems that depend on machine-readable replies
- [[Temperature and Sampling]]: constrained decoding intervenes here
- [[Prompt Engineering]]: the unreliable way of getting the same result

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.

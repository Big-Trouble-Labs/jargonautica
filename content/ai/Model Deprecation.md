---
title: "Model Deprecation"
aliases:
  - "Deprecation"
tags:
  - glossary/ai
  - ai/cost
section: "Cost, Speed and Service Levels"
summary: "What happens when the model your product depends on is retired or quietly updated."
---

# Model Deprecation

## Plain View

What happens when the model your product depends on is retired or quietly updated. Behaviour changes, prompts that were carefully tuned stop working as well, and outputs shift in ways your users notice before you do. Anyone building on a third-party model is building on something that moves, and planning for that is part of the job.

## Technical View

Mitigations include pinning specific model versions rather than aliases, keeping an evaluation suite that can be run against a candidate replacement, abstracting the provider behind an internal interface, and tracking deprecation notices deliberately. Migration is rarely a swap: prompts, temperature settings, tool descriptions and output parsing may all need revisiting, and a golden dataset turns that from a subjective exercise into a measurable one. Fine-tuned models are worse, since the base they were built on can itself be withdrawn.

## Related

- [[Golden Dataset]]: what makes a migration measurable
- [[Machine Learning Operations]]: the discipline that handles it
- [[Benchmarks and Evals]]: run against the candidate replacement
- [[Fine-tuning]]: worse affected, since the base can be withdrawn
- [[Model Card]]: where version and lifecycle should be documented

---

Part of [[AI Terminology Index]], section: Cost, Speed and Service Levels.

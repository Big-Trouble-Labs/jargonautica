---
title: "Dangerous Capability Evaluation"
aliases:
  - "Frontier Evaluation"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Testing specifically for the abilities that would make a model seriously harmful, rather than for how useful it is."
---

# Dangerous Capability Evaluation

## Plain View

Testing specifically for the abilities that would make a model seriously harmful, rather than for how useful it is. Cyber offence, assistance with weapons, autonomous replication, and the ability to operate without oversight. These evaluations gate release decisions at the frontier.

## Technical View

Conducted with elicitation designed to maximise measured capability, including fine-tuning, scaffolding and expert prompting, since the question is what the model could do rather than what it does by default. Domains include automated exploitation, biological protocol assistance, self-replication and autonomous resource acquisition. Run pre-deployment and often by external evaluators, with results feeding a defined threshold framework. Under-elicitation is the central methodological risk.

## Related

- [[Capability Uplift]]: the quantity being estimated
- [[Responsible Scaling Policy]]: what the results gate
- [[Red Teaming]]: the elicitation methods used
- [[AI Safety Institutes]]: who else runs them
- [[Benchmarks and Evals]]: the wider practice

---

Part of [[AI Terminology Index]], section: Security and Privacy.

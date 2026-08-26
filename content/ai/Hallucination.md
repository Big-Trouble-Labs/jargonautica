---
title: "Hallucination"
aliases:
  - "Hallucinations"
  - "Confabulation"
tags:
  - glossary/ai
  - ai/risks
section: "Problems, Risks and Ambitions"
summary: "When a model states something false with complete confidence."
---

# Hallucination

## Plain View

When a model states something false with complete confidence. Invented citations, plausible but wrong figures, non-existent legal cases. This follows directly from how these systems work. They produce text that fits the pattern of a good answer, and a convincing wrong answer fits that pattern just as well as a right one. The model has no internal flag distinguishing what it knows from what it is confabulating, which is why anything consequential needs checking.

## Technical View

The training objective rewards plausible continuations, not truthfulness, and there is no separate mechanism for verifying claims. Rates are worse for obscure topics where training data was sparse, and for specifics such as numbers, dates, names and references. Mitigations include retrieval grounding, requiring citations that can be checked, and training models to express uncertainty, but no method eliminates the problem. Some researchers argue it is intrinsic to the approach rather than a bug awaiting a fix.

## Related

- [[Large Language Model]]: the prediction objective this follows from
- [[Retrieval Augmented Generation]]: the main practical mitigation
- [[Knowledge Cutoff]]: a common trigger for invented answers
- [[Temperature and Sampling]]: settings that make it more or less likely
- [[Benchmarks and Evals]]: how rates are measured
- [[Guardrails]]: checks that catch some of it after the fact

---

Part of [[AI Terminology Index]], section: Problems, Risks and Ambitions.

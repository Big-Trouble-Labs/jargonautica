---
title: "Jailbreaking"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "Getting a model to bypass its own restrictions, usually by disguising the request."
---

# Jailbreaking

## Plain View

Getting a model to bypass its own restrictions, usually by disguising the request. Common tricks include framing something as fiction, as a hypothetical, as a translation exercise, or as a task for a different persona. Every publicly available model has been jailbroken, and it remains an unsolved problem rather than a bug awaiting a patch.

## Technical View

Techniques include role-play framing, encoding requests to evade input filters, gradual escalation across turns, many-shot approaches exploiting long context windows, and automatically generated adversarial suffixes. The underlying difficulty is that safety training shapes behaviour statistically rather than imposing hard constraints, so sufficiently unusual framings fall outside the distribution the training covered. Defence in depth, combining safety training with separate input and output filtering, is the standard practical response.

## Related

- [[Red Teaming]]: doing this deliberately, in-house
- [[Guardrails]]: the outer defences being circumvented
- [[Prompt Injection]]: the related attack using outside content
- [[Alignment]]: the training this tries to override
- [[System Prompt]]: the instructions being overridden

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.

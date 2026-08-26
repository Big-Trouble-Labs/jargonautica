---
title: "Guardrails"
aliases:
  - "Guardrail"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "Checks placed around a model rather than inside it."
---

# Guardrails

## Plain View

Checks placed around a model rather than inside it. A separate system inspects what goes in and what comes out, blocking or flagging anything that breaks the rules. Because these sit outside the model, they can be updated immediately when a problem is found, without any retraining.

## Technical View

Typically implemented as classifiers, rule sets or smaller models applied to inputs and outputs, covering categories such as harmful content, personal data leakage, off-topic use and prompt injection patterns. The trade-off is between false positives, which block legitimate use and frustrate users, and false negatives, which let harmful content through. Output-side guardrails add latency, particularly where they require the full response before a judgement can be made.

## Related

- [[Alignment]]: the in-training counterpart to these outside checks
- [[Jailbreaking]]: what they are meant to stop
- [[Prompt Injection]]: the other attack class they screen for
- [[Red Teaming]]: how they get tested
- [[Machine Learning Operations]]: running and updating them in production

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.

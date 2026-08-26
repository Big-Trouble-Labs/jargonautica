---
title: "Content Moderation"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Filtering what goes in and what comes out."
---

# Content Moderation

## Plain View

Filtering what goes in and what comes out. It sits outside the model, which means it can be updated immediately when something new appears, unlike model behaviour, which requires retraining. Every deployment needs some version of this, and its calibration is a policy question rather than a technical one.

## Technical View

Implemented as classifiers over input and output covering defined harm categories, with thresholds set per category and per deployment context. Output-side filtering adds latency and interacts badly with streaming. The unavoidable trade-off is between false positives, which block legitimate use, and false negatives. Multilingual and coded language degrade classifier performance, and moderation decisions should be logged for audit and appeal.

## Related

- [[Guardrails]]: the wider control layer
- [[Abuse Monitoring]]: the cross-request counterpart
- [[Accuracy, Precision and Recall]]: the false positive trade-off
- [[Streaming]]: output filtering complicates it
- [[Language Coverage]]: classifiers degrade outside English

---

Part of [[AI Terminology Index]], section: Security and Privacy.

---
title: "Capability Uplift"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "The right question to ask about a dangerous capability: not whether a model can explain something, but whether it meaningfully helps someone who could not otherwise have done it."
---

# Capability Uplift

## Plain View

The right question to ask about a dangerous capability: not whether a model can explain something, but whether it meaningfully helps someone who could not otherwise have done it. Information freely available in a library provides no uplift. Synthesising, troubleshooting and tailoring it might.

## Technical View

Assessed by controlled studies comparing task performance of participants with and without model assistance, against baselines including internet search, measuring time to completion and success rate on proxy tasks. Methodological difficulty is severe: proxy tasks must be safe to run yet predictive of the real thing, and expertise level of participants dominates results. It is nonetheless the framing used in developer safety policies to decide whether a capability threshold has been crossed.

## Related

- [[Dangerous Capability Evaluation]]: the testing programme
- [[Dual Use]]: the underlying problem
- [[Responsible Scaling Policy]]: where thresholds are set
- [[Red Teaming]]: elicitation as part of measurement

---

Part of [[AI Terminology Index]], section: Security and Privacy.

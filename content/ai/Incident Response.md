---
title: "Incident Response"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "What happens when it breaks at three in the morning."
---

# Incident Response

## Plain View

What happens when it breaks at three in the morning. Who is called, what they check first, how the problem is communicated, and what is written down afterwards. AI systems add their own failure modes, including quality degradation that no alarm detects because everything is technically working.

## Technical View

Requires severity definitions, on-call rotation, runbooks per known failure class, and a declared incident channel. AI-specific classes include provider outage and deprecation, quality regression after a model update, guardrail false positive spikes, cost anomalies from runaway loops, and prompt injection incidents. Blameless post-incident review with tracked actions is what converts an outage into a durable improvement, and quality incidents need a detection story since they are silent by default.

## Related

- [[Service Level Objective]]: what a breach triggers
- [[Rollback]]: the fastest mitigation
- [[Audit Logging]]: the evidence trail
- [[Model Deprecation]]: a common cause of AI incidents
- [[Observability and Tracing]]: how the cause is found

---

Part of [[AI Terminology Index]], section: Running It in Production.

---
title: "Model Router"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "Sending each request to the model that suits it, rather than sending everything to the largest one."
---

# Model Router

## Plain View

Sending each request to the model that suits it, rather than sending everything to the largest one. Most traffic is simple and a small model handles it identically at a fraction of the price. The difficulty is deciding which is which without spending as much on the decision as you saved.

## Technical View

Routing signals include a lightweight classifier over the request, task type, required capabilities such as tool use or long context, and cascade approaches that try a small model and escalate when confidence or a verifier check fails. Must be evaluated as a system, since routing errors concentrate on exactly the hard cases the small model handles worst. Also serves availability, by failing over across providers.

## Related

- [[Small Language Model]]: where most traffic should go
- [[Cost Per Task]]: the saving it targets
- [[Fallback and Failover]]: routing for availability
- [[Early Exit]]: the within-model version
- [[Model Confidence and Calibration]]: escalation depends on it

---

Part of [[AI Terminology Index]], section: Running It in Production.

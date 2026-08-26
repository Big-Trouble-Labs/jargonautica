---
title: "Fallback and Failover"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "What happens when the primary route fails."
---

# Fallback and Failover

## Plain View

What happens when the primary route fails. Providers have outages, rate limits bite, and requests time out. Deciding in advance whether to retry, switch to another model, serve a cached answer or degrade gracefully is what separates a brief blip from an incident.

## Technical View

Strategies include cross-provider failover, which requires prompt and output-format compatibility testing in advance, downgrade to a smaller model, serving stale cached responses, and queueing for later processing. Behaviour should be observable, since silent fallback to a weaker model produces a quality regression nobody can explain. Fallback paths need their own evaluation, as they are exercised rarely and therefore rot.

## Related

- [[Circuit Breaker]]: the failure control that triggers it
- [[Model Router]]: the routing mechanism
- [[Service Level Objective]]: what it protects
- [[Rate Limits and Quotas]]: a common trigger
- [[Observability and Tracing]]: silent fallback must be visible

---

Part of [[AI Terminology Index]], section: Running It in Production.

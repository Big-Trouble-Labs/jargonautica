---
title: "Serving Endpoint"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "The address your application actually calls, and everything behind it that turns a request into a response."
---

# Serving Endpoint

## Plain View

The address your application actually calls, and everything behind it that turns a request into a response. Whether it is a hosted provider or something you run yourself, this is the boundary where availability, latency, cost and security all become concrete.

## Technical View

Concerns include authentication and authorisation, request validation, timeout and cancellation semantics, streaming support, concurrency limits, and versioned routes so clients are not broken by changes. Self-hosted serving adds model loading, batching strategy and memory management. The endpoint is also the natural place for cross-cutting controls: rate limiting, guardrails, logging and cost attribution per caller.

## Related

- [[Inference]]: what happens behind it
- [[Autoscaling]]: how capacity is matched to demand
- [[Rate Limits and Quotas]]: enforced at this boundary
- [[Guardrails]]: the natural place for them
- [[Service Level Objective]]: what it is measured against

---

Part of [[AI Terminology Index]], section: Running It in Production.

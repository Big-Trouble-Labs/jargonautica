---
title: "Circuit Breaker"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "Automatically stopping calls to a failing dependency for a while, instead of hammering it with retries."
---

# Circuit Breaker

## Plain View

Automatically stopping calls to a failing dependency for a while, instead of hammering it with retries. It protects the failing service from being kept down, and it protects your system from spending its whole capacity waiting for timeouts.

## Technical View

Trips from closed to open when the failure rate over a rolling window exceeds a threshold, rejecting calls immediately, then moves to half-open after a cooldown to test recovery with limited traffic. Combined with bounded retries and backoff with jitter to avoid synchronised retry storms. Particularly relevant with model providers, where timeouts are long and retry amplification can consume the entire rate limit.

## Related

- [[Fallback and Failover]]: what happens when it trips
- [[Idempotency and Retries]]: retry policy it constrains
- [[Rate Limits and Quotas]]: retry storms consume them
- [[Incident Response]]: containing a failing dependency

---

Part of [[AI Terminology Index]], section: Running It in Production.

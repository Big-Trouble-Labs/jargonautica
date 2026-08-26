---
title: "Idempotency and Retries"
aliases:
  - "Idempotency"
  - "Retries"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Making it safe to do the same thing twice."
---

# Idempotency and Retries

## Plain View

Making it safe to do the same thing twice. Agents retry, and if a retry sends the same payment or files the same ticket again, the retry itself becomes the incident. Designing actions so repetition is harmless is what makes automatic retry acceptable at all.

## Technical View

Achieved with client-generated idempotency keys deduplicated server-side, or with naturally idempotent operations such as set rather than increment. Retry policy should use exponential backoff with jitter, bounded attempts, and classification of errors into retryable and terminal. Actions with external side effects require particular care, including a preview or confirmation step, and any non-idempotent operation should be recorded before execution so partial failure can be reconciled.

## Related

- [[Circuit Breaker]]: the complementary failure control
- [[Agent]]: which retries by default
- [[Reversibility]]: the product-level equivalent
- [[Audit Logging]]: recording actions before execution
- [[Rate Limits and Quotas]]: retry storms consume them

---

Part of [[AI Terminology Index]], section: Agents and Tools.

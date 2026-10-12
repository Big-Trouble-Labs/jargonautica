---
title: "AI Gateway"
aliases:
  - "LLM Gateway"
  - "LLM Proxy"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "A single checkpoint between an organisation's applications and the AI models they use, so every request passes through one place."
---

# AI Gateway

## Plain View

A single checkpoint between an organisation's applications and the AI models they use, so every request passes through one place. From there a team can control who uses which model, keep secret access keys out of individual apps, track spending, apply safety filters and switch providers without rewriting each application. It is the AI version of a familiar idea in software: put a controlled front door in front of outside services.

## Technical View

A reverse proxy specialised for model traffic, usually exposing one provider-neutral application programming interface ('API') and translating to each provider's format. Typical functions are credential management, authentication, per-team rate limits and budgets, cost attribution, caching, routing and fallback across models, request and response logging, redaction of personal data and guardrail checks. The trade-offs are an extra network hop and latency, a single point of failure that must itself be highly available, and a concentration of sensitive prompts and logs that needs strong protection. Some gateways also broker agent tool traffic, such as Model Context Protocol connections.

## Related

- [[Model Router]]: a function it often hosts
- [[Rate Limits and Quotas]]: controls it enforces centrally
- [[Secrets Management]]: keeps provider keys out of applications
- [[Fallback and Failover]]: switching providers when one fails
- [[Observability and Tracing]]: the logging it makes possible
- [[Shadow AI]]: the unsanctioned use it helps reduce

---

Part of [[AI Terminology Index]], section: Running It in Production.

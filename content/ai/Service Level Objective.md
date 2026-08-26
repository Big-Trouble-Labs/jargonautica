---
title: "Service Level Objective"
aliases:
  - "SLO"
  - "SLA"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "The number you promise, such as ninety-nine per cent of requests answered within three seconds."
---

# Service Level Objective

## Plain View

The number you promise, such as ninety-nine per cent of requests answered within three seconds. Stating it forces the conversation about what matters, and it gives an objective basis for deciding whether to spend on reliability or on features.

## Technical View

An objective is an internal target, an agreement is the contractual version with consequences, and an indicator is the measurement. Define indicators on user-visible behaviour, latency percentiles, availability and error rate, over a stated window. Error budget, the permitted shortfall, provides a principled basis for release pace. For model-backed systems, quality should also carry an objective, measured by proxy signals, or reliability work will optimise only speed.

## Related

- [[Latency, Throughput and Time to First Token]]: the usual indicators
- [[Canary Release]]: gated on these thresholds
- [[Incident Response]]: breaches trigger it
- [[Load Testing]]: how targets are validated
- [[Machine Learning Operations]]: the practice it belongs to

---

Part of [[AI Terminology Index]], section: Running It in Production.

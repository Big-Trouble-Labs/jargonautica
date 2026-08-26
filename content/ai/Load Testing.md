---
title: "Load Testing"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "Deliberately finding the breaking point before your users do."
---

# Load Testing

## Plain View

Deliberately finding the breaking point before your users do. Send progressively more traffic until something fails and see what fails first. For model-backed systems the answer is often the provider's rate limit rather than anything you control, which is useful to discover in advance.

## Technical View

Should use realistic prompt and output length distributions, since latency depends strongly on both, and should measure percentiles rather than means, alongside error rate and cost per request under load. Identify the binding constraint: accelerator memory, rate limits, queue depth or a downstream dependency. Include soak tests for memory leaks and cache growth, and test the degradation path, since behaviour at overload matters more than the headline capacity number.

## Related

- [[Latency, Throughput and Time to First Token]]: the numbers under load
- [[Rate Limits and Quotas]]: usually the binding constraint
- [[Autoscaling]]: what is being exercised
- [[Service Level Objective]]: the targets being validated

---

Part of [[AI Terminology Index]], section: Running It in Production.

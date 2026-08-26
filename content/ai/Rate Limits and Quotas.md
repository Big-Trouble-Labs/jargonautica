---
title: "Rate Limits and Quotas"
aliases:
  - "Rate Limit"
  - "Quota"
tags:
  - glossary/ai
  - ai/cost
section: "Cost, Speed and Service Levels"
summary: "The caps a provider puts on how much you can use, usually counted in requests and tokens per minute."
---

# Rate Limits and Quotas

## Plain View

The caps a provider puts on how much you can use, usually counted in requests and tokens per minute. They shape architecture more than people expect: a design that works in testing can fail at launch purely because it makes too many calls too quickly. Worth checking before building rather than after.

## Technical View

Typically enforced per organisation and model across several dimensions at once, with headroom granted by usage tier. Applications need exponential backoff with jitter on rate limit responses, a queue for burst traffic, and graceful degradation to a smaller model or a cached answer rather than an error. Batch endpoints trade latency for much higher effective limits and lower prices on work that is not interactive. Agentic systems consume limits in bursts and are usually the first casualty.

## Related

- [[Cost Per Task]]: the other constraint that shapes design
- [[Inference]]: what is being limited
- [[Agent]]: the pattern that hits limits first
- [[Machine Learning Operations]]: where backoff and queueing get built

---

Part of [[AI Terminology Index]], section: Cost, Speed and Service Levels.

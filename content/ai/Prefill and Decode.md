---
title: "Prefill and Decode"
aliases:
  - "Prefill"
  - "Decode"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "The two phases of answering."
---

# Prefill and Decode

## Plain View

The two phases of answering. Prefill processes everything you sent, all at once and in parallel. Decode produces the reply one token at a time. They have completely different performance characteristics, which is why a long prompt with a short answer behaves so differently from a short prompt with a long answer.

## Technical View

Prefill is compute-bound and parallelisable across the whole input, dominating time to first token and scaling with prompt length. Decode is memory-bandwidth-bound and inherently sequential, dominating total latency for long outputs. Serving systems often schedule the two separately, and disaggregated architectures place them on different hardware, since the optimal configuration for each is different.

## Related

- [[Autoregressive Generation]]: why decode is sequential
- [[Latency, Throughput and Time to First Token]]: the numbers each phase drives
- [[Caching]]: prefix caching targets prefill
- [[Memory Bandwidth]]: the decode bottleneck
- [[Arithmetic Intensity]]: why the two phases differ so much

---

Part of [[AI Terminology Index]], section: Language Models Specifically.

---
title: "Latency, Throughput and Time to First Token"
aliases:
  - "Latency"
  - "Throughput"
  - "Time to First Token"
  - "TTFT"
tags:
  - glossary/ai
  - ai/cost
section: "Cost, Speed and Service Levels"
summary: "The three numbers that decide whether something feels usable."
---

# Latency, Throughput and Time to First Token

## Plain View

The three numbers that decide whether something feels usable. Time to first token is how long before anything appears, which is what users perceive as speed. Latency is how long the whole response takes. Throughput is how many requests the system can handle at once. They pull against each other, and optimising the wrong one produces a system that benchmarks well and feels sluggish.

## Technical View

Time to first token is dominated by prompt processing, so it scales with input length and is the main beneficiary of prefix caching. Inter-token latency governs the rest and is memory-bandwidth-bound. Throughput improves with batching, which increases individual latency, so serving configuration is an explicit trade between the two. Percentiles matter more than averages, since tail latency drives perceived reliability, and any agentic design multiplies all of it by the number of sequential model calls.

## Related

- [[Inference]]: the stage being measured
- [[Streaming]]: how time to first token becomes what users feel
- [[Caching]]: the main lever on time to first token
- [[Speculative Decoding]]: the main lever on the rest
- [[Tokens Per Second]]: the related headline figure

---

Part of [[AI Terminology Index]], section: Cost, Speed and Service Levels.

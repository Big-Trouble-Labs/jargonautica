---
title: "Memory Bandwidth"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "How fast numbers can be moved between the chip's memory and its calculating units."
---

# Memory Bandwidth

## Plain View

How fast numbers can be moved between the chip's memory and its calculating units. For generating text this matters more than raw calculating power, because every token requires reading the whole model, and the reading is what takes the time. It is why quantisation speeds things up so much.

## Technical View

Decode is memory-bandwidth-bound: per token, the entire weight set plus the key-value cache must be read, so throughput approximates bandwidth divided by bytes read. This explains why halving precision nearly halves latency, why batching improves throughput without proportionally hurting latency, and why key-value cache size limits concurrency. Prefill, by contrast, is compute-bound with high arithmetic intensity.

## Related

- [[Arithmetic Intensity]]: the ratio that decides which limit binds
- [[Quantisation]]: why fewer bits means faster decode
- [[Prefill and Decode]]: the phase this constrains
- [[Graphics Processing Unit]]: the hardware property
- [[Continuous Batching]]: how throughput is recovered

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

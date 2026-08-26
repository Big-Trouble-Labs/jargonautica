---
title: "Continuous Batching"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "How a serving system keeps the hardware busy when requests arrive at random times and finish at different lengths."
---

# Continuous Batching

## Plain View

How a serving system keeps the hardware busy when requests arrive at random times and finish at different lengths. Instead of waiting for a whole batch to complete, it slots new requests in as others finish, which raises throughput dramatically.

## Technical View

Also called in-flight batching. The scheduler admits and evicts sequences at each decoding step rather than at batch boundaries, avoiding the padding waste and head-of-line blocking of static batching. Paired with paged attention, which manages the key-value cache in non-contiguous blocks to avoid fragmentation, it is the main reason modern inference servers achieve several times the throughput of naive implementations.

## Related

- [[Inference]]: the serving stage
- [[Arithmetic Intensity]]: why batching helps
- [[Caching]]: paged key-value cache management
- [[Latency, Throughput and Time to First Token]]: the trade it makes
- [[Grouped Query Attention]]: smaller caches allow bigger batches

---

Part of [[AI Terminology Index]], section: Running It in Production.

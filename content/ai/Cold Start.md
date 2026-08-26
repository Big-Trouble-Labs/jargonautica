---
title: "Cold Start"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "The delay when a new instance has to load the model before it can answer anything."
---

# Cold Start

## Plain View

The delay when a new instance has to load the model before it can answer anything. It can be several minutes for a large model, which means bursty traffic either waits or is served by capacity you were paying to keep idle.

## Technical View

Dominated by transferring weights from storage into accelerator memory, plus container image pull and runtime initialisation. Mitigations include caching images and weights on the node, streaming weights so serving begins before loading completes, memory-mapped loading, snapshotting initialised process state, and maintaining warm standby capacity. The trade-off between idle cost and tail latency during traffic spikes is a business decision, not a technical one.

## Related

- [[Autoscaling]]: the problem it complicates
- [[Latency, Throughput and Time to First Token]]: what users feel
- [[Serving Endpoint]]: where it happens
- [[On-device Inference]]: loading constraints in miniature

---

Part of [[AI Terminology Index]], section: Running It in Production.

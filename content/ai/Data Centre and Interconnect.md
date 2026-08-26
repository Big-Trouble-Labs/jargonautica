---
title: "Data Centre and Interconnect"
aliases:
  - "Data Centre"
  - "Interconnect"
tags:
  - glossary/ai
  - ai/hardware
section: "Hardware, Compute and Training Mechanics"
summary: "The buildings and cabling that large models are trained in."
---

# Data Centre and Interconnect

## Plain View

The buildings and cabling that large models are trained in. A frontier training run is not one machine but tens of thousands of chips wired together, and how fast they can talk to each other frequently matters more than how fast each one calculates. This is why these facilities are so expensive, so concentrated, and increasingly constrained by the availability of electricity.

## Technical View

Training is distributed across nodes using data, tensor and pipeline parallelism, all of which require frequent synchronisation of gradients or activations, making interconnect bandwidth and latency a first-order constraint. Technologies such as NVLink within a node and InfiniBand or high-speed Ethernet between nodes define achievable scale, and communication cost is why realised efficiency against theoretical peak is often well under half. At these scales hardware failures are routine rather than exceptional, so checkpointing and automatic restart are core parts of the training stack.

## Related

- [[Compute]]: what these facilities supply
- [[Graphics Processing Unit]]: what fills them
- [[Training]]: the workload that needs them at scale
- [[Energy and Water Use]]: the resource consequence
- [[Scaling Laws]]: why anyone builds them this large

---

Part of [[AI Terminology Index]], section: Hardware, Compute and Training Mechanics.

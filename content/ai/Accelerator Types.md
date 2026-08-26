---
title: "Accelerator Types"
aliases:
  - "NPU"
  - "ASIC"
  - "Accelerator"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "The different chips this runs on."
---

# Accelerator Types

## Plain View

The different chips this runs on. Graphics processors are the general-purpose default. Tensor processing units are purpose-built by Google. Neural processing units sit in phones and laptops. Custom chips from various companies target inference specifically. They differ mostly in memory capacity, memory speed and how well they talk to each other.

## Technical View

The decisive specifications are memory capacity, which bounds model size, memory bandwidth, which bounds decode speed, interconnect bandwidth, which bounds training scale, and supported numeric formats. Software maturity is a real differentiator, since the dominant ecosystem's tooling advantage is substantial. Inference-specialised hardware can achieve very high token rates by keeping weights in on-chip memory, at the cost of requiring many chips per model.

## Related

- [[Graphics Processing Unit]]: the general-purpose default
- [[Memory Bandwidth]]: the specification that matters most
- [[On-device Inference]]: where small accelerators are used
- [[Chip Export Controls]]: the geopolitics of access
- [[Data Centre and Interconnect]]: how they are wired together

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

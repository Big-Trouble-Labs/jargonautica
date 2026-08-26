---
title: "Compute"
aliases:
  - "FLOPs"
tags:
  - glossary/ai
  - ai/hardware
section: "Hardware, Compute and Training Mechanics"
summary: "The total amount of calculation used to train or run a model, and the industry's main unit of currency."
---

# Compute

## Plain View

The total amount of calculation used to train or run a model, and the industry's main unit of currency. Training runs are routinely described by how much compute they consumed, because it correlates closely with both cost and capability.

## Technical View

Usually measured in floating point operations ('FLOPs'), with training runs of frontier models now in the range of ten to the power of twenty-five and above. Compute thresholds have started appearing in regulation as a rough proxy for model capability, which is contested, since the relationship between compute and capability depends heavily on data quality and architecture.

## Related

- [[Graphics Processing Unit]]: the hardware compute is measured on
- [[Scaling Laws]]: how compute converts into capability
- [[Training]]: the largest single consumer of it
- [[Mixture of Experts]]: a design for spending less of it per request
- [[Reasoning Models and Test-Time Compute]]: spending it at answer time instead

---

Part of [[AI Terminology Index]], section: Hardware, Compute and Training Mechanics.

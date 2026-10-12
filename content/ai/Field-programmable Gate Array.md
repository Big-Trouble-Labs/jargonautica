---
title: "Field-programmable Gate Array"
aliases:
  - "FPGA"
tags:
  - glossary/ai
  - ai/hardware
section: "Hardware, Compute and Training Mechanics"
summary: "A computer chip whose internal wiring can be rearranged after it has been made, so the same chip can be turned into different special-purpose circuits."
---

# Field-programmable Gate Array

## Plain View

A computer chip whose internal wiring can be rearranged after it has been made, so the same chip can be turned into different special-purpose circuits. Most chips have their function fixed at the factory. This kind can be reprogrammed to behave like custom hardware for one job, then changed later. That makes it useful for prototypes and for tasks needing very fast, predictable responses, though it is harder to program than an ordinary processor.

## Technical View

Consists of configurable logic blocks, lookup tables, on-chip memory and digital signal processing ('DSP') slices joined by a programmable routing fabric, configured with a bitstream compiled from a hardware description language. Ross Freeman is credited with the invention, and Xilinx introduced the first commercial device, the XC2064, in 1985. For AI the attractions are low, deterministic latency, custom numeric precisions, energy efficiency at the edge and the ability to update designs in the field. Against that, peak throughput and memory bandwidth lag graphics processing units and dedicated accelerators, and development is slower. Uses include low-latency inference in networking, finance and sensors, and prototyping custom chips.

## Related

- [[Accelerator Types]]: the family of AI chips it belongs to
- [[Graphics Processing Unit]]: the general-purpose alternative
- [[On-device Inference]]: a common deployment setting
- [[Precision Formats]]: custom precisions it can implement
- [[Latency, Throughput and Time to First Token]]: where its advantage lies

---

Part of [[AI Terminology Index]], section: Hardware, Compute and Training Mechanics.

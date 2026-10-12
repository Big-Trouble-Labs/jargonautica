---
title: "High Bandwidth Memory"
aliases:
  - "HBM"
tags:
  - glossary/ai
  - ai/hardware
section: "Hardware, Compute and Training Mechanics"
summary: "A type of computer memory built by stacking memory chips on top of each other right beside the processor, so data can move between them extremely quickly."
---

# High Bandwidth Memory

## Plain View

A type of computer memory built by stacking memory chips on top of each other right beside the processor, so data can move between them extremely quickly. AI chips spend much of their time waiting for numbers to arrive from memory rather than doing sums, so how fast memory can feed them often sets the real speed limit. This memory is expensive and difficult to make, and its supply is a major constraint on how many AI chips can be built.

## Technical View

Stacks dynamic random-access memory ('DRAM') dies joined by through-silicon vias beside the processor on a silicon interposer, with a wide interface per stack: 1024 bits up to HBM3E, doubled to 2048 bits in HBM4. The short connection gives far more bandwidth per watt than conventional graphics memory. Developed principally by AMD and SK Hynix, it became a JEDEC standard in October 2013 and first shipped in AMD's Fiji graphics processors in 2015. Because large-model inference, especially the decode phase, is usually memory-bound, the number and speed of stacks largely determine tokens per second and how large a model one accelerator can hold. Advanced packaging capacity is a recurring bottleneck.

## Related

- [[Memory Bandwidth]]: the quantity it exists to supply
- [[Graphics Processing Unit]]: the chip it sits beside
- [[Prefill and Decode]]: the decode phase it limits
- [[Arithmetic Intensity]]: why memory-bound work depends on it
- [[Accelerator Types]]: other chips that use it
- [[Chip Export Controls]]: where it has become a controlled item

---

Part of [[AI Terminology Index]], section: Hardware, Compute and Training Mechanics.

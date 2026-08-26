---
title: "Arithmetic Intensity"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "How much calculation you do for each number you fetch from memory."
---

# Arithmetic Intensity

## Plain View

How much calculation you do for each number you fetch from memory. If it is low, the chip spends its time waiting rather than computing, and the impressive figure on the specification sheet is irrelevant. Almost everything about making inference fast comes down to raising this ratio.

## Technical View

Operations per byte of memory traffic, compared against a device's ratio of peak compute to peak bandwidth in a roofline analysis to determine which limit binds. Matrix-matrix multiplication has high intensity; matrix-vector multiplication, which is what single-sequence decoding performs, has low intensity. Batching converts the latter into the former, which is the fundamental reason serving systems batch aggressively.

## Related

- [[Memory Bandwidth]]: the other half of the roofline
- [[Prefill and Decode]]: the two phases sit at opposite ends
- [[Continuous Batching]]: batching raises it
- [[Compilation and Kernel Fusion]]: fusion raises it too

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

---
title: "Precision Formats"
aliases:
  - "FP16"
  - "BF16"
  - "FP8"
  - "INT8"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "How many bits are used for each number, and how they are arranged."
---

# Precision Formats

## Plain View

How many bits are used for each number, and how they are arranged. Fewer bits means less memory and more speed, with some loss of accuracy. The names are cryptic: FP32 is full precision, BF16 and FP16 are half, FP8 and INT8 are quarter, and INT4 is what lets a large model run on a laptop.

## Technical View

Floating point formats trade exponent bits, which give range, against mantissa bits, which give precision. BF16 keeps FP32's exponent range with fewer mantissa bits, avoiding the overflow problems that make FP16 training require loss scaling. Integer formats need scale factors, applied per tensor, per channel or per group, with finer granularity preserving more quality. Weights tolerate lower precision than activations, and outlier channels dominate quantisation error.

## Related

- [[Quantisation]]: reducing precision after training
- [[Mixed Precision Training]]: using them during training
- [[Memory Bandwidth]]: fewer bits, less traffic
- [[Accelerator Types]]: which formats hardware supports

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

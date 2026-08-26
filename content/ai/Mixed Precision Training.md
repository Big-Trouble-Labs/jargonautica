---
title: "Mixed Precision Training"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Doing most of the arithmetic in a lower-precision number format to go faster and use less memory, while keeping the sensitive parts in full precision."
---

# Mixed Precision Training

## Plain View

Doing most of the arithmetic in a lower-precision number format to go faster and use less memory, while keeping the sensitive parts in full precision. It roughly doubles training speed on modern hardware for almost no loss in quality, which is why everyone does it.

## Technical View

Stores and computes in 16-bit formats while maintaining a full-precision copy of weights and performing accumulations in higher precision. FP16 requires loss scaling to avoid gradient underflow; BF16 has the same exponent range as FP32 and avoids the issue, which is why it is now preferred. FP8 training is emerging on newer hardware with additional scaling machinery.

## Related

- [[Precision Formats]]: the number formats involved
- [[Training]]: the stage it speeds up
- [[Quantisation]]: the same idea applied at inference
- [[Memory Bandwidth]]: why fewer bits means faster

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

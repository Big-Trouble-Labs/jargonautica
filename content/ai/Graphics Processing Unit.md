---
title: "Graphics Processing Unit"
aliases:
  - "GPU"
  - "TPU"
tags:
  - glossary/ai
  - ai/hardware
section: "Hardware, Compute and Training Mechanics"
summary: "The specialised chip that nearly all AI training and running depends on."
---

# Graphics Processing Unit

## Plain View

The specialised chip that nearly all AI training and running depends on. Originally built for rendering video game graphics, it turned out to be ideally suited to AI because both tasks involve doing enormous numbers of simple calculations at the same time. Access to these chips is the main practical bottleneck in the industry, and the reason for both their cost and their geopolitical significance.

## Technical View

GPUs provide massive parallelism suited to the matrix multiplications that dominate neural network computation. Tensor processing units ('TPUs') are purpose-built alternatives. In practice, high-bandwidth memory capacity and interconnect speed between chips are often more limiting than raw arithmetic throughput, particularly at inference, which is why memory-reduction techniques such as quantisation translate so directly into speed.

## Related

- [[Compute]]: what these chips supply
- [[Training]]: the stage that consumes them in bulk
- [[Inference]]: the stage that consumes them continuously
- [[Deep Learning]]: the approach these chips made practical
- [[Quantisation]]: a direct response to their memory limits

---

Part of [[AI Terminology Index]], section: Hardware, Compute and Training Mechanics.

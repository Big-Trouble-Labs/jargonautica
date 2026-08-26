---
title: "On-device Inference"
aliases:
  - "Edge Inference"
  - "Local Inference"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "Running a model on the phone, laptop or piece of equipment in front of you rather than in a data centre."
---

# On-device Inference

## Plain View

Running a model on the phone, laptop or piece of equipment in front of you rather than in a data centre. Nothing leaves the device, there is no per-request cost, and it works without a network. The constraints are memory and battery, which is why the models are small and why quantisation matters so much here.

## Technical View

Constrained mainly by memory capacity and bandwidth rather than arithmetic throughput. Modern devices provide dedicated neural accelerators, and runtimes such as llama.cpp, ONNX Runtime and Core ML handle quantised execution. Practical concerns include model download size and update strategy, thermal throttling on sustained generation, and battery cost. Hybrid designs run a small model locally and defer to a hosted one for hard requests, which raises the question of what data crosses that boundary and whether the user is told.

## Related

- [[Small Language Model]]: what runs there
- [[Quantisation]]: the technique that makes it possible
- [[Inference]]: the general stage this is a variety of
- [[Data Residency and Confidentiality]]: the strongest version of keeping data local
- [[Graphics Processing Unit]]: the hardware constraint, in miniature

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

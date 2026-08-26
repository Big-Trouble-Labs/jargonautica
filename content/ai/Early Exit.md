---
title: "Early Exit"
aliases:
  - "Adaptive Computation"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "Stopping the computation once the answer is already clear rather than pushing every input through the entire model."
---

# Early Exit

## Plain View

Stopping the computation once the answer is already clear rather than pushing every input through the entire model. Easy inputs do not need eighty layers. It saves a great deal on average while leaving hard cases fully processed.

## Technical View

Attaches classifiers at intermediate layers and exits when confidence exceeds a threshold, requiring training of the intermediate heads and calibration of the threshold. Complicates batching, since different inputs exit at different depths, which limits gains in high-throughput serving. Related ideas include cascade routing between separate models of different sizes and adaptive computation allocated per token, which is easier to schedule.

## Related

- [[Sparsity]]: skipping work that contributes little
- [[Model Router]]: the cross-model version of the same idea
- [[Inference]]: the stage it shortens
- [[Continuous Batching]]: why variable depth complicates serving
- [[Model Confidence and Calibration]]: the threshold depends on it

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

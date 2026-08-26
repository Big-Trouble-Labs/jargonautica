---
title: "Mixture of Experts"
aliases:
  - "MoE"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "A design where the model is divided into many specialised sub-networks, and only a few of them are used for any given input."
---

# Mixture of Experts

## Plain View

A design where the model is divided into many specialised sub-networks, and only a few of them are used for any given input. This lets a model be very large in total while only doing a fraction of the work on each request, so you get the knowledge of a big model at closer to the running cost of a small one.

## Technical View

A routing network selects a small number of expert sub-networks per token, so total parameter count and active parameter count diverge sharply. A model might hold hundreds of billions of parameters while activating only tens of billions per token. This complicates comparisons based on headline parameter counts. Practical challenges include load balancing across experts, training instability, and the fact that all experts must still be held in memory even though most are idle at any moment.

## Related

- [[Compute]]: the cost problem this design addresses
- [[Inference]]: where the saving is realised
- [[Weights, Parameters and Biases]]: total and active parameter counts diverge here
- [[Scaling Laws]]: complicates comparisons based on headline size

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.

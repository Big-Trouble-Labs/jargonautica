---
title: "Differential Privacy"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "A mathematical guarantee that what a system publishes cannot reveal much about any single individual in the data."
---

# Differential Privacy

## Plain View

A mathematical guarantee that what a system publishes cannot reveal much about any single individual in the data. It works by adding a carefully measured amount of random noise, enough that no one person's presence changes the result meaningfully. It is the strongest privacy guarantee available and the price is accuracy.

## Technical View

Formally, the output distribution changes by at most a bounded factor when any single record is added or removed, with the bound controlled by the privacy budget epsilon. Differentially private stochastic gradient descent clips per-example gradients and adds calibrated noise during training. The accuracy cost falls disproportionately on rare groups and tail cases, which is a fairness concern in itself. Reported epsilon values are only comparable when the unit of privacy and the composition accounting are stated, and in practice the values used are often far weaker than the formalism suggests.

## Related

- [[Model Extraction and Membership Inference]]: the attacks this defends against
- [[Training Corpus]]: where the noise is applied
- [[Federated Learning]]: commonly layered together
- [[Bias]]: the accuracy cost falls hardest on rare groups

---

Part of [[AI Terminology Index]], section: Security and Privacy.

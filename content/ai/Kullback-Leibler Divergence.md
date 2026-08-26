---
title: "Kullback-Leibler Divergence"
aliases:
  - "KL Divergence"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A measure of how far one probability distribution is from another."
---

# Kullback-Leibler Divergence

## Plain View

A measure of how far one probability distribution is from another. It comes up whenever a system is being trained to imitate something, or being kept from drifting too far from where it started. It is not a distance in the ordinary sense, because the answer changes depending on which way round you ask.

## Technical View

The expected log ratio between two distributions, non-negative and zero only when they are identical, but asymmetric and not satisfying the triangle inequality. Cross-entropy equals entropy plus this divergence, which is why minimising one minimises the other. It appears explicitly as the penalty term keeping a policy near its reference model during preference training, and in the variational objective of autoencoders.

## Related

- [[Entropy and Information]]: the quantity it is defined against
- [[Proximal Policy Optimisation]]: used as the penalty keeping a policy near its reference
- [[Direct Preference Optimisation]]: the implicit reward is a log ratio of the same kind
- [[Variational Autoencoder]]: part of the training objective
- [[Distillation]]: matching a teacher's distribution

---

Part of [[AI Terminology Index]], section: Maths and Statistics.

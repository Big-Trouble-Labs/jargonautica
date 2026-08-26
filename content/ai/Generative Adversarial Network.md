---
title: "Generative Adversarial Network"
aliases:
  - "GAN"
tags:
  - glossary/ai
  - ai/architectures
section: "Other Kinds of Neural Network"
summary: "An older approach to generating images, built as a contest between two networks."
---

# Generative Adversarial Network

## Plain View

An older approach to generating images, built as a contest between two networks. One tries to produce convincing fakes, the other tries to spot them, and each improves by beating the other. It produced impressive results but was notoriously temperamental to train.

## Technical View

A generator and discriminator are trained in opposition towards an equilibrium. Common failure modes include mode collapse, where the generator produces limited variety, and training instability requiring careful tuning. GANs have largely been superseded by diffusion models for general image generation, though they remain useful where fast single-pass generation matters.

## Related

- [[Diffusion Model]]: the approach that superseded it
- [[Generative AI]]: the category it belongs to
- [[Neural Network]]: the structure both halves are built from
- [[Training]]: where its notorious instability shows up

---

Part of [[AI Terminology Index]], section: Other Kinds of Neural Network.

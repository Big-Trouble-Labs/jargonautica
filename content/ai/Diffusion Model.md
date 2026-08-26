---
title: "Diffusion Model"
aliases:
  - "Diffusion Models"
  - "Diffusion"
tags:
  - glossary/ai
  - ai/architectures
section: "Other Kinds of Neural Network"
summary: "The approach behind most image generators."
---

# Diffusion Model

## Plain View

The approach behind most image generators. It is trained by taking real images and progressively adding random noise until nothing recognisable is left, then learning to reverse that process. To generate a new image, it starts from pure noise and repeatedly removes a little of it, guided by your text description, until a picture emerges.

## Technical View

The model learns to predict the noise component at each step of a denoising schedule. Text conditioning is usually supplied through cross-attention to an embedding of the prompt. Latent diffusion performs the process in a compressed representation rather than pixel space, cutting compute cost substantially, which is what made these models practical to run widely. Sampling requires many sequential denoising steps, though distilled variants reduce this considerably.

## Related

- [[Generative AI]]: the category it belongs to
- [[Generative Adversarial Network]]: the older approach it largely replaced
- [[Multimodal]]: text guiding image output is a multimodal link
- [[Attention]]: how the text description is fed in

---

Part of [[AI Terminology Index]], section: Other Kinds of Neural Network.

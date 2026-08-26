---
title: "Variational Autoencoder"
aliases:
  - "VAE"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "An autoencoder that learns a distribution rather than a single point for each input, which makes the compressed space smooth enough to generate from."
---

# Variational Autoencoder

## Plain View

An autoencoder that learns a distribution rather than a single point for each input, which makes the compressed space smooth enough to generate from. Pick a point at random in that space and decode it and you get something plausible, which a plain autoencoder cannot reliably do.

## Technical View

Encodes to parameters of a distribution and optimises the evidence lower bound: reconstruction quality minus the Kullback-Leibler divergence from a prior, usually a standard normal. The reparameterisation trick makes sampling differentiable. Outputs tend to be blurry compared to diffusion or adversarial models, but the learned latent space is well structured, and VAEs remain a standard component compressing images before latent diffusion operates on them.

## Related

- [[Autoencoder]]: the deterministic version
- [[Diffusion Model]]: which operates in a VAE-compressed latent space
- [[Kullback-Leibler Divergence]]: part of its objective
- [[Generative AI]]: an early generative approach

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

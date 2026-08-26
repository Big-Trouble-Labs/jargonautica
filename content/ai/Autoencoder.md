---
title: "Autoencoder"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "A network trained to reproduce its own input after squeezing it through a narrow middle."
---

# Autoencoder

## Plain View

A network trained to reproduce its own input after squeezing it through a narrow middle. Because the middle is too small to hold everything, the network must learn what matters. That compressed middle is the useful part; the reconstruction is just the training signal.

## Technical View

An encoder maps input to a lower-dimensional latent code and a decoder reconstructs, trained on reconstruction error. Used for dimensionality reduction, denoising and anomaly detection, where high reconstruction error flags unusual inputs. Without constraints it can learn an identity mapping, hence the bottleneck, or sparsity and denoising variants. The sparse autoencoders used in interpretability are a deliberate inversion, expanding rather than compressing.

## Related

- [[Dimensionality Reduction]]: the neural version of it
- [[Variational Autoencoder]]: the probabilistic extension
- [[Anomaly Detection]]: reconstruction error as a signal
- [[Sparse Autoencoder]]: the deliberate inversion used in interpretability

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

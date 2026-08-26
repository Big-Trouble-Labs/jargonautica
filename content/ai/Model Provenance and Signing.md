---
title: "Model Provenance and Signing"
aliases:
  - "Model Signing"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Being able to prove that the model file you are running is the one the publisher produced and has not been altered."
---

# Model Provenance and Signing

## Plain View

Being able to prove that the model file you are running is the one the publisher produced and has not been altered. It is ordinary supply chain hygiene applied to an artefact that is large, widely redistributed and frequently obtained from community mirrors.

## Technical View

Implemented by cryptographic signing of weight files with verification at load time, hash pinning in deployment configuration, and attestation of the build or training environment. Model cards and datasheets provide the documentary layer. Emerging practice extends signing to fine-tuned derivatives so a chain from base model to deployed artefact can be established, which regulation increasingly expects.

## Related

- [[Supply Chain Security]]: the problem it addresses
- [[Open Weights]]: where verification matters most
- [[Model Card]]: the documentary layer
- [[Provenance and Watermarking]]: the output-side counterpart

---

Part of [[AI Terminology Index]], section: Security and Privacy.

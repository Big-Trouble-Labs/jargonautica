---
title: "Text to Video"
aliases:
  - "Video Generation"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Generating moving footage from a description."
---

# Text to Video

## Plain View

Generating moving footage from a description. It improved dramatically in a short time and remains expensive, short and difficult to control precisely. The realistic use today is short clips, previsualisation and effects rather than anything requiring narrative continuity.

## Technical View

Extends diffusion to the temporal dimension with spatio-temporal attention, generating in a compressed latent space to make the cost tractable. Core challenges are temporal consistency of objects and identity, physical plausibility, controllability of camera and motion, and duration, since compute scales steeply with length. Evaluation is immature, relying heavily on human preference. Provenance marking is particularly important given the impersonation risk.

## Related

- [[Text to Image]]: the closest relative
- [[Diffusion Model]]: the underlying method
- [[Deepfake]]: the impersonation risk
- [[Compute]]: why it remains expensive
- [[Provenance and Watermarking]]: why marking matters most here

---

Part of [[AI Terminology Index]], section: Modalities and Applications.

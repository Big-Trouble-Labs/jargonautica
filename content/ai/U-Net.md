---
title: "U-Net"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "An architecture shaped like a U: compress the input step by step, then expand it back, with direct connections across from each level of the descent to the matching level of the ascent."
---

# U-Net

## Plain View

An architecture shaped like a U: compress the input step by step, then expand it back, with direct connections across from each level of the descent to the matching level of the ascent. Originally built for medical image segmentation, it is now the standard backbone inside image generators.

## Technical View

An encoder-decoder with skip connections at each resolution, preserving fine spatial detail that pure downsampling would destroy. This is what makes it suitable for dense prediction tasks where output resolution matches input. In diffusion models it is the noise prediction network, typically augmented with attention layers and conditioning on the timestep and text embedding, though transformer backbones are increasingly replacing it at large scale.

## Related

- [[Diffusion Model]]: the backbone it provides
- [[Convolutional Neural Network]]: the architecture family
- [[Computer Vision]]: segmentation, its original purpose
- [[Residual Connection]]: the skips that preserve detail

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

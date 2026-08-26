---
title: "Text to Image"
aliases:
  - "Image Generation"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Producing pictures from a description."
---

# Text to Image

## Plain View

Producing pictures from a description. Quality reached commercial usability quickly, and the difficult questions turned out to be legal and social rather than technical: what the training data was, whose styles are being reproduced, and what happens to the people whose work it replaces.

## Technical View

Dominated by latent diffusion with text conditioning through cross-attention, increasingly with transformer backbones and flow-matching objectives. Control mechanisms include guidance scale, negative prompts, image-to-image initialisation, inpainting and structural conditioning. Persistent weaknesses are text rendering, precise counting and compositional relations between multiple objects. Commercial deployment centres on licensing of training data and provenance marking of outputs.

## Related

- [[U-Net]]: the usual backbone inside the generator
- [[Diffusion Model]]: the underlying method
- [[Copyright and Training Data]]: the central legal dispute
- [[Provenance and Watermarking]]: output marking
- [[Generative AI]]: the category
- [[Consent and Likeness]]: style and likeness concerns

---

Part of [[AI Terminology Index]], section: Modalities and Applications.

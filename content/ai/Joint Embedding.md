---
title: "Joint Embedding"
aliases:
  - "CLIP"
  - "Contrastive Language-Image Pretraining"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Putting different kinds of thing into the same space of numbers so they can be compared directly."
---

# Joint Embedding

## Plain View

Putting different kinds of thing into the same space of numbers so they can be compared directly. Once an image and a sentence sit in the same space, you can search photographs with words, or find images similar to other images, without any labels at all.

## Technical View

Trained contrastively on paired data so that matching pairs are close and non-matching pairs distant, as in CLIP for image and text, with extensions to audio and video. Enables zero-shot classification by comparing an image against embedded label descriptions, cross-modal retrieval, and conditioning of generative models. Limitations include sensitivity to prompt phrasing for the text side and inheritance of dataset biases from web-scraped pairs.

## Related

- [[Embeddings]]: the general idea
- [[Contrastive Learning]]: how it is trained
- [[Multimodal Retrieval]]: the main application
- [[Text to Image]]: conditioning generative models
- [[Bias]]: inherited from web-scraped pairs

---

Part of [[AI Terminology Index]], section: Modalities and Applications.

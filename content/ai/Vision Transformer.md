---
title: "Vision Transformer"
aliases:
  - "ViT"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Applying the language model architecture to pictures by cutting the image into small squares and treating each square like a word."
---

# Vision Transformer

## Plain View

Applying the language model architecture to pictures by cutting the image into small squares and treating each square like a word. It has essentially no built-in understanding that nearby pixels are related, which means it needs far more data than a convolutional network, and beats it once you have that data.

## Technical View

Splits an image into fixed-size patches, embeds each linearly, adds positional encodings and processes with a standard transformer stack. The weaker inductive bias relative to convolutional networks is a disadvantage at small scale and an advantage at large scale. Hierarchical variants such as Swin reintroduce locality for efficiency. Vision transformers are the standard image encoder in multimodal models.

## Related

- [[Transformer]]: the architecture applied to images
- [[Convolutional Neural Network]]: the approach it competes with
- [[Inductive Bias]]: the trade it makes
- [[Vision Language Model]]: where it serves as the image encoder
- [[Computer Vision]]: the field

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

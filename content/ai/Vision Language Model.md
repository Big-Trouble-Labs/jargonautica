---
title: "Vision Language Model"
aliases:
  - "VLM"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "A model that reads and looks at the same time."
---

# Vision Language Model

## Plain View

A model that reads and looks at the same time. Show it a photograph, a chart, a screenshot or a scanned form and ask questions about it. It is the capability behind document processing, accessibility descriptions and agents that can operate a screen.

## Technical View

Combines a vision encoder, typically a vision transformer, with a language model, connected by a projection layer or cross-attention, trained on image-text pairs and then instruction-tuned on visual tasks. Images consume substantial context, scaling with resolution and tiling strategy, which is the main cost driver. Strong on description and open-ended questions, weaker on precise spatial reasoning, counting, and reading dense small text.

## Related

- [[Multimodal]]: the general capability
- [[Vision Transformer]]: the image encoder
- [[Visual Question Answering]]: the main task
- [[Document AI]]: a major application
- [[Computer Use]]: what lets an agent read a screen

---

Part of [[AI Terminology Index]], section: Modalities and Applications.

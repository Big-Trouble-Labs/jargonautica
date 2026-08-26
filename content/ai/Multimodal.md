---
title: "Multimodal"
tags:
  - glossary/ai
  - ai/applying
section: "Extending and Applying Models"
summary: "A model that handles more than one type of input or output, such as text and images together."
---

# Multimodal

## Plain View

A model that handles more than one type of input or output, such as text and images together. It is why you can now show a model a photograph and ask questions about it, or hand it a chart and ask what it shows.

## Technical View

Typically achieved by encoding each modality into a shared representation space so that a single model can attend across them. Images are usually split into patches and treated much like tokens. Adding modalities does not automatically confer competence in them: performance on tasks such as reading dense diagrams or precise spatial reasoning remains substantially weaker than on text.

## Related

- [[Foundation Model]]: the kind of model that is usually made multimodal
- [[Embeddings]]: the shared representation space that makes it work
- [[Convolutional Neural Network]]: the older way images were handled
- [[Tokens]]: images get split into patches and treated much like these

---

Part of [[AI Terminology Index]], section: Extending and Applying Models.

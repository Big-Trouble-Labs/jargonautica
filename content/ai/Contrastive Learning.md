---
title: "Contrastive Learning"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Learning by comparison rather than by labels."
---

# Contrastive Learning

## Plain View

Learning by comparison rather than by labels. Show the system two versions of the same thing and two different things, and train it to pull the matching pair together and push the others apart. It is how most modern embedding models are built, and why they capture similarity so well.

## Technical View

Trains representations using positive pairs, typically augmentations of the same item or genuinely matched items, against negatives, with objectives such as InfoNCE or triplet loss. Performance depends heavily on negative sampling strategy and batch size, since in-batch negatives are the usual source. It underpins sentence and image embedding models, and joint image-text training, and is the practical bridge between self-supervised learning and retrieval.

## Related

- [[Embeddings]]: what it is mainly used to produce
- [[Self-supervised Learning]]: the family it belongs to
- [[Joint Embedding]]: the multimodal application
- [[Semantic Search]]: what the resulting embeddings enable
- [[Data Augmentation]]: the source of positive pairs

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.

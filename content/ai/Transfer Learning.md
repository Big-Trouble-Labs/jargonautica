---
title: "Transfer Learning"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "Reusing what a model learned on one job to help it on another."
---

# Transfer Learning

## Plain View

Reusing what a model learned on one job to help it on another. A system trained on millions of general photographs already knows about edges, textures and shapes, so teaching it to spot a specific manufacturing defect takes a few hundred examples rather than a few million. It is the reason most organisations never train anything from scratch.

## Technical View

Representations learned on a large general task transfer because early and middle layers capture features that are broadly useful rather than task-specific. In practice you take a pre-trained model and either freeze most of it and retrain only the final layers, or fine-tune the whole thing at a low learning rate. Transfer works best when the source and target domains are related; when they are not it can actively hurt, a failure sometimes called negative transfer. Nearly all modern practice, including every use of a foundation model, is transfer learning under another name.

## Related

- [[Pre-trained Model]]: the thing being transferred from
- [[Fine-tuning]]: the usual way of doing it
- [[Foundation Model]]: transfer learning at industrial scale
- [[Catastrophic Forgetting]]: the main way it goes wrong
- [[Deep Learning]]: why the learned features transfer at all

---

Part of [[AI Terminology Index]], section: The Foundations.

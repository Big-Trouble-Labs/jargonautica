---
title: "Data Augmentation"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "Creating extra training examples by altering the ones you have."
---

# Data Augmentation

## Plain View

Creating extra training examples by altering the ones you have. Rotate the image, crop it, adjust the brightness, and one photograph becomes ten. It teaches the model that the label does not change when irrelevant things do, which is a cheap and effective way to improve generalisation.

## Technical View

The transformation set encodes assumed invariances, and choosing them wrong actively harms performance: horizontal flips help for natural images and destroy information for text or medical laterality. Image methods include geometric and photometric transforms plus mixing strategies such as mixup and CutMix. Text augmentation is harder because most edits change meaning, so paraphrase and back-translation dominate. It functions as a regulariser and reduces overfitting on small datasets.

## Related

- [[Regularisation and Dropout]]: it acts as a regulariser
- [[Overfitting]]: the problem it reduces
- [[Contrastive Learning]]: augmented pairs as positives
- [[Inductive Bias]]: the invariances it encodes
- [[Synthetic Data]]: the generative alternative

---

Part of [[AI Terminology Index]], section: Data.

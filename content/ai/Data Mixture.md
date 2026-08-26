---
title: "Data Mixture"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "The recipe of what proportion of the training corpus comes from where: web text, books, code, academic papers, conversation, each language."
---

# Data Mixture

## Plain View

The recipe of what proportion of the training corpus comes from where: web text, books, code, academic papers, conversation, each language. It determines what the model ends up good at, and it is one of the most closely guarded parts of any frontier model's design.

## Technical View

Sampling weights across sources, sometimes varied across training in a curriculum with higher-quality data upweighted towards the end. Effects are well documented in aggregate: code improves structured reasoning, mathematical text improves multi-step problems, and multilingual proportion determines cross-lingual performance. Optimal weights are estimated using scaling experiments on smaller models, since direct search at full scale is unaffordable.

## Related

- [[Training Corpus]]: what is being proportioned
- [[Curriculum Learning]]: ordering as well as proportion
- [[Pre-training]]: the stage it configures
- [[Language Coverage]]: mixture decides multilingual ability
- [[Scaling Laws]]: mixtures are chosen by small-scale experiments

---

Part of [[AI Terminology Index]], section: Training and Post-training.

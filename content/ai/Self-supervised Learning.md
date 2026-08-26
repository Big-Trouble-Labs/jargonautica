---
title: "Self-supervised Learning"
aliases:
  - "Self-supervised"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "Learning from data that labels itself."
---

# Self-supervised Learning

## Plain View

Learning from data that labels itself. Hide a word in a sentence and ask the system to guess it, and you have a question with a known right answer without anyone having to mark anything by hand. Every sentence ever written becomes free training material. This is the trick that made large language models possible, because the thing that limited earlier approaches was never computing power, it was the cost of paying people to label things.

## Technical View

Formally a subset of unsupervised learning, since no external labels are supplied, but the mechanics are those of supervised learning, with the target derived automatically from the input. Common objectives include masked language modelling, predicting hidden tokens from both sides of the gap, and causal language modelling, predicting the next token from what came before. The same idea works outside language: contrastive methods in vision learn by treating two altered copies of one image as a matching pair. The practical consequence is that dataset size is limited by what exists rather than by annotation budget.

## Related

- [[Unsupervised Learning]]: the wider category this sits in
- [[Supervised Learning]]: the mechanics it borrows, with labels derived automatically
- [[Large Language Model]]: what this trick made possible
- [[Training Corpus]]: why unlimited raw text became usable
- [[Tokens]]: the units hidden and predicted

---

Part of [[AI Terminology Index]], section: The Foundations.

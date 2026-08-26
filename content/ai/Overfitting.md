---
title: "Overfitting"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "When a model learns its training examples so closely that it fails on anything new."
---

# Overfitting

## Plain View

When a model learns its training examples so closely that it fails on anything new. It is the equivalent of memorising past exam papers instead of understanding the subject: flawless on questions you have seen, lost on anything else. The opposite failure, underfitting, means the model is too simple to capture the real pattern at all.

## Technical View

This is the bias-variance trade-off. It is detected by watching training loss continue to fall while validation loss starts rising. Standard countermeasures include regularisation, dropout, early stopping, and augmenting or increasing training data. A related and serious practical problem is data leakage, where information from the test set contaminates training, producing results that look excellent and collapse in the real world.

## Related

- [[Training]]: the process during which it happens
- [[Supervised Learning]]: where it is most commonly encountered
- [[Benchmarks and Evals]]: how it is detected on held-out data
- [[Fine-tuning]]: a common place to run into it on small datasets
- [[Gradient Descent]]: the process that will happily keep memorising

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

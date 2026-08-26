---
title: "Regularisation and Dropout"
aliases:
  - "Regularisation"
  - "Dropout"
  - "Weight Decay"
  - "Early Stopping"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Deliberately handicapping a model during training so that it generalises rather than memorises."
---

# Regularisation and Dropout

## Plain View

Deliberately handicapping a model during training so that it generalises rather than memorises. Dropout switches off a random selection of units on each pass, forcing the network not to lean too heavily on any one of them. It feels counterproductive and it works. These are the standard tools against overfitting.

## Technical View

L2 regularisation, or weight decay, penalises large weights and produces smoother functions; L1 penalises absolute magnitude and drives weights to exactly zero, giving sparsity and implicit feature selection. Dropout randomly zeroes activations during training at some probability and is disabled at inference, approximating an ensemble over many thinned networks. Early stopping halts training when validation loss stops improving. Data augmentation and normalisation layers also act as regularisers, and in very large models trained on enormous corpora the sheer volume of data does much of the same work.

## Related

- [[Overfitting]]: the problem these exist to solve
- [[Weights, Parameters and Biases]]: what weight decay acts on
- [[Training, Validation and Test Sets]]: early stopping watches validation loss
- [[Loss Function]]: where the penalty term is added
- [[Training]]: the stage these apply during

---

Part of [[AI Terminology Index]], section: How the Machinery Works.

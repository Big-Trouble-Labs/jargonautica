---
title: "Epoch, Batch and Learning Rate"
aliases:
  - "Epoch"
  - "Batch Size"
  - "Learning Rate"
tags:
  - glossary/ai
  - ai/hardware
section: "Hardware, Compute and Training Mechanics"
summary: "Three basic settings that govern how training runs."
---

# Epoch, Batch and Learning Rate

## Plain View

Three basic settings that govern how training runs. An epoch is one complete pass through the training data. A batch is the group of examples processed together before the model updates itself. The learning rate is how big each adjustment is. Getting these wrong is one of the most common reasons training fails.

## Technical View

These are core hyperparameters. Large models are often trained for a single epoch or less over their corpus, since data volume exceeds what repeated passes would usefully add and repetition risks memorisation. Batch size trades gradient noise against hardware efficiency. Learning rate schedules, typically a warm-up followed by decay, are standard, and learning rate is generally regarded as the single most consequential hyperparameter to get right.

## Related

- [[Gradient Descent]]: the process these settings govern
- [[Training]]: the run they configure
- [[Weights, Parameters and Biases]]: hyperparameters set by hand, unlike these
- [[Overfitting]]: repeated passes over data invite it

---

Part of [[AI Terminology Index]], section: Hardware, Compute and Training Mechanics.

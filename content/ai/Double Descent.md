---
title: "Double Descent"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "The finding that as models get bigger, performance gets worse for a while and then gets better again, contradicting the textbook rule that more capacity means more overfitting."
---

# Double Descent

## Plain View

The finding that as models get bigger, performance gets worse for a while and then gets better again, contradicting the textbook rule that more capacity means more overfitting. It is a large part of why the field stopped worrying about model size and kept scaling.

## Technical View

Test error follows a classical bias-variance U-curve up to the interpolation threshold, where the model exactly fits the training data, spikes there, then decreases again in the overparameterised regime. Observed with respect to model size, data size and training time. The prevailing explanation is implicit regularisation: among the many parameter settings that fit the data, gradient descent finds ones with favourable properties.

## Related

- [[Overfitting]]: the classical expectation it contradicts
- [[Scaling Laws]]: part of why scaling kept working
- [[Generalisation]]: the property being explained
- [[Grokking]]: a related surprise about training length

---

Part of [[AI Terminology Index]], section: Training and Post-training.

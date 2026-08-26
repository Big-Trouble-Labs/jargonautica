---
title: "Proximal Policy Optimisation"
aliases:
  - "PPO"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "The reinforcement learning algorithm behind the first generation of assistant training."
---

# Proximal Policy Optimisation

## Plain View

The reinforcement learning algorithm behind the first generation of assistant training. It improves the model against a reward signal while stopping it from changing too much in any single step, which keeps training from collapsing. It works and it is fiddly, which is why simpler alternatives have taken over much of its ground.

## Technical View

A policy gradient method using a clipped surrogate objective to bound the update size, with a value network for advantage estimation and a Kullback-Leibler penalty against the reference policy. In language model training it requires holding policy, reference, reward and value models simultaneously, making it memory-hungry and sensitive to hyperparameters. It remains standard where an online reward signal exists, particularly for verifiable tasks.

## Related

- [[Reinforcement Learning from Human Feedback]]: the pipeline it powers
- [[Reward Model]]: the signal it optimises against
- [[Direct Preference Optimisation]]: the simpler alternative
- [[Kullback-Leibler Divergence]]: the penalty keeping it near the reference
- [[Reinforcement Learning]]: the underlying method

---

Part of [[AI Terminology Index]], section: Training and Post-training.
